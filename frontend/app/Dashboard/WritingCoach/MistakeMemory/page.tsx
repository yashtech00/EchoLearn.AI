"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  BookOpen,
  TrendingUp,
  AlertCircle,
  Filter,
  Calendar,
  Sparkles,
  Award,
  Flame,
  BarChart3,
  Brain,
  ArrowRight,
  Search,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  getMistakes,
  getAnalyticsSummary,
  getUserStats,
} from "@/app/api/writing/writing_api";

const WINDOW_LABELS: Record<string, string> = {
  "7d": "last 7 days",
  "30d": "last 30 days",
  all: "all time",
};

function dateFromForWindow(window: string): string | undefined {
  const now = Date.now();
  if (window === "7d") {
    return new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
  }
  if (window === "30d") {
    return new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString();
  }
  return undefined;
}

export default function MistakeMemoryPage() {
  const [mistakes, setMistakes] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [userStats, setUserStats] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState<string>("all");
  const [timeWindow, setTimeWindow] = useState<string>("30d");
  const [search, setSearch] = useState("");

  const windowLabel = WINDOW_LABELS[timeWindow] ?? "selected period";

  const stats = userStats?.stats;
  const xp = stats?.totalXp ?? 0;
  const level = stats?.level ?? 1;
  const streak =
    stats?.currentStreakDays ?? stats?.currentStreak ?? 0;
  const longestStreak =
    stats?.longestStreakDays ?? stats?.longestStreak ?? 0;
  const xpInLevel = xp % 50;
  const xpToNext = 50 - xpInLevel;

  const totalMistakes = analytics?.totalMistakes ?? 0;
  const submissionsCount = analytics?.submissionsCount ?? 0;
  const errorDensity = analytics?.avgErrorDensityPer100Words ?? 0;
  const pillarMixCount = analytics?.pillarMix?.length ?? 0;

  const loadAnalytics = useCallback(async () => {
    try {
      const data = await getAnalyticsSummary(timeWindow);
      setAnalytics(data);
    } catch (e) {
      console.error(e);
    }
  }, [timeWindow]);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [mistakesData, statsData] = await Promise.all([
        getMistakes({
          limit: 100,
          ...(dateFromForWindow(timeWindow)
            ? { dateFrom: dateFromForWindow(timeWindow) }
            : {}),
        }),
        getUserStats(),
      ]);

      setMistakes(mistakesData.mistakes || []);
      setUserStats(statsData);
      await loadAnalytics();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [timeWindow, loadAnalytics]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredMistakes = useMemo(() => {
    return mistakes.filter((m: any) => {
      const matchesFilter = filter === "all" || m.pillar === filter;
      const matchesSearch =
        !search ||
        m.message?.toLowerCase().includes(search.toLowerCase()) ||
        m.pillar?.toLowerCase().includes(search.toLowerCase()) ||
        m.subtype?.toLowerCase().includes(search.toLowerCase()) ||
        m.surfaceText?.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [mistakes, filter, search]);

  const pillarCounts = mistakes.reduce((acc: Record<string, number>, m: any) => {
    if (m.pillar) acc[m.pillar] = (acc[m.pillar] || 0) + 1;
    return acc;
  }, {});

  const pillarList = Object.keys(pillarCounts);

  const heroStats = useMemo(
    () => [
      {
        label: "Mistakes",
        value: totalMistakes,
        icon: AlertCircle,
        desc: `${totalMistakes} flagged in ${windowLabel}`,
      },
      {
        label: "Submissions",
        value: submissionsCount,
        icon: BookOpen,
        desc: `${submissionsCount} practice ${submissionsCount === 1 ? "session" : "sessions"} in ${windowLabel}`,
      },
      {
        label: "XP",
        value: xp,
        icon: Award,
        desc: `Level ${level} · ${xpToNext} XP to next`,
      },
      {
        label: "Streak",
        value: `${streak}d`,
        icon: Flame,
        desc:
          longestStreak > streak
            ? `Best streak: ${longestStreak} days`
            : streak > 0
              ? "Keep your daily momentum"
              : "Start a streak today",
      },
    ],
    [
      totalMistakes,
      submissionsCount,
      windowLabel,
      xp,
      level,
      xpToNext,
      streak,
      longestStreak,
    ],
  );

  const getSeverityBadge = (severity: string) => {
    const map: Record<string, string> = {
      LOW: "bg-primary/10 text-primary border-primary/20",
      MEDIUM: "bg-accent/10 text-accent border-accent/20",
      HIGH: "bg-destructive/10 text-destructive border-destructive/20",
    };
    return (
      map[severity] ?? "bg-muted text-muted-foreground border-border"
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50dvh] px-4">
        <div className="text-center space-y-4">
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
          </div>
          <p className="text-sm font-semibold text-muted-foreground">
            Loading mistake memory...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4 sm:space-y-6 -mx-1 sm:mx-0 pb-6">
      {/* Hero */}
      <div className="bg-card border border-border rounded-xl sm:rounded-[24px] p-4 sm:p-6 md:p-8 shadow-terra overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 xl:gap-8">
          <div className="min-w-0">
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[20px] bg-primary/10 flex items-center justify-center shrink-0">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
                  Mistake Memory
                </h1>
                <p className="text-muted-foreground mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">
                  Review repeated mistakes, spot weak patterns, and track
                  improvement across {windowLabel}.
                </p>
              </div>
            </div>

            {/* Stats — all values from API */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-10">
              {heroStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-muted/30 border border-border rounded-xl sm:rounded-[20px] p-3.5 sm:p-5 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-[14px] bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="text-right min-w-0">
                        <p className="text-xl sm:text-3xl font-serif font-bold text-foreground leading-none tabular-nums">
                          {item.value}
                        </p>
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5 sm:mt-2 font-bold">
                          {item.label}
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-border line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Insights row — no duplicate submissions card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {analytics?.topSubtypes?.[0] ? (
                <div className="bg-primary/5 border border-primary/10 rounded-xl sm:rounded-[20px] p-4 sm:p-5">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary/70 font-black mb-2 sm:mb-3">
                    Most repeated pattern
                  </p>
                  <p className="text-base sm:text-lg font-bold text-foreground break-words">
                    {analytics.topSubtypes[0].subtype.replace(/_/g, " ")}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                    <span className="font-semibold text-foreground">
                      {analytics.topSubtypes[0].count}×
                    </span>{" "}
                    in {windowLabel}
                    {analytics.topSubtypes[0].pillar && (
                      <>
                        {" "}
                        ·{" "}
                        {analytics.topSubtypes[0].pillar.replace(/_/g, " ")}
                      </>
                    )}
                  </p>
                </div>
              ) : (
                <div className="bg-muted/30 border border-border rounded-xl sm:rounded-[20px] p-4 sm:p-5">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-black mb-2">
                    Most repeated pattern
                  </p>
                  <p className="text-sm text-muted-foreground">
                    No patterns yet — complete a writing session.
                  </p>
                </div>
              )}

              <div className="bg-muted/30 border border-border rounded-xl sm:rounded-[20px] p-4 sm:p-5">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-black mb-2 sm:mb-3">
                  Error density
                </p>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-foreground tabular-nums">
                  {errorDensity.toFixed(1)}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Mistakes per 100 words · {pillarMixCount} grammar{" "}
                  {pillarMixCount === 1 ? "area" : "areas"} active
                </p>
              </div>
            </div>
          </div>

          {/* Progress panel */}
          <div className="bg-muted/20 border border-border rounded-xl sm:rounded-[24px] p-4 sm:p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-black">
                  Progress overview
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 sm:mt-2">
                  Level {level}
                </h3>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-[16px] bg-primary/10 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
            </div>

            <div className="mb-5 sm:mb-8">
              <div className="flex items-center justify-between mb-2 sm:mb-3 text-sm">
                <p className="text-muted-foreground">XP progress</p>
                <p className="font-bold text-primary tabular-nums">
                  {xpInLevel} / 50 XP
                </p>
              </div>
              <div className="h-2.5 sm:h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(xpInLevel / 50) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
                {xpToNext} XP until level {level + 1}
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-card border border-border rounded-xl sm:rounded-[18px] p-3 sm:p-5">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-black">
                  Mistakes
                </p>
                <p className="text-2xl sm:text-3xl font-serif font-bold mt-2 sm:mt-3 tabular-nums">
                  {totalMistakes}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl sm:rounded-[18px] p-3 sm:p-5">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-black">
                  Pillars
                </p>
                <p className="text-2xl sm:text-3xl font-serif font-bold mt-2 sm:mt-3 tabular-nums">
                  {pillarMixCount}
                </p>
              </div>
            </div> */}

            {analytics?.topSubtypes?.length > 0 && (
              <div className="flex-1 bg-card border border-border rounded-xl sm:rounded-[20px] p-4 sm:p-5 min-h-0">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <h4 className="font-serif text-base sm:text-lg font-bold">
                    Top patterns
                  </h4>
                  <BarChart3 className="w-4 h-4 text-primary shrink-0" />
                </div>
                <div className="space-y-3 sm:space-y-4 max-h-48 sm:max-h-none overflow-y-auto">
                  {analytics.topSubtypes.slice(0, 4).map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">
                          {item.subtype?.replace(/_/g, " ")}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">
                          {item.pillar?.replace(/_/g, " ")}
                        </p>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {item.count}×
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className=" rounded-xl sm:rounded-2xl p-3 sm:p-4 ">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative min-w-0">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search mistakes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 sm:h-12 pl-10 sm:pl-11 pr-4 bg-muted/40 border border-border rounded-xl outline-none focus:border-primary/30 text-sm touch-manipulation"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:shrink-0">
            <label className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-3 sm:px-4 h-11 sm:h-12 flex-1 sm:flex-initial sm:min-w-[140px]">
              <Filter className="w-4 h-4 text-primary shrink-0" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent outline-none text-sm font-medium flex-1 min-w-0 touch-manipulation"
              >
                <option value="all">All pillars</option>
                {pillarList.map((p) => (
                  <option key={p} value={p}>
                    {p.replace(/_/g, " ")}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-3 sm:px-4 h-11 sm:h-12 flex-1 sm:flex-initial sm:min-w-[120px]">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <select
                value={timeWindow}
                onChange={(e) => setTimeWindow(e.target.value)}
                className="bg-transparent outline-none text-sm font-medium flex-1 min-w-0 touch-manipulation"
              >
                <option value="7d">7 days</option>
                <option value="30d">30 days</option>
                <option value="all">All time</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4 sm:gap-6">
        <div className="min-w-0 order-2 xl:order-1">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl shadow-terra flex flex-col max-h-[min(72dvh,42rem)] sm:max-h-[calc(100dvh-18rem)] overflow-hidden">
            <div className="shrink-0 px-4 pt-4 sm:px-6 sm:pt-6 pb-3 sm:pb-4 border-b border-border">
              <h2 className="text-xl sm:text-2xl font-serif font-bold">
                Recent mistakes
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Showing {filteredMistakes.length} of {mistakes.length} loaded
                {totalMistakes > mistakes.length &&
                  ` · ${totalMistakes} total in ${windowLabel}`}
              </p>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-3 sm:px-5 sm:py-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-muted/30">
              {filteredMistakes.length > 0 ? (
                <div className="space-y-3 sm:space-y-4 pr-1 sm:pr-2">
              {filteredMistakes.map((mistake: any, idx: number) => (
                <motion.div
                  key={mistake.id ?? idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
                  className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                    <span
                      className={`text-[10px] uppercase tracking-wider font-black px-2.5 py-1 rounded-full border ${getSeverityBadge(mistake.severity)}`}
                    >
                      {mistake.severity}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-black px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {mistake.pillar?.replace(/_/g, " ")}
                    </span>
                    {mistake.subtype && (
                      <span className="text-[10px] uppercase tracking-wider font-black px-2.5 py-1 rounded-full bg-primary/5 text-primary">
                        {mistake.subtype.replace(/_/g, " ")}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto">
                      {new Date(mistake.createdAt).toLocaleDateString(
                        undefined,
                        { month: "short", day: "numeric" },
                      )}
                    </span>
                  </div>

                  {mistake.message && (
                    <p className="text-sm sm:text-base leading-relaxed text-foreground/85 mb-4 sm:mb-5">
                      {mistake.message}
                    </p>
                  )}

                  {(mistake.surfaceText || mistake.suggestion) && (
                    <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 sm:items-center">
                      <div className="bg-destructive/5 border border-destructive/10 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                        <p className="text-[10px] uppercase tracking-wider font-black text-destructive/60 mb-1.5">
                          Incorrect
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-destructive line-through break-words">
                          {mistake.surfaceText || "—"}
                        </p>
                      </div>
                      <div className="flex sm:flex-col items-center justify-center py-0 sm:py-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center rotate-90 sm:rotate-0">
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="bg-primary/5 border border-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                        <p className="text-[10px] uppercase tracking-wider font-black text-primary/60 mb-1.5">
                          Suggestion
                        </p>
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm sm:text-base font-semibold text-primary break-words">
                            {mistake.suggestion || "—"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
                </div>
              ) : (
                <div className="py-10 sm:py-16 px-4 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">
                    No mistakes found
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                    Try a different time range or pillar filter, or keep
                    practicing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pillars sidebar */}
        <div className="order-1 xl:order-2">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-terra xl:sticky xl:top-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary shrink-0" />
              By pillar
            </h3>
            {pillarList.length > 0 ? (
              <div className="space-y-4 sm:space-y-5">
                {pillarList.map((pillar) => {
                  const count = pillarCounts[pillar];
                  const pct =
                    mistakes.length > 0
                      ? (count / mistakes.length) * 100
                      : 0;
                  return (
                    <div key={pillar}>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-2">
                        <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                          {pillar.replace(/_/g, " ")}
                        </p>
                        <p className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md shrink-0 tabular-nums">
                          {count}
                        </p>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No pillar data for {windowLabel}.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
