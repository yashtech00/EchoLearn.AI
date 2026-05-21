"use client";

import { Target, CheckCircle2, Lightbulb, BookOpen, Sparkles } from "lucide-react";

interface MissionPanelProps {
  topic: string;
  description: string;
  genre: string;
  targetLevel: string;
  writingTips?: Array<{ title: string; description: string }>;
  onNewTopic: () => void;
  loadingTopic: boolean;
}

const formatGenre = (g?: string) => {
  if (!g) return "";
  const mappings: Record<string, string> = {
    GENERAL: "General",
    WORK_EMAIL: "Work Email",
    SHORT_ESSAY: "Short Essay",
    DIARY: "Diary",
    ACADEMIC_PARAGRAPH: "Academic Paragraph",
  };
  return mappings[g] || g.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function MissionPanel({
  topic,
  description,
  genre,
  targetLevel,
  writingTips = [],
  onNewTopic,
  loadingTopic,
}: MissionPanelProps) {
  // Extract checklist items from description
  const getChecklistItems = () => {
    // Try to extract bullet points or numbered items from description
    const items = description.match(/[-•]\s*([^-•\n]+)/g);
    if (items && items.length > 0) {
      return items.map(item => item.replace(/[-•]\s*/, '').trim());
    }
    // Fallback: split by sentences and take first 3
    const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 10);
    return sentences.slice(0, 3).map(s => s.trim());
  };

  const checklistItems = getChecklistItems();

  return (
    <div className="h-full flex flex-col bg-[#f4ebd9] overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#4a7c59]/30">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h2 
            className="text-2xl font-bold text-[#2e3230] tracking-tight"
            style={{ fontFamily: "'Literata', serif" }}
          >
            Your Mission Today
          </h2>
          <button
            type="button"
            onClick={onNewTopic}
            disabled={loadingTopic}
            className="px-4 py-2 rounded-[12px] bg-[#faf6f0] border border-[#4a7c59]/20 text-[#4a7c59] text-xs font-bold flex items-center gap-2 hover:bg-[#4a7c59]/5 transition-all duration-300 shadow-sm disabled:opacity-50"
          >
            {loadingTopic ? (
              <Sparkles className="w-3.5 h-3.5 animate-spin text-[#705c30]" />
            ) : (
              <Lightbulb className="w-3.5 h-3.5 text-[#705c30]" />
            )}
            New
          </button>
        </div>

        {/* Goal */}
        <div className="bg-[#faf6f0] rounded-[16px] p-6 border-l-4 border-[#4a7c59] shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <Target className="w-6 h-6 text-[#4a7c59] shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#705c30] uppercase tracking-wider mb-2">
                Your Goal
              </h3>
              <p 
                className="text-lg font-bold text-[#2e3230] leading-snug"
                style={{ fontFamily: "'Literata', serif" }}
              >
                {topic}
              </p>
            </div>
          </div>
        </div>

        {/* Checklist */}
        {checklistItems.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#2e3230] uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4a7c59]" />
              You Should Include
            </h3>
            <div className="space-y-2">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#faf6f0] rounded-[12px] p-4 border border-[#4a7c59]/10 hover:border-[#4a7c59]/30 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-[#4a7c59] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#4a7c59]" />
                  </div>
                  <p className="text-sm text-[#2e3230] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Level & Genre */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#faf6f0] rounded-[12px] p-4 border border-[#4a7c59]/10 shadow-sm">
            <p className="text-[9px] font-bold text-[#705c30] uppercase tracking-widest mb-1">
              Target Level
            </p>
            <p className="text-[#4a7c59] font-bold text-sm">
              {targetLevel || "B2 Upper Intermediate"}
            </p>
          </div>
          <div className="bg-[#faf6f0] rounded-[12px] p-4 border border-[#4a7c59]/10 shadow-sm">
            <p className="text-[9px] font-bold text-[#705c30] uppercase tracking-widest mb-1">
              Genre
            </p>
            <p className="text-[#4a7c59] font-bold text-sm">
              {formatGenre(genre)}
            </p>
          </div>
        </div>

        {/* Success Tips */}
        {writingTips && writingTips.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#2e3230] uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#705c30]" />
              Success Tips
            </h3>
            <div className="space-y-3">
              {writingTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf6f0] rounded-[12px] p-4 border-l-4 border-[#705c30] border-y border-r border-[#4a7c59]/10 shadow-sm"
                >
                  <h4 className="font-bold text-[#2e3230] text-sm mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-[#2e3230]/70 text-xs leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
