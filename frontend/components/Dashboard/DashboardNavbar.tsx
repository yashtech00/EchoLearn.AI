// components/dashboard/dashboard-navbar.tsx

"use client";

import { Search, Flame, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { tokenManager } from "@/lib/tokenManager";

const navbarConfig: Record<string, { label: string; path: string }[]> = {
  dashboard: [
    { label: "Overview", path: "/Dashboard" },
    { label: "Insights", path: "/Dashboard/Insights" },
  ],

  writing: [
    { label: "Practice", path: "/Dashboard/WritingCoach/practice" },
    { label: "Memory", path: "/Dashboard/WritingCoach/MistakeMemory" },
    { label: "Reports", path: "/Dashboard/WritingCoach/Report" },
    { label: "Rewrite", path: "/Dashboard/WritingCoach/Rewrite" },
  ],

  games: [
    { label: "Spot The Slip", path: "/Dashboard/Games/SpotTheSlip" },
    { label: "Tone Shift", path: "/Dashboard/Games/ToneShift" },
    { label: "Collocation Match", path: "/Dashboard/Games/CollocationMatch" },
    { label: "Grammar Rush", path: "/Dashboard/Games/GrammarRush" },
    { label: "Word Sprint", path: "/Dashboard/Games/WordSprint" },
  ],

  playground: [
    { label: "Prompt of the Day", path: "/Dashboard/Playground/DailyPrompt" },
    { label: "Sandbox", path: "/Dashboard/Playground/Sandbox" },
    { label: "Challenges", path: "/Dashboard/Playground/Challenges" },
  ],

  progress: [
    { label: "XP & Levels", path: "/Dashboard/Progress/XP" },
    { label: "Streaks", path: "/Dashboard/Progress/Streaks" },
    { label: "Weekly Review", path: "/Dashboard/Progress/WeeklyReview" },
    { label: "Achievements", path: "/Dashboard/Progress/Achievements" },
  ],
};

export default function DashboardNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = tokenManager.getAccessToken();
        if (!token) return;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/stats`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  let activeSection = "dashboard";

  if (pathname.includes("/WritingCoach")) {
    activeSection = "writing";
  } else if (pathname.includes("/Games")) {
    activeSection = "games";
  } else if (pathname.includes("/Playground")) {
    activeSection = "playground";
  } else if (pathname.includes("/Progress")) {
    activeSection = "progress";
  } else if (pathname === "/Dashboard") {
    activeSection = "dashboard";
  }

  const navbarItems = navbarConfig[activeSection] || [];

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-background border-b border-border z-40 font-sans">
      <div className="h-full px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {navbarItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => router.push(item.path)}
                className={`px-4 py-2 rounded-[12px] text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-bold" 
                    : "hover:bg-primary/5 text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div className="hidden md:flex items-center gap-2 bg-primary/5 border border-border rounded-[12px] px-4 py-2 w-80">
            <Search className="w-4 h-4 text-primary/50" />

            <input
              type="text"
              placeholder="Search lessons, topics..."
              className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-foreground/40"
            />
          </div>

          {/* STREAK */}
          <div className="flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-[12px] border border-orange-500/20">
            <Flame className={`w-4 h-4 ${(stats?.currentStreak || 0) > 0 ? "fill-orange-500" : ""}`} />
            <span className="text-sm font-bold">
              {stats?.currentStreak || 0} Day Streak
            </span>
          </div>

          {/* XP / LEVEL */}
          {/* <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-[12px] border border-primary/20">
            <Zap className="w-4 h-4 fill-primary" />
            <span className="text-sm font-bold">
              Lvl {stats?.level || 0}
            </span>
          </div> */}
        </div>
      </div>
    </header>
  );
}