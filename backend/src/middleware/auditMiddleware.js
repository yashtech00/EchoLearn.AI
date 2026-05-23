import prisma from "../lib/prisma.js";

export const auditLogger = (req, res, next) => {
  const shouldLog = req.path.startsWith("/api/v1");
  if (!shouldLog) {
    return next();
  }

  const startTime = Date.now();

  res.on("finish", async () => {
    try {
      const eventType = req.method === "GET" ? "VIEW" : "ACTION";
      const route = req.originalUrl;
      const statusCode = res.statusCode;
      const metadata = {
        query: req.query || {},
        params: req.params || {},
      };

      await prisma.auditLog.create({
        data: {
          userId: req.user?.userId || null,
          eventType,
          route,
          method: req.method,
          statusCode,
          ip: req.ip || req.headers["x-forwarded-for"] || null,
          referrer: req.get("referer") || null,
          userAgent: req.get("user-agent") || null,
          metadata,
        },
      });
    } catch (error) {
      console.error("Audit logger failed:", error);
    }
  });

  next();
};
