"use client";

import { CheckCircle2 } from "lucide-react";

interface UserProfileNavbarProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
  showSkip?: boolean;
  onSkip?: () => void;
}

export default function UserProfileNavbar({ 
  currentStep, 
  totalSteps, 
  onStepClick,
  showSkip = true,
  onSkip 
}: UserProfileNavbarProps) {
  const steps = ["Goals", "Level", "Interests"];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-primary/10 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 py-4 md:px-8 md:py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <span className="text-xl md:text-3xl font-black text-primary tracking-tight">
            EchoLearn.AI
          </span>
          <nav className="hidden md:flex gap-8 items-center">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => onStepClick && onStepClick(index + 1)}
                className={`font-bold tracking-tight cursor-pointer transition-all duration-300 border-b-3 pb-2 relative flex items-center gap-2 ${
                  currentStep === index + 1
                    ? 'text-primary border-primary'
                    : currentStep > index + 1
                    ? 'text-muted-foreground border-transparent hover:text-primary'
                    : 'text-muted-foreground/60 border-transparent hover:text-muted-foreground'
                }`}
              >
                {currentStep > index + 1 && (
                  <CheckCircle2 className="w-4 h-4 text-primary fill-primary" />
                )}
                {step}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex flex-col items-end mr-1 md:mr-2">
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">
              Step {currentStep} of {totalSteps}
            </span>
            <div className="w-16 md:w-28 h-2 bg-primary/10 rounded-full overflow-hidden shadow-inner">
              <div 
                className="bg-primary h-full rounded-full shadow-terra transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          {showSkip && (
            <button 
              onClick={onSkip}
              className="font-bold text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-secondary active:scale-95"
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
