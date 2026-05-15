"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSubmissionStatus } from "@/app/api/writing/writing_api";
import { ArrowLeft, Sparkles, AlertCircle, RefreshCw, CheckCircle2, FileText, ChevronRight, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReportPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const submissionId = searchParams.get("submissionId");

  const [submission, setSubmission] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (submissionId) {
      loadSubmission();
    } else {
      setLoading(false);
      setError("No submission ID provided");
    }
  }, [submissionId]);

  const loadSubmission = async () => {
    try {
      setLoading(true);
      const data = await getSubmissionStatus(submissionId!);
      
      if (data.status === "PENDING" || data.status === "PROCESSING") {
        const pollInterval = setInterval(async () => {
          try {
            const statusData = await getSubmissionStatus(submissionId!);
            if (statusData.status === "COMPLETED") {
              clearInterval(pollInterval);
              setSubmission(statusData);
              setLoading(false);
            } else if (statusData.status === "FAILED") {
              clearInterval(pollInterval);
              setError("Analysis failed. Please try again.");
              setLoading(false);
            }
          } catch (pollErr) {
            clearInterval(pollInterval);
            setError("Failed to check analysis status.");
            setLoading(false);
          }
        }, 2000);

        setTimeout(() => {
          clearInterval(pollInterval);
          if (loading) {
            setError("Analysis is taking longer than expected.");
            setLoading(false);
          }
        }, 120000);

      } else {
        setSubmission(data);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load report");
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      LOW: "bg-[#4a7c59]/10 text-[#4a7c59] border-[#4a7c59]/20",
      MEDIUM: "bg-[#705c30]/10 text-[#705c30] border-[#705c30]/20",
      HIGH: "bg-[#8a5a44]/10 text-[#8a5a44] border-[#8a5a44]/20",
    };
    return colors[severity] || "bg-[#2e3230]/10 text-[#2e3230] border-[#2e3230]/20";
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-4.5rem)] flex-col items-center justify-center bg-[#faf6f0] text-[#2e3230]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-[#4a7c59]/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-[#4a7c59] rounded-full border-t-transparent animate-spin" />
        </div>
        <p className="mt-6 text-[#2e3230]/70 font-medium animate-pulse">Analyzing your writing...</p>
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="flex h-[calc(100vh-4.5rem)] flex-col items-center justify-center bg-[#faf6f0] text-[#2e3230]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <div className="w-16 h-16 bg-[#705c30]/10 text-[#705c30] rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-[#2e3230] mb-2" style={{ fontFamily: "'Literata', serif" }}>Oops!</h2>
        <p className="text-[#2e3230]/70 mb-6">{error || "Report not found"}</p>
        <Button onClick={() => router.back()} className="bg-[#faf6f0] border border-[#4a7c59]/20 text-[#4a7c59] hover:bg-[#4a7c59]/5 rounded-[12px]">
          <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
        </Button>
      </div>
    );
  }

  const { analysis, title, body, wordCount, genre, mistakes } = submission;
  const score = analysis?.score || 0;
  const summary = analysis?.summary;
  const feedback = analysis?.feedback;

  return (
    <div className="flex h-[calc(100vh-4.5rem)] bg-[#faf6f0] font-sans flex-col overflow-hidden text-[#2e3230]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Header */}
      <header className="h-20 bg-[#faf6f0]/80 backdrop-blur-md border-b border-[#4a7c59]/10 flex items-center justify-between px-8 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push('/Dashboard/WritingCoach/MistakeMemory')}
            className="w-10 h-10 flex items-center justify-center rounded-[12px] hover:bg-[#4a7c59]/10 text-[#2e3230]/70 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-[#2e3230] leading-tight" style={{ fontFamily: "'Literata', serif" }}>Detailed Report</h1>
            <p className="text-sm text-[#4a7c59] font-medium opacity-80">Session Analysis</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => router.push(`/Dashboard/WritingCoach/Rewrite?submissionId=${submissionId}`)}
            className="bg-[#4a7c59] hover:bg-[#3d6649] text-white rounded-[12px] transition-all gap-2"
            style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}
          >
            <RefreshCw className="w-4 h-4" />
            Rewrite & Improve
          </Button>
        </div>
      </header>

      {/* Content Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Original Text & Stats */}
        <div className="w-1/2 flex flex-col border-r border-[#4a7c59]/10 bg-[#faf6f0] overflow-y-auto">
          <div className="p-10 space-y-8">
            {/* Top Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#f4ebd9] rounded-[12px] p-4 border border-[#4a7c59]/10 flex items-center gap-4" style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}>
                <div className="w-12 h-12 rounded-[12px] bg-[#705c30]/10 flex items-center justify-center shrink-0">
                  <BarChart className="w-6 h-6 text-[#705c30]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#705c30] uppercase tracking-wider mb-0.5">Score</p>
                  <p className="text-2xl font-black text-[#2e3230]">{score}</p>
                </div>
              </div>
              <div className="bg-[#f4ebd9] rounded-[12px] p-4 border border-[#4a7c59]/10 flex items-center gap-4" style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}>
                <div className="w-12 h-12 rounded-[12px] bg-[#4a7c59]/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-[#4a7c59]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#4a7c59] uppercase tracking-wider mb-0.5">Words</p>
                  <p className="text-2xl font-black text-[#2e3230]">{wordCount}</p>
                </div>
              </div>
              <div className="bg-[#f4ebd9] rounded-[12px] p-4 border border-[#4a7c59]/10 flex items-center gap-4" style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}>
                <div className="w-12 h-12 rounded-[12px] bg-[#8a5a44]/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6 text-[#8a5a44]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#8a5a44] uppercase tracking-wider mb-0.5">Mistakes</p>
                  <p className="text-2xl font-black text-[#2e3230]">{mistakes?.length || 0}</p>
                </div>
              </div>
            </div>

            {/* AI Feedback */}
            <div className="bg-[#4a7c59]/5 rounded-[12px] p-6 border border-[#4a7c59]/10 relative overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4a7c59]/10 rounded-full blur-2xl" />
              <h3 className="text-[#4a7c59] font-bold flex items-center gap-2 mb-3 relative z-10" style={{ fontFamily: "'Literata', serif" }}>
                <Sparkles className="w-5 h-5 text-[#705c30]" />
                AI Feedback
              </h3>
              <p className="text-[#2e3230]/80 leading-relaxed font-medium relative z-10">
                {feedback}
              </p>
            </div>

            {/* Original Text */}
            <div>
              <h3 className="text-lg font-bold text-[#2e3230] mb-4 flex items-center gap-2" style={{ fontFamily: "'Literata', serif" }}>
                <FileText className="w-5 h-5 text-[#705c30]" />
                Original Submission
              </h3>
              <div className="bg-[#f4ebd9] rounded-[12px] p-8 border border-[#4a7c59]/10" style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}>
                <p className="text-[#2e3230] text-lg leading-loose whitespace-pre-wrap" style={{ fontFamily: "'Literata', serif" }}>
                  {body}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Mistakes List */}
        <div className="w-1/2 bg-[#f4ebd9] overflow-y-auto">
          <div className="p-10">
            <h2 className="text-2xl font-bold text-[#2e3230] mb-6 flex items-center gap-3" style={{ fontFamily: "'Literata', serif" }}>
              <AlertCircle className="w-6 h-6 text-[#705c30]" />
              Areas for Improvement
            </h2>
            
            {mistakes && mistakes.length > 0 ? (
              <div className="space-y-4">
                {mistakes.map((mistake: any, idx: number) => (
                  <div key={idx} className="bg-[#faf6f0] rounded-[12px] p-6 border border-[#4a7c59]/10 hover:border-[#4a7c59]/30 transition-all group" style={{ boxShadow: '0 4px 20px rgba(46, 50, 48, 0.06)' }}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black bg-[#4a7c59]/10 text-[#4a7c59] px-3 py-1 rounded-lg uppercase tracking-widest border border-[#4a7c59]/20">
                          {mistake.pillar?.replace(/_/g, " ")}
                        </span>
                        <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border ${getSeverityColor(mistake.severity)}`}>
                          {mistake.severity}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4 bg-[#f4ebd9] rounded-[12px] p-4 border border-[#4a7c59]/10">
                      <p className="text-[#2e3230] font-medium leading-relaxed">
                        <span className="text-[#8a5a44] line-through mr-3 opacity-70">
                          {mistake.surfaceText}
                        </span>
                        <span className="text-[#4a7c59] font-bold bg-[#4a7c59]/10 px-2 py-0.5 rounded-[12px]">
                          {mistake.suggestion}
                        </span>
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-[#faf6f0] p-4 rounded-[12px] border border-[#4a7c59]/10">
                      <div className="w-6 h-6 rounded-full bg-[#705c30]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-[#705c30]" />
                      </div>
                      <p className="text-sm text-[#2e3230]/80 font-medium leading-relaxed italic">
                        {mistake.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-[#faf6f0] rounded-[12px] border border-dashed border-[#4a7c59]/20">
                <div className="w-20 h-20 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#4a7c59]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2e3230] mb-2" style={{ fontFamily: "'Literata', serif" }}>Flawless writing!</h3>
                <p className="text-[#2e3230]/70">We couldn't find any major mistakes in this submission.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}