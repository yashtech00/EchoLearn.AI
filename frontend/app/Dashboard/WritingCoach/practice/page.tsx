"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/lib/userAuth";
import {
  createSubmission,
  getCurrentTopic,
  getNewTopic,
  getSubmissionStatus,
} from "@/app/api/writing/writing_api";
import { getApiErrorMessage } from "@/app/api/apiResponse";
import { getProfileMe } from "@/app/api/user_profile/user_profile";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import MissionPanel from "@/components/WritingCoach/MissionPanel";
import ExampleStarter from "@/components/WritingCoach/ExampleStarter";
import ProgressJourney from "@/components/WritingCoach/ProgressJourney";

const DEFAULT_WORD_TARGET = 150;

const countWords = (text: string) => {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
};

const limitWords = (text: string, maxWords: number) => {
  const words = text.match(/\S+/g) || [];
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ");
};

export default function WritingCoachPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ analysis: unknown } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [analysisStatus, setAnalysisStatus] = useState<
    "idle" | "analyzing" | "completed" | "failed" | "timeout"
  >("idle");
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isNewUser, loading: authLoading } = useAuth();

  const { data: profileData, isLoading: isProfileLoading } = useQuery({
    queryKey: ["profile-me"],
    queryFn: getProfileMe,
    staleTime: 60_000,
  });

  const hasProfile = Boolean(profileData?.profile);

  const { data: topicData, isLoading: isQueryLoading } = useQuery({
    queryKey: ["writing-topic"],
    queryFn: getCurrentTopic,
    staleTime: Infinity,
    enabled: hasProfile,
  });

  const newTopicMutation = useMutation({
    mutationFn: getNewTopic,
    onSuccess: (newData) => {
      queryClient.setQueryData(["writing-topic"], newData);
      setContent(""); // Clear editor on new topic
    },
  });

  const loadingTopic = newTopicMutation.isPending;
  const wordTarget = topicData?.wordTarget || DEFAULT_WORD_TARGET;
  const editorContent = limitWords(content, wordTarget);
  const wordCount = countWords(editorContent);
  const isAtWordLimit = wordCount >= wordTarget;
  const isEmpty = wordCount === 0;

  const updateContent = (value: string) => {
    if (isAtWordLimit && value.length > editorContent.length) {
      return;
    }
    setContent(limitWords(value, wordTarget));
  };

  const handleBeforeInput = (
    event: React.FormEvent<HTMLTextAreaElement> & {
      nativeEvent: InputEvent;
    },
  ) => {
    const textarea = event.currentTarget;
    const hasSelection = textarea.selectionStart !== textarea.selectionEnd;

    if (
      isAtWordLimit &&
      !hasSelection &&
      event.nativeEvent.inputType.startsWith("insert")
    ) {
      event.preventDefault();
    }
  };

  const handleGetTopic = () => {
    newTopicMutation.mutate();
  };

  const handleUseStarter = (starter: string) => {
    setContent(starter + " ");
    // Focus textarea
    setTimeout(() => {
      const textarea = document.getElementById("editor-textarea") as HTMLTextAreaElement;
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(starter.length + 1, starter.length + 1);
      }
    }, 100);
  };

  const handleSubmit = async () => {
    if (!editorContent.trim()) {
      setError("Please enter some text to analyze");
      return;
    }
    
    if (wordCount < 50) {
      setError("Write a bit more (at least 50 words) for better feedback.");
      return;
    }

    if (wordCount > wordTarget) {
      setError(`Please keep your writing within ${wordTarget} words.`);
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setAnalysisStatus("analyzing");

    try {
      const response = await createSubmission({
        body: editorContent,
        genre: topicData?.genre || "GENERAL",
        title: topicData?.topic || undefined,
        promptId: topicData?.id || undefined,
      });

      const submissionId = response.submissionId;

      const pollInterval = setInterval(async () => {
        try {
          const statusResponse = await getSubmissionStatus(submissionId);
          const { status, analysis, errorMessage } = statusResponse;

          if (status === "COMPLETED") {
            clearInterval(pollInterval);
            setResult({ analysis });
            setAnalysisStatus("completed");
            setLoading(false);
            router.push(`/Dashboard/WritingCoach/Report?submissionId=${submissionId}`);
          } else if (status === "FAILED") {
            clearInterval(pollInterval);
            setError(errorMessage || "Analysis failed. Please try again.");
            setAnalysisStatus("failed");
            setLoading(false);
          }
        } catch {
          clearInterval(pollInterval);
          setError("Failed to check analysis status");
          setLoading(false);
          setAnalysisStatus("failed");
        }
      }, 2000);

      setTimeout(() => {
        clearInterval(pollInterval);
        if (loading) {
          setError("Analysis is taking longer than expected.");
          setLoading(false);
          setAnalysisStatus("timeout");
        }
      }, 120000);
    } catch (error) {
      setError(getApiErrorMessage(error, "Failed to submit writing. Please try again."));
      setLoading(false);
      setAnalysisStatus("failed");
    }
  };

  if (isProfileLoading || authLoading) {
    return (
      <div className="min-h-[calc(100dvh-7.5rem)] bg-[#faf6f0] rounded-xl sm:rounded-2xl flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-[#4a7c59]/20 border-t-[#4a7c59] animate-spin" />
          <p className="text-sm font-medium text-[#2e3230]/70">
            Preparing your writing practice...
          </p>
        </div>
      </div>
    );
  }

  if (!hasProfile) {
    return (
      <div className="min-h-[calc(100dvh-7.5rem)] bg-[#faf6f0] flex items-center justify-center p-6">
        <div className="relative max-w-3xl w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/10 to-emerald-100 opacity-80" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold text-foreground">
                  {isNewUser ? "Welcome! Complete your profile" : "Complete your profile"}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                  It hardly takes 2 minutes. Complete your profile now to unlock faster, more personalized writing practice.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm text-foreground/80 leading-7">
                Building your profile helps us choose the right topics, feedback style, and learning path. This is the best way to keep your first practice sessions engaging and useful.
              </p>
              {/* <button
                type="button"
                onClick={() => router.push("/Dashboard")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Maybe later
              </button> */}
            </div>

            <div className=" flex justify-center gap-4 text-center">
              <button
                type="button"
                onClick={() => router.push("/UserProfile?next=/Dashboard/WritingCoach/practice")}
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/10 hover:bg-primary/90 transition"
              >
                Complete profile now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show loader when topic is being fetched from API
  if (isQueryLoading && !topicData) {
    return (
      <div className="min-h-[calc(100dvh-7.5rem)] bg-[#faf6f0] rounded-xl sm:rounded-2xl flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-[#4a7c59]/20 border-t-[#4a7c59] animate-spin" />
          <p className="text-sm font-medium text-[#2e3230]/70">
            Loading your writing topic...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col lg:flex-row min-h-[calc(100dvh-7.5rem)] lg:h-[calc(100dvh-7.5rem)] bg-[#faf6f0] overflow-hidden text-[#2e3230] rounded-xl sm:rounded-2xl -mx-1 sm:mx-0"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      <AnimatePresence mode="wait">
        {isEmpty && !isQueryLoading ? (
          // EMPTY STATE: Mission-First Layout (Single Page, No Scroll)
          <motion.div
            key="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 h-full lg:max-h-[calc(100dvh-10rem)]">
              {/* Left Column: Mission Panel */}
              <div className="flex flex-col gap-4 min-h-0">
                <div className="bg-[#f4ebd9] rounded-2xl p-4 sm:p-6 border border-[#4a7c59]/20 shadow-lg flex-1 overflow-y-auto scrollbar-thin">
                  {topicData && (
                    <MissionPanel
                      topic={topicData.topic}
                      description={topicData.description}
                      genre={topicData.genre}
                      targetLevel={topicData.targetLevel}
                      writingTips={topicData.writingTips}
                      onNewTopic={handleGetTopic}
                      loadingTopic={loadingTopic}
                    />
                  )}
                </div>
              </div>

              {/* Right Column: Editor + Example Starters */}
              <div className="flex flex-col gap-4 min-h-0">
                {/* Example Starters - Compact */}
                {topicData?.exampleStarters && topicData.exampleStarters.length > 0 && (
                  <div className="bg-white rounded-xl p-4 border border-[#4a7c59]/20 shadow-sm">
                    <ExampleStarter
                      examples={topicData.exampleStarters}
                      onUseStarter={handleUseStarter}
                    />
                  </div>
                )}

                {/* Editor */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-dashed border-[#4a7c59]/30 hover:border-[#4a7c59]/50 transition-all flex-1 flex flex-col min-h-0">
                  <textarea
                    id="editor-textarea"
                    value={editorContent}
                    onBeforeInput={handleBeforeInput}
                    onChange={(e) => updateContent(e.target.value)}
                    placeholder="Click here to start writing..."
                    className="w-full flex-1 min-h-[220px] sm:min-h-[280px] text-base sm:text-lg text-[#2e3230] placeholder:text-[#a0a5a0] focus:outline-none resize-none bg-transparent"
                    style={{ fontFamily: "'Literata', serif", lineHeight: "1.8" }}
                  />
                  <div className="mt-3 pt-3 border-t border-[#4a7c59]/10 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-[#2e3230]/60">
                      {wordCount} / {wordTarget} words
                    </span>
                    <span className="text-xs text-[#2e3230]/40">
                      Start writing to unlock AI feedback
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          // ACTIVE STATE: Editor-First Layout (Single Page, No Scroll)
          <motion.div
            key="active-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col lg:flex-row w-full h-full overflow-hidden"
          >
            {/* Main Editor */}
            <div className="flex-1 flex flex-col h-full bg-[#faf6f0] relative min-w-0 overflow-hidden">
              {/* Editor Header with Progress Journey */}
              <div className="h-14 sm:h-16 border-b border-[#4a7c59]/10 flex items-center justify-between gap-4 px-4 sm:px-6 bg-[#faf6f0]/80 backdrop-blur-md shrink-0">
                <ProgressJourney wordCount={wordCount} wordTarget={wordTarget} />
              </div>

              {/* Editor Body - Fixed Height, No Scroll */}
              <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col min-h-0 overflow-hidden">
                <textarea
                  id="editor-textarea"
                  value={editorContent}
                  onBeforeInput={handleBeforeInput}
                  onChange={(e) => updateContent(e.target.value)}
                  placeholder="Continue your writing..."
                  className="w-full flex-1 min-h-[220px] sm:min-h-[320px] text-base sm:text-lg lg:text-xl text-[#2e3230] placeholder:text-[#a0a5a0] focus:outline-none resize-none bg-transparent"
                  style={{ fontFamily: "'Literata', serif", lineHeight: "1.8" }}
                  autoFocus
                />
                {isAtWordLimit && (
                  <p className="mt-2 text-xs sm:text-sm font-bold text-[#705c30]">
                    Word limit reached. Delete a few words to continue writing.
                  </p>
                )}
              </div>

              {/* Editor Footer with Reward CTA */}
              <div className="h-16 sm:h-20 border-t border-[#4a7c59]/10 flex items-center justify-center gap-4 px-4 sm:px-6 bg-[#faf6f0]/80 backdrop-blur-md shrink-0">
                <button
                  onClick={handleSubmit}
                  disabled={!editorContent.trim() || loading || wordCount < 50}
                  className="flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#4a7c59] to-[#3d6649] hover:from-[#3d6649] hover:to-[#2f5038] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-bold text-sm sm:text-base transition-all group shadow-lg hover:shadow-xl active:scale-95"
                >
                  {loading ? (
                    <>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Get AI Feedback</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              {/* Overlay Results / Error */}
              {(result || error || analysisStatus === "analyzing") && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-hidden pointer-events-none">
                  <div className="max-w-full sm:max-w-2xl w-full max-h-[90%] overflow-y-auto bg-white rounded-2xl border border-[#4a7c59]/20 p-6 sm:p-8 relative shadow-2xl pointer-events-auto">
                    {/* <button
                      onClick={() => {
                        setError(null);
                        setResult(null);
                        setAnalysisStatus("idle");
                      }}
                      className="absolute top-4 right-4 p-2 hover:bg-[#4a7c59]/10 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-[#2e3230]/60" />
                    </button> */}

                    {analysisStatus === "analyzing" ? (
                      <div className="py-8 text-center space-y-4">
                        <div className="relative w-20 h-20 mx-auto">
                          <div className="absolute inset-0 border-4 border-[#4a7c59]/20 rounded-full" />
                          <div className="absolute inset-0 border-4 border-[#4a7c59] rounded-full border-t-transparent animate-spin" />
                        </div>
                        <div>
                          <h3
                            className="text-xl font-bold text-[#2e3230]"
                            style={{ fontFamily: "'Literata', serif" }}
                          >
                            Deep AI Analysis
                          </h3>
                          <p className="text-[#4a7c59]/80 mt-2 text-sm font-medium italic">
                            &quot;Perfection is attained not when there is nothing more to add, but when there is nothing left to take away.&quot;
                          </p>
                        </div>
                      </div>
                    ) : error ? (
                      <div className="text-center py-6 space-y-4">
                        <div className="w-14 h-14 bg-[#705c30]/10 text-[#705c30] rounded-full flex items-center justify-center mx-auto">
                          <AlertCircle className="w-7 h-7" />
                        </div>
                        <div>
                          <h3
                            className="text-lg font-bold text-[#2e3230]"
                            style={{ fontFamily: "'Literata', serif" }}
                          >
                            Something went wrong
                          </h3>
                          <p className="text-gray-500 mt-2 text-sm">{error}</p>
                        </div>
                        <Button
                          onClick={() => setError(null)}
                          variant="outline"
                          className="rounded-xl px-6 border-[#4a7c59] text-[#4a7c59] bg-white"
                        >
                          Dismiss
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Mission Panel - Compact, No Scroll */}
            {!isEmpty && topicData && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-[340px] xl:w-[380px] bg-[#f4ebd9] border-t lg:border-t-0 lg:border-l border-[#4a7c59]/10 shrink-0 overflow-y-auto scrollbar-thin"
              >
                <MissionPanel
                  topic={topicData.topic}
                  description={topicData.description}
                  genre={topicData.genre}
                  targetLevel={topicData.targetLevel}
                  writingTips={topicData.writingTips}
                  onNewTopic={handleGetTopic}
                  loadingTopic={loadingTopic}
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
