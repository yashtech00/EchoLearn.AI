"use client";

import { PenTool, Lightbulb, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

interface ProgressJourneyProps {
  wordCount: number;
  wordTarget: number;
}

export default function ProgressJourney({ wordCount, wordTarget }: ProgressJourneyProps) {
  const getProgressStage = () => {
    if (wordCount === 0) return 0;
    if (wordCount < wordTarget * 0.3) return 1;
    if (wordCount < wordTarget * 0.7) return 2;
    if (wordCount < wordTarget) return 3;
    return 4;
  };

  const currentStage = getProgressStage();

  const stages = [
    { label: "Start", icon: PenTool, color: "#4a7c59" },
    { label: "Developing", icon: Lightbulb, color: "#705c30" },
    { label: "Finishing", icon: BookOpen, color: "#4a7c59" },
    { label: "Ready", icon: Sparkles, color: "#705c30" },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
      <span className="text-xs font-bold text-[#2e3230]/70 uppercase tracking-wider shrink-0 hidden sm:block">
        Progress
      </span>
      
      <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx < currentStage;
          const isCurrent = idx === currentStage;
          
          return (
            <div key={idx} className="flex items-center gap-1 sm:gap-2 min-w-0">
              <div
                className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-[#4a7c59] text-white scale-100'
                    : isCurrent
                    ? 'bg-[#4a7c59]/20 text-[#4a7c59] scale-110 ring-2 ring-[#4a7c59]/30'
                    : 'bg-[#2e3230]/10 text-[#2e3230]/40 scale-90'
                }`}
              >
                {isActive ? (
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
                
                {isCurrent && (
                  <div className="absolute inset-0 rounded-full bg-[#4a7c59]/20 animate-ping" />
                )}
              </div>

              <span
                className={`text-[10px] sm:text-xs font-bold transition-all duration-300 hidden sm:block ${
                  isActive || isCurrent
                    ? 'text-[#4a7c59]'
                    : 'text-[#2e3230]/40'
                }`}
              >
                {stage.label}
              </span>

              {idx < stages.length - 1 && (
                <div
                  className={`h-0.5 w-4 sm:w-8 transition-all duration-500 shrink-0 ${
                    isActive
                      ? 'bg-[#4a7c59]'
                      : 'bg-[#2e3230]/10'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="text-right shrink-0">
        <p className="text-xs sm:text-sm font-bold text-[#705c30] tabular-nums">
          {wordCount}/{wordTarget}
        </p>
        <p className="text-[9px] sm:text-[10px] font-bold text-[#705c30]/70 uppercase tracking-wider">
          Words
        </p>
      </div>
    </div>
  );
}
