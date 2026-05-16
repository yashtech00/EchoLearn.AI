"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  CheckCircle2,
  MessageSquareQuote,
  Mic,
  Radar,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Adaptive AI Coaching",
    desc: "Feedback adjusts to your level, goals, and repeated mistakes so every session feels personal.",
    icon: Brain,
    accent: "bg-primary/5",
  },
  {
    title: "Speaking Intelligence",
    desc: "Fluency, pronunciation, and confidence cues are surfaced in real time while you practice.",
    icon: Mic,
    accent: "bg-accent/5",
  },
  {
    title: "Scenario Roleplay",
    desc: "Practice interviews, meetings, travel, and everyday conversations in realistic guided flows.",
    icon: MessageSquareQuote,
    accent: "bg-primary/5",
  },
  {
    title: "Mistake Retention",
    desc: "The platform remembers weak spots and turns them into targeted drills that improve recall.",
    icon: Radar,
    accent: "bg-accent/5",
  },
  {
    title: "Faster Thinking",
    desc: "Timed prompts and pressure-based exercises help you respond naturally instead of translating.",
    icon: Zap,
    accent: "bg-primary/5",
  },
  {
    title: "Executive Analytics",
    desc: "Track momentum, strengths, and consistency with dashboards built to make improvement visible.",
    icon: BarChart3,
    accent: "bg-accent/5",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 border-t border-primary/5">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Product Capabilities
          </span>

          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground mb-8">
            A sharper system for <br />
            <span className="text-primary italic">serious improvement</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Built to feel credible and premium. Every feature is designed to help you 
            practice with clarity, get better feedback, and see progress you can trust.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative bg-card rounded-[24px] p-8 shadow-terra border border-primary/5 transition-all duration-500 hover:scale-[1.02] hover:border-primary/20"
              >
                <div className={`w-16 h-16 rounded-[16px] ${feature.accent} flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/10`}>
                  <Icon size={28} className="text-primary" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {feature.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary/60">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Measurable Results
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] bg-primary p-12 text-white shadow-terra relative overflow-hidden"
        >
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Structured, not generic.</h3>
            <p className="text-xl text-white/80 leading-relaxed font-sans">
              EchoLearn AI balances product storytelling and visual polish, so you understand 
              the value quickly without the noise. Our interface is designed to be as 
              calm and focused as your learning journey.
            </p>
          </div>
          {/* Subtle organic element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
