"use client";

import { useCallback, useEffect, useState } from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { Home, PenTool, Trophy, Sparkles, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SIDEBAR_COLLAPSED_KEY = "dashboard-sidebar-collapsed";

const footerSections = [
  { id: "dashboard", title: "Dashboard", icon: Home, path: "/Dashboard" },
  { id: "writing", title: "Writing", icon: PenTool, path: "/Dashboard/WritingCoach/practice" },
  { id: "games", title: "Games", icon: Trophy, path: "/Dashboard/Games" },
  { id: "playground", title: "Playground", icon: Sparkles, path: "/Dashboard/Playground" },
  { id: "profile", title: "Profile", icon: User, path: "/Dashboard/Profile" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    try {
      setSidebarCollapsed(localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleSidebarCollapsed = useCallback(() => {
    setSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((open) => !open);
  }, []);

  const handleFooterNav = useCallback(
    (path: string) => {
      router.push(path);
      setSidebarOpen(false);
    },
    [router],
  );

  const isFooterActive = (path: string) => {
    if (path === "/Dashboard") return pathname === "/Dashboard";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <DashboardSidebar
        isOpen={sidebarOpen}
        isCollapsed={sidebarCollapsed}
        onClose={() => setSidebarOpen(false)}
        onToggleCollapse={toggleSidebarCollapsed}
      />

      <DashboardNavbar
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={handleToggleSidebar}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}

      <main
        className={`pt-16 min-h-screen pb-28 transition-[margin] duration-300 ease-in-out ${
          sidebarCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <div className="p-4 md:p-6">{children}</div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-[#4a7c59]/10 bg-[#faf6f0] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 px-2 py-2 safe-area-bottom">
          {footerSections.map((section) => {
            const Icon = section.icon;
            const active = isFooterActive(section.path);
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleFooterNav(section.path)}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-3xl px-1 py-2 text-center transition-all duration-200 ${
                  active
                    ? "bg-[#4a7c59]/10 text-[#4a7c59] font-semibold"
                    : "text-[#2e3230]/70 hover:bg-[#4a7c59]/5 hover:text-[#4a7c59]"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium uppercase tracking-[0.08em]">{section.title}</span>
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
