"use client";

import { useState, useEffect } from "react";
import { BookOpen, TrendingUp, AlertCircle, Filter, Calendar, Sparkles, Award, Flame, BarChart3 } from "lucide-react";
import { getSubmissions, getMistakes, getAnalyticsSummary, getUserStats } from "@/app/api/writing/writing_api";

export default function MistakeMemoryPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [mistakes, setMistakes] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [userStats, setUserStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [submissionsData, mistakesData, analyticsData, userStatsData] = await Promise.all([
        getSubmissions(10, 0),
        getMistakes({ limit: 50 }),
        getAnalyticsSummary("30d"),
        getUserStats(),
      ]);
      setSubmissions(submissionsData.submissions || []);
      setMistakes(mistakesData.mistakes || []);
      setAnalytics(analyticsData);
      setUserStats(userStatsData);
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
    const colors: Record<string, string> = {
      VERB_SYSTEMS: "bg-blue-100 text-blue-700 border-blue-200",
      AGREEMENT_GRAMMAR: "bg-purple-100 text-purple-700 border-purple-200",
      DETERMINERS_QUANTITY: "bg-pink-100 text-pink-700 border-pink-200",
      PREPOSITIONS_PHRASAL: "bg-orange-100 text-orange-700 border-orange-200",
      LEXICAL_COLLOCATION: "bg-green-100 text-green-700 border-green-200",
      CLARITY_AMBIGUITY: "bg-red-100 text-red-700 border-red-200",
      COHESION_FLOW: "bg-indigo-100 text-indigo-700 border-indigo-200",
      INFO_STRUCTURE: "bg-teal-100 text-teal-700 border-teal-200",
      REGISTER_TONE: "bg-yellow-100 text-yellow-700 border-yellow-200",
      PUNCTUATION_MECHANICS: "bg-gray-100 text-gray-700 border-gray-200",
      SPELLING_ORTHOGRAPHY: "bg-rose-100 text-rose-700 border-rose-200",
      GENRE_PRAGMATICS: "bg-cyan-100 text-cyan-700 border-cyan-200",
    };
    return colors[pillar] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      LOW: "bg-green-100 text-green-700",
      MEDIUM: "bg-yellow-100 text-yellow-700",
      HIGH: "bg-red-100 text-red-700",
    };
    return colors[severity] || "bg-gray-100 text-gray-700";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your mistake memory...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mistake Memory</h1>
              <p className="text-gray-600">Track and learn from your writing mistakes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="text-sm text-gray-600">Total Mistakes</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {mistakes.length}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Submissions</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {submissions.length}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm text-gray-600">Total XP</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {userStats?.stats?.totalXp || 0}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-sm text-gray-600">Streak</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {userStats?.stats?.currentStreakDays || 0} days
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mistakes List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-indigo-600" />
                  Recent Mistakes
                </h2>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredMistakes.map((mistake: any, index: number) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded border ${getPillarColor(mistake.pillar)}`}
                          >
                            {mistake.pillar.replace(/_/g, " ")}
                          </span>
                          {mistake.severity && (
                            <span
                              className={`text-xs font-semibold px-2 py-1 rounded ${getSeverityColor(mistake.severity)}`}
                            >
                              {mistake.severity}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(mistake.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{mistake.message}</p>
                      {mistake.surfaceText && (
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="text-red-600 line-through">
                            {mistake.surfaceText}
                          </span>
                        </p>
                      )}
                      {mistake.suggestion && (
                        <p className="text-sm text-green-700 font-medium">
                          → {mistake.suggestion}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600">No mistakes found</p>
                </div>
              )}
            </div>

            {/* Analytics Summary */}
            {analytics && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Analytics Summary (30 days)
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900">
                      {analytics.submissionsCount}
                    </p>
                    <p className="text-sm text-gray-600">Submissions</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900">
                      {analytics.totalMistakes}
                    </p>
                    <p className="text-sm text-gray-600">Total Mistakes</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900">
                      {analytics.avgErrorDensityPer100Words?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">Error Density / 100 words</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900">
                      {analytics.pillarMix?.length || 0}
                    </p>
                    <p className="text-sm text-gray-600">Pillars Affected</p>
                  </div>
                </div>

                {analytics.topSubtypes && analytics.topSubtypes.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Top Recurring Mistakes</h3>
                    <div className="space-y-3">
                      {analytics.topSubtypes.slice(0, 5).map((subtype: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-gray-50 rounded-lg flex items-center justify-between"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {subtype.pillar.replace(/_/g, " ")}: {subtype.subtype}
                            </p>
                            <p className="text-xs text-gray-600">
                              Recurrence Index: {subtype.recurrenceIndex?.toFixed(2)}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-indigo-600">
                            {subtype.count}x
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Recent Submissions */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Recent Submissions
              </h2>
              {submissions.length > 0 ? (
                <div className="space-y-4">
                  {submissions.slice(0, 5).map((submission: any) => (
                    <div
                      key={submission.id}
                      className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </span>
                        <span className="text-sm font-semibold text-indigo-600">
                          {submission.wordCount} words
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {submission.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No submissions yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Pillar Breakdown */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-pink-600" />
                Mistakes by Pillar
              </h2>
              {pillarList.length > 0 ? (
                <div className="space-y-4">
                  {pillarList.map((pillar) => (
                    <div key={pillar}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900">
                          {pillar.replace(/_/g, " ")}
                        </span>
                        <span className="text-sm text-gray-600">
                          {pillarCounts[pillar]}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
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
                  <p className="text-gray-600">No data available</p>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Pro Tip
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Review your most common mistakes regularly. Focus on the pillars where you make the most errors. Practice writing sentences that use the correct forms to build muscle memory and avoid repeating the same errors.
              </p>
            </div>

            {/* Level Progress */}
            {userStats?.stats && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  Your Progress
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Current Level</span>
                      <span className="text-lg font-bold text-indigo-600">
                        {userStats.stats.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full"
                        style={{
                          width: `${(userStats.stats.totalXp % 50) / 50 * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      XP to next level: {50 - (userStats.stats.totalXp % 50)}
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
