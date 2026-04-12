import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const Protect = async (req, res, next) => {
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
        req.user = validToken.userId;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}