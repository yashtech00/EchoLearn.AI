"use client";

import { Sparkles, Brain, MessageCircle, Eye, Zap, BookOpen, CheckCircle2, Rocket, ShieldCheck } from "lucide-react";

interface InterestsFormProps {
  formData: any;
  setFormData: (data: any) => void;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            What do you love?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'll use your interests to generate relevant practice material that keeps you engaged.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {/* Bento Grid Left: Interests */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="bg-white p-6 sm:p-9 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Topics of Interest</h2>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:gap-4">
                {interestTags.map((tag, index) => (
                  <button
                    key={tag}
                    onClick={() => handleInterestToggle(tag)}
                    style={{ animationDelay: `${index * 30}ms` }}
                    className={`px-4 sm:px-7 py-2 sm:py-3.5 rounded-full border-2 transition-all duration-300 text-sm sm:text-base font-bold transform hover:scale-[1.05] active:scale-[0.95] animate-in fade-in zoom-in ${
                      formData.interestTags?.includes(tag)
                        ? 'border-indigo-500 bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-lg ring-2 ring-indigo-200'
                        : 'border-gray-300 bg-white hover:border-indigo-300 hover:shadow-md text-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Asset */}
            <div className="relative h-48 sm:h-72 rounded-3xl overflow-hidden shadow-xl group">
              <img
                alt="Collaborative learning environment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_SFWGicCXWv-5gA3_UfIV-jATbqUvn116ogSLQHBkHKCbK_t2DRzUqRGlPDBi39hzHWL2i6AQoCOwKtCdIV1E_sGVVsw18VighUqwk7T6-UaXFPRlMVH1k19U32c4uMEhigVBK7PUEjrbs7uKUuAKAX3nYUsF9Oqsvioi6qH_3FBP6LuFaxskPcKKAeFBwlRgW7P57SWobs2_ZiA9gEPcbhQAjHonePYKIwg_H9lyoHjcI2tr7g7XmfLwfEImP2fwb98KbPeNTs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-600/40 to-transparent flex items-end p-5 sm:p-8">
                <p className="text-white font-bold text-sm sm:text-xl drop-shadow-lg">Personalized content increases retention by 40%</p>
              </div>
            </div>
          </div>

          {/* Bento Grid Right: Learning Styles */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div className="bg-white p-6 sm:p-9 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                  <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Learning Style</h2>
              </div>
              <div className="space-y-3.5 sm:space-y-4">
                {learningStyles.map((style, index) => {
                  const IconComponent = style.Icon;
                  return (
                    <div
                      key={style.id}
                      onClick={() => handleLearningStyleSelect(style.id)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`flex items-center p-4 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] animate-in fade-in slide-in-from-right-2 ${
                        formData.preferredLearningStyle === style.id
                          ? 'border-green-500 bg-gradient-to-br from-green-50 via-white to-green-50 shadow-xl ring-2 ring-green-200 font-medium'
                          : 'border-gray-300 bg-white hover:border-green-300 hover:shadow-lg'
                      }`}
                    >
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 ${
                        formData.preferredLearningStyle === style.id
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600'
                      }`}>
                        <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1 sm:mb-2">
                          <p className="text-sm sm:text-base font-bold text-gray-900 truncate">{style.name}</p>
                          {formData.preferredLearningStyle === style.id && (
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 fill-green-600 animate-in zoom-in duration-300 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-600 leading-snug line-clamp-2">{style.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 sm:mt-20 flex flex-col items-center gap-4 sm:gap-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <button
            onClick={onSubmit}
            disabled={!formData.preferredLearningStyle}
            className={`group w-full sm:w-auto px-10 sm:px-20 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-4 ${
              formData.preferredLearningStyle
                ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white hover:shadow-indigo-500/50 hover:from-indigo-700 hover:to-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
            }`}
          >
            Finish & Start Learning
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center gap-2 text-gray-600">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 fill-emerald-500" />
            <span className="text-sm sm:text-base font-medium">Your curriculum is 94% ready</span>
          </div>
        </div>
      </div>

      
      </div>
  );
}
