"use client";

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
    { id: "conversation", name: "Conversation-based", icon: "forum", description: "Focus on speaking and listening" },
    { id: "visual", name: "Visual Learning", icon: "visibility", description: "Infographics and video content" },
    { id: "quiz", name: "Quick Quizzes", icon: "quiz", description: "Gamified short sessions" },
    { id: "reading", name: "Reading focused", icon: "menu_book", description: "Articles and literature analysis" },
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
    <div className="bg-gray-50 text-gray-900 font-body-md min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-indigo-600 font-['Plus_Jakarta_SANS'] tracking-tight">LinguistAI</div>
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-gray-400 font-['Plus_Jakarta_SANS'] font-semibold text-sm">Goals</span>
            <span className="text-gray-400 font-['Plus_Jakarta_SANS'] font-semibold text-sm">Level</span>
            <span className="text-indigo-600 border-b-2 border-indigo-600 pb-1 font-['Plus_Jakarta_SANS'] font-semibold text-sm">Interests</span>
            <span className="text-gray-400 font-['Plus_Jakarta_SANS'] font-semibold text-sm">Review</span>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <button className="text-sm font-semibold text-indigo-600 px-4 py-2 hover:bg-indigo-50 rounded-xl transition-colors">Skip</button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1">
          <div className="bg-indigo-600 h-full w-[75%] rounded-r-full shadow-[0_0_8px_rgba(79,70,229,0.4)]"></div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">What do you love?</h1>
          <p className="text-gray-600 text-lg">We'll use your interests to generate relevant practice material.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bento Grid Left: Interests */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-[0_4px_12px_rgba(79,70,229,0.08)] border border-gray-200/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-indigo-600">auto_awesome</span>
                <h2 className="text-2xl font-semibold">Topics of Interest</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {interestTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleInterestToggle(tag)}
                    className={`px-6 py-3 rounded-full border transition-all font-semibold ${
                      formData.interestTags?.includes(tag)
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-gray-300 bg-white hover:border-indigo-600 hover:text-indigo-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Asset */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <img
                alt="Collaborative learning environment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_SFWGicCXWv-5gA3_UfIV-jATbqUvn116ogSLQHBkHKCbK_t2DRzUqRGlPDBi39hzHWL2i6AQoCOwKtCdIV1E_sGVVsw18VighUqwk7T6-UaXFPRlMVH1k19U32c4uMEhigVBK7PUEjrbs7uKUuAKAX3nYUsF9Oqsvioi6qH_3FBP6LuFaxskPcKKAeFBwlRgW7P57SWobs2_ZiA9gEPcbhQAjHonePYKIwg_H9lyoHjcI2tr7g7XmfLwfEImP2fwb98KbPeNTs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-indigo-600/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Personalized content increases retention by 40%</p>
              </div>
            </div>
          </div>

          {/* Bento Grid Right: Learning Styles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-[0_4px_12px_rgba(79,70,229,0.08)] border border-gray-200/50">
              <h2 className="text-2xl font-semibold mb-4">Learning Style</h2>
              <div className="space-y-4">
                {learningStyles.map((style) => (
                  <div
                    key={style.id}
                    onClick={() => handleLearningStyleSelect(style.id)}
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] ${
                      formData.preferredLearningStyle === style.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-300 bg-white hover:border-indigo-600/50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      formData.preferredLearningStyle === style.id
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <span className="material-symbols-outlined" style={formData.preferredLearningStyle === style.id ? { fontVariationSettings: "'FILL' 1" } : {}}>
                        {style.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{style.name}</p>
                      <p className="text-sm text-gray-500">{style.description}</p>
                    </div>
                    {formData.preferredLearningStyle === style.id && (
                      <span className="material-symbols-outlined text-indigo-600">check_circle</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <button
            onClick={onSubmit}
            className="bg-indigo-600 text-white text-lg font-semibold px-12 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Finish & Start Learning
          </button>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            Your curriculum is 94% ready
          </p>
        </div>
      </main>

      {/* AI Mentor Corner Avatar */}
      <div className="fixed bottom-8 right-8 flex items-end gap-4 max-w-xs animate-in slide-in-from-right duration-500">
        <div className="bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-indigo-100 relative mb-12">
          <p className="text-sm font-medium text-gray-900">Great choices! I'm ready when you are.</p>
          <div className="absolute -bottom-2 right-0 w-4 h-4 bg-white border-r border-b border-indigo-100 rotate-45"></div>
        </div>
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg border-2 border-white overflow-hidden">
            <img
              alt="AI Learning Assistant"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhbfU0z-R69dlvpgVF550nIWiYla6Yru8AtrV-gDwt00xjRk6E9YgLF3guG0atdsxdDGcL0rI586G-blKfGTH54Dv6hc4BTK1sZGVRqDBhzltk1c_oFcVRwwSMyX5DrhL4T5PfnjPuWKO7GvSkekjfi6od3zhjzEI57bFFe2EePwBPvhKgSz-FCNaVByfz2v6CVpI_mNR7rC3rRkxDBf6aos-fBj7kOxPlAJ1orieChNo2OZJFcLZ0Ez_mlzF3U0xIrSKfj3VWUBw"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
