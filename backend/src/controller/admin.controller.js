import prisma from "../lib/prisma.js";

export const auditLogs = async (req, res) => {
  try {
    const page = Math.max(Number(req.query.page || 1), 1);
    const limit = Math.min(Math.max(Number(req.query.limit || 50), 1), 100);

    const [logs, totalLogs, visitCount, actionCount, uniqueUsersGroup] = await Promise.all([
      prisma.auditLog.findMany({
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: {
            select: { id: true, name: true, email: true, role: true },
          },
        },
      }),
      prisma.auditLog.count(),
      prisma.auditLog.count({ where: { eventType: "VIEW" } }),
      prisma.auditLog.count({ where: { eventType: "ACTION" } }),
      prisma.auditLog.groupBy({
        by: ["userId"],
        where: { userId: { not: null } },
      }),
    ]);
    const uniqueUsers = uniqueUsersGroup.length;

    return res.status(200).json({
      totalLogs,
      totalPages: Math.ceil(totalLogs / limit),
      visitCount,
      actionCount,
      uniqueUsers,
      page,
      limit,
      logs,
    });
  } catch (error) {
    console.error("Audit logs error:", error);
    return res.status(500).json({ message: "Unable to load audit logs" });
  }
};