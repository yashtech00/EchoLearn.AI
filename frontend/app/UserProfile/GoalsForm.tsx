"use client";

import { useState } from "react";

interface GoalsFormProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function GoalsForm({ formData, setFormData, onNext }: GoalsFormProps) {
  const roles = [
    { id: "STUDENT", name: "Student", icon: "school", description: "Academic focus & exams" },
    { id: "WORKING_PROFESSIONAL", name: "Professional", icon: "work", description: "Career & networking" },
    { id: "JOB_SEEKER", name: "Job Seeker", icon: "person_search", description: "Interview prep" },
    { id: "OTHER", name: "Hobbyist", icon: "palette", description: "Personal growth" },
  ];

  const goals = [
    { id: "CASUAL", name: "Fluency", icon: "forum", description: "Speak naturally and confidently in any daily situation", featured: true },
    { id: "EXAM", name: "Exam Prep", icon: "assignment_turned_in", description: "IELTS, TOEFL, or Cambridge exams" },
    { id: "JOB_COMMUNICATION", name: "Business English", icon: "corporate_fare", description: "Emails, meetings, and presentations" },
    { id: "RELOCATION", name: "Travel & Culture", icon: "flight_takeoff", description: "Explore the world with confidence" },
    { id: "ACADEMIC", name: "Grammar Mastery", icon: "psychology_alt", description: "Master English grammar rules" },
  ];

  const handleRoleSelect = (roleId: string) => {
    setFormData({ ...formData, primaryRole: roleId });
  };

  const handleGoalSelect = (goalId: string) => {
    setFormData({ ...formData, primaryGoal: goalId });
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black text-indigo-600 font-['Plus_Jakarta_SANS']">LinguistAI</span>
            <nav className="hidden md:flex gap-6 items-center">
              <span className="text-indigo-600 border-b-2 border-indigo-600 pb-1 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight cursor-pointer">Goals</span>
              <span className="text-gray-400 hover:text-gray-600 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight cursor-pointer transition-colors">Level</span>
              <span className="text-gray-400 hover:text-gray-600 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight cursor-pointer transition-colors">Interests</span>
              <span className="text-gray-400 hover:text-gray-600 font-['Plus_Jakarta_SANS'] font-semibold tracking-tight cursor-pointer transition-colors">Review</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Step 1 of 3</span>
              <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                <div className="bg-indigo-600 w-1/3 h-full rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]"></div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-indigo-600 transition-colors active:scale-95">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <button className="font-['Plus_Jakarta_SANS'] font-semibold text-gray-500 hover:text-indigo-600 transition-colors px-3 py-1">Skip</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Tell us about yourself</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">We'll personalize your learning journey based on your goals and professional context.</p>
      </div>

      <div className="space-y-8">
        {/* Role Selection */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is your current role?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((role) => (
              <div
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`group cursor-pointer bg-white p-6 rounded-xl border-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                  formData.primaryRole === role.id
                    ? 'border-indigo-600 shadow-[0_4px_12px_rgba(79,70,229,0.1)]'
                    : 'border-gray-200 hover:border-indigo-600/40 hover:shadow-[0_4px_12px_rgba(79,70,229,0.08)]'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  formData.primaryRole === role.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400 group-hover:text-indigo-600'
                } transition-colors`}>
                  <span className="material-symbols-outlined text-3xl">{role.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{role.name}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-snug">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Goal Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Select your primary goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4">
            {/* Fluency (Large Card) */}
            <div
              onClick={() => handleGoalSelect("CASUAL")}
              className={`md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-xl p-8 cursor-pointer transition-transform active:scale-[0.99] ${
                formData.primaryGoal === "CASUAL"
                  ? 'bg-indigo-100 text-indigo-900 shadow-lg'
                  : 'bg-white border border-gray-200 hover:border-indigo-600 transition-all'
              }`}
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl mb-4">forum</span>
                <h3 className="text-2xl font-bold">Fluency</h3>
                <p className="mt-2 text-base opacity-90">Speak naturally and confidently in any daily situation.</p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</span>
                </div>
              </div>
              {/* Abstract decorative bg */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
            </div>

            {/* Other Goals */}
            {goals.slice(1).map((goal) => (
              <div
                key={goal.id}
                onClick={() => handleGoalSelect(goal.id)}
                className={`md:col-span-3 group p-6 rounded-xl cursor-pointer flex gap-6 items-center transition-all ${
                  formData.primaryGoal === goal.id
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'bg-white border border-gray-200 hover:border-indigo-600'
                }`}
              >
                <div className={`p-4 rounded-xl ${
                  formData.primaryGoal === goal.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <span className="material-symbols-outlined text-3xl">{goal.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{goal.name}</h3>
                  <p className="text-gray-500 text-sm">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          onClick={onNext}
          className="w-full md:w-auto px-12 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-[0_8px_20px_rgba(53,37,205,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
        >
          Next: Assess My Level
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-gray-500 text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
          Takes less than 2 minutes to complete
        </p>
      </div>
    </div>
  );
}
