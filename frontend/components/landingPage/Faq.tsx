"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does EchoLearn.AI improve my English?",
      answer:
        "EchoLearn.AI uses AI to analyze your writing and speaking in real-time, providing corrections, suggestions, and personalized feedback based on your specific mistakes and learning patterns.",
    },
    {
      question: "Does it support speaking practice?",
      answer:
        "Yes, you can practice speaking using our immersive modules and receive instant feedback on fluency, grammar, and sentence structure.",
    },
    {
      question: "What is the Mistake Memory Engine?",
      answer:
        "It's a unique system that tracks your repeated mistakes over time. Instead of just correcting you once, it helps you focus on eliminating long-term habits through targeted insights.",
    },
    {
      question: "Can I practice real-life conversations?",
      answer:
        "Absolutely. Roleplay mode lets you simulate scenarios like job interviews, workplace meetings, and casual travel conversations in a safe, AI-guided environment.",
    },
    {
      question: "Is EchoLearn.AI suitable for beginners?",
      answer:
        "Yes, the platform adapts to your current level. Whether you're building foundational confidence or polishing professional fluency, our feedback scales with your ability.",
    },
    {
      question: "Do I need to pay to use it?",
      answer:
        "You can start exploring EchoLearn with our core features. We aim to keep learning accessible while offering advanced AI capabilities for dedicated learners.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 bg-background border-t border-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
            <MessageCircleQuestion className="h-4 w-4 text-accent" />
            Curiosities
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about starting your journey with EchoLearn.AI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-[16px] bg-card border transition-all duration-300 ${
                openIndex === index
                  ? "border-primary/20 shadow-terra"
                  : "border-primary/5 hover:border-primary/20 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center transition-colors"
              >
                <span className="text-lg font-serif font-bold text-foreground">{faq.question}</span>
                <span className="text-primary transition-transform duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-muted-foreground leading-relaxed border-t border-primary/5 pt-6 font-medium">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
