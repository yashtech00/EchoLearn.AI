"use client";

import { Sparkles, Brain, MessageCircle, Eye, Zap, BookOpen, CheckCircle2, Rocket, ShieldCheck, ArrowLeft } from "lucide-react";

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

interface InterestsFormProps {
  formData: UserProfileFormData;
  setFormData: (data: UserProfileFormData) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function InterestsForm({ formData, setFormData, onSubmit, onBack }: InterestsFormProps) {
  const interestTags = [
    "Finance", "Sports", "Technology", "Movies", "Science", 
    "Art", "Travel", "History", "Cooking", "Fashion"
  ];

  const learningStyles = [
    { id: "conversation", name: "Conversation-based", Icon: MessageCircle, description: "Focus on speaking and listening" },
    { id: "visual", name: "Visual Learning", Icon: Eye, description: "Infographics and video content" },
    { id: "quiz", name: "Quick Quizzes", Icon: Zap, description: "Gamified short sessions" },
    { id: "reading", name: "Reading focused", Icon: BookOpen, description: "Articles and literature analysis" },
  ];

  const handleInterestToggle = (tag: string) => {
    const currentInterests = formData.interestTags || [];
    const newInterests = currentInterests.includes(tag)
      ? currentInterests.filter((t: string) => t !== tag)
      : [...currentInterests, tag];
    setFormData({ ...formData, interestTags: newInterests });
  };

  const handleLearningStyleSelect = (styleId: string) => {
    setFormData({ ...formData, preferredLearningStyle: styleId });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            What do you love?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;ll use your interests to generate relevant practice material that keeps you engaged.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {/* Bento Grid Left: Interests */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="bg-card p-6 sm:p-9 rounded-[12px] shadow-terra border border-primary/10 hover:shadow-terra transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-primary to-primary flex items-center justify-center shadow-terra">
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Topics of Interest</h2>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:gap-4">
                {interestTags.map((tag, index) => (
                  <button
                    key={tag}
                    onClick={() => handleInterestToggle(tag)}
                    style={{ animationDelay: `${index * 30}ms` }}
                    className={`px-4 sm:px-7 py-2 sm:py-3.5 rounded-full border-2 transition-all duration-300 text-sm sm:text-base font-bold transform hover:scale-[1.05] active:scale-[0.95] animate-in fade-in zoom-in ${
                      formData.interestTags?.includes(tag)
                        ? 'border-primary bg-primary text-white shadow-terra ring-2 ring-primary/20'
                        : 'border-primary/20 bg-card hover:border-primary/30 hover:shadow-md text-foreground'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Asset */}
            <div className="relative h-48 sm:h-72 rounded-[12px] overflow-hidden shadow-terra group">
              <div
                aria-label="Collaborative learning environment"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAa_SFWGicCXWv-5gA3_UfIV-jATbqUvn116ogSLQHBkHKCbK_t2DRzUqRGlPDBi39hzHWL2i6AQoCOwKtCdIV1E_sGVVsw18VighUqwk7T6-UaXFPRlMVH1k19U32c4uMEhigVBK7PUEjrbs7uKUuAKAX3nYUsF9Oqsvioi6qH_3FBP6LuFaxskPcKKAeFBwlRgW7P57SWobs2_ZiA9gEPcbhQAjHonePYKIwg_H9lyoHjcI2tr7g7XmfLwfEImP2fwb98KbPeNTs)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-primary/45 to-transparent flex items-end p-5 sm:p-8">
                <p className="text-white font-bold text-sm sm:text-xl drop-shadow-lg">Personalized content increases retention by 40%</p>
              </div>
            </div>
          </div>

          {/* Bento Grid Right: Learning Styles */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div className="bg-card p-6 sm:p-9 rounded-[12px] shadow-terra border border-primary/10 hover:shadow-terra transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-primary to-primary flex items-center justify-center shadow-terra">
                  <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Learning Style</h2>
              </div>
              <div className="space-y-3.5 sm:space-y-4">
                {learningStyles.map((style, index) => {
                  const IconComponent = style.Icon;
                  return (
                    <div
                      key={style.id}
                      onClick={() => handleLearningStyleSelect(style.id)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`flex items-center p-4 sm:p-6 rounded-[12px] border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] animate-in fade-in slide-in-from-right-2 ${
                        formData.preferredLearningStyle === style.id
                          ? 'border-primary bg-gradient-to-br from-secondary to-card shadow-terra ring-2 ring-primary/20 font-medium'
                          : 'border-primary/20 bg-card hover:border-primary/30 hover:shadow-terra'
                      }`}
                    >
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-[12px] flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 ${
                        formData.preferredLearningStyle === style.id
                          ? 'bg-gradient-to-br from-primary to-primary text-white shadow-terra scale-105'
                          : 'bg-primary/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1 sm:mb-2">
                          <p className="text-sm sm:text-base font-bold text-foreground truncate">{style.name}</p>
                          {formData.preferredLearningStyle === style.id && (
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary animate-in zoom-in duration-300 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug line-clamp-2">{style.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 sm:mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-4 sm:gap-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <button
            onClick={onBack}
            className="group w-full md:w-auto px-10 py-4 sm:py-5 rounded-[12px] border-2 border-primary/20 text-foreground text-base sm:text-lg font-bold hover:bg-secondary hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-terra active:scale-[0.95]"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!formData.preferredLearningStyle}
            className={`group w-full sm:w-auto px-10 sm:px-20 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-[12px] shadow-terra transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-4 ${
              formData.preferredLearningStyle
                ? 'bg-primary text-white hover:shadow-terra hover:bg-primary/90'
                : 'bg-secondary text-muted-foreground cursor-not-allowed opacity-60'
            }`}
          >
            Finish & Start Learning
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
            <span className="text-sm sm:text-base font-medium">Your curriculum is 94% ready</span>
          </div>
        </div>
      </div>

      
      </div>
  );
}
