"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  PenTool,
  Sparkles,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Award,
  Flame,
  AlertCircle,
  Timer,
  Type,
  CloudCheck,
  Settings,
  Maximize2,
  Bold,
  Italic,
  List,
  ChevronRight,
  ChevronDown,
  Save,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";
import {
  createSubmission,
  getCurrentTopic,
  getNewTopic,
  getSubmissionStatus,
} from "@/app/api/writing/writing_api";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedAiFeedback } from "@/components/WritingCoach/FormattedAiFeedback";

const formatGenre = (g?: string) => {
  if (!g) return "";
  const mappings: Record<string, string> = {
    GENERAL: "General",
    WORK_EMAIL: "Work Email",
    SHORT_ESSAY: "Short Essay",
    DIARY: "Diary",
    ACADEMIC_PARAGRAPH: "Academic Paragraph",
  };
  return (
    mappings[g] || g.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
};

const SidebarSkeleton = () => (
  <div className="w-full lg:w-[380px] xl:w-[400px] order-1 lg:order-2 bg-[#f4ebd9] flex flex-col min-h-0 lg:h-full border-b lg:border-b-0 lg:border-t-0 lg:border-l border-[#4a7c59]/10 shrink-0 animate-pulse overflow-hidden">
    <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 scrollbar-thin scrollbar-thumb-[#4a7c59]/30">
    {/* Header */}
    <div className="flex justify-between items-center gap-2 shrink-0">
      <div className="w-28 h-6 bg-[#4a7c59]/10 rounded-[12px]" />
      <div className="w-24 h-8 bg-[#faf6f0] rounded-[12px] border border-[#4a7c59]/10 animate-pulse" />
    </div>

    {/* Title & Description */}
    <div className="space-y-3 flex-1 overflow-hidden flex flex-col justify-center">
      <div className="h-7 w-3/4 bg-[#2e3230]/10 rounded-md" />
      <div className="h-7 w-1/2 bg-[#2e3230]/10 rounded-md" />
      <div className="space-y-2 mt-4">
        <div className="h-4 w-full bg-[#2e3230]/10 rounded-md" />
        <div className="h-4 w-5/6 bg-[#2e3230]/10 rounded-md" />
        <div className="h-4 w-2/3 bg-[#2e3230]/10 rounded-md" />
      </div>
    </div>

    {/* Level & Genre Cards */}
    <div className="grid grid-cols-2 gap-4 shrink-0">
      <div className="bg-[#faf6f0] rounded-[12px] p-4 h-16 border border-[#4a7c59]/10" />
      <div className="bg-[#faf6f0] rounded-[12px] p-4 h-16 border border-[#4a7c59]/10" />
    </div>

    {/* Tips */}
    <div className="space-y-3 shrink-0">
      <div className="h-6 w-1/3 bg-[#2e3230]/10 rounded-md" />
      <div className="space-y-3">
        <div className="bg-[#faf6f0] rounded-[12px] h-20 border border-[#4a7c59]/10" />
        <div className="bg-[#faf6f0] rounded-[12px] h-20 border border-[#4a7c59]/10" />
      </div>
    </div>
    </div>
  </div>
);

export default function WritingCoachPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [analysisStatus, setAnalysisStatus] = useState<
    "idle" | "analyzing" | "completed" | "failed" | "timeout"
  >("idle");
  const [wordCount, setWordCount] = useState(0);
  const [currentSubmissionId, setCurrentSubmissionId] = useState<string | null>(
    null,
  );
  const [showToolbar, setShowToolbar] = useState(false);
  const [promptExpanded, setPromptExpanded] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  // Fetch the active unexpired topic, persisted via React Query cache
  const { data: topicData, isLoading: isQueryLoading } = useQuery({
    queryKey: ["writing-topic"],
    queryFn: getCurrentTopic,
    staleTime: Infinity,
  });

  // Mutation to generate a new AI topic, smoothly resetting the cache
  const newTopicMutation = useMutation({
    mutationFn: getNewTopic,
    onSuccess: (newData) => {
      queryClient.setQueryData(["writing-topic"], newData);
    },
  });

  const loadingTopic = newTopicMutation.isPending;

  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    setWordCount(words);
  }, [content]);

  const handleGetTopic = () => {
    newTopicMutation.mutate();
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
      const response = await createSubmission({
        body: content,
        genre: topicData?.genre || "GENERAL",
        title: topicData?.topic || undefined,
        promptId: topicData?.id || undefined,
      });

      const submissionId = response.submissionId;
      setCurrentSubmissionId(submissionId);

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
        } catch (pollError) {
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
      setError("Failed to submit writing. Please try again.");
      setLoading(false);
      setAnalysisStatus("failed");
    }
  };

  const handleFormat = (type: "bold" | "italic" | "list" | "rewrite") => {
    const textarea = document.getElementById(
      "editor-textarea",
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    if (!selectedText && type === "rewrite") return;

    let newText = "";

    if (type === "bold") {
      newText = `**${selectedText}**`;
    } else if (type === "italic") {
      newText = `*${selectedText}*`;
    } else if (type === "list") {
      newText = `\n- ${selectedText}`;
    } else if (type === "rewrite") {
      newText = `[Rewrite: ${selectedText}]`;
    }

    const newContent =
      content.substring(0, start) + newText + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      const offset =
        type === "list" ? 3 : type === "bold" ? 2 : type === "italic" ? 1 : 10;
      textarea.setSelectionRange(start + offset, end + offset);
    }, 0);
  };

  return (
    <div
      className="flex flex-col lg:flex-row min-h-[calc(100dvh-7.5rem)] max-h-none lg:max-h-[calc(100dvh-7.5rem)] lg:h-[calc(100dvh-7.5rem)] bg-[#faf6f0] lg:overflow-hidden text-[#2e3230] rounded-xl sm:rounded-2xl -mx-1 sm:mx-0"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      {/* Main Content - Editor */}
      <div className="flex-1 flex flex-col min-h-[min(420px,55dvh)] lg:min-h-0 lg:h-full bg-[#faf6f0] relative order-2 lg:order-1 min-w-0">
        {/* Editor Header */}
        <div className="h-11 sm:h-16 border-b border-[#4a7c59]/10 flex items-center justify-between gap-2 px-3 sm:px-8 bg-[#faf6f0]/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-8 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 font-medium">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4a7c59]" />
              <span className="text-xs sm:text-sm tabular-nums text-[#4a7c59]">25:00</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 font-medium border-l border-[#4a7c59]/20 pl-2 sm:pl-8 min-w-0">
              <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#705c30] shrink-0" />
              <span className="text-[10px] sm:text-sm uppercase tracking-wider font-bold text-[#705c30] truncate">
                <span className="sm:hidden">{wordCount}/{topicData?.wordTarget || 150}</span>
                <span className="hidden sm:inline">{wordCount} / {topicData?.wordTarget || 150} Words</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6 shrink-0">
            <div className="hidden md:flex items-center gap-2 text-[#4a7c59] font-bold text-[10px] uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4a7c59] animate-pulse" />
              Autosaved
            </div>

            <div className="flex items-center text-[#705c30]/60 md:border-l md:border-[#4a7c59]/20 md:pl-4 relative">
              <Settings
                className={`w-5 h-5 cursor-pointer transition-colors ${showToolbar ? "text-[#4a7c59] rotate-45" : "hover:text-[#4a7c59]"}`}
                onClick={() => setShowToolbar(!showToolbar)}
              />

              {/* Formatting Toolbar Tooltip */}
              {showToolbar && (
                <div className="absolute top-full right-0 mt-3 flex items-center gap-1 bg-[#faf6f0]/95 backdrop-blur-md border border-[#4a7c59]/10 rounded-[12px] p-1.5 animate-in fade-in zoom-in-95 duration-200 z-50 origin-top-right shadow-xl">
                  <button
                    onClick={() => handleFormat("bold")}
                    className="p-2 hover:bg-[#4a7c59]/10 rounded-[8px] transition-colors text-[#2e3230]/70 hover:text-[#4a7c59]"
                    title="Bold"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleFormat("italic")}
                    className="p-2 hover:bg-[#4a7c59]/10 rounded-[8px] transition-colors text-[#2e3230]/70 hover:text-[#4a7c59]"
                    title="Italic"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleFormat("list")}
                    className="p-2 hover:bg-[#4a7c59]/10 rounded-[8px] transition-colors text-[#2e3230]/70 hover:text-[#4a7c59]"
                    title="List"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <div className="w-px h-5 bg-[#4a7c59]/20 mx-1" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Editor Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-8 lg:p-12 scrollbar-hide flex flex-col min-h-0">
          <textarea
            id="editor-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Begin your intellectual journey here..."
            className="w-full min-h-[180px] sm:min-h-[400px] lg:min-h-[500px] flex-1 text-base sm:text-xl lg:text-2xl text-[#2e3230] placeholder:text-[#a0a5a0] focus:outline-none resize-none bg-transparent"
            style={{ fontFamily: "'Literata', serif", lineHeight: "1.8" }}
          />
        </div>

        {/* Editor Footer */}
        <div className="h-14 sm:h-24 border-t border-[#4a7c59]/10 flex items-center justify-between gap-2 px-3 sm:px-8 lg:px-12 bg-[#faf6f0]/80 backdrop-blur-md shrink-0">
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-6 py-2 sm:py-3 border border-[#4a7c59]/20 rounded-[12px] text-[#4a7c59] font-bold text-xs sm:text-sm hover:bg-[#4a7c59]/5 transition-all bg-[#faf6f0] min-h-[44px] min-w-[44px] sm:min-w-0"
            aria-label="Save draft"
          >
            <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Save Draft</span>
          </button>

          <button
            onClick={handleSubmit}
            disabled={!content.trim() || loading}
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 min-h-[44px] bg-[#4a7c59] hover:bg-[#3d6649] disabled:opacity-50 disabled:cursor-not-allowed rounded-[12px] text-white font-bold text-sm sm:text-[15px] transition-all group touch-manipulation"
            style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
          >
            {loading ? (
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            ) : (
              <>
                <span className="hidden sm:inline">Submit session</span>
                <span className="sm:hidden">Submit</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Overlay Results / Error */}
        {(result || error || analysisStatus === "analyzing") && (
          <div className="absolute inset-0 bg-[#faf6f0]/80 backdrop-blur-md z-20 flex items-end sm:items-center justify-center p-3 sm:p-8 lg:p-12 overflow-y-auto">
            <div
              className="max-w-3xl w-full max-h-[92dvh] overflow-y-auto bg-[#faf6f0] rounded-t-2xl sm:rounded-[12px] border border-[#4a7c59]/10 p-5 sm:p-8 lg:p-10 relative"
              style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
            >
              <button
                onClick={() => {
                  setResult(null);
                  setError(null);
                  setAnalysisStatus("idle");
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#4a7c59]/5 flex items-center justify-center text-[#705c30]/70 hover:text-[#4a7c59] transition-colors touch-manipulation"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5 sm:hidden" />
                <Maximize2 className="w-5 h-5 hidden sm:block" />
              </button>

              {analysisStatus === "analyzing" ? (
                <div className="py-8 sm:py-12 text-center space-y-4 sm:space-y-6">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 border-4 border-[#4a7c59]/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-[#4a7c59] rounded-full border-t-transparent animate-spin" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#2e3230]"
                      style={{ fontFamily: "'Literata', serif" }}
                    >
                      Deep AI Analysis
                    </h3>
                    <p className="text-[#4a7c59]/80 mt-2 font-medium italic">
                      "Perfection is attained not when there is nothing more to
                      add, but when there is nothing left to take away."
                    </p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-[#705c30]/10 text-[#705c30] rounded-full flex items-center justify-center mx-auto">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[#2e3230]"
                      style={{ fontFamily: "'Literata', serif" }}
                    >
                      Something went wrong
                    </h3>
                    <p className="text-gray-500 mt-2">{error}</p>
                  </div>
                  <Button
                    onClick={() => setError(null)}
                    variant="outline"
                    className="rounded-[12px] px-8 border-[#4a7c59] text-[#4a7c59] bg-[#faf6f0]"
                  >
                    Dismiss
                  </Button>
                </div>
              ) : (
                result && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Result Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h2
                          className="text-xl sm:text-3xl font-bold text-[#2e3230]"
                          style={{ fontFamily: "'Literata', serif" }}
                        >
                          Analysis Complete
                        </h2>
                        <p className="text-[#2e3230]/70 font-medium">
                          Session feedback and performance summary
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-xs font-black text-[#705c30] uppercase tracking-widest">
                            Writing Score
                          </p>
                          <p className="text-4xl font-black text-[#4a7c59]">
                            {result.analysis?.score || 75}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Feedback Card */}
                      <div className="bg-[#4a7c59]/5 rounded-[12px] p-6 border border-[#4a7c59]/10">
                        <h4 className="flex items-center gap-2 font-bold text-[#4a7c59] mb-4">
                          <Sparkles className="w-5 h-5 text-[#705c30]" />
                          AI Feedback
                        </h4>
                        <FormattedAiFeedback content={result.analysis?.feedback} />
                      </div>

                      {/* Stats Card */}
                      <div
                        className="bg-[#faf6f0] rounded-[12px] p-6 border border-[#4a7c59]/10"
                        style={{
                          boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)",
                        }}
                      >
                        <h4 className="flex items-center gap-2 font-bold text-[#2e3230] mb-4">
                          <TrendingUp className="w-5 h-5 text-[#4a7c59]" />
                          Quick Stats
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/50 rounded-[12px] p-4">
                            <p className="text-2xl font-black text-[#2e3230]">
                              {result.analysis?.summary?.mistakeCount}
                            </p>
                            <p className="text-[10px] font-bold text-[#705c30] uppercase tracking-widest">
                              Mistakes
                            </p>
                          </div>
                          <div className="bg-white/50 rounded-[12px] p-4">
                            <p className="text-2xl font-black text-[#2e3230]">
                              {result.analysis?.summary?.errorDensityPer100Words?.toFixed(
                                1,
                              )}
                            </p>
                            <p className="text-[10px] font-bold text-[#705c30] uppercase tracking-widest">
                              Density
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mistakes List */}
                    {result.analysis?.mistakes &&
                      result.analysis.mistakes.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#2e3230] flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-[#705c30]" />
                            Identified Opportunities
                          </h4>
                          <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                            {result.analysis.mistakes.map(
                              (mistake: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="bg-white/50 border border-[#4a7c59]/10 rounded-[12px] p-5 hover:border-[#4a7c59]/30 transition-colors group"
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-black bg-[#4a7c59]/10 text-[#4a7c59] px-2 py-0.5 rounded-md uppercase tracking-widest border border-[#4a7c59]/20">
                                      {mistake.pillar?.replace(/_/g, " ")}
                                    </span>
                                    <span
                                      className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest ${
                                        mistake.severity === "HIGH"
                                          ? "bg-[#705c30]/10 text-[#705c30] border border-[#705c30]/20"
                                          : mistake.severity === "MEDIUM"
                                            ? "bg-amber-100/50 text-amber-700 border border-amber-200"
                                            : "bg-[#4a7c59]/10 text-[#4a7c59] border border-[#4a7c59]/20"
                                      }`}
                                    >
                                      {mistake.severity}
                                    </span>
                                  </div>
                                  <p className="text-sm text-[#2e3230] font-medium mb-1">
                                    <span className="text-[#705c30] line-through mr-2 opacity-70">
                                      {mistake.surfaceText}
                                    </span>
                                    <span className="text-[#4a7c59] font-bold">
                                      → {mistake.suggestion}
                                    </span>
                                  </p>
                                  <p className="text-xs text-[#2e3230]/70 italic leading-relaxed transition-colors">
                                    {mistake.message}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          if (currentSubmissionId) {
                            router.push(
                              `/Dashboard/WritingCoach/Report?submissionId=${currentSubmissionId}`,
                            );
                          }
                        }}
                        className="w-full py-6 rounded-[12px] bg-[#4a7c59] hover:bg-[#3d6649] text-white font-bold text-lg transition-all"
                        style={{
                          boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)",
                        }}
                      >
                        View Detailed Report
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar - Writing Context */}
      <AnimatePresence mode="wait">
        {isQueryLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SidebarSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key={topicData?.id || "topic"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full lg:w-[380px] xl:w-[400px] order-1 lg:order-2 bg-[#f4ebd9] flex flex-col min-h-0 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-t-0 lg:border-l border-[#4a7c59]/10 shrink-0"
          >
            <button
              type="button"
              onClick={() => setPromptExpanded((v) => !v)}
              className="lg:hidden w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left border-b border-[#4a7c59]/10 active:bg-[#ebe2d0] transition-colors"
              aria-expanded={promptExpanded}
            >
              <span className="flex items-center gap-2 min-w-0 flex-1">
                <BookOpen className="w-4 h-4 text-[#4a7c59] shrink-0" />
                <span className="text-sm font-bold text-[#2e3230] truncate" style={{ fontFamily: "'Literata', serif" }}>
                  {topicData?.topic || "Writing prompt"}
                </span>
              </span>
              <ChevronDown className={`w-5 h-5 text-[#4a7c59] shrink-0 transition-transform duration-200 ${promptExpanded ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:flex-1 lg:min-h-0 ${
                promptExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              } lg:grid-rows-[1fr]`}
            >
            <div className="min-h-0 overflow-hidden lg:flex lg:flex-col lg:flex-1 lg:min-h-0">
            <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 max-h-[min(65dvh,32rem)] lg:max-h-none lg:flex-1 lg:min-h-0 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-[#4a7c59]/30">
            {/* Title & Description — shown first when expanded on mobile */}
            <div className="space-y-2 sm:space-y-3 shrink-0 pb-1 border-b border-[#4a7c59]/10 lg:border-b-0 lg:pb-0">
              <h1
                className="text-base sm:text-2xl font-bold text-[#2e3230] leading-snug sm:leading-tight tracking-tight"
                style={{ fontFamily: "'Literata', serif" }}
              >
                {topicData?.topic}
              </h1>
              <p className="text-[#2e3230]/80 text-sm sm:text-[14px] leading-relaxed font-medium">
                {topicData?.description || "In this session, explore the intersection of language, logic, and style."}
              </p>
            </div>

            {/* Genre & Action Header */}
            <div className="flex items-center justify-between gap-2 shrink-0 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-[#4a7c59]/10 text-[#4a7c59] text-[10px] font-bold uppercase tracking-wider border border-[#4a7c59]/20">
                <BookOpen className="w-3 h-3" />
                {formatGenre(topicData?.genre) || "Creative Writing"}
              </span>

              <button
                type="button"
                onClick={handleGetTopic}
                disabled={loadingTopic}
                className="px-3 sm:px-4 py-2 rounded-[12px] bg-[#faf6f0] border border-[#4a7c59]/20 text-[#4a7c59] text-xs font-bold flex items-center gap-1.5 sm:gap-2 hover:bg-[#4a7c59]/5 transition-all duration-300 shadow-terra min-h-[40px] touch-manipulation"
              >
                {loadingTopic ? (
                  <Sparkles className="w-3.5 h-3.5 animate-spin text-[#705c30]" />
                ) : (
                  <Lightbulb className="w-3.5 h-3.5 text-[#705c30]" />
                )}
                New Prompt
              </button>
            </div>


            {/* Level & Genre Cards */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              <div
                className="bg-[#faf6f0] rounded-[12px] p-3 border border-[#4a7c59]/10"
                style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
              >
                <p className="text-[9px] font-bold text-[#705c30] uppercase tracking-widest mb-0.5">
                  Target Level
                </p>
                <p className="text-[#4a7c59] font-bold text-[13px]">
                  {topicData?.targetLevel || "B2 Upper Intermediate"}
                </p>
              </div>
              <div
                className="bg-[#faf6f0] rounded-[12px] p-3 border border-[#4a7c59]/10"
                style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
              >
                <p className="text-[9px] font-bold text-[#705c30] uppercase tracking-widest mb-0.5">
                  Genre
                </p>
                <p className="text-[#4a7c59] font-bold text-[13px]">
                  {formatGenre(topicData?.genre)}
                </p>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="space-y-3 shrink-0">
              <h3
                className="text-lg font-bold text-[#2e3230]"
                style={{ fontFamily: "'Literata', serif" }}
              >
                Writing Tips
              </h3>
              <div className="space-y-3">
                {topicData?.writingTips && Array.isArray(topicData.writingTips) ? (
                  topicData.writingTips.map((tip: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-[#faf6f0] rounded-[12px] p-4 border-l-4 border-[#4a7c59] border-y border-r border-[#4a7c59]/10"
                      style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
                    >
                      <h4 className="font-bold text-[#2e3230] text-sm mb-1">
                        {tip.title}
                      </h4>
                      <p className="text-[#2e3230]/70 text-xs leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <div
                    className="bg-[#faf6f0] rounded-[12px] p-4 border-l-4 border-[#4a7c59] border-y border-r border-[#4a7c59]/10"
                    style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
                  >
                    <h4 className="font-bold text-[#2e3230] text-sm mb-1">
                      Active Voice Priority
                    </h4>
                    <p className="text-[#2e3230]/70 text-xs leading-relaxed">
                      Avoid passive structures to make your technical arguments more direct and impactful.
                    </p>
                  </div>
                )}
              </div>
            </div>
            </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
