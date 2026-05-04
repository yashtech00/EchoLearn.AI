"use client";

import { useState } from "react";

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
    { id: "grammar", name: "Grammar", icon: "spellcheck" },
    { id: "speaking", name: "Speaking", icon: "record_voice_over" },
    { id: "vocabulary", name: "Vocabulary", icon: "menu_book" },
    { id: "listening", name: "Listening", icon: "hearing" },
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
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-indigo-600 font-['Plus_Jakarta_SANS'] tracking-tight">LinguistAI</span>
            <div className="hidden md:flex gap-6 ml-8">
              <span className="text-gray-400 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight">Goals</span>
              <span className="text-indigo-600 border-b-2 border-indigo-600 pb-1 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight">Level</span>
              <span className="text-gray-400 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight">Interests</span>
              <span className="text-gray-400 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight">Review</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Step 2 of 3</span>
              <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                <div className="bg-indigo-600 w-2/3 h-full rounded-full"></div>
              </div>
            </div>
            <button className="text-indigo-600 font-semibold px-4 py-2 hover:bg-indigo-50 transition-colors rounded-xl active:scale-[0.98]">Skip</button>
            <span className="material-symbols-outlined text-gray-500 cursor-pointer">help_outline</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">How's your English today?</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">Be honest! It helps us find the right starting point for you.</p>
        </div>

        <div className="space-y-8">
          {/* Assessment Sliders */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Reading Level */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(79,70,229,0.08)] border border-gray-200/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-indigo-600">Reading Level</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(readingLevel)}`}>
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
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                style={{
                  background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(readingLevel - 1) * 25}%, #e5e7eb ${(readingLevel - 1) * 25}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between mt-4 text-xs font-semibold text-gray-400 tracking-wider">
                <span>BEGINNER</span>
                <span>FLUENT</span>
              </div>
            </div>

            {/* Writing Level */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(79,70,229,0.08)] border border-gray-200/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-indigo-600">Writing Level</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(writingLevel)}`}>
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
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                style={{
                  background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(writingLevel - 1) * 25}%, #e5e7eb ${(writingLevel - 1) * 25}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between mt-4 text-xs font-semibold text-gray-400 tracking-wider">
                <span>BEGINNER</span>
                <span>FLUENT</span>
              </div>
            </div>
          </section>

          {/* Weak Areas Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-indigo-600">target</span>
              <h2 className="text-2xl font-semibold text-gray-900">Focus Areas</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {focusAreas.map((area) => (
                <label key={area.id} className="group relative cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.weakAreas?.includes(area.id) || false}
                    onChange={() => handleFocusAreaToggle(area.id)}
                    className="peer sr-only"
                  />
                  <div className="p-6 rounded-xl border-2 border-transparent bg-white shadow-sm ring-1 ring-gray-200 transition-all peer-checked:border-indigo-600 peer-checked:bg-indigo-50/50 group-hover:translate-y-[-2px]">
                    <div className="flex flex-col items-center text-center gap-3">
                      <span className="material-symbols-outlined text-3xl text-indigo-600">{area.icon}</span>
                      <span className="text-sm font-semibold text-gray-900">{area.name}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Daily Commitment & Visual Feature */}
          <section className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-3 bg-white p-8 rounded-2xl border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-indigo-600">schedule</span>
                <h2 className="text-2xl font-semibold text-gray-900">Daily Commitment</h2>
              </div>
              <p className="text-gray-600 mb-6">Consistency is the key to fluency. Choose a realistic daily goal.</p>
              <div className="flex flex-wrap gap-3">
                {dailyCommitments.map((commitment) => (
                  <button
                    key={commitment.minutes}
                    onClick={() => handleDailyCommitment(commitment.minutes)}
                    className={`px-6 py-3 rounded-xl border-2 font-bold transition-all active:scale-95 ${
                      formData.dailyGoalMinutes === commitment.minutes
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {commitment.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 h-full">
              <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  alt="Skill Assessment Study Context"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPqwbMJWzc3IJxX7R9t4nOOw09Oa6JvJPfVK_7gYner8Tl8EgnTeTtr1W9-vHK-AWni-NMC63LS-MSKGpMhXtvroSY_ER1NMgqY_g5orUtV7p-xNFJ_O5ya6bU6l4dr6tDVokR7IYRCX-2msE4-sd0p0t3oI3fShp4sEx3NIGp6oEWKJk8e4hdzpO30BHoleZe205giFUrqTNMh1d0MGKTlKr4TEWrqJNvTebgtQmXAXkimk1vkXxGBiKm6ToR8CyKCjFCdReOJ3Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    <span className="text-sm font-bold">AI Path Optimizer</span>
                  </div>
                  <p className="text-white/90 text-sm mt-1">We'll tailor 140+ lessons to fit your specific 10-minute slot.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Actions */}
          <footer className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-8">
            <button
              onClick={onBack}
              className="w-full md:w-auto px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-600 font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            <button
              onClick={onNext}
              className="w-full md:w-auto px-12 py-4 rounded-xl bg-indigo-600 text-white font-bold shadow-[0_8px_20px_rgba(53,37,205,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Next: Personalize
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </footer>
        </div>
      </main>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}
