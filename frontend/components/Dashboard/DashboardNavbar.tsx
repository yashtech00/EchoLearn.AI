// components/dashboard/dashboard-navbar.tsx

"use client";

import { Search, Flame } from "lucide-react";
import { usePathname } from "next/navigation";

const navbarConfig: Record<string, string[]> = {
  dashboard: ["Overview", "Insights"],

  writing: ["Practice", "Memory", "Coach", "Reports", "Rewrite"],

  games: [
    "Spot The Slip",
    "Tone Shift",
    "Collocation Match",
    "Grammar Rush",
    "Word Sprint",
  ],

  playground: ["Prompt of the Day", "Sandbox", "Challenges"],

  progress: [
    "XP & Levels",
    "Streaks",
    "Weekly Review",
    "Achievements",
  ],
};

export default function DashboardNavbar() {
  const pathname = usePathname();

  let activeSection = "dashboard";

  if (pathname.includes("/WritingCoach")) {
    activeSection = "writing";
  } else if (pathname.includes("/Games")) {
    activeSection = "games";
  } else if (pathname.includes("/Playground")) {
    activeSection = "playground";
  } else if (pathname.includes("/Progress")) {
    activeSection = "progress";
  }

  const navbarItems = navbarConfig[activeSection] || [];

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {navbarItems.map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              {item}
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-2 w-80">
            <Search className="w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search lessons, topics..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* STREAK */}
          <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-2xl">
            <Flame className="w-4 h-4" />

            <span className="text-sm font-semibold">
              7 Day Streak
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}