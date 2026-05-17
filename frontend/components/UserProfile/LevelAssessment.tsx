"use client";

import { useState } from "react";
import { BookOpen, PenTool, Target, Mic, BookMarked, Headphones, Clock, CheckCircle2, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface UserProfileFormData {
  primaryRole: string;
  primaryGoal: string;
  englishReadingSelfScore: number;
  englishWritingSelfScore: number;
  weeklyTimeMinutes: number;
  interestTags: string[];
  preferredGenres: string[];
  targetScoreGoal: string;
  dailyGoalMinutes: number;
  preferredLearningStyle: string;
  weakAreas: string[];
}

interface LevelAssessmentProps {
  formData: UserProfileFormData;
  setFormData: (data: UserProfileFormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function LevelAssessment({ formData, setFormData, onNext, onBack }: LevelAssessmentProps) {
  const [readingLevel, setReadingLevel] = useState(formData.englishReadingSelfScore || 3);
  const [writingLevel, setWritingLevel] = useState(formData.englishWritingSelfScore || 3);

  const focusAreas = [
    { id: "grammar", name: "Grammar", Icon: Check },
    { id: "speaking", name: "Speaking", Icon: Mic },
    { id: "vocabulary", name: "Vocabulary", Icon: BookMarked },
    { id: "listening", name: "Listening", Icon: Headphones },
  ];

  const dailyCommitments = [
    { minutes: 10, label: "10 mins" },
    { minutes: 20, label: "20 mins" },
    { minutes: 30, label: "30 mins" },
    { minutes: 60, label: "60 mins" },
  ];

  const getLevelLabel = (level: number) => {
    const labels = ["Beginner", "Elementary", "Intermediate", "Advanced", "Fluent"];
    return labels[level - 1] || "Intermediate";
  };

  const getLevelColor = (level: number) => {
    const colors = [
      "bg-secondary text-muted-foreground",
      "bg-accent/10 text-accent",
      "bg-primary/10 text-primary",
      "bg-primary text-white",
      "bg-accent text-white",
    ];
    return colors[level - 1] || "bg-primary/10 text-primary";
  };

  const handleFocusAreaToggle = (areaId: string) => {
    const currentWeakAreas = formData.weakAreas || [];
    const newWeakAreas = currentWeakAreas.includes(areaId)
      ? currentWeakAreas.filter((area: string) => area !== areaId)
      : [...currentWeakAreas, areaId];
    setFormData({ ...formData, weakAreas: newWeakAreas });
  };

  const handleDailyCommitment = (minutes: number) => {
    setFormData({ ...formData, dailyGoalMinutes: minutes });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            How&apos;s your English today?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Be honest! It helps us find the right starting point for you.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Assessment Sliders */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {/* Reading Level */}
            <div className="bg-card p-6 sm:p-9 rounded-[12px] shadow-terra border border-primary/10 hover:shadow-terra transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-center mb-6 sm:mb-9">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-primary to-primary flex items-center justify-center shadow-terra">
                    <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">Reading Level</h3>
                </div>
                <span className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm ${getLevelColor(readingLevel)}`}>
                  {getLevelLabel(readingLevel)}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={readingLevel}
                onChange={(e) => {
                  const level = parseInt(e.target.value);
                  setReadingLevel(level);
                  setFormData({ ...formData, englishReadingSelfScore: level });
                }}
                className="w-full h-3 bg-primary/10 rounded-full appearance-none cursor-pointer transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(readingLevel - 1) * 25}%, var(--secondary) ${(readingLevel - 1) * 25}%, var(--secondary) 100%)`
                }}
              />
            </div>

            {/* Writing Level */}
            <div className="bg-card p-6 sm:p-9 rounded-[12px] shadow-terra border border-primary/10 hover:shadow-terra transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-center mb-6 sm:mb-9">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-primary to-primary flex items-center justify-center shadow-terra">
                    <PenTool className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">Writing Level</h3>
                </div>
                <span className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm ${getLevelColor(writingLevel)}`}>
                  {getLevelLabel(writingLevel)}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={writingLevel}
                onChange={(e) => {
                  const level = parseInt(e.target.value);
                  setWritingLevel(level);
                  setFormData({ ...formData, englishWritingSelfScore: level });
                }}
                className="w-full h-3 bg-primary/10 rounded-full appearance-none cursor-pointer transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(writingLevel - 1) * 25}%, var(--secondary) ${(writingLevel - 1) * 25}%, var(--secondary) 100%)`
                }}
              />
            </div>
          </section>

          {/* Focus Areas Section */}
          <section className="space-y-5 sm:space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-primary to-primary flex items-center justify-center shadow-terra">
                <Target className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Focus Areas</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Select areas you&apos;d like to improve (optional)</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {focusAreas.map((area, index) => {
                const IconComponent = area.Icon;
                return (
                  <label key={area.id} className="group relative cursor-pointer" style={{ animationDelay: `${index * 50}ms` }}>
                    <input
                      type="checkbox"
                      checked={formData.weakAreas?.includes(area.id) || false}
                      onChange={() => handleFocusAreaToggle(area.id)}
                      className="peer sr-only"
                    />
                    <div className="p-4 sm:p-6 rounded-[12px] border-2 border-transparent bg-card shadow-terra transition-all duration-300 peer-checked:border-primary peer-checked:bg-gradient-to-br from-secondary to-card peer-checked:shadow-terra peer-checked:ring-2 peer-checked:ring-primary/20 group-hover:scale-[1.02] group-hover:shadow-terra animate-in fade-in slide-in-from-bottom-2">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] flex items-center justify-center transition-all duration-300 ${
                          formData.weakAreas?.includes(area.id) 
                            ? 'bg-gradient-to-br from-primary to-primary text-white shadow-terra scale-105' 
                            : 'bg-primary/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105'
                        }`}>
                          <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-foreground truncate">{area.name}</span>
                        {formData.weakAreas?.includes(area.id) && (
                          <div className="flex items-center gap-1.5 text-primary animate-in zoom-in duration-300">
                            <CheckCircle2 className="w-4 h-4 fill-primary" />
                            <span className="text-xs sm:text-sm font-semibold">Selected</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>

          {/* Daily Commitment Section */}
          <section className="space-y-5 sm:space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-accent to-accent flex items-center justify-center shadow-terra">
                <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Daily Commitment</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Consistency is key to fluency. Choose a realistic daily goal.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {dailyCommitments.map((commitment, index) => (
                <button
                  key={commitment.minutes}
                  onClick={() => handleDailyCommitment(commitment.minutes)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`p-5 sm:p-7 rounded-[12px] border-2 font-bold transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.96] animate-in fade-in slide-in-from-bottom-2 ${
                    formData.dailyGoalMinutes === commitment.minutes
                      ? 'border-accent bg-gradient-to-br from-secondary to-card text-accent shadow-terra ring-2 ring-accent/20'
                      : 'border-primary/10 bg-card hover:border-accent/30 hover:shadow-terra'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 ${
                      formData.dailyGoalMinutes === commitment.minutes
                        ? 'bg-gradient-to-br from-accent to-accent text-white shadow-terra scale-105'
                        : 'bg-primary/10 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent'
                    }`}>
                      <Clock className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold">{commitment.label}</div>
                    {formData.dailyGoalMinutes === commitment.minutes && (
                      <div className="mt-2 flex items-center justify-center gap-1.5 text-accent animate-in zoom-in duration-300">
                        <CheckCircle2 className="w-4 h-4 fill-accent" />
                        <span className="text-xs sm:text-sm font-semibold">Selected</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Navigation Actions */}
          <footer className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-10 sm:pt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <button
              onClick={onBack}
              className="group w-full md:w-auto px-10 py-4 sm:py-5 rounded-[12px] border-2 border-primary/20 text-foreground text-base sm:text-lg font-bold hover:bg-secondary hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-terra active:scale-[0.95]"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
            <button
              onClick={onNext}
              className="group w-full md:w-auto px-10 sm:px-20 py-4 sm:py-6 rounded-[12px] bg-primary text-white text-lg sm:text-xl font-bold shadow-terra hover:shadow-terra hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-4 active:scale-[0.95]"
            >
              Next: Personalize
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
