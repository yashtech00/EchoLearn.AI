"use client";

import {
  Home,
  PenTool,
  Trophy,
  Sparkles,
  User,
  LogOut,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  X,
  type LucideIcon,
} from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

interface SidebarSection {
  id: string;
  title: string;
  icon: LucideIcon;
  path?: string;
  items?: { label: string; path: string }[];
  placement?: "main" | "bottom";
}

const sidebarSections: SidebarSection[] = [
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
    id: "profile",
    title: "Profile",
    icon: User,
    path: "/Dashboard/Profile",
    placement: "bottom",
  },
];

const mainNavSections = sidebarSections.filter((s) => s.placement !== "bottom");
const bottomNavSections = sidebarSections.filter((s) => s.placement === "bottom");

interface DashboardSidebarProps {
  isOpen?: boolean;
  isCollapsed?: boolean;
  onClose?: () => void;
  onToggleCollapse?: () => void;
}

export default function DashboardSidebar({
  isOpen = false,
  isCollapsed = false,
  onClose,
  onToggleCollapse,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/login");
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (onClose) onClose();
  };

  const activeSection =
    sidebarSections.find((section) => {
      if (section.path === "/Dashboard") {
        return pathname === "/Dashboard";
      }
      return section.path ? pathname.startsWith(section.path) : false;
    })?.id || "dashboard";

  const isSectionActive = (path: string) => {
    if (path === "/Dashboard") return pathname === "/Dashboard";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const renderNavButton = (section: SidebarSection) => {
    const Icon = section.icon;
    const isActive = section.path ? isSectionActive(section.path) : false;

    return (
      <button
        key={section.id}
        type="button"
        onClick={() => section.path && handleNavigation(section.path)}
        title={isCollapsed ? section.title : undefined}
        className={`w-full flex items-center gap-3 rounded-[12px] transition-all duration-200 ${
          isCollapsed ? "justify-center px-2 py-3" : "px-4 py-3"
        } ${
          isActive
            ? "bg-[#4a7c59]/10 text-[#4a7c59] font-bold"
            : "hover:bg-[#4a7c59]/5 text-[#2e3230]/70 hover:text-[#4a7c59]"
        }`}
      >
        <Icon className="w-5 h-5 shrink-0" />
        {!isCollapsed && (
          <span className={isActive ? "font-bold" : "font-medium"}>
            {section.title}
          </span>
        )}
      </button>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#faf6f0] border-r border-[#4a7c59]/10 overflow-y-auto z-50 font-sans transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      } ${
        isOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* LOGO + TOGGLE */}
      <div
        className={`border-b border-[#4a7c59]/10 shrink-0 flex items-center ${
          isCollapsed
            ? "flex-col gap-1 py-3 px-1"
            : "h-16 justify-between px-4 sm:px-6"
        }`}
      >
        {!isCollapsed ? (
          <h1
            className="text-xl sm:text-2xl font-bold text-[#4a7c59] font-serif truncate"
            style={{ fontFamily: "'Literata', serif" }}
          >
            EchoLearn.AI
          </h1>
        ) : (
          <span
            className="text-lg font-bold text-[#4a7c59] font-serif"
            style={{ fontFamily: "'Literata', serif" }}
            title="EchoLearn.AI"
          >
            E
          </span>
        )}

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="md:hidden p-2 rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/50 hover:text-[#4a7c59] transition-all"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Desktop collapse / expand */}
          {onToggleCollapse && (
            <button
              type="button"
              onClick={onToggleCollapse}
              className="hidden md:flex p-2 rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/50 hover:text-[#4a7c59] transition-all"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <PanelLeft className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className={`space-y-2 pb-36 ${isCollapsed ? "p-2" : "p-4"}`}>
        {mainNavSections.map((section) => {
          const Icon = section.icon;

          if (section.path) {
            return renderNavButton(section);
          }

          const isGroupActive = activeSection === section.id;

          return (
            <div key={section.id}>
              <div
                className={`flex items-center gap-3 mb-2 ${
                  isCollapsed ? "justify-center px-0" : "px-4"
                } ${
                  isGroupActive ? "text-[#4a7c59]" : "text-[#2e3230]/50"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && (
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    {section.title}
                  </span>
                )}
              </div>

              {!isCollapsed && (
                <div className="space-y-1 ml-2">
                  {section.items?.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => handleNavigation(item.path)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-[#4a7c59]/10 text-[#4a7c59] font-bold"
                            : "hover:bg-[#4a7c59]/5 text-[#2e3230]/70 hover:text-[#4a7c59]"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM */}
      <div
        className={`absolute bottom-0 left-0 right-0 border-t border-[#4a7c59]/10 bg-[#faf6f0] ${
          isCollapsed ? "p-2" : "p-4"
        }`}
      >
        <div className="space-y-2">
          {bottomNavSections.map((section) => renderNavButton(section))}

          <button
            type="button"
            onClick={handleLogout}
            title={isCollapsed ? "Logout" : undefined}
            className={`w-full flex items-center gap-3 rounded-[12px] hover:bg-[#8a5a44]/10 text-[#8a5a44] transition-all ${
              isCollapsed ? "justify-center px-2 py-3" : "px-4 py-3"
            }`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
