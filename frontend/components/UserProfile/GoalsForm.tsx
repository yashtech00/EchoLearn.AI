"use client";

import { GraduationCap, Briefcase, UserSearch, Palette, MessageCircle, ClipboardCheck, Building2, Plane, Brain, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

interface GoalsFormProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function GoalsForm({ formData, setFormData, onNext }: GoalsFormProps) {
  const roles = [
    { id: "STUDENT", name: "Student", Icon: GraduationCap, description: "Academic focus & exams" },
    { id: "WORKING_PROFESSIONAL", name: "Professional", Icon: Briefcase, description: "Career & networking" },
    { id: "JOB_SEEKER", name: "Job Seeker", Icon: UserSearch, description: "Interview prep" },
    { id: "HOBBYIST", name: "Hobbyist", Icon: Palette, description: "Personal growth" },
  ];

  const goals = [
    { id: "FLUENCY", name: "Fluency", Icon: MessageCircle, description: "Speak naturally and confidently in any daily situation", featured: true },
    { id: "EXAM_PREP", name: "Exam Prep", Icon: ClipboardCheck, description: "IELTS, TOEFL, or Cambridge exams" },
    { id: "BUSINESS_ENGLISH", name: "Business English", Icon: Building2, description: "Emails, meetings, and presentations" },
    { id: "TRAVEL_AND_CULTURE_ENGLISH", name: "Travel & Culture", Icon: Plane, description: "Explore the world with confidence" },
    { id: "GRAMMAR_MASTERY", name: "Grammar Mastery", Icon: Brain, description: "Master English grammar rules" },
  ];

  const handleRoleSelect = (roleId: string) => {
    setFormData({ ...formData, primaryRole: roleId });
  };

  const handleGoalSelect = (goalId: string) => {
    setFormData({ ...formData, primaryGoal: goalId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Tell us about yourself
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'll personalize your learning journey based on your goals and professional context.
          </p>
        </div>

        <div className="space-y-12">
          {/* Role Selection */}
          <div className="space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h2 className="text-3xl font-bold text-gray-900">What is your current role?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {roles.map((role, index) => {
                const IconComponent = role.Icon;
                return (
                  <div
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`group cursor-pointer bg-white p-7 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.04] hover:shadow-2xl active:scale-[0.96] animate-in fade-in slide-in-from-bottom-2 ${
                      formData.primaryRole === role.id
                        ? 'border-indigo-500 shadow-xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 ring-2 ring-indigo-200'
                        : 'border-gray-200 hover:border-indigo-300 hover:shadow-lg'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      formData.primaryRole === role.id 
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-105' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 group-hover:scale-105'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 truncate">{role.name}</h3>
                    <p className="text-xs text-gray-600 leading-snug line-clamp-2">{role.description}</p>
                    {formData.primaryRole === role.id && (
                      <div className="mt-4 flex items-center gap-2 text-indigo-600 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 className="w-5 h-5 fill-indigo-600" />
                        <span className="text-sm font-semibold">Selected</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Primary Goal Section */}
          <div className="space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-3xl font-bold text-gray-900">Select your primary goal</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Fluency (Featured Card) */}
              <div
                onClick={() => handleGoalSelect("FLUENCY")}
                className={`group relative overflow-hidden rounded-3xl p-10 cursor-pointer transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.97] ${
                  formData.primaryGoal === "FLUENCY"
                    ? 'bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-2xl ring-4 ring-indigo-200'
                    : 'bg-white border-2 border-gray-200 hover:border-indigo-300 hover:shadow-2xl'
                }`}
              >
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-7 transition-all duration-300 ${
                    formData.primaryGoal === "FLUENCY" ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-indigo-100 text-indigo-600 group-hover:scale-110'
                  }`}>
                    <MessageCircle className="w-12 h-12" />
                  </div>
                  <div className="flex items-start justify-between mb-5">
                    <h3 className="text-4xl font-extrabold tracking-tight">Fluency</h3>
                    {formData.primaryGoal === "FLUENCY" && (
                      <CheckCircle2 className="w-8 h-8 fill-current animate-in zoom-in duration-300" />
                    )}
                  </div>
                  <p className={`text-lg leading-relaxed mb-7 ${
                    formData.primaryGoal === "FLUENCY" ? 'text-white/95' : 'text-gray-600'
                  }`}>
                    Speak naturally and confidently in any daily situation.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                      formData.primaryGoal === "FLUENCY" ? 'bg-white/25 text-white backdrop-blur-sm' : 'bg-indigo-100 text-indigo-700'
                    }`}>
                      Most Popular
                    </span>
                  </div>
                </div>
                {/* Decorative background */}
                <div className={`absolute -right-16 -bottom-16 w-72 h-72 rounded-full blur-3xl transition-all duration-500 ${
                  formData.primaryGoal === "FLUENCY" ? 'bg-white/15' : 'bg-indigo-100/30 group-hover:bg-indigo-200/40'
                }`}></div>
              </div>

              {/* Other Goals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {goals.slice(1).map((goal, index) => {
                  const IconComponent = goal.Icon;
                  return (
                    <div
                      key={goal.id}
                      onClick={() => handleGoalSelect(goal.id)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`group p-7 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-[1.04] hover:shadow-xl active:scale-[0.96] animate-in fade-in slide-in-from-bottom-2 ${
                        formData.primaryGoal === goal.id
                          ? 'border-2 border-indigo-500 bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-xl ring-2 ring-indigo-200'
                          : 'bg-white border-2 border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          formData.primaryGoal === goal.id 
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-105' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 group-hover:scale-105'
                        }`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-base font-bold text-gray-900 truncate">{goal.name}</h3>
                            {formData.primaryGoal === goal.id && (
                              <CheckCircle2 className="w-5 h-5 text-indigo-600 fill-indigo-600 animate-in zoom-in duration-300 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600 leading-snug line-clamp-2">{goal.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <button
            onClick={onNext}
            disabled={!formData.primaryRole || !formData.primaryGoal}
            className={`group px-20 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center gap-4 ${
              formData.primaryRole && formData.primaryGoal
                ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white hover:shadow-indigo-500/50 hover:from-indigo-700 hover:to-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
            }`}
          >
            Next: Assess My Level
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center gap-3 text-gray-600">
            <ShieldCheck className="w-5 h-5 text-emerald-500 fill-emerald-500" />
            <span className="text-base font-medium">Takes less than 2 minutes to complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
