"use client";

import { CheckCircle2, HelpCircle } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            EchoLearn.AI
          </span>
          <nav className="hidden md:flex gap-8 items-center">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => onStepClick && onStepClick(index + 1)}
                className={`font-bold tracking-tight cursor-pointer transition-all duration-300 border-b-3 pb-2 relative flex items-center gap-2 ${
                  currentStep === index + 1
                    ? 'text-indigo-600 border-indigo-600'
                    : currentStep > index + 1
                    ? 'text-gray-600 border-transparent hover:text-indigo-500'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                }`}
              >
                {currentStep > index + 1 && (
                  <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-500" />
                )}
                {step}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
              Step {currentStep} of {totalSteps}
            </span>
            <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full shadow-lg transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* <button className="text-gray-400 hover:text-indigo-600 transition-colors duration-300 active:scale-95 p-2 rounded-lg hover:bg-indigo-50">
            <HelpCircle className="w-6 h-6" />
          </button> */}
          {showSkip && (
            <button 
              onClick={onSkip}
              className="font-bold text-gray-500 hover:text-indigo-600 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-indigo-50 active:scale-95"
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
