import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Protect = async (req, res, next) => {
    try {
        // First try accessToken from cookie (HTTP-only)
        let accessToken = req.cookies?.accessToken;
        
        if (accessToken) {
            try {
                const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
                req.user = { userId: decoded.id };
                return next();
            } catch (jwtError) {
                // Access token invalid, try other methods
                console.log("Access token from cookie invalid, trying header");
            }
        }

        // Try Authorization header (access token)
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            accessToken = authHeader.split(' ')[1];
            
            try {
                const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
                req.user = { userId: decoded.id };
                return next();
            } catch (jwtError) {
                // Access token invalid, try refresh token
                console.log("Access token from header invalid, trying refresh token");
            }
        }

        // Fallback to refresh token from cookies
        let refreshToken = req.cookies?.refreshToken;
        
        if (!refreshToken && req.signedCookies?.refreshToken) {
            refreshToken = req.signedCookies.refreshToken;
        }
        
        if (!refreshToken) {
            return res.status(401).json({ message: "Unauthorized - No token found" });
        }

        // Validate refresh token
        const tokens = await prisma.refreshToken.findMany();
        let validToken = null;
        for (const t of tokens) {
            const isMatch = await bcrypt.compare(refreshToken, t.tokenHash);
            if (isMatch) {
                validToken = t;
                break;
            }
        }
        
        if (!validToken || validToken.expiresAt < new Date()) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }
        
        req.user = { userId: validToken.userId };
        next();
        
    } catch (err) {
        console.error("Auth middleware error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}