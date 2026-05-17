"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Type, Timer, Save, ChevronRight, Sparkles, AlertCircle, Maximize2, Settings, ArrowLeft
} from "lucide-react";
import { getSubmissionStatus, createSubmission } from "@/app/api/writing/writing_api";
import axiosInstance from "@/app/api/axiosInstances";
import { Button } from "@/components/ui/button";

function RewriteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const submissionId = searchParams.get("submissionId");

  const [content, setContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [topic, setTopic] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (submissionId && submissionId !== "undefined") {
      loadOriginalSubmission();
    } else {
      setLoading(false);
      setError("No valid submission ID provided");
    }
  }, [submissionId]);

  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    setWordCount(words);
  }, [content]);

  const loadOriginalSubmission = async () => {
    try {
      setLoading(true);
      const data = await getSubmissionStatus(submissionId!);
      setOriginalContent(data.body || "");
      setContent(data.body || "");
      setTopic(data.title || "Rewrite Submission");
      setGenre(data.genre || "GENERAL");
    } catch (err) {
      console.error(err);
      setError("Failed to load original submission");
    } finally {
      setLoading(false);
    }
  };

  const handleRewriteSubmit = async () => {
    if (!content.trim()) return;
    
    setSubmitting(true);
    setError(null);
    try {
      const response = await axiosInstance.patch(`/writing/submission/${submissionId}/rewrite`, {
        body: content,
        genre,
      });

      const newSubmissionId = response.data.submissionId;
      router.push(`/Dashboard/WritingCoach/Report?submissionId=${newSubmissionId}`);
    } catch (err) {
      console.error(err);
      setError("Failed to submit rewrite");
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-4.5rem)] items-center justify-center bg-[#faf6f0]">
        <div className="w-16 h-16 border-4 border-[#4a7c59]/20 border-t-[#4a7c59] rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-4.5rem)] items-center justify-center bg-[#faf6f0]">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-[#705c30] mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#2e3230]" style={{ fontFamily: "'Literata', serif" }}>{error}</h2>
          <Button onClick={() => router.back()} className="mt-4 bg-[#faf6f0] border border-[#4a7c59]/20 text-[#4a7c59] hover:bg-[#4a7c59]/5 rounded-[12px]">Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4.5rem)] bg-[#faf6f0] overflow-hidden flex-col text-[#2e3230]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Header */}
      <div className="h-14 sm:h-16 border-b border-[#4a7c59]/10 flex items-center justify-between px-3 sm:px-8 bg-[#faf6f0]/80 backdrop-blur-md shrink-0 z-10">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <button 
            onClick={() => router.back()}
            className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-lg font-bold text-[#2e3230] truncate" style={{ fontFamily: "'Literata', serif" }}>Rewrite Session</h1>
            <p className="text-xs font-bold text-[#4a7c59] opacity-80 truncate">{topic}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-8 flex-shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium sm:border-l border-[#4a7c59]/20 sm:pl-8">
            <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#705c30]" />
            <span className="text-[10px] sm:text-sm uppercase tracking-wider font-bold text-[#705c30]">{wordCount} Words</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Reference pane: Original Text */}
        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-[#4a7c59]/10 bg-[#f4ebd9] flex flex-col max-h-40 lg:max-h-none">
          <div className="p-3 sm:p-6 border-b border-[#4a7c59]/10 bg-[#f4ebd9] z-10 shrink-0">
            <h2 className="text-xs font-bold text-[#2e3230] uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#705c30]" /> Original Text
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 scrollbar-hide">
            <p className="text-[#2e3230]/80 text-[13px] sm:text-[15px] leading-relaxed whitespace-pre-wrap">
              {originalContent}
            </p>
          </div>
        </div>

        {/* Editor pane */}
        <div className="flex-1 flex flex-col bg-[#faf6f0] relative min-h-0">
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 scrollbar-hide">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Refine your thoughts..."
              className="w-full min-h-full text-base sm:text-2xl text-[#2e3230] placeholder:text-[#a0a5a0] focus:outline-none resize-none bg-transparent"
              style={{ fontFamily: "'Literata', serif", lineHeight: "1.8" }}
            />
          </div>

          {/* Footer */}
          <div className="h-16 sm:h-24 border-t border-[#4a7c59]/10 flex items-center justify-between px-4 sm:px-12 bg-[#faf6f0] shrink-0">
            <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 border border-[#4a7c59]/20 rounded-[12px] text-[#4a7c59] font-bold text-xs sm:text-sm hover:bg-[#4a7c59]/5 transition-all bg-[#faf6f0]">
              <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Save Draft
            </button>

            <button
              onClick={handleRewriteSubmit}
              disabled={!content.trim() || content === originalContent || submitting}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-[#4a7c59] hover:bg-[#3d6649] disabled:opacity-50 disabled:cursor-not-allowed rounded-[12px] text-white font-bold text-sm sm:text-[15px] transition-all group"
              style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}
            >
              {submitting ? (
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <>
                  Submit Rewrite
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
    <Suspense fallback={
      <div className="flex h-[calc(100vh-4.5rem)] items-center justify-center bg-[#faf6f0]">
        <div className="w-16 h-16 border-4 border-[#4a7c59]/20 border-t-[#4a7c59] rounded-full animate-spin" />
      </div>
    }>
      <RewriteContent />
    </Suspense>
  );
}