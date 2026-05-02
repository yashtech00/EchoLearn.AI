"use client";
import { useState } from "react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does EchoLearn.AI improve my English?",
      answer:
        "EchoLearn.AI uses AI to analyze your writing and speaking in real-time, providing corrections, suggestions, and personalized feedback based on your mistakes.",
    },
    {
      question: "Does it support speaking practice?",
      answer:
        "Yes, you can practice speaking using your microphone and receive instant feedback on fluency, grammar, and sentence structure.",
    },
    {
      question: "What is the Mistake Memory Engine?",
      answer:
        "It tracks your repeated mistakes and helps you focus on improving weak areas with personalized insights and suggestions.",
    },
    {
      question: "Can I practice real-life conversations?",
      answer:
        "Absolutely. Roleplay mode lets you simulate real scenarios like job interviews, meetings, and casual conversations with AI.",
    },
    {
      question: "Is EchoLearn.AI suitable for beginners?",
      answer:
        "Yes, it adapts to your level and helps you improve step by step, whether you're a beginner or advanced learner.",
    },
    {
      question: "Do I need to pay to use it?",
      answer:
        "You can start with free features, and advanced capabilities may be added later as premium options.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to know about EchoLearn.AI
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl bg-gray-900 border transition-all duration-200 ${
                openIndex === index
                  ? "border-blue-500"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-800/50 rounded-xl transition-colors"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span className="text-orange-400 text-xl font-bold ml-4 shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
