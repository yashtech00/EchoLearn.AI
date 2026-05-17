"use client";

import { useRouter } from "next/navigation";
import { 
  Brain, 
  BookOpen, 
  MessageCircle, 
  Target, 
  Clock, 
  Sparkles,
  TrendingUp,
  Play,
  Lock,
  Award,
  Flame,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { getUserStats, getCurrentTopic } from "@/app/api/writing/writing_api";
import { useQueryClient } from "@tanstack/react-query";

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    // Background prefetch the current writing topic for zero-lag instant transition
    queryClient.prefetchQuery({
      queryKey: ["writing-topic"],
      queryFn: getCurrentTopic,
      staleTime: Infinity,
    }).catch(err => console.error("Prefetch error:", err));

    const fetchStats = async () => {
      try {
        const data = await getUserStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [queryClient]);

  const games = [
    {
      id: 1,
      name: "Mistake Memory",
      description: "Practice English by learning from your writing mistakes",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      status: "active",
      path: "/Dashboard/WritingCoach/practice",
      progress: 75,
    },
    {
      id: 2,
      name: "Vocabulary Builder",
      description: "Expand your English vocabulary with AI-powered lessons",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      status: "coming-soon",
      progress: 0,
    },
    {
      id: 3,
      name: "Conversation Practice",
      description: "Improve your speaking skills with AI conversations",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      status: "coming-soon",
      progress: 0,
    },
    {
      id: 4,
      name: "Grammar Challenge",
      description: "Test and improve your grammar knowledge",
      icon: Target,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      status: "coming-soon",
      progress: 0,
    },
    {
      id: 5,
      name: "Speed Reading",
      description: "Enhance reading speed and comprehension",
      icon: Clock,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      status: "coming-soon",
      progress: 0,
    },
  ];

  const handleGameClick = (game: any) => {
    if (game.status === "active") {
      router.push(game.path);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Welcome Section - Terra Styled */}
      <div className="bg-primary rounded-[12px] p-6 sm:p-10 text-white relative overflow-hidden shadow-terra">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-4xl font-serif mb-2 sm:mb-3">Welcome back!</h1>
            <p className="text-white/80 text-sm sm:text-lg max-w-md leading-relaxed">
              Continue your journey to English mastery with calm, focused practice.
            </p>
          </div>
          <div className="hidden md:block opacity-20 flex-shrink-0">
            <Sparkles className="w-24 h-24" />
          </div>
        </div>
        {/* Subtle organic background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-10 -mb-10 blur-2xl" />
      </div>

      {/* Stats Overview - Terra Cards */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <div className="bg-card rounded-[12px] p-4 sm:p-6 shadow-terra border border-primary/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-[12px] bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Flame className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            </div>
            <span className="text-[10px] sm:text-sm font-medium text-muted-foreground uppercase tracking-wider leading-tight">Current Streak</span>
          </div>
          <div className="text-2xl sm:text-4xl font-serif text-foreground">{stats?.stats?.currentStreak || 0} <span className="text-sm sm:text-xl">Days</span></div>
        </div>
        
        <div className="bg-card rounded-[12px] p-4 sm:p-6 shadow-terra border border-primary/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-[12px] bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
            </div>
            <span className="text-[10px] sm:text-sm font-medium text-muted-foreground uppercase tracking-wider leading-tight">Level</span>
          </div>
          <div className="text-2xl sm:text-4xl font-serif text-accent">{stats?.stats?.level || 1}</div>
        </div>

        <div className="bg-card rounded-[12px] p-4 sm:p-6 shadow-terra border border-primary/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-[12px] bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            </div>
            <span className="text-[10px] sm:text-sm font-medium text-muted-foreground uppercase tracking-wider leading-tight">Total XP</span>
          </div>
          <div className="text-2xl sm:text-4xl font-serif text-foreground">{stats?.stats?.totalXp?.toLocaleString() || 0}</div>
        </div>
      </div>

      {/* Games Grid - Terra Styled */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-5 sm:mb-8">English Practice Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.id}
                onClick={() => handleGameClick(game)}
                className={`bg-card rounded-[12px] shadow-terra p-5 sm:p-8 transition-all duration-300 cursor-pointer border border-primary/5 hover:border-primary/20 hover:scale-[1.01] ${
                  game.status === "coming-soon" ? "opacity-75 grayscale-[0.5]" : ""
                }`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[12px] bg-primary/5 flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-serif text-foreground">{game.name}</h3>
                  {game.status === "coming-soon" && (
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/40 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-8 leading-relaxed">{game.description}</p>
                
                {game.status === "active" && game.progress > 0 && (
                  <div className="mb-5 sm:mb-8">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-xs font-medium text-muted-foreground">Mastery</span>
                      <span className="text-xs font-bold text-primary">{game.progress}%</span>
                    </div>
                    <div className="w-full bg-primary/5 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${game.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <button
                  className={`w-full py-3 sm:py-4 rounded-[12px] text-sm sm:text-base font-bold transition-all duration-300 ${
                    game.status === "active"
                      ? "bg-primary text-white hover:bg-primary/90 shadow-sm"
                      : "bg-secondary text-primary/40 cursor-not-allowed border border-primary/10"
                  }`}
                  disabled={game.status === "coming-soon"}
                >
                  {game.status === "active" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Play className="w-4 h-4 fill-current" />
                      Begin Practice
                    </span>
                  ) : (
                    "Available Soon"
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity - Terra Styled */}
<div className="bg-card rounded-[12px] shadow-terra p-5 sm:p-8 border border-primary/5">
  <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 sm:mb-6">
    Recent Activities
  </h2>

  <div className="space-y-3 sm:space-y-4">
    {(stats?.recentActivities && stats.recentActivities.length > 0) ? (
      [...stats.recentActivities]
        .sort((a, b) => b.xpEarned - a.xpEarned)
        .slice(0, 3)
        .map((activity: any) => (
          <div
            key={activity.id}
            className="flex items-center gap-3 sm:gap-5 p-3 sm:p-5 bg-primary/5 rounded-[12px] border border-primary/10 hover:bg-primary/10 transition-colors"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-primary flex items-center justify-center shadow-sm flex-shrink-0">
              {activity.source === "WRITING" ? (
                <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              ) : (
                <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-lg font-serif text-foreground truncate">
                {activity.activityType.replace(/_/g, " ")}
              </p>

              <p className="text-xs sm:text-base text-muted-foreground">
                {activity.source} • +{activity.xpEarned} XP
              </p>
            </div>

            <span className="text-xs sm:text-sm font-medium text-muted-foreground/60 flex-shrink-0">
              {new Date(activity.createdAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        ))
    ) : (
      <div className="text-center py-8 sm:py-10 text-sm sm:text-base text-muted-foreground">
        No recent activities. Start practicing to see your progress!
      </div>
    )}
  </div>
</div>
    </div>
  );
}