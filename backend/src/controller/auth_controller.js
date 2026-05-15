

import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import { registerSchema, loginSchema } from "../validator/auth_validator.js";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/jwt.js";
import { oauth2Client, scopes } from "../services/googleAuth.js";
import crypto from "crypto";
import { google } from "googleapis";

const getFrontendBaseUrl = () => {
  const configuredUrl = process.env.FRONTEND_URL?.trim();
  return (configuredUrl || "http://localhost:3000").replace(/\/+$/, "");
};

const frontendUrl = (path) => `${getFrontendBaseUrl()}${path}`;

/* ================= REGISTER ================= */
export const register = async (req, res) => {
    try {
        const parsed = registerSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const { name, email, password } = parsed.data;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await prisma.user.create({
            data: { name, email, passwordHash: hashedPassword },
        });

        // tokens
        const accessToken = generateAccessToken(newUser);
        const refreshToken = generateRefreshToken();

        const tokenHash = await bcrypt.hash(refreshToken, 10);

        // delete old tokens (optional but recommended)
        await prisma.refreshToken.deleteMany({
            where: { userId: newUser.id },
        });

        await prisma.refreshToken.create({
            data: {
                tokenHash,
                userId: newUser.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 15 * 60 * 1000, // 15 minutes
        });

        return res.status(201).json({
            message: "User registered successfully",
            accessToken,
            user: { id: newUser.id, name: newUser.name, email: newUser.email, isNewUser: newUser.isNewUser },
        });

    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

/* ================= LOGIN ================= */
export const login = async (req, res) => {
    try {
        const parsed = loginSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken();
        const tokenHash = await bcrypt.hash(refreshToken, 10);

        // remove old tokens (single device login)
        await prisma.refreshToken.deleteMany({
            where: { userId: user.id },
        });

        await prisma.refreshToken.create({
            data: {
                tokenHash,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 15 * 60 * 1000, // 15 minutes
        });

        return res.status(200).json({
            accessToken,
            user: { id: user.id, name: user.name, email: user.email, isNewUser: user.isNewUser },
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
};

/* ================= REFRESH ================= */
export const refresh = async (req, res) => {
    try {
        const token = req.cookies.refreshToken;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const tokens = await prisma.refreshToken.findMany();

        let validToken = null;

        for (const t of tokens) {
            const isMatch = await bcrypt.compare(token, t.tokenHash);
            if (isMatch) {
                validToken = t;
                break;
            }
        }

        if (!validToken || validToken.expiresAt < new Date()) {
            return res.status(403).json({ message: "Invalid token" });
        }

        // rotate token
        await prisma.refreshToken.delete({
            where: { id: validToken.id },
        });

        const newRefreshToken = generateRefreshToken();
        const newTokenHash = await bcrypt.hash(newRefreshToken, 10);

        await prisma.refreshToken.create({
            data: {
                tokenHash: newTokenHash,
                userId: validToken.userId,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });

        const user = await prisma.user.findUnique({
            where: { id: validToken.userId },
        });

        const accessToken = generateAccessToken(user);

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 15 * 60 * 1000, // 15 minutes
        });

        return res.json({ accessToken });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

/* ================= LOGOUT ================= */
export const logout = async (req, res) => {
    try {
        const token = req.cookies.refreshToken;

        if (token) {
            const tokens = await prisma.refreshToken.findMany();

            for (const t of tokens) {
                const isMatch = await bcrypt.compare(token, t.tokenHash);
                if (isMatch) {
                    await prisma.refreshToken.delete({
                        where: { id: t.id },
                    });
                    break;
                }
            }
        }

        res.clearCookie("refreshToken", {
            path: "/",
        });

        res.clearCookie("accessToken", {
            path: "/",
        });

        return res.json({ message: "Logged out" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const profile = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    }catch(e){
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getMe = async (req, res) => {
    try {
        const { userId } = req.user;
        
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                isNewUser: true,
                createdAt: true,
            }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if user has a profile
        const userProfile = await prisma.userProfile.findUnique({
            where: { userId },
        });

        return res.json({
            user,
            hasProfile: !!userProfile,
            isNewUser: user.isNewUser,
        });
    } catch (error) {
        console.error("Get me error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const googleAuth = (req, res) => {
    try {
      const state = crypto.randomBytes(32).toString("hex");
  
      req.session.state = state;
  
      const authUrl = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        include_granted_scopes: true,
        state,
        prompt: "consent", // 🔥 ensures refresh_token always
      });
  
      return res.json({ url: authUrl });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  export const googleAuthCallback = async (req, res) => {
    try {
      const { code, state, error } = req.query;
  
      // 🔴 handle user cancel
      if (error) {
        return res.redirect(
          frontendUrl("/auth/login?error=google_auth_failed")
        );
      }
  
      // 🔴 state validation
      if (!state || state !== req.session.state) {
        return res.status(400).send("Invalid state");
      }
  
      // 🔴 clear state (important)
      delete req.session.state;
  
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
  
      const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });
  
      const { data } = await oauth2.userinfo.get();
  
      if (!data.email) {
        return res.status(400).send("Google account has no email");
      }
  
      let user = await prisma.user.findUnique({
        where: { email: data.email },
      });
  
      if (!user) {
        user = await prisma.user.create({
          data: {
            email: data.email,
            name: data.name,
            image: data.picture,
          },
        });
      }
  
      // 🔥 TOKEN FLOW (same as login)
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken();
      const tokenHash = await bcrypt.hash(refreshToken, 10);
  
      await prisma.refreshToken.deleteMany({
        where: { userId: user.id },
      });
  
      await prisma.refreshToken.create({
        data: {
          tokenHash,
          userId: user.id,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
  
      // 🔥 cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });

      // 🔥 redirect
      return res.redirect(
        frontendUrl(
          `/oauth-success?isNewUser=${user.isNewUser}`
        )
      );
  
    } catch (error) {
      console.error("Google Auth Error:", error);
      return res.redirect(
        frontendUrl("/auth/login?error=server_error")
      );
    }
  };

