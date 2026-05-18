"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landingPage/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ClipboardList,
  FileText,
  PenTool,
  Sparkles,
} from "lucide-react";

const platformPillars = [
  {
    title: "Diagnostic onboarding",
    description:
      "Capture role, goals, current level, interests, and weak areas before practice begins.",
    icon: ClipboardList,
  },
  {
    title: "Guided writing practice",
    description:
      "Give learners focused prompts and a structured writing surface for deliberate practice.",
    icon: PenTool,
  },
  {
    title: "Feedback intelligence",
    description:
      "Convert each submission into corrections, rewrite guidance, and pattern-level learning signals.",
    icon: Brain,
  },
  {
    title: "Progress visibility",
    description:
      "Track XP, streaks, levels, activity, and completed sessions from the learner dashboard.",
    icon: BarChart3,
  },
];

const workflow = [
  "Learner completes a concise assessment",
  "Platform creates a personalized learning context",
  "Learner writes against a relevant prompt",
  "AI returns feedback, rewrite direction, and reports",
  "Progress and recurring mistakes update over time",
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6">
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-7">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              AI English Learning Platform
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight mb-7">
              A focused platform for measurable English improvement.
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              EchoLearn brings assessment, writing practice, AI feedback, mistake memory,
              and progress tracking into one professional learning workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/auth/login">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-[12px] px-7 py-6 font-bold shadow-terra">
                  Start Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/LandingPages/WritingIntelligence">
                <Button variant="outline" className="w-full sm:w-auto rounded-[12px] px-7 py-6 border-primary/20 text-primary hover:bg-primary/5 font-bold">
                  View Writing Intelligence
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card rounded-[12px] shadow-terra border border-primary/10 p-5 sm:p-7"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-1">
                  Platform Snapshot
                </p>
                <h2 className="text-2xl font-serif font-bold">How it works</h2>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-3">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-[12px] bg-primary/5 border border-primary/10 p-4">
                  <span className="w-8 h-8 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-foreground/80">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto mb-24 sm:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
              Built around the learner journey
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This keeps the experience intentionally narrow: assess, practice,
              receive feedback, and improve with visible progress.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformPillars.map((pillar) => (
              <div key={pillar.title} className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/10">
                <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto bg-primary rounded-[12px] p-8 sm:p-12 text-white shadow-terra">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["MVP-ready workflow", "Personal context engine", "Progress-led retention"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent" />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
