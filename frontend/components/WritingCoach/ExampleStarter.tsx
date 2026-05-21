"use client";

import { useState } from "react";
import { Lightbulb, RefreshCw, Copy, Check } from "lucide-react";

interface ExampleStarterProps {
  examples: string[];
  onUseStarter: (starter: string) => void;
}

export default function ExampleStarter({ examples, onUseStarter }: ExampleStarterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!examples || examples.length === 0) return null;

  const currentStarter = examples[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % examples.length);
    setCopied(false);
  };

  const handleUse = () => {
    onUseStarter(currentStarter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#f4ebd9] to-[#faf6f0] rounded-[16px] p-6 border border-[#4a7c59]/20 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-[#705c30]" />
        <h3 className="text-sm font-bold text-[#2e3230] uppercase tracking-wider">
          Need Inspiration?
        </h3>
      </div>

      <div className="bg-white/60 rounded-[12px] p-4 mb-4 border border-[#4a7c59]/10">
        <p 
          className="text-base text-[#2e3230] italic leading-relaxed"
          style={{ fontFamily: "'Literata', serif" }}
        >
          "{currentStarter}"
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        <button
          onClick={handleUse}
          className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4a7c59] hover:bg-[#3d6649] text-white rounded-[10px] font-bold text-sm transition-all duration-200 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Use This Starter
            </>
          )}
        </button>

        {examples.length > 1 && (
          <button
            onClick={handleNext}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#faf6f0] hover:bg-[#ebe2d0] border border-[#4a7c59]/20 text-[#4a7c59] rounded-[10px] font-bold text-sm transition-all duration-200 active:scale-95"
            title="Show another example"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      {examples.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {examples.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-[#4a7c59]'
                  : 'w-1.5 bg-[#4a7c59]/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
