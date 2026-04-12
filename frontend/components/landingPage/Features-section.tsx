"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  CheckCircle2,
  MessageSquareQuote,
  Mic,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Adaptive AI Coaching",
    desc: "Feedback adjusts to your level, goals, and repeated mistakes so every session feels personal.",
    icon: Brain,
    accent: "from-cyan-500/15 via-sky-500/10 to-transparent",
  },
  {
    title: "Speaking Intelligence",
    desc: "Fluency, pronunciation, and confidence cues are surfaced in real time while you practice.",
    icon: Mic,
    accent: "from-orange-500/18 via-amber-400/10 to-transparent",
  },
  {
    title: "Scenario Roleplay",
    desc: "Practice interviews, meetings, travel, and everyday conversations in realistic guided flows.",
    icon: MessageSquareQuote,
    accent: "from-emerald-500/16 via-teal-400/10 to-transparent",
  },
  {
    title: "Mistake Retention",
    desc: "The platform remembers weak spots and turns them into targeted drills that improve recall.",
    icon: Radar,
    accent: "from-violet-500/14 via-fuchsia-400/8 to-transparent",
  },
  {
    title: "Faster Thinking in English",
    desc: "Timed prompts and pressure-based exercises help you respond naturally instead of translating.",
    icon: Zap,
    accent: "from-blue-600/16 via-indigo-400/10 to-transparent",
  },
  {
    title: "Executive-Style Progress Analytics",
    desc: "Track momentum, strengths, and consistency with dashboards built to make improvement visible.",
    icon: BarChart3,
    accent: "from-slate-500/16 via-zinc-400/10 to-transparent",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.1),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            Product Capabilities
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            A sharper learning system for
            <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
              serious English improvement
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Built to feel credible and premium, not gimmicky. Every feature is designed to help learners
            practice with clarity, get better feedback, and see progress they can trust.
          </p>
        </motion.div>

        <div className="mt-18 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white p-7 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_24px_90px_-40px_rgba(15,23,42,0.38)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition duration-500 group-hover:opacity-100`} />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-slate-100/70 blur-2xl transition duration-500 group-hover:bg-white/80" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-slate-950 text-white shadow-lg shadow-slate-950/10">
                      <Icon size={24} />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Core Feature
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-[15px]">
                    {feature.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Designed for measurable, repeatable improvement
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-5 rounded-[32px] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_30px_90px_-40px_rgba(2,6,23,0.7)] md:grid-cols-3"
        >
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              <ShieldCheck className="h-4 w-4" />
              Quality Signal
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight">Structured, not generic</p>
          </div>

          <p className="text-sm leading-7 text-slate-300 md:text-[15px]">
            These tools are presented like a serious product suite, with clarity, confidence, and a cleaner
            hierarchy that feels far more trustworthy.
          </p>

          <p className="text-sm leading-7 text-slate-300 md:text-[15px]">
            The section now balances product storytelling and visual polish, so visitors understand the value
            quickly without the page feeling busy or startup-template-like.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
