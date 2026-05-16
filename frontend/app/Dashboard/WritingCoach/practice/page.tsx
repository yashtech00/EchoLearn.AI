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
  Save,
  CheckCircle2,
  Clock,
} from "lucide-react";
import {
  createSubmission,
  getTopic,
  getSubmissionStatus,
} from "@/app/api/writing/writing_api";
import { Button } from "@/components/ui/button";

export default function WritingCoachPage() {
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState(
    "The Ethical Implications of Post-Quantum Cryptography",
  );
  const [description, setDescription] = useState(
    "In this session, explore the intersection of advanced mathematics and global privacy. Focus on maintaining a professional yet accessible tone.",
  );
  const [genre, setGenre] = useState("Critical Analysis");
  const [targetLevel, setTargetLevel] = useState("C2 Proficiency");
  const [wordTarget, setWordTarget] = useState(150);
  const [loading, setLoading] = useState(false);
  const [loadingTopic, setLoadingTopic] = useState(false);
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
  const router = useRouter();

  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    setWordCount(words);
  }, [content]);

  const handleGetTopic = async () => {
    setLoadingTopic(true);
    try {
      const response = await getTopic();
      setTopic(response.topic);
      setGenre(response.genre || "GENERAL");
      if (response.wordTarget) setWordTarget(response.wordTarget);

      // Personalized description based on genre
      const descMap: Record<string, string> = {
        GENERAL:
          "Write a balanced response to this prompt. Focus on variety in sentence structure.",
        WORK_EMAIL:
          "Maintain a professional, concise, and respectful tone appropriate for a workplace setting.",
        SHORT_ESSAY:
          "Develop a structured argument with a clear introduction, body, and conclusion.",
        DIARY:
          "Express your personal thoughts and feelings in a casual yet reflective narrative style.",
        ACADEMIC_PARAGRAPH:
          "Focus on academic precision, formal register, and cohesive logical flow.",
      };
      setDescription(
        descMap[response.genre] ||
          "Explore the nuances of this topic. Focus on clarity and precise vocabulary.",
      );
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
      const response = await createSubmission({
        body: content,
        genre,
        title: topic || undefined,
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
      className="flex h-[calc(100vh-6.5rem)] bg-[#faf6f0] overflow-hidden text-[#2e3230] rounded-2xl"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      {/* Main Content - Editor */}
      <div className="flex-1 flex flex-col h-full bg-[#faf6f0] relative">
        {/* Editor Header */}
        <div className="h-16 border-b border-[#4a7c59]/10 flex items-center justify-between px-8 bg-[#faf6f0]/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 font-medium">
              <Timer className="w-4 h-4 text-[#4a7c59]" />
              <span className="text-sm tabular-nums text-[#4a7c59]">25:00</span>
            </div>
            <div className="flex items-center gap-2 font-medium border-l border-[#4a7c59]/20 pl-8">
              <Type className="w-4 h-4 text-[#705c30]" />
              <span className="text-sm uppercase tracking-wider text-[10px] font-bold text-[#705c30]">
                {wordCount} / {wordTarget} Words
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#4a7c59] font-bold text-[10px] uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4a7c59] animate-pulse" />
              Autosaved
            </div>

            <div className="flex items-center gap-4 text-[#705c30]/60 border-l border-[#4a7c59]/20 pl-4 relative">
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
        <div className="flex-1 overflow-y-auto p-12 scrollbar-hide flex flex-col">
          <textarea
            id="editor-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Begin your intellectual journey here..."
            className="w-full min-h-[500px] flex-1 text-2xl text-[#2e3230] placeholder:text-[#a0a5a0] focus:outline-none resize-none bg-transparent"
            style={{ fontFamily: "'Literata', serif", lineHeight: "1.8" }}
          />
        </div>

        {/* Editor Footer */}
        <div className="h-24 border-t border-[#4a7c59]/10 flex items-center justify-between px-12 bg-[#faf6f0]/80 backdrop-blur-md shrink-0">
          <button className="flex items-center gap-2 px-6 py-3 border border-[#4a7c59]/20 rounded-[12px] text-[#4a7c59] font-bold text-sm hover:bg-[#4a7c59]/5 transition-all bg-[#faf6f0]">
            <Save className="w-4 h-4" />
            Save Draft
          </button>

          <button
            onClick={handleSubmit}
            disabled={!content.trim() || loading}
            className="flex items-center gap-3 px-8 py-4 bg-[#4a7c59] hover:bg-[#3d6649] disabled:opacity-50 disabled:cursor-not-allowed rounded-[12px] text-white font-bold text-[15px] transition-all group"
            style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
          >
            {loading ? (
              <Sparkles className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Submit session
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Overlay Results / Error */}
        {(result || error || analysisStatus === "analyzing") && (
          <div className="absolute inset-0 bg-[#faf6f0]/80 backdrop-blur-md z-20 flex items-center justify-center p-12 overflow-y-auto">
            <div
              className="max-w-3xl w-full bg-[#faf6f0] rounded-[12px] border border-[#4a7c59]/10 p-10 relative"
              style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
            >
              <button
                onClick={() => {
                  setResult(null);
                  setError(null);
                  setAnalysisStatus("idle");
                }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#4a7c59]/5 flex items-center justify-center text-[#705c30]/70 hover:text-[#4a7c59] transition-colors"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {analysisStatus === "analyzing" ? (
                <div className="py-12 text-center space-y-6">
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
                    <div className="flex items-center justify-between">
                      <div>
                        <h2
                          className="text-3xl font-bold text-[#2e3230]"
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
                        <p className="text-[#2e3230]/80 leading-relaxed font-medium">
                          {result.analysis?.feedback}
                        </p>
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
      <div className="w-[400px] bg-[#f4ebd9] h-full overflow-y-auto border-l border-[#4a7c59]/10 p-8 flex flex-col gap-8 scrollbar-hide shrink-0">
        {/* Genre Badge */}
        <div className="flex justify-between items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] bg-[#4a7c59]/10 text-[#4a7c59] text-[10px] font-bold uppercase tracking-wider border border-[#4a7c59]/20">
            <BookOpen className="w-3 h-3" />
            Creative Writing
          </span>

          <button
            onClick={handleGetTopic}
            disabled={loadingTopic}
            className="w-full py-4 rounded-[12px] bg-[#faf6f0] border border-[#4a7c59]/20 text-[#4a7c59] text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#4a7c59]/5 transition-all duration-300 mt-4"
          >
            {loadingTopic ? (
              <Sparkles className="w-4 h-4 animate-spin text-[#705c30]" />
            ) : (
              <Lightbulb className="w-4 h-4 text-[#705c30]" />
            )}
            New Writing Prompt
          </button>
        </div>

        {/* Title & Description */}
        <div className="space-y-4">
          <h1
            className="text-3xl font-bold text-[#2e3230] leading-tight tracking-tight"
            style={{ fontFamily: "'Literata', serif" }}
          >
            {topic}
          </h1>
          <p className="text-[#2e3230]/80 text-[15px] leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Level & Genre Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-[#faf6f0] rounded-[12px] p-4 border border-[#4a7c59]/10"
            style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
          >
            <p className="text-[10px] font-bold text-[#705c30] uppercase tracking-widest mb-1">
              Target Level
            </p>
            <p className="text-[#4a7c59] font-bold text-[14px]">
              {targetLevel}
            </p>
          </div>
          <div
            className="bg-[#faf6f0] rounded-[12px] p-4 border border-[#4a7c59]/10"
            style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
          >
            <p className="text-[10px] font-bold text-[#705c30] uppercase tracking-widest mb-1">
              Genre
            </p>
            <p className="text-[#4a7c59] font-bold text-[14px]">{genre}</p>
          </div>
        </div>

        {/* Writing Tips */}
        <div className="space-y-4">
          <h3
            className="text-xl font-bold text-[#2e3230]"
            style={{ fontFamily: "'Literata', serif" }}
          >
            Writing Tips
          </h3>
          <div className="space-y-3">
            <div
              className="bg-[#faf6f0] rounded-[12px] p-5 border-l-4 border-[#4a7c59] border-y border-r border-[#4a7c59]/10"
              style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
            >
              <h4 className="font-bold text-[#2e3230] text-sm mb-1">
                Use Tentative Language
              </h4>
              <p className="text-[#2e3230]/70 text-xs leading-relaxed">
                When discussing future tech, use "it could be argued" or
                "potential ramifications" to maintain objectivity.
              </p>
            </div>
            <div
              className="bg-[#faf6f0] rounded-[12px] p-5 border-l-4 border-[#4a7c59] border-y border-r border-[#4a7c59]/10"
              style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
            >
              <h4 className="font-bold text-[#2e3230] text-sm mb-1">
                Active Voice Priority
              </h4>
              <p className="text-[#2e3230]/70 text-xs leading-relaxed">
                Avoid passive structures to make your technical arguments more
                direct and impactful.
              </p>
            </div>
          </div>
        </div>

        {/* Active Focus Areas */}
        <div className="space-y-4 pb-8">
          {/* <h3
            className="text-xl font-bold text-[#2e3230]"
            style={{ fontFamily: "'Literata', serif" }}
          >
            Active Focus Areas
          </h3>
          <div
            className="bg-[#faf6f0] rounded-[12px] p-5 border border-[#4a7c59]/20 relative overflow-hidden group hover:border-[#4a7c59]/40 transition-all duration-300"
            style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-[#2e3230] text-sm">
                  Collocation Precision
                </h4>
                <p className="text-[#2e3230]/70 text-xs leading-relaxed mt-1">
                  Your previous sessions showed confusion here.
                </p>
              </div>
              <span className="text-[9px] font-black text-[#705c30] uppercase tracking-widest opacity-80">
                Remedying
              </span>
            </div>
            <div className="h-1.5 w-full bg-[#4a7c59]/10 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-[#4a7c59] rounded-full" />
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}
