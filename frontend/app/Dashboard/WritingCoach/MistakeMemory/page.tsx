"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
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
  ChevronRight,
  Brain,
  ArrowRight,
  Search,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  getSubmissions,
  getMistakes,
  getAnalyticsSummary,
  getUserStats,
} from "@/app/api/writing/writing_api";

export default function MistakeMemoryPage() {
  const router = useRouter();

  const [submissions, setSubmissions] = useState<any[]>([]);
  const [mistakes, setMistakes] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [userStats, setUserStats] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState<string>("all");
  const [timeWindow, setTimeWindow] = useState<string>("30d");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadAnalytics();
  }, [timeWindow]);

  const loadAnalytics = async () => {
    try {
      const data = await getAnalyticsSummary(timeWindow);
      setAnalytics(data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadData = async () => {
    setLoading(true);

    try {
      const [subsData, mistakesData, statsData] = await Promise.all([
        getSubmissions(10, 0),
        getMistakes({ limit: 50 }),
        getUserStats(),
      ]);

      setSubmissions(subsData.submissions || []);
      setMistakes(mistakesData.mistakes || []);
      setUserStats(statsData);

      await loadAnalytics();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredMistakes = useMemo(() => {
    return mistakes.filter((m: any) => {
      const matchesFilter =
        filter === "all" || m.pillar === filter;

      const matchesSearch =
        !search ||
        m.message?.toLowerCase().includes(search.toLowerCase()) ||
        m.pillar?.toLowerCase().includes(search.toLowerCase()) ||
        m.subtype?.toLowerCase().includes(search.toLowerCase()) ||
        m.surfaceText?.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [mistakes, filter, search]);

  const pillarCounts = mistakes.reduce((acc: any, m: any) => {
    acc[m.pillar] = (acc[m.pillar] || 0) + 1;
    return acc;
  }, {});

  const pillarList = Object.keys(pillarCounts);

  const getSeverityBadge = (severity: string) => {
    const map: Record<string, string> = {
      LOW: "bg-primary/10 text-primary border-primary/20",
      MEDIUM: "bg-accent/10 text-accent border-accent/20",
      HIGH:
        "bg-destructive/10 text-destructive border-destructive/20",
    };

    return (
      map[severity] ??
      "bg-muted text-muted-foreground border-border"
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
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
    <div className="w-full space-y-6">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
{/* ───────────────── HERO SECTION ───────────────── */}
<div className="bg-card border border-border rounded-[24px] p-6 md:p-8 shadow-terra overflow-hidden">

  <div className="grid grid-cols-1 2xl:grid-cols-[1.5fr_420px] gap-8">

    {/* ───────── LEFT SIDE ───────── */}
    <div className="min-w-0">

      {/* TITLE */}
      <div className="flex items-start gap-5">

        <div className="w-16 h-16 rounded-[20px] bg-primary/10 flex items-center justify-center shrink-0">
          <Brain className="w-8 h-8 text-primary" />
        </div>

        <div className="min-w-0">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight leading-none">
            Mistake Memory
          </h1>

          <p className="text-muted-foreground mt-4 max-w-3xl text-[15px] md:text-base leading-relaxed">
            Review repeated mistakes, identify weak grammar patterns,
            and track your English improvement over time with detailed
            AI-powered writing insights.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-10">

        {[
          {
            label: "Mistakes",
            value: mistakes.length,
            icon: AlertCircle,
            desc: "Tracked issues",
          },
          {
            label: "Sessions",
            value: submissions.length,
            icon: BookOpen,
            desc: "Writing attempts",
          },
          {
            label: "XP",
            value: userStats?.stats?.totalXp ?? 0,
            icon: Award,
            desc: "Learning points",
          },
          {
            label: "Streak",
            value: `${userStats?.stats?.currentStreakDays ?? 0}d`,
            icon: Flame,
            desc: "Daily consistency",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                relative
                bg-muted/30
                border border-border
                rounded-[20px]
                p-5
                hover:border-primary/20
                transition-all
                duration-200
              "
            >
              <div className="flex items-start justify-between">

                <div className="w-11 h-11 rounded-[14px] bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <div className="text-right">
                  <p className="text-3xl font-serif font-bold text-foreground leading-none">
                    {item.value}
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 font-bold">
                    {item.label}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM INSIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        {/* MOST COMMON */}
        {analytics?.topSubtypes?.[0] && (
          <div className="bg-primary/5 border border-primary/10 rounded-[20px] p-5">

            <p className="text-[11px] uppercase tracking-[0.18em] text-primary/70 font-black mb-3">
              Most Repeated Pattern
            </p>

            <p className="text-lg font-bold text-foreground break-words">
              {analytics.topSubtypes[0].subtype}
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              Appeared{" "}
              <span className="font-semibold text-foreground">
                {analytics.topSubtypes[0].count}
              </span>{" "}
              times in recent submissions.
            </p>
          </div>
        )}

        {/* SUBMISSIONS */}
        <div className="bg-muted/30 border border-border rounded-[20px] p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-black mb-3">
            Total Submissions
          </p>

          <p className="text-4xl font-serif font-bold text-foreground">
            {analytics?.submissionsCount || 0}
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Practice sessions completed.
          </p>
        </div>

        {/* ERROR DENSITY */}
        <div className="bg-muted/30 border border-border rounded-[20px] p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-black mb-3">
            Error Density
          </p>

          <p className="text-4xl font-serif font-bold text-foreground">
            {analytics?.avgErrorDensityPer100Words?.toFixed(1) || 0}
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Mistakes per 100 words.
          </p>
        </div>

      </div>
    </div>

    {/* ───────── RIGHT PANEL ───────── */}
    <div className="bg-muted/20 border border-border rounded-[24px] p-6 h-full flex flex-col">

      {/* TOP */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-black">
            Progress Overview
          </p>

          <h3 className="font-serif text-2xl font-bold mt-2">
            Level {userStats?.stats?.level || 1}
          </h3>
        </div>

        <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center">
          <Target className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* XP BAR */}
      <div className="mb-8">

        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-muted-foreground">
            Current XP Progress
          </p>

          <p className="text-sm font-bold text-primary">
            {userStats?.stats?.totalXp % 50 || 0} / 50 XP
          </p>
        </div>

        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${
                ((userStats?.stats?.totalXp % 50 || 0) / 50) * 100
              }%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>

        <p className="text-sm text-muted-foreground mt-3">
          {50 - (userStats?.stats?.totalXp % 50 || 0)} XP needed
          for next level
        </p>
      </div>

      {/* ANALYTICS GRID */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-card border border-border rounded-[18px] p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-black">
            Total Mistakes
          </p>

          <p className="text-3xl font-serif font-bold mt-3">
            {analytics?.totalMistakes || 0}
          </p>
        </div>

        <div className="bg-card border border-border rounded-[18px] p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-black">
            Pillars Hit
          </p>

          <p className="text-3xl font-serif font-bold mt-3">
            {analytics?.pillarMix?.length || 0}
          </p>
        </div>

      </div>

      {/* TOP PATTERNS */}
      {analytics?.topSubtypes?.length > 0 && (
        <div className="flex-1 bg-card border border-border rounded-[20px] p-5">

          <div className="flex items-center justify-between mb-5">
            <h4 className="font-serif text-lg font-bold">
              Top Patterns
            </h4>

            <BarChart3 className="w-4 h-4 text-primary" />
          </div>

          <div className="space-y-4">

            {analytics.topSubtypes.slice(0, 4).map((item: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {item.subtype}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {item.pillar?.replace(/_/g, " ")}
                  </p>
                </div>

                <div className="shrink-0 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  {item.count}×
                </div>
              </div>
            ))}

          </div>
        </div>
      )}

    </div>
  </div>
</div>

      {/* ===================================================== */}
      {/* FILTER BAR */}
      {/* ===================================================== */}
          {/* PILLARS */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-terra">

            <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Mistakes by Pillar
            </h3>

            <div className="space-y-5">

              {pillarList.map((pillar) => (
                <div key={pillar}>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-foreground">
                      {pillar.replace(/_/g, " ")}
                    </p>

                    <p className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-md">
                      {pillarCounts[pillar]}
                    </p>
                  </div>

                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          (pillarCounts[pillar] /
                            mistakes.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
      <div className="bg-card border border-border rounded-2xl p-4 shadow-terra">

        <div className="flex flex-col lg:flex-row lg:items-center gap-4">

          {/* SEARCH */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search mistakes, rules, patterns..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 bg-muted/40 border border-border rounded-xl outline-none focus:border-primary/30 text-sm"
            />
          </div>

          {/* FILTER */}
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-4 h-12">
              <Filter className="w-4 h-4 text-primary" />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent outline-none text-sm font-medium"
              >
                <option value="all">All Pillars</option>

                {pillarList.map((p) => (
                  <option key={p} value={p}>
                    {p.replace(/_/g, " ")}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-4 h-12">
              <Calendar className="w-4 h-4 text-primary" />

              <select
                value={timeWindow}
                onChange={(e) =>
                  setTimeWindow(e.target.value)
                }
                className="bg-transparent outline-none text-sm font-medium"
              >
                <option value="7d">7 days</option>
                <option value="30d">30 days</option>
                <option value="all">All time</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* MAIN GRID */}
      {/* ===================================================== */}

      <div className="grid grid-cols-1 2xl:grid-cols-[1fr_360px] gap-6">

        {/* ===================================================== */}
        {/* LEFT */}
        {/* ===================================================== */}

        <div className="space-y-4">

          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-serif font-bold">
                Recent Mistakes
              </h2>

              <p className="text-sm text-muted-foreground mt-1">
                {filteredMistakes.length} mistakes found
              </p>
            </div>
          </div>

          {/* LIST */}
          {filteredMistakes.length > 0 ? (
            <div className="space-y-4 max-h-[calc(100vh-28rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">

              {filteredMistakes.map(
                (mistake: any, idx: number) => (
                  <motion.div
                    key={mistake.id ?? idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: idx * 0.03,
                    }}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-all"
                  >

                    {/* TOP */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">

                      <div className="flex flex-wrap items-center gap-2">

                        <span
                          className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border ${getSeverityBadge(
                            mistake.severity
                          )}`}
                        >
                          {mistake.severity}
                        </span>

                        <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full bg-muted text-muted-foreground">
                          {mistake.pillar?.replace(/_/g, " ")}
                        </span>

                        {mistake.subtype && (
                          <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full bg-primary/5 text-primary">
                            {mistake.subtype}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground">
                        {new Date(
                          mistake.createdAt
                        ).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    {/* MESSAGE */}
                    <div className="mb-6">
                      <p className="text-base leading-7 text-foreground/85">
                        {mistake.message}
                      </p>
                    </div>

                    {/* FIX BLOCK */}
                    {(mistake.surfaceText ||
                      mistake.suggestion) && (
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-center">

                        {/* WRONG */}
                        <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-5">
                          <p className="text-[10px] uppercase tracking-widest font-black text-destructive/60 mb-2">
                            Incorrect
                          </p>

                          <p className="text-base font-semibold text-destructive line-through decoration-2 break-words">
                            {mistake.surfaceText}
                          </p>
                        </div>

                        {/* ARROW */}
                        <div className="flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          </div>
                        </div>

                        {/* CORRECT */}
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
                          <p className="text-[10px] uppercase tracking-widest font-black text-primary/60 mb-2">
                            Suggestion
                          </p>

                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-primary shrink-0 mt-1" />

                            <p className="text-base font-semibold text-primary break-words">
                              {mistake.suggestion}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                )
              )}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-serif font-bold">
                No Mistakes Found
              </h3>

              <p className="text-muted-foreground mt-2">
                Try changing filters or keep practicing.
              </p>
            </div>
          )}
        </div>

        {/* ===================================================== */}
        {/* RIGHT SIDEBAR */}
        {/* ===================================================== */}

        <div className="space-y-6">

        

          {/* TOP PATTERNS */}
          {/* {analytics?.topSubtypes?.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 shadow-terra">

              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Top Patterns
              </h3>

              <div className="space-y-4">

                {analytics.topSubtypes
                  .slice(0, 5)
                  .map((s: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-3 pb-4 border-b border-border last:border-none last:pb-0"
                    >
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {s.subtype}
                        </p>

                        <p className="text-xs text-muted-foreground mt-1">
                          {s.pillar?.replace(/_/g, " ")}
                        </p>
                      </div>

                      <div className="bg-destructive/10 text-destructive px-2 py-1 rounded-md text-xs font-bold shrink-0">
                        {s.count}×
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )} */}

        </div>
      </div>
    </div>
  );
}