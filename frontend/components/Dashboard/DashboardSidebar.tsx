// components/dashboard/dashboard-sidebar.tsx

"use client";

import {
  Home,
  PenTool,
  Trophy,
  Sparkles,
  Brain,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

const sidebarSections = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: Home,
    path: "/Dashboard",
  },

  {
    id: "writing",
    title: "Writing",
    icon: PenTool,
    path: "/Dashboard/WritingCoach/practice",
  },

  {
    id: "games",
    title: "Games",
    icon: Trophy,
    path: "/Dashboard/Games",
  },

  {
    id: "playground",
    title: "Playground",
    icon: Sparkles,
    path: "/Dashboard/Playground",
  },

  {
    id: "progress",
    title: "Progress",
    icon: Brain,
    path: "/Dashboard/Progress",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/login");
  };

  const activeSection =
    sidebarSections.find((section) => {
      if (section.path === "/Dashboard") {
        return pathname === "/Dashboard";
      }
      return pathname.startsWith(section.path);
    })?.id || "dashboard";

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border overflow-y-auto z-50 font-sans">
      {/* LOGO */}
      <div className="h-16 border-b border-border flex items-center px-6">
        <h1 className="text-2xl font-bold text-primary font-serif">
          EnglishIQ
        </h1>
      </div>

      {/* NAVIGATION */}
      <div className="p-4 space-y-2">
        {sidebarSections.map((section) => {
          const Icon = section.icon;

          /* SINGLE ITEM */
          if ("path" in section) {
            const isActive = pathname === section.path;

            return (
              <button
                key={section.id}
                onClick={() => router.push(section.path!)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "hover:bg-primary/5 text-foreground/70 hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5" />

                <span className="font-medium">
                  {section.title}
                </span>
              </button>
            );
          }

          /* GROUP SECTION */
          const isGroupActive = activeSection === section.id;

          return (
            <div key={section.id}>
              {/* SECTION TITLE */}
              <div
                className={`flex items-center gap-3 px-4 mb-2 ${
                  isGroupActive
                    ? "text-primary"
                    : "text-foreground/50"
                }`}
              >
                <Icon className="w-5 h-5" />

                <span className="font-semibold text-sm uppercase tracking-wide">
                  {section.title}
                </span>
              </div>

              {/* SUB ITEMS */}
              <div className="space-y-1 ml-2">
                {section.items?.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <button
                      key={item.path}
                      onClick={() => router.push(item.path!)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "hover:bg-primary/5 text-foreground/70 hover:text-primary"
                      }`}
                    >
                      <span>{item.label}</span>

                      {isActive && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4 bg-background">
        <div className="space-y-2">
          <button
            onClick={() => router.push("/Dashboard/Profile"!)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-primary/5 text-foreground/70 hover:text-primary transition-all"
          >
            <User className="w-5 h-5" />

            <span>Profile</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-[#8a5a44]/10 text-[#8a5a44] transition-all"
          >
            <LogOut className="w-5 h-5" />

            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}