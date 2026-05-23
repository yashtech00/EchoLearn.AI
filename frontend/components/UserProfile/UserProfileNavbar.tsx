"use client";

import { CheckCircle2 } from "lucide-react";

interface UserProfileNavbarProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
  showSkip?: boolean;
 
}

export default function UserProfileNavbar({ 
  currentStep, 
  totalSteps, 
  onStepClick,
  showSkip = true
}: UserProfileNavbarProps) {
  const steps = ["Goals", "Level", "Interests"];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-primary/10 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 py-4 md:px-8 md:py-5 max-w-7xl mx-auto">
        <div className="flex justify-between gap-12">
          <span className="text-xl md:text-3xl font-black text-primary tracking-tight">
            EchoLearn.AI
          </span>
          </div>
          <div>
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
      </div>
    </header>
  );
}
