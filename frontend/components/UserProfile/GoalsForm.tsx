"use client";

import { GraduationCap, Briefcase, UserSearch, Palette, MessageCircle, ClipboardCheck, Building2, Plane, Brain, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

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
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            Tell us about yourself
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We&apos;ll personalize your learning journey based on your goals and professional context.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Role Selection */}
          <div className="space-y-5 sm:space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">What is your current role?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {roles.map((role, index) => {
                const IconComponent = role.Icon;
                return (
                  <div
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`group cursor-pointer bg-card p-5 sm:p-7 rounded-[12px] border-2 transition-all duration-300 transform hover:scale-[1.04] hover:shadow-terra active:scale-[0.96] animate-in fade-in slide-in-from-bottom-2 ${
                      formData.primaryRole === role.id
                        ? 'border-primary shadow-terra bg-gradient-to-br from-secondary to-card ring-2 ring-primary/20'
                        : 'border-primary/10 hover:border-primary/30 hover:shadow-terra'
                    }`}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[12px] flex items-center justify-center mb-4 transition-all duration-300 ${
                      formData.primaryRole === role.id 
                        ? 'bg-gradient-to-br from-primary to-accent text-white shadow-terra scale-105' 
                        : 'bg-primary/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105'
                    }`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2 truncate">{role.name}</h3>
                    <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{role.description}</p>
                    {formData.primaryRole === role.id && (
                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-primary animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 fill-primary" />
                        <span className="text-xs sm:text-sm font-semibold">Selected</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Primary Goal Section */}
          <div className="space-y-5 sm:space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Select your primary goal</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              {/* Fluency (Featured Card) */}
              <div
                onClick={() => handleGoalSelect("FLUENCY")}
                className={`group relative overflow-hidden rounded-[12px] p-6 sm:p-10 cursor-pointer transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.97] ${
                  formData.primaryGoal === "FLUENCY"
                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-terra ring-4 ring-primary/20'
                    : 'bg-card border-2 border-primary/10 hover:border-primary/30 hover:shadow-terra'
                }`}
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-[12px] flex items-center justify-center mb-5 sm:mb-7 transition-all duration-300 ${
                    formData.primaryGoal === "FLUENCY" ? 'bg-card/20 text-white backdrop-blur-sm' : 'bg-primary/10 text-primary group-hover:scale-110'
                  }`}>
                    <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex items-start justify-between mb-3 sm:mb-5">
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Fluency</h3>
                    {formData.primaryGoal === "FLUENCY" && (
                      <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 fill-current animate-in zoom-in duration-300" />
                    )}
                  </div>
                  <p className={`text-sm sm:text-lg leading-relaxed mb-5 sm:mb-7 ${
                    formData.primaryGoal === "FLUENCY" ? 'text-white/95' : 'text-muted-foreground'
                  }`}>
                    Speak naturally and confidently in any daily situation.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest ${
                      formData.primaryGoal === "FLUENCY" ? 'bg-card/25 text-white backdrop-blur-sm' : 'bg-primary/10 text-primary'
                    }`}>
                      Most Popular
                    </span>
                  </div>
                </div>
                {/* Decorative background */}
                <div className={`absolute -right-16 -bottom-16 w-72 h-72 rounded-full blur-3xl transition-all duration-500 ${
                  formData.primaryGoal === "FLUENCY" ? 'bg-card/15' : 'bg-primary/10 group-hover:bg-primary/15'
                }`}></div>
              </div>

              {/* Other Goals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {goals.slice(1).map((goal, index) => {
                  const IconComponent = goal.Icon;
                  return (
                    <div
                      key={goal.id}
                      onClick={() => handleGoalSelect(goal.id)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`group p-5 sm:p-7 rounded-[12px] cursor-pointer transition-all duration-300 transform hover:scale-[1.04] hover:shadow-terra active:scale-[0.96] animate-in fade-in slide-in-from-bottom-2 ${
                        formData.primaryGoal === goal.id
                          ? 'border-2 border-primary bg-gradient-to-br from-secondary to-card shadow-terra ring-2 ring-primary/20'
                          : 'bg-card border-2 border-primary/10 hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          formData.primaryGoal === goal.id 
                            ? 'bg-gradient-to-br from-primary to-accent text-white shadow-terra scale-105' 
                            : 'bg-primary/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105'
                        }`}>
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1 sm:mb-2">
                            <h3 className="text-sm sm:text-base font-bold text-foreground truncate">{goal.name}</h3>
                            {formData.primaryGoal === goal.id && (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary animate-in zoom-in duration-300 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug line-clamp-2">{goal.description}</p>
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
        <div className="mt-12 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <button
            onClick={onNext}
            disabled={!formData.primaryRole || !formData.primaryGoal}
            className={`group w-full sm:w-auto px-10 sm:px-20 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-[12px] shadow-terra transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-4 ${
              formData.primaryRole && formData.primaryGoal
                ? 'bg-primary text-white hover:shadow-terra hover:bg-primary/90'
                : 'bg-secondary text-muted-foreground cursor-not-allowed opacity-60'
            }`}
          >
            Next: Assess My Level
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center gap-3 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary fill-primary" />
            <span className="text-base font-medium">Takes less than 2 minutes to complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
