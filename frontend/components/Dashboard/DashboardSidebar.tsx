"use client";

import { Home, BookOpen, Target, BarChart3, Settings, LogOut, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "home", label: "Dashboard", icon: Home, path: "/Dashboard" },
  { id: "lessons", label: "Lessons", icon: BookOpen, path: "/Dashboard/Lessons" },
  { id: "goals", label: "Goals", icon: Target, path: "/Dashboard/Goals" },
  { id: "progress", label: "Progress", icon: BarChart3, path: "/Dashboard/Progress" },
  { id: "settings", label: "Settings", icon: Settings, path: "/Dashboard/Settings" },
];

interface DashboardSidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function DashboardSidebar({ isOpen = true, onToggle }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here
    router.push("/auth/login");
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className={`font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ${!isOpen && "text-center"}`}>
          {isOpen ? "LinguistAI" : "LA"}
        </h1>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="space-y-2">
          <button
            onClick={() => router.push("/Dashboard/Profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-600 hover:bg-gray-100`}
          >
            <User className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span>Profile</span>}
          </button>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
