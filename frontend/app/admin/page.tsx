"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuditLogs } from "../api/admin/admin.api";
import { logout } from "@/app/api/auth/auth_api";
import { useAuth } from "@/lib/userAuth";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [summary, setSummary] = useState({
    totalLogs: 0,
    totalPages: 1,
    page: 1,
    limit: 20,
    visitCount: 0,
    actionCount: 0,
    uniqueUsers: 0,
  });
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLogs = async (page: number) => {
    try {
      setLoadingLogs(true);
      setError(null);
      const data = await getAuditLogs(page, summary.limit);
      setAuditLogs(data.logs || []);
      setSummary((prev) => ({
        ...prev,
        totalLogs: data.totalLogs ?? prev.totalLogs,
        totalPages: data.totalPages ?? prev.totalPages,
        page: data.page ?? page,
        limit: data.limit ?? prev.limit,
        visitCount: data.visitCount ?? prev.visitCount,
        actionCount: data.actionCount ?? prev.actionCount,
        uniqueUsers: data.uniqueUsers ?? prev.uniqueUsers,
      }));
    } catch (err) {
      console.error("Error fetching audit logs:", err);
      setError("Unable to load audit logs. Please try again later.");
    } finally {
      setLoadingLogs(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/auth/login");
      } else if (user.role !== "ADMIN") {
        router.replace("/Dashboard");
      }
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (!loading && user?.role === "ADMIN") {
      fetchLogs(summary.page);
    }
  }, [summary.page, loading, user]);

  const goToPage = (nextPage: number) => {
    setSummary((prev) => ({
      ...prev,
      page: nextPage,
    }));
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
        if (!name) return;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      });
      router.replace("/auth/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Admin Audit Logs</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Review recent system events, request metadata, and user activity.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" onClick={() => fetchLogs(summary.page)} disabled={loadingLogs}>
              Refresh logs
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">Total Logs</p>
            <p className="mt-2 text-2xl font-semibold">{summary.totalLogs}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">Views</p>
            <p className="mt-2 text-2xl font-semibold">{summary.visitCount}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">Actions</p>
            <p className="mt-2 text-2xl font-semibold">{summary.actionCount}</p>
          </div>
          <div className="rounded-xl border bg-card p-4 sm:col-span-2">
            <p className="text-sm text-muted-foreground">Unique Users</p>
            <p className="mt-2 text-2xl font-semibold">{summary.uniqueUsers}</p>
          </div>
          <div className="rounded-xl border bg-card p-4 sm:col-span-1">
            <p className="text-sm text-muted-foreground">Page</p>
            <p className="mt-2 text-2xl font-semibold">{summary.page} / {summary.totalPages}</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-card">
          <table className="min-w-full divide-y divide-border text-left text-sm">
            <thead className="bg-muted text-muted-foreground/80 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">When</th>
                <th className="px-4 py-3">Event Type</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Meta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-background">
              {loadingLogs ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-muted-foreground">
                    Loading audit logs...
                  </td>
                </tr>
              ) : auditLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No audit logs available.
                  </td>
                </tr>
              ) : (
                auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-muted/10">
                    <td className="px-4 py-3 text-sm text-foreground">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground">{log.eventType}</td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {log.method}
                      </span>
                      <div className="mt-1 text-xs text-muted-foreground">{log.route}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{log.statusCode}</td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {log.user?.name || log.user?.email || "Anonymous"}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {log.userAgent ? `${log.userAgent.slice(0, 40)}${log.userAgent.length > 40 ? "..." : ""}` : "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing page {summary.page} of {summary.totalPages}.
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => goToPage(Math.max(1, summary.page - 1))}
              disabled={summary.page <= 1 || loadingLogs}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => goToPage(Math.min(summary.totalPages, summary.page + 1))}
              disabled={summary.page >= summary.totalPages || loadingLogs}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;