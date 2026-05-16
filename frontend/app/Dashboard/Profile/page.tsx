"use client";

import { useState, useEffect } from "react";
import { Award, Flame, TrendingUp, Calendar, Target, BookOpen, Zap } from "lucide-react";
import { getUserStats, getSubmissions } from "@/app/api/writing/writing_api";

export default function ProfilePage() {
  const [userStats, setUserStats] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [statsData, submissionsData] = await Promise.all([
        getUserStats(),
        getSubmissions(5, 0),
      ]);
      setUserStats(statsData);
      setSubmissions(submissionsData.submissions || []);
    } catch (error) {
      console.error("Error loading profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-sans">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6" />
          <p className="text-muted-foreground font-medium">Gathering your progress...</p>
        </div>
      </div>
    );
  }

  const xpProgress = userStats?.stats ? (userStats.stats.totalXp % 50) : 0;
  const xpPercent = Math.round((xpProgress / 50) * 100);
  const xpRemaining = 50 - xpProgress;

  return (
    <div className="space-y-8 font-sans">
      {/* Header - Terra Styled */}
      <div className="bg-card rounded-[12px] p-8 shadow-terra border border-primary/5">
        <h1 className="text-4xl font-serif text-foreground mb-2">Your Progress</h1>
        <p className="text-muted-foreground text-lg">A peaceful view of your English journey.</p>
      </div>

      {/* Stats Overview - Terra Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-primary rounded-[12px] p-6 text-white shadow-terra border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 opacity-80" />
            <span className="text-sm font-medium opacity-70 uppercase tracking-widest">Total XP</span>
          </div>
          <div className="text-4xl font-serif">
            {userStats?.stats?.totalXp?.toLocaleString() || 0}
          </div>
        </div>
        
        <div className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Streak</span>
          </div>
          <div className="text-4xl font-serif text-foreground">
            {userStats?.stats?.currentStreak || 0} Days
          </div>
        </div>

        <div className="bg-accent rounded-[12px] p-6 text-white shadow-terra">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 opacity-80" />
            <span className="text-sm font-medium opacity-70 uppercase tracking-widest">Level</span>
          </div>
          <div className="text-4xl font-serif">
            {userStats?.stats?.level || 1}
          </div>
        </div>

        <div className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Writings</span>
          </div>
          <div className="text-4xl font-serif text-foreground">
            {submissions.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Level Progress - Terra Styled */}
        <div className="bg-card rounded-[12px] shadow-terra p-8 border border-primary/5">
          <h2 className="text-2xl font-serif text-foreground mb-8 flex items-center gap-3">
            <Zap className="w-6 h-6 text-accent fill-accent" />
            Next Milestone
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground font-medium">Level {userStats?.stats?.level || 1}</span>
                <span className="text-lg font-bold text-primary">{xpPercent}%</span>
              </div>
              <div className="w-full bg-[#f4ebd9] rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
            <div className="pt-6 border-t border-primary/10">
              <p className="text-muted-foreground leading-relaxed">
                You need <span className="font-bold text-foreground">{xpRemaining} more XP</span> to reach Level {(userStats?.stats?.level || 1) + 1}.
              </p>
            </div>
          </div>
        </div>

        {/* Streak Info - Terra Styled */}
        <div className="bg-card rounded-[12px] shadow-terra p-8 border border-primary/5">
          <h2 className="text-2xl font-serif text-foreground mb-8 flex items-center gap-3">
            <Flame className="w-6 h-6 text-primary fill-primary" />
            Habit Tracker
          </h2>
          <div className="space-y-4">
            <div className="p-5 bg-primary/5 rounded-[12px] border border-primary/10">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Current Streak</span>
                <span className="text-3xl font-serif text-primary">
                  {userStats?.stats?.currentStreak || 0} days
                </span>
              </div>
            </div>
            <div className="p-5 bg-secondary/50 rounded-[12px] border border-primary/10">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Longest Streak</span>
                <span className="text-3xl font-serif text-accent">
                  {userStats?.stats?.longestStreak || 0} days
                </span>
              </div>
            </div>
            {userStats?.stats?.lastActiveDate && (
              <div className="pt-6 border-t border-primary/10">
                <p className="text-sm text-muted-foreground">
                  Last active on <span className="text-foreground font-medium">
                    {new Date(userStats.stats.lastActiveDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recent XP Events - Terra Styled */}
        {userStats?.recentActivities && userStats.recentActivities.length > 0 && (
          <div className="bg-card rounded-[12px] shadow-terra p-8 border border-primary/5">
            <h2 className="text-2xl font-serif text-foreground mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              History
            </h2>
            <div className="space-y-4">
              {userStats.recentActivities.slice(0, 5).map((activity: any, index: number) => (
                <div
                  key={index}
                  className="p-5 bg-primary/5 rounded-[12px] flex items-center justify-between border border-primary/5"
                >
                  <div>
                    <p className="text-lg font-serif text-foreground">
                      {activity.activityType.replace(/_/g, " ")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(activity.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    +{activity.xpEarned} XP
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Submissions - Terra Styled */}
        <div className="bg-card rounded-[12px] shadow-terra p-8 border border-primary/5">
          <h2 className="text-2xl font-serif text-foreground mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            Recent Writings
          </h2>
          {submissions.length > 0 ? (
            <div className="space-y-5">
              {submissions.map((submission: any) => (
                <div
                  key={submission.id}
                  className="p-6 bg-primary/5 rounded-[12px] border border-primary/10 hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      {new Date(submission.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                      {submission.wordCount} Words
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed line-clamp-3 font-medium opacity-80">
                    {submission.body}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-primary/5 rounded-[12px] border border-dashed border-primary/20">
              <Target className="w-16 h-16 text-primary/20 mx-auto mb-6" />
              <p className="text-foreground font-serif text-xl mb-2">No writings found</p>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Every word you write is a step toward mastery. Start your first session today.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
