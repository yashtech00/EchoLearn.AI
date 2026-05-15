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
    path:"/Dashboard/WritingCoach/practice"
   
  },

  {
    id: "games",
    title: "Games",
    icon: Trophy,

   
  },

  {
    id: "playground",
    title: "Playground",
    icon: Sparkles,
    
  },

  {
    id: "progress",
    title: "Progress",
    icon: Brain,
    
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
      if ("path" in section) {
        return pathname === section.path;
      }

      return section.items?.some((item) =>
        pathname.startsWith(item.path)
      );
    })?.id || "dashboard";

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto z-50">
      {/* LOGO */}
      <div className="h-16 border-b border-gray-200 flex items-center px-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          EnglishIQ
        </h1>
      </div>

      {/* NAVIGATION */}
      <div className="p-4 space-y-6">
        {sidebarSections.map((section) => {
          const Icon = section.icon;

          /* SINGLE ITEM */
          if ("path" in section) {
            const isActive = pathname === section.path;

            return (
              <button
                key={section.id}
                onClick={() => router.push(section.path!)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-100 text-gray-700"
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
                    ? "text-indigo-600"
                    : "text-gray-500"
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
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-600 font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 bg-white">
        <div className="space-y-2">
          <button
            onClick={() => router.push("/Dashboard/Profile"!)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 transition-all"
          >
            <User className="w-5 h-5" />

            <span>Profile</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-all"
          >
            <LogOut className="w-5 h-5" />

            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}