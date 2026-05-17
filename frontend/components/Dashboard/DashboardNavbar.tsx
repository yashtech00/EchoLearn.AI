"use client";

import { Search, Flame, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getProfileStats } from "@/app/api/user_profile/user_profile";

const navbarConfig: Record<string, { label: string; path: string }[]> = {
  dashboard: [{ label: "Overview", path: "/Dashboard" }],
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
  profile: [{ label: "Profile", path: "/Dashboard/Profile" }],
};

const globalSearchRoutes = [
  { label: "Dashboard", path: "/Dashboard", section: "Main" },
  { label: "Writing Practice", path: "/Dashboard/WritingCoach/practice", section: "Writing" },
  { label: "Mistake Memory", path: "/Dashboard/WritingCoach/MistakeMemory", section: "Writing" },
  { label: "Writing Reports", path: "/Dashboard/WritingCoach/Report", section: "Writing" },
  { label: "Rewrite", path: "/Dashboard/WritingCoach/Rewrite", section: "Writing" },
  { label: "Profile", path: "/Dashboard/Profile", section: "Account" },
  { label: "Games", path: "/Dashboard/Games", section: "Games" },
  { label: "Playground", path: "/Dashboard/Playground", section: "Playground" },
  ...Object.values(navbarConfig).flat().map((item) => ({
    ...item,
    section: "Quick nav",
  })),
].filter(
  (route, index, arr) => arr.findIndex((r) => r.path === route.path) === index,
);

interface DashboardNavbarProps {
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export default function DashboardNavbar({
  sidebarCollapsed = false,
  onToggleSidebar,
}: DashboardNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const [streak, setStreak] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchStats = async () => {
      try {
        const data = await getProfileStats();
        if (cancelled) return;
        const s = data?.stats;
        setStreak(s?.currentStreak ?? s?.currentStreakDays ?? 0);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  let activeSection = "dashboard";
  if (pathname.includes("/WritingCoach")) activeSection = "writing";
  else if (pathname.includes("/Games")) activeSection = "games";
  else if (pathname.includes("/Playground")) activeSection = "playground";
  else if (pathname.includes("/Profile")) activeSection = "profile";
  else if (pathname === "/Dashboard") activeSection = "dashboard";

  const navbarItems = navbarConfig[activeSection] || [];

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return globalSearchRoutes.filter(
      (r) =>
        r.label.toLowerCase().includes(q) ||
        r.path.toLowerCase().includes(q) ||
        r.section.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const goToRoute = useCallback(
    (path: string) => {
      router.push(path);
      setSearchQuery("");
      setSearchOpen(false);
      setMobileSearchOpen(false);
    },
    [router],
  );

  const renderSearchDropdown = () =>
    searchQuery.trim() ? (
      <div className="absolute top-full left-0 right-0 mt-1 max-h-64 overflow-y-auto rounded-[12px] border border-[#4a7c59]/15 bg-[#faf6f0] shadow-lg z-50">
        {searchResults.length > 0 ? (
          searchResults.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => goToRoute(item.path)}
              className="w-full text-left px-4 py-2.5 hover:bg-[#4a7c59]/10 transition-colors border-b border-[#4a7c59]/5 last:border-0"
            >
              <p className="text-sm font-medium text-[#2e3230]">{item.label}</p>
              <p className="text-[10px] text-[#2e3230]/50 uppercase tracking-wide">
                {item.section}
              </p>
            </button>
          ))
        ) : (
          <p className="px-4 py-3 text-sm text-[#2e3230]/50">No pages found</p>
        )}
      </div>
    ) : null;

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-[#faf6f0] border-b border-[#4a7c59]/10 z-40 font-sans transition-[left] duration-300 ease-in-out left-0 ${
        sidebarCollapsed ? "md:left-16" : "md:left-64"
      }`}
    >
      <div className="h-full px-3 sm:px-4 md:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* LEFT */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="md:hidden p-2 rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/70 hover:text-[#4a7c59] transition-all shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1 min-w-0">
            {navbarItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.path !== "/Dashboard" && pathname.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => router.push(item.path)}
                  className={`px-2.5 sm:px-4 py-2 rounded-[12px] text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#4a7c59]/10 text-[#4a7c59] font-bold"
                      : "hover:bg-[#4a7c59]/5 text-[#2e3230]/70 hover:text-[#4a7c59]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop search */}
          <div ref={searchRef} className="hidden md:block relative">
            <div className="flex items-center gap-2 bg-[#f4ebd9] border border-[#4a7c59]/15 rounded-[12px] px-3 py-2 w-48 lg:w-64 xl:w-72">
              <Search className="w-4 h-4 text-[#4a7c59]/50 shrink-0" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search pages…"
                className="bg-transparent outline-none text-sm w-full text-[#2e3230] placeholder:text-[#2e3230]/40"
                aria-label="Search dashboard"
              />
            </div>
            {searchOpen && renderSearchDropdown()}
          </div>

          {/* Mobile search toggle */}
          <div ref={mobileSearchOpen ? searchRef : undefined} className="md:hidden relative">
            <button
              type="button"
              onClick={() => setMobileSearchOpen((v) => !v)}
              className="p-2 rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/70"
              aria-label="Search"
            >
              {mobileSearchOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
            {mobileSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-[min(100vw-2rem,18rem)] z-50">
                <div className="flex items-center gap-2 bg-[#faf6f0] border border-[#4a7c59]/15 rounded-[12px] px-3 py-2 shadow-lg">
                  <Search className="w-4 h-4 text-[#4a7c59]/50 shrink-0" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pages…"
                    className="bg-transparent outline-none text-sm w-full text-[#2e3230]"
                    autoFocus
                  />
                </div>
                {renderSearchDropdown()}
              </div>
            )}
          </div>

          {/* Streak */}
          <button
            type="button"
            onClick={() => router.push("/Dashboard/Profile")}
            className="flex items-center gap-1.5 bg-[#8a5a44]/10 text-[#8a5a44] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[12px] border border-[#8a5a44]/20 hover:bg-[#8a5a44]/15 transition-all"
            title="View profile & streak"
          >
            <Flame
              className={`w-4 h-4 shrink-0 ${streak > 0 ? "fill-[#8a5a44]" : ""}`}
            />
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
              {streak}
              <span className="hidden sm:inline"> day{streak === 1 ? "" : "s"}</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
