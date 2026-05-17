"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Type,
  Save,
  ChevronRight,
  Sparkles,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  FileText,
  PenTool,
  BarChart3,
  Calendar,
} from "lucide-react";
import {
  getSubmissionStatus,
  submitRewrite,
  getSubmissions,
} from "@/app/api/writing/writing_api";
import { Button } from "@/components/ui/button";

function formatGenre(g?: string) {
  if (!g) return "Practice";
  return g.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function RewritePicker({
  submissions,
  loading,
}: {
  submissions: any[];
  loading: boolean;
}) {
  const router = useRouter();
  const rewritable = submissions.filter((s) => s.status === "COMPLETED");

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#4a7c59]/20 border-t-[#4a7c59] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10 px-1">
      <div
        className="text-center mb-8 sm:mb-10 rounded-[12px] border border-[#4a7c59]/10 bg-[#f4ebd9] p-6 sm:p-8 relative overflow-hidden"
        style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4a7c59]/10 rounded-full blur-2xl" />
        <div className="relative">
          <div className="w-14 h-14 rounded-[12px] bg-[#4a7c59]/15 flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="w-7 h-7 text-[#4a7c59]" />
          </div>
          <h1
            className="text-2xl sm:text-3xl font-bold text-[#2e3230] mb-2"
            style={{ fontFamily: "'Literata', serif" }}
          >
            Rewrite & improve
          </h1>
          <p className="text-sm sm:text-base text-[#2e3230]/70 max-w-md mx-auto leading-relaxed">
            Choose a completed writing session below. You&apos;ll edit your draft,
            resubmit on the same session, and get an updated score and feedback.
          </p>
        </div>
      </div>

      {rewritable.length > 0 ? (
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#705c30] px-1">
            Your recent sessions
          </p>
          {rewritable.map((sub) => {
            const mistakeCount = sub._count?.mistakes;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() =>
                  router.push(
                    `/Dashboard/WritingCoach/Rewrite?submissionId=${sub.id}`,
                  )
                }
                className="w-full text-left p-4 sm:p-5 rounded-[12px] border border-[#4a7c59]/10 bg-[#faf6f0] hover:border-[#4a7c59]/30 hover:bg-[#f4ebd9]/40 transition-all group"
                style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.04)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a7c59] bg-[#4a7c59]/10 px-2 py-0.5 rounded-lg">
                        {formatGenre(sub.genre)}
                      </span>
                      {mistakeCount != null && (
                        <span className="text-[10px] font-bold text-[#705c30]">
                          {mistakeCount} tip{mistakeCount === 1 ? "" : "s"}
                        </span>
                      )}
                    </div>
                    <h3
                      className="font-bold text-[#2e3230] line-clamp-2 text-sm sm:text-base mb-1"
                      style={{ fontFamily: "'Literata', serif" }}
                    >
                      {sub.title || "Practice session"}
                    </h3>
                    <p className="text-xs text-[#2e3230]/50 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(sub.createdAt).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>{sub.wordCount ?? "—"} words</span>
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#4a7c59] shrink-0 mt-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div
          className="text-center rounded-[12px] border border-dashed border-[#4a7c59]/25 bg-[#faf6f0] p-8 sm:p-12"
          style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.04)" }}
        >
          <FileText className="w-14 h-14 text-[#4a7c59]/25 mx-auto mb-4" />
          <h2
            className="text-xl font-bold text-[#2e3230] mb-2"
            style={{ fontFamily: "'Literata', serif" }}
          >
            No sessions to rewrite yet
          </h2>
          <p className="text-sm text-[#2e3230]/60 max-w-sm mx-auto mb-6 leading-relaxed">
            Complete a writing practice session first. Once you receive feedback,
            you can return here to revise and improve your work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/Dashboard/WritingCoach/practice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#4a7c59] text-white font-bold text-sm hover:bg-[#3d6649] transition-colors"
            >
              <PenTool className="w-4 h-4" />
              Start practice
            </Link>
            <Link
              href="/Dashboard/WritingCoach/Report"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] border border-[#4a7c59]/20 text-[#4a7c59] font-bold text-sm hover:bg-[#4a7c59]/5 transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              View reports
            </Link>
          </div>
        </div>
      )}

      {rewritable.length > 0 && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/Dashboard/WritingCoach/practice"
            className="text-sm font-bold text-[#4a7c59] hover:underline inline-flex items-center gap-1"
          >
            <PenTool className="w-4 h-4" />
            New practice session
          </Link>
          <span className="text-[#2e3230]/20 hidden sm:inline">·</span>
          <Link
            href="/Dashboard/WritingCoach/Report"
            className="text-sm font-bold text-[#4a7c59] hover:underline inline-flex items-center gap-1"
          >
            <BarChart3 className="w-4 h-4" />
            All reports
          </Link>
        </div>
      )}
    </div>
  );
}

function RewriteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const submissionId = searchParams.get("submissionId");
  const hasSubmissionId =
    Boolean(submissionId) && submissionId !== "undefined";

  const [content, setContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [topic, setTopic] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(hasSubmissionId);
  const [pickerLoading, setPickerLoading] = useState(!hasSubmissionId);
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (!hasSubmissionId) {
      loadRecentSubmissions();
      return;
    }
    loadOriginalSubmission();
  }, [submissionId, hasSubmissionId]);

  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    setWordCount(words);
  }, [content]);

  const loadRecentSubmissions = async () => {
    try {
      setPickerLoading(true);
      const data = await getSubmissions(15, 0);
      setRecentSubmissions(data.submissions || []);
    } catch (err) {
      console.error(err);
      setRecentSubmissions([]);
    } finally {
      setPickerLoading(false);
    }
  };

  const loadOriginalSubmission = async () => {
    try {
      setLoading(true);
      setLoadError(null);
      const data = await getSubmissionStatus(submissionId!);

      if (data.status !== "COMPLETED" && data.status !== "FAILED") {
        setLoadError(
          "This session is still being analyzed. Check back in a moment or pick another session.",
        );
        return;
      }

      setOriginalContent(data.body || "");
      setContent(data.body || "");
      setTopic(data.title || "Rewrite session");
      setGenre(data.genre || "GENERAL");
    } catch (err) {
      console.error(err);
      setLoadError("We couldn't load this session. It may have been removed.");
    } finally {
      setLoading(false);
    }
  };

  const handleRewriteSubmit = async () => {
    if (!content.trim() || !hasSubmissionId) return;

    setSubmitting(true);
    setLoadError(null);
    try {
      await submitRewrite(submissionId!, {
        body: content,
        genre,
      });

      router.push(
        `/Dashboard/WritingCoach/Report?submissionId=${submissionId}&refresh=${Date.now()}`,
      );
    } catch (err) {
      console.error(err);
      setLoadError("Failed to submit rewrite. Please try again.");
      setSubmitting(false);
    }
  };

  if (!hasSubmissionId) {
    return (
      <RewritePicker submissions={recentSubmissions} loading={pickerLoading} />
    );
  }

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-4.5rem)] items-center justify-center bg-[#faf6f0]">
        <div className="w-16 h-16 border-4 border-[#4a7c59]/20 border-t-[#4a7c59] rounded-full animate-spin" />
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4">
        <div
          className="max-w-md w-full text-center rounded-[12px] border border-[#8a5a44]/20 bg-[#faf6f0] p-8"
          style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
        >
          <AlertCircle className="w-12 h-12 text-[#8a5a44] mx-auto mb-4" />
          <h2
            className="text-xl font-bold text-[#2e3230] mb-2"
            style={{ fontFamily: "'Literata', serif" }}
          >
            Can&apos;t open this rewrite
          </h2>
          <p className="text-sm text-[#2e3230]/70 mb-6 leading-relaxed">
            {loadError}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() =>
                router.push("/Dashboard/WritingCoach/Rewrite")
              }
              className="rounded-[12px] bg-[#4a7c59] hover:bg-[#3d6649] text-white"
            >
              Choose another session
            </Button>
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="rounded-[12px] border-[#4a7c59]/20 text-[#4a7c59]"
            >
              Go back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-[calc(100vh-4.5rem)] bg-[#faf6f0] overflow-hidden flex-col text-[#2e3230] -mx-4 md:mx-0 rounded-xl"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      <div className="h-14 sm:h-16 border-b border-[#4a7c59]/10 flex items-center justify-between px-3 sm:px-8 bg-[#faf6f0]/80 backdrop-blur-md shrink-0 z-10">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <button
            type="button"
            onClick={() => router.push("/Dashboard/WritingCoach/Rewrite")}
            className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/70 transition-colors"
            aria-label="Back to session list"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="min-w-0">
            <h1
              className="text-sm sm:text-lg font-bold text-[#2e3230] truncate"
              style={{ fontFamily: "'Literata', serif" }}
            >
              Rewrite session
            </h1>
            <p className="text-xs font-bold text-[#4a7c59] opacity-80 truncate">
              {topic}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-8 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium sm:border-l border-[#4a7c59]/20 sm:pl-8">
            <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#705c30]" />
            <span className="text-[10px] sm:text-sm uppercase tracking-wider font-bold text-[#705c30]">
              {wordCount} words
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-[#4a7c59]/10 bg-[#f4ebd9] flex flex-col max-h-40 lg:max-h-none">
          <div className="p-3 sm:p-6 border-b border-[#4a7c59]/10 shrink-0">
            <h2 className="text-xs font-bold text-[#2e3230] uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#705c30]" />
              Original text
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 scrollbar-hide">
            <p className="text-[#2e3230]/80 text-[13px] sm:text-[15px] leading-relaxed whitespace-pre-wrap">
              {originalContent}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-[#faf6f0] relative min-h-0">
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 scrollbar-hide">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Refine your draft using the feedback from your report…"
              className="w-full min-h-full text-base sm:text-2xl text-[#2e3230] placeholder:text-[#a0a5a0] focus:outline-none resize-none bg-transparent"
              style={{ fontFamily: "'Literata', serif", lineHeight: "1.8" }}
            />
          </div>

          <div className="h-16 sm:h-24 border-t border-[#4a7c59]/10 flex items-center justify-between px-4 sm:px-12 bg-[#faf6f0] shrink-0">
            <button
              type="button"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 border border-[#4a7c59]/20 rounded-[12px] text-[#4a7c59] font-bold text-xs sm:text-sm hover:bg-[#4a7c59]/5 transition-all bg-[#faf6f0]"
            >
              <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Save draft
            </button>

            <button
              type="button"
              onClick={handleRewriteSubmit}
              disabled={
                !content.trim() || content === originalContent || submitting
              }
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-[#4a7c59] hover:bg-[#3d6649] disabled:opacity-50 disabled:cursor-not-allowed rounded-[12px] text-white font-bold text-sm sm:text-[15px] transition-all group"
              style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
            >
              {submitting ? (
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <>
                  Submit rewrite
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RewritePage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[calc(100vh-4.5rem)] items-center justify-center bg-[#faf6f0]">
          <div className="w-16 h-16 border-4 border-[#4a7c59]/20 border-t-[#4a7c59] rounded-full animate-spin" />
        </div>
      }
    >
      <RewriteContent />
    </Suspense>
  );
}
