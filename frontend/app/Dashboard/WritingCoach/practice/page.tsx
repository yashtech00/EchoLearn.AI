"use client";

import { useState } from "react";
import { PenTool, Sparkles, BookOpen, TrendingUp, Lightbulb, Award, Flame, AlertCircle } from "lucide-react";
import { createSubmission, getTopic, getSubmissionStatus } from "@/app/api/writing/writing_api";

export default function WritingCoachPage() {
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [genre, setGenre] = useState("GENERAL");
  const [loading, setLoading] = useState(false);
  const [loadingTopic, setLoadingTopic] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [analysisStatus, setAnalysisStatus] = useState<"idle" | "analyzing" | "completed" | "failed" | "timeout">("idle");

  const handleGetTopic = async () => {
    setLoadingTopic(true);
    try {
      const response = await getTopic();
      setTopic(response.topic);
      setGenre(response.genre || "GENERAL");
    } catch (error) {
      console.error("Error generating topic:", error);
    } finally {
      setLoadingTopic(false);
    }
  };

  const handleSubmit = async () => {
    if (!content.trim()) {
      setError("Please enter some text to analyze");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setAnalysisStatus("analyzing");

    try {
      // Submit writing - returns immediately with submissionId
      const response = await createSubmission({
        body: content,
        genre,
        title: topic || undefined,
      });

      const submissionId = response.submissionId;
      console.log("Submission created:", submissionId);

      // Poll for status every 2 seconds
      const pollInterval = setInterval(async () => {
        try {
          const statusResponse = await getSubmissionStatus(submissionId);
          const { status, analysis, errorMessage } = statusResponse;

          console.log("Submission status:", status);

          if (status === "COMPLETED") {
            clearInterval(pollInterval);
            setResult({ analysis });
            setAnalysisStatus("completed");
            setLoading(false);
          } else if (status === "FAILED") {
            clearInterval(pollInterval);
            setError(errorMessage || "Analysis failed. Please try again.");
            setAnalysisStatus("failed");
            setLoading(false);
          }
          // If PENDING or PROCESSING, continue polling
        } catch (pollError) {
          console.error("Polling error:", pollError);
          clearInterval(pollInterval);
          setError("Failed to check analysis status");
          setLoading(false);
          setAnalysisStatus("failed");
        }
      }, 2000);

      // Set a timeout to stop polling after 2 minutes
      setTimeout(() => {
        clearInterval(pollInterval);
        if (loading) {
          setError("Analysis is taking longer than expected. Please check back later.");
          setLoading(false);
          setAnalysisStatus("timeout");
        }
      }, 120000);

    } catch (error) {
      console.error("Error submitting writing:", error);
      setError("Failed to submit writing. Please try again.");
      setLoading(false);
      setAnalysisStatus("failed");
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Writing Coach</h1>
              <p className="text-gray-600">Submit your writing for AI-powered feedback</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Writing Input */}
          <div className="space-y-6">
            {/* Topic Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-semibold text-gray-900">
                  Writing Topic
                </label>
                <button
                  onClick={handleGetTopic}
                  disabled={loadingTopic}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                >
                  {loadingTopic ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-4 h-4" />
                      Get Topic
                    </>
                  )}
                </button>
              </div>
              {topic ? (
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <p className="text-gray-800 font-medium">{topic}</p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm italic">
                  Click "Get Topic" to receive a personalized writing prompt
                </p>
              )}
            </div>

            {/* Writing Area */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Your Writing
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write or paste your text here for AI analysis..."
                className="w-full h-64 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-gray-700"
              />
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {content.length} characters
                </span>
                <button
                  onClick={handleSubmit}
                  disabled={!content.trim() || loading}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Analyze Writing
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Results */}
          <div className="space-y-6">
            {error ? (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Error</h3>
                    <p className="text-red-700">{error}</p>
                    <button
                      onClick={() => setError(null)}
                      className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ) : analysisStatus === "analyzing" ? (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
                <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analyzing Your Writing...</h3>
                <p className="text-gray-600">This may take 20-60 seconds. Please wait.</p>
              </div>
            ) : result ? (
              <>
                {/* XP & Streak Card */}
                {result.gamification && (
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Award className="w-8 h-8" />
                        <div>
                          <p className="text-sm font-medium opacity-90">XP Earned</p>
                          <p className="text-2xl font-bold">+{result.gamification.xpAwarded}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Flame className="w-8 h-8" />
                        <div>
                          <p className="text-sm font-medium opacity-90">Streak</p>
                          <p className="text-2xl font-bold">{result.gamification.userStats.currentStreakDays} days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Score Card */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Writing Score</h2>
                    <div className="text-4xl font-extrabold">
                      {result.analysis?.summary?.score || 75}
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-white h-3 rounded-full transition-all duration-500"
                      style={{ width: `${result.analysis?.summary?.score || 75}%` }}
                    />
                  </div>
                </div>

                {/* Summary */}
                {result.analysis?.summary && (
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                      Analysis Summary
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">
                          {result.analysis.summary.mistakeCount}
                        </p>
                        <p className="text-sm text-gray-600">Mistakes Found</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">
                          {result.analysis.summary.errorDensityPer100Words?.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">Error Density / 100 words</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Feedback */}
                {result.analysis?.feedback && (
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-indigo-600" />
                      AI Feedback
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {result.analysis.feedback}
                    </p>
                  </div>
                )}

                {/* Mistakes */}
                {result.analysis?.mistakes && result.analysis.mistakes.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      Identified Mistakes ({result.analysis.mistakes.length})
                    </h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {result.analysis.mistakes.map((mistake: any, index: number) => (
                        <div
                          key={index}
                          className="p-4 bg-red-50 border border-red-200 rounded-xl"
                        >
                          <div className="flex items-start justify-between mb-2">
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
                            {mistake.confidence && (
                              <span className="text-xs text-gray-500">
                                {Math.round(mistake.confidence * 100)}% confidence
                              </span>
                            )}
                          </div>
                          {mistake.surfaceText && (
                            <p className="text-sm text-gray-700 mb-2">
                              <span className="line-through text-red-600">
                                {mistake.surfaceText}
                              </span>
                            </p>
                          )}
                          <p className="text-sm text-gray-700 mb-2">{mistake.message}</p>
                          {mistake.suggestion && (
                            <p className="text-sm text-green-700 font-medium">
                              → {mistake.suggestion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ready to Analyze
                </h3>
                <p className="text-gray-600">
                  Write or paste your text on the left and click "Analyze Writing" to get AI-powered feedback.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
