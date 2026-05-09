"use client";

import { useState } from "react";
import { BookOpen, PenTool, Target, Mic, BookMarked, Headphones, Clock, CheckCircle2, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface LevelAssessmentProps {
  formData: any;
  setFormData: (data: any) => void;
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
    const colors = ["bg-red-100 text-red-700", "bg-orange-100 text-orange-700", "bg-yellow-100 text-yellow-700", "bg-blue-100 text-blue-700", "bg-green-100 text-green-700"];
    return colors[level - 1] || "bg-yellow-100 text-yellow-700";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            How's your English today?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Be honest! It helps us find the right starting point for you.
          </p>
        </div>

        <div className="space-y-12">
          {/* Assessment Sliders */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {/* Reading Level */}
            <div className="bg-white p-9 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-center mb-9">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Reading Level</h3>
                </div>
                <span className={`px-5 py-2.5 rounded-full text-sm font-bold shadow-sm ${getLevelColor(readingLevel)}`}>
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
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(readingLevel - 1) * 25}%, #e5e7eb ${(readingLevel - 1) * 25}%, #e5e7eb 100%)`
                }}
              />
              {/* <div className="flex justify-between mt-7 text-xs font-bold text-gray-500 tracking-widest">
                <span className="text-center">BEGINNER</span>
                <span className="text-center">ELEMENTARY</span>
                <span className="text-center">INTERMEDIATE</span>
                <span className="text-center">ADVANCED</span>
                <span className="text-center">FLUENT</span>
              </div> */}
            </div>

            {/* Writing Level */}
            <div className="bg-white p-9 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-center mb-9">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <PenTool className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Writing Level</h3>
                </div>
                <span className={`px-5 py-2.5 rounded-full text-sm font-bold shadow-sm ${getLevelColor(writingLevel)}`}>
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
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(writingLevel - 1) * 25}%, #e5e7eb ${(writingLevel - 1) * 25}%, #e5e7eb 100%)`
                }}
              />
              {/* <div className="flex justify-between mt-7 text-xs font-bold text-gray-500 tracking-widest">
                <span className="text-center">BEGINNER</span>
                <span className="text-center">ELEMENTARY</span>
                <span className="text-center">INTERMEDIATE</span>
                <span className="text-center">ADVANCED</span>
                <span className="text-center">FLUENT</span>
              </div> */}
            </div>
          </section>

          {/* Focus Areas Section */}
          <section className="space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Focus Areas</h2>
                <p className="text-base text-gray-600 mt-1">Select areas you'd like to improve (optional)</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                    <div className="p-6 rounded-2xl border-2 border-transparent bg-white shadow-lg transition-all duration-300 peer-checked:border-purple-500 peer-checked:bg-gradient-to-br from-purple-50 via-white to-purple-50 peer-checked:shadow-xl peer-checked:ring-2 peer-checked:ring-purple-200 group-hover:scale-[1.02] group-hover:shadow-xl animate-in fade-in slide-in-from-bottom-2">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          formData.weakAreas?.includes(area.id) 
                            ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg scale-105' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:scale-105'
                        }`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-base font-bold text-gray-900 truncate">{area.name}</span>
                        {formData.weakAreas?.includes(area.id) && (
                          <div className="flex items-center gap-2 text-purple-600 animate-in zoom-in duration-300">
                            <CheckCircle2 className="w-5 h-5 fill-purple-600" />
                            <span className="text-sm font-semibold">Selected</span>
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
          <section className="space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Daily Commitment</h2>
                <p className="text-base text-gray-600 mt-1">Consistency is the key to fluency. Choose a realistic daily goal.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {dailyCommitments.map((commitment, index) => (
                <button
                  key={commitment.minutes}
                  onClick={() => handleDailyCommitment(commitment.minutes)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`p-7 rounded-2xl border-2 font-bold transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.96] animate-in fade-in slide-in-from-bottom-2 ${
                    formData.dailyGoalMinutes === commitment.minutes
                      ? 'border-orange-500 bg-gradient-to-br from-orange-50 via-white to-orange-50 text-orange-600 shadow-xl ring-2 ring-orange-200'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                      formData.dailyGoalMinutes === commitment.minutes
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-orange-100 group-hover:text-orange-600'
                    }`}>
                      <Clock className="w-7 h-7" />
                    </div>
                    <div className="text-xl font-bold">{commitment.label}</div>
                    {formData.dailyGoalMinutes === commitment.minutes && (
                      <div className="mt-3 flex items-center justify-center gap-2 text-orange-600 animate-in zoom-in duration-300">
                        <CheckCircle2 className="w-5 h-5 fill-orange-600" />
                        <span className="text-sm font-semibold">Selected</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Navigation Actions */}
          <footer className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <button
              onClick={onBack}
              className="group w-full md:w-auto px-10 py-5 rounded-2xl border-2 border-gray-300 text-gray-700 text-lg font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg active:scale-[0.95]"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
            <button
              onClick={onNext}
              className="group w-full md:w-auto px-20 py-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white text-xl font-bold shadow-2xl hover:shadow-indigo-500/50 hover:scale-[1.05] transition-all duration-300 flex items-center justify-center gap-4 active:scale-[0.95]"
            >
              Next: Personalize
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
