import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Protect = async (req, res, next) => {
    try {
        // First try Authorization header (access token)
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const accessToken = authHeader.split(' ')[1];
            
            try {
                const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
                req.user = { userId: decoded.id };
                return next();
            } catch (jwtError) {
                // Access token invalid, try refresh token
                console.log("Access token invalid, trying refresh token");
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