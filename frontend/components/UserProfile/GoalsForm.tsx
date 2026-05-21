"use client";

import { GraduationCap, Briefcase, UserSearch, Palette, MessageCircle, ClipboardCheck, Building2, Plane, Brain, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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

interface GoalsFormProps {
  formData: UserProfileFormData;
  setFormData: (data: UserProfileFormData) => void;
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
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Step 1 of 3</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
            Tell us about yourself
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;ll personalize your learning journey based on your goals and professional context.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Role Selection */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">What is your current role?</h2>
              <p className="text-base text-muted-foreground">Choose the option that best describes you</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {roles.map((role, index) => {
                const IconComponent = role.Icon;
                const isSelected = formData.primaryRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`group relative overflow-hidden cursor-pointer bg-card p-6 sm:p-7 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] animate-in fade-in slide-in-from-bottom-2 ${
                      isSelected
                        ? 'border-primary shadow-terra bg-gradient-to-br from-primary/5 via-secondary to-card ring-2 ring-primary/30'
                        : 'border-border hover:border-primary/40 hover:shadow-terra'
                    }`}
                  >
                    {/* Decorative gradient blob */}
                    {isSelected && (
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                    )}
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg scale-105' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-105'
                      }`}>
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{role.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                      {isSelected && (
                        <div className="mt-4 flex items-center gap-2 text-primary animate-in fade-in zoom-in duration-300">
                          <CheckCircle2 className="w-5 h-5 fill-primary" />
                          <span className="text-sm font-bold">Selected</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Goal Section */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Select your primary goal</h2>
              <p className="text-base text-muted-foreground">What do you want to achieve with English?</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
              {/* Fluency (Featured Card - Takes 2 columns) */}
              <button
                onClick={() => handleGoalSelect("FLUENCY")}
                className={`group relative overflow-hidden rounded-2xl p-8 sm:p-10 lg:col-span-2 cursor-pointer transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] ${
                  formData.primaryGoal === "FLUENCY"
                    ? 'bg-gradient-to-br from-primary via-primary/95 to-accent text-white shadow-2xl ring-4 ring-primary/30'
                    : 'bg-card border-2 border-border hover:border-primary/40 hover:shadow-terra'
                }`}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 opacity-30 ${formData.primaryGoal === "FLUENCY" ? 'animate-pulse' : ''}`}>
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      formData.primaryGoal === "FLUENCY" ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-primary/10 text-primary group-hover:scale-110'
                    }`}>
                      <MessageCircle className="w-9 h-9 sm:w-11 sm:h-11" />
                    </div>
                    {formData.primaryGoal === "FLUENCY" && (
                      <CheckCircle2 className="w-8 h-8 fill-current animate-in zoom-in duration-300" />
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Fluency</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        formData.primaryGoal === "FLUENCY" ? 'bg-white/25 text-white backdrop-blur-sm' : 'bg-primary/15 text-primary'
                      }`}>
                        Most Popular
                      </span>
                    </div>
                    <p className={`text-base sm:text-lg leading-relaxed ${
                      formData.primaryGoal === "FLUENCY" ? 'text-white/95' : 'text-muted-foreground'
                    }`}>
                      Speak naturally and confidently in any daily situation. Build real-world communication skills.
                    </p>
                  </div>
                </div>
              </button>

              {/* Other Goals Grid */}
              <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
                {goals.slice(1).map((goal, index) => {
                  const IconComponent = goal.Icon;
                  const isSelected = formData.primaryGoal === goal.id;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => handleGoalSelect(goal.id)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`group p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] animate-in fade-in slide-in-from-bottom-2 text-left ${
                        isSelected
                          ? 'border-2 border-primary bg-gradient-to-br from-primary/5 via-secondary to-card shadow-terra ring-2 ring-primary/30'
                          : 'bg-card border-2 border-border hover:border-primary/40 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg scale-105' 
                            : 'bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-105'
                        }`}>
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-base sm:text-lg font-bold text-foreground">{goal.name}</h3>
                            {isSelected && (
                              <CheckCircle2 className="w-5 h-5 text-primary fill-primary animate-in zoom-in duration-300 flex-shrink-0 ml-2" />
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <button
            onClick={onNext}
            disabled={!formData.primaryRole || !formData.primaryGoal}
            className={`group relative overflow-hidden w-full sm:w-auto px-12 sm:px-24 py-5 sm:py-7 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 ${
              formData.primaryRole && formData.primaryGoal
                ? 'bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-2xl hover:from-primary/95 hover:to-primary/85'
                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
            }`}
          >
            {formData.primaryRole && formData.primaryGoal && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            )}
            <span className="relative z-10">Next: Assess My Level</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center gap-3 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Takes less than 2 minutes to complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
