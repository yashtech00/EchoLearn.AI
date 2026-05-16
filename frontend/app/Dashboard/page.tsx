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
import { getUserStats } from "@/app/api/writing/writing_api";

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

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
      <div className="bg-primary rounded-[12px] p-10 text-white relative overflow-hidden shadow-terra">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif mb-3">Welcome back! 👋</h1>
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Continue your journey to English mastery with calm, focused practice.
            </p>
          </div>
          <div className="hidden md:block opacity-20">
            <Sparkles className="w-24 h-24" />
          </div>
        </div>
        {/* Subtle organic background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-10 -mb-10 blur-2xl" />
      </div>

      {/* Stats Overview - Terra Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Current Streak</span>
          </div>
          <div className="text-4xl font-serif text-foreground">{stats?.stats?.currentStreak || 0} Days</div>
        </div>
        
        <div className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-[12px] bg-accent/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Current Level</span>
          </div>
          <div className="text-4xl font-serif text-accent">{stats?.stats?.level || 1}</div>
        </div>

        <div className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total XP</span>
          </div>
          <div className="text-4xl font-serif text-foreground">{stats?.stats?.totalXp?.toLocaleString() || 0}</div>
        </div>
      </div>

      {/* Games Grid - Terra Styled */}
      <div>
        <h2 className="text-3xl font-serif text-foreground mb-8">English Practice Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.id}
                onClick={() => handleGameClick(game)}
                className={`bg-card rounded-[12px] shadow-terra p-8 transition-all duration-300 cursor-pointer border border-primary/5 hover:border-primary/20 hover:scale-[1.01] ${
                  game.status === "coming-soon" ? "opacity-75 grayscale-[0.5]" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-[12px] bg-primary/5 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-serif text-foreground">{game.name}</h3>
                  {game.status === "coming-soon" && (
                    <Lock className="w-5 h-5 text-muted-foreground/40" />
                  )}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">{game.description}</p>
                
                {game.status === "active" && game.progress > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
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
                  className={`w-full py-4 rounded-[12px] font-bold transition-all duration-300 ${
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
      <div className="bg-card rounded-[12px] shadow-terra p-8 border border-primary/5">
        <h2 className="text-2xl font-serif text-foreground mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {(stats?.recentActivities && stats.recentActivities.length > 0) ? (
            stats.recentActivities.map((activity: any) => (
              <div key={activity.id} className="flex items-center gap-5 p-5 bg-primary/5 rounded-[12px] border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="w-14 h-14 rounded-[12px] bg-primary flex items-center justify-center shadow-sm">
                  {activity.source === 'WRITING' ? <BookOpen className="w-7 h-7 text-white" /> : <Brain className="w-7 h-7 text-white" />}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-serif text-foreground">{activity.activityType.replace(/_/g, ' ')}</p>
                  <p className="text-muted-foreground">{activity.source} • +{activity.xpEarned} XP</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground/60">
                  {new Date(activity.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No recent activities. Start practicing to see your progress!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}