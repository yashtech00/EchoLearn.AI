"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, TrendingUp, AlertCircle, Filter, Calendar, Sparkles, Award, Flame, BarChart3, ChevronRight } from "lucide-react";
import { getSubmissions, getMistakes, getAnalyticsSummary, getUserStats } from "@/app/api/writing/writing_api";

export default function MistakeMemoryPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [mistakes, setMistakes] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [userStats, setUserStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [timeWindow, setTimeWindow] = useState<string>("30d");
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadAnalytics();
  }, [timeWindow]);

  const loadAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const analyticsData = await getAnalyticsSummary(timeWindow);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error("Error loading analytics:", error);
    } finally {
      setAnalyticsLoading(false);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [submissionsData, mistakesData, userStatsData] = await Promise.all([
        getSubmissions(10, 0),
        getMistakes({ limit: 50 }),
        getUserStats(),
      ]);
      setSubmissions(submissionsData.submissions || []);
      setMistakes(mistakesData.mistakes || []);
      setUserStats(userStatsData);
      
      // Load analytics with current timeWindow
      await loadAnalytics();
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredMistakes = mistakes.filter((mistake: any) => 
    filter === "all" || mistake.pillar === filter
  );

  const pillarCounts = mistakes.reduce((acc: any, mistake: any) => {
    acc[mistake.pillar] = (acc[mistake.pillar] || 0) + 1;
    return acc;
  }, {});

  const pillarList = Object.keys(pillarCounts);

  const getPillarColor = (pillar: string) => {
    return "bg-primary/10 text-primary border-primary/20";
  };

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      LOW: "bg-primary/10 text-primary",
      MEDIUM: "bg-accent/10 text-accent",
      HIGH: "bg-destructive/10 text-destructive",
    };
    return colors[severity] || "bg-muted text-foreground";
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4.5rem)] bg-background flex items-center justify-center font-sans text-foreground">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-foreground/70 font-medium">Loading your mistake memory...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-background font-sans text-foreground">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center border border-primary/20">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-serif">Mistake Memory</h1>
              <p className="text-foreground/70 font-medium">Track and learn from your writing mistakes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-[12px] bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Total Mistakes</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              {mistakes.length}
            </div>
          </div>
          <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-[12px] bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Submissions</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              {submissions.length}
            </div>
          </div>
          <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-[12px] bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Total XP</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              {userStats?.stats?.totalXp || 0}
            </div>
          </div>
          <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-[12px] bg-destructive/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Streak</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              {userStats?.stats?.currentStreakDays || 0} days
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mistakes List */}
          <div className="lg:col-span-2 space-y-6">


            {/* Analytics Summary */}
            {analytics && (
              <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-serif">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    Analytics Summary
                  </h2>
                  <select
                    value={timeWindow}
                    onChange={(e) => setTimeWindow(e.target.value)}
                    className="px-4 py-2 border border-border rounded-[12px] text-sm bg-background text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer"
                  >
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="all">All Time</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-muted rounded-[12px] border border-border/50 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {analytics.submissionsCount}
                    </p>
                    <p className="text-xs font-medium text-foreground/70 mt-1 uppercase tracking-wider">Submissions</p>
                  </div>
                  <div className="p-4 bg-muted rounded-[12px] border border-border/50 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {analytics.totalMistakes}
                    </p>
                    <p className="text-xs font-medium text-foreground/70 mt-1 uppercase tracking-wider">Mistakes</p>
                  </div>
                  <div className="p-4 bg-muted rounded-[12px] border border-border/50 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {analytics.avgErrorDensityPer100Words?.toFixed(1)}
                    </p>
                    <p className="text-xs font-medium text-foreground/70 mt-1 uppercase tracking-wider">Per 100 Wds</p>
                  </div>
                  <div className="p-4 bg-muted rounded-[12px] border border-border/50 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {analytics.pillarMix?.length || 0}
                    </p>
                    <p className="text-xs font-medium text-foreground/70 mt-1 uppercase tracking-wider">Pillars</p>
                  </div>
                </div>

                {analytics.topSubtypes && analytics.topSubtypes.length > 0 && (
                  <div>
                    <h3 className="font-bold text-foreground mb-4 font-serif text-lg">Top Recurring Patterns</h3>
                    <div className="space-y-3">
                      {analytics.topSubtypes.slice(0, 5).map((subtype: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-muted border border-border/50 rounded-[12px] flex items-center justify-between group hover:border-primary/30 transition-colors"
                        >
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {subtype.subtype}
                            </p>
                            <p className="text-xs font-medium text-foreground/60 mt-0.5">
                              {subtype.pillar.replace(/_/g, " ")} • Recurrence: {subtype.recurrenceIndex?.toFixed(1)}
                            </p>
                          </div>
                          <span className="text-sm font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-[8px]">
                            {subtype.count}x
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-serif">
                  <Filter className="w-5 h-5 text-primary" />
                  Recent Mistakes
                </h2>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-border rounded-[12px] text-sm bg-background text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer"
                >
                  <option value="all">All Pillars</option>
                  {pillarList.map((pillar) => (
                    <option key={pillar} value={pillar}>
                      {pillar.replace(/_/g, " ")}
                    </option>
                  ))}
                </select>
              </div>

              {filteredMistakes.length > 0 ? (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                  {filteredMistakes.map((mistake: any, index: number) => (
                    <div
                      key={index}
                      className="p-5 bg-muted rounded-[12px] border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded-[8px] border ${getPillarColor(mistake.pillar)}`}
                          >
                            {mistake.pillar.replace(/_/g, " ")}
                          </span>
                          {mistake.severity && (
                            <span
                              className={`text-xs font-bold px-2 py-1 rounded-[8px] tracking-wide ${getSeverityColor(mistake.severity)}`}
                            >
                              {mistake.severity}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-medium text-foreground/50 whitespace-nowrap ml-2">
                          {new Date(mistake.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 mb-3 font-medium italic">"{mistake.message}"</p>
                      {mistake.surfaceText && (
                        <div className="mb-2 bg-background/50 p-2.5 rounded-[8px] border border-border/50">
                          <p className="text-sm text-foreground font-medium flex items-center gap-2">
                            <span className="text-destructive line-through opacity-80 decoration-2">
                              {mistake.surfaceText}
                            </span>
                          </p>
                        </div>
                      )}
                      {mistake.suggestion && (
                        <div className="bg-primary/5 p-2.5 rounded-[8px] border border-primary/10">
                          <p className="text-sm text-primary font-bold flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            {mistake.suggestion}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-[12px] bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <BookOpen className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-foreground/70 font-medium">No mistakes found for this filter.</p>
                </div>
              )}
            </div>


            {/* Recent Submissions */}
            <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 font-serif">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Submissions
              </h2>
              {submissions.length > 0 ? (
                <div className="space-y-4">
                  {submissions.slice(0, 5).map((submission: any) => (
                    <div
                      key={submission.id}
                      onClick={() => router.push(`/Dashboard/WritingCoach/Report?submissionId=${submission.id}`)}
                      className="p-4 bg-muted rounded-[12px] border border-border hover:border-primary/40 hover:shadow-sm cursor-pointer transition-all group"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                            {new Date(submission.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-[6px]">
                              {submission.wordCount} words
                            </span>
                            <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                        {submission.title && (
                          <h3 className="text-sm font-bold text-foreground line-clamp-1 mt-1 leading-snug">{submission.title}</h3>
                        )}
                        <p className="text-[10px] text-foreground/60 uppercase tracking-widest font-bold mt-1">
                          {submission.genre?.replace(/_/g, " ") || 'PRACTICE'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-[12px] bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <Calendar className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-foreground/70 font-medium">No submissions yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Pillar Breakdown */}
          <div className="space-y-6">
            {/* Tips */}
            {/* <div className="bg-primary rounded-[12px] p-6 text-primary-foreground shadow-[var(--shadow-terra)] relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <Sparkles className="w-32 h-32" />
              </div>
              <h3 className="font-bold mb-3 flex items-center gap-2 font-serif text-xl relative z-10">
                <Sparkles className="w-5 h-5 text-accent" />
                Coach's Tip
              </h3>
              <p className="text-sm text-primary-foreground/90 leading-relaxed font-medium relative z-10">
                Review your most common mistakes regularly. Focus on the pillars where you make the most errors. Practice writing sentences that use the correct forms to build muscle memory and avoid repeating the same errors.
              </p>
            </div> */}

            <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 font-serif">
                <TrendingUp className="w-5 h-5 text-accent" />
                Mistakes by Pillar
              </h2>
              {pillarList.length > 0 ? (
                <div className="space-y-5">
                  {pillarList.map((pillar) => (
                    <div key={pillar}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-foreground">
                          {pillar.replace(/_/g, " ")}
                        </span>
                        <span className="text-xs text-foreground/70 font-bold bg-muted px-2 py-0.5 rounded-[6px]">
                          {pillarCounts[pillar]}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: `${(pillarCounts[pillar] / mistakes.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-foreground/70 font-medium">No data available</p>
                </div>
              )}
            </div>

            {/* Level Progress */}
            {userStats?.stats && (
              <div className="bg-background rounded-[12px] border border-border p-6 shadow-[var(--shadow-terra)]">
                <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2 font-serif">
                  <Award className="w-5 h-5 text-accent" />
                  Your Progress
                </h2>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-foreground/70 font-bold uppercase tracking-wider">Current Level</span>
                      <span className="text-xl font-bold text-primary flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20">
                        {userStats.stats.level}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${(userStats.stats.totalXp % 50) / 50 * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground/70 flex items-center justify-between font-medium">
                      <span>XP to next level</span>
                      <span className="font-bold text-foreground bg-muted px-2 py-1 rounded-[6px]">{50 - (userStats.stats.totalXp % 50)}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
