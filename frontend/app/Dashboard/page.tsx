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
  Lock
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

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
      path: "/Dashboard/MistakeMemory",
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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-white/90 text-lg">
              Ready to practice English with AI-powered games?
            </p>
          </div>
          <div className="hidden md:block">
            <Sparkles className="w-12 h-12 text-white/80" />
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-sm text-gray-600">Games Played</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">12</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Mistakes Learned</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">28</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-pink-600" />
            </div>
            <span className="text-sm text-gray-600">XP Earned</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">1,250</div>
        </div>
      </div>

      {/* Games Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">English Practice Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.id}
                onClick={() => handleGameClick(game)}
                className={`bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  game.status === "coming-soon" ? "opacity-70" : "hover:border-indigo-300"
                }`}
              >
                <div className={`${game.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${game.iconColor}`} />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{game.name}</h3>
                  {game.status === "coming-soon" && (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{game.description}</p>
                
                {game.status === "active" && game.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs font-semibold text-indigo-600">{game.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${game.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${game.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    game.status === "active"
                      ? `bg-gradient-to-r ${game.color} text-white hover:opacity-90`
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={game.status === "coming-soon"}
                >
                  {game.status === "active" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Play Now
                    </span>
                  ) : (
                    "Coming Soon"
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Mistake Memory</p>
              <p className="text-sm text-gray-600">Completed 5 mistake corrections</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Writing Coach</p>
              <p className="text-sm text-gray-600">Submitted writing for AI analysis</p>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}