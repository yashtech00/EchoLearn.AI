"use client";

import { useState, useEffect } from "react";
import { Award, Flame, TrendingUp, Calendar, Target, BookOpen } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600">Track your progress and achievements</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Total XP</span>
            </div>
            <div className="text-4xl font-bold">
              {userStats?.stats?.totalXp || 0}
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Current Streak</span>
            </div>
            <div className="text-4xl font-bold">
              {userStats?.stats?.currentStreakDays || 0} days
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Level</span>
            </div>
            <div className="text-4xl font-bold">
              {userStats?.stats?.level || 1}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Submissions</span>
            </div>
            <div className="text-4xl font-bold">
              {submissions.length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Level Progress */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Level Progress
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Level</span>
                  <span className="text-lg font-bold text-indigo-600">
                    {userStats?.stats?.level || 1}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                    style={{
                      width: userStats?.stats ? `${((userStats.stats.totalXp % 50) / 50) * 100}%` : "0%",
                    }}
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  XP to next level: {userStats?.stats ? 50 - (userStats.stats.totalXp % 50) : 50}
                </p>
              </div>
            </div>
          </div>

          {/* Streak Info */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-600" />
              Streak Information
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Streak</span>
                  <span className="text-2xl font-bold text-orange-600">
                    {userStats?.stats?.currentStreakDays || 0} days
                  </span>
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Longest Streak</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {userStats?.stats?.longestStreakDays || 0} days
                  </span>
                </div>
              </div>
              {userStats?.stats?.lastActiveDate && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    Last active: {new Date(userStats.stats.lastActiveDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Recent XP Events */}
          {userStats?.recentXpEvents && userStats.recentXpEvents.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Recent XP Events
              </h2>
              <div className="space-y-3">
                {userStats.recentXpEvents.slice(0, 5).map((event: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {event.eventType.replace(/_/g, " ")}
                      </p>
                      <p className="text-xs text-gray-600">
                        {new Date(event.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        event.xpDelta > 0 ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      {event.xpDelta > 0 ? `+${event.xpDelta}` : event.xpDelta} XP
                    </span>
                  </div>
                ))}
              </div>
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
                {submissions.map((submission: any) => (
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
              <div className="text-center py-8">
                <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No submissions yet</p>
                <p className="text-sm text-gray-500 mt-2">
                  Start writing to track your progress!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
