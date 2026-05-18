"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landingPage/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  ClipboardCheck,
  Compass,
  Layers3,
  Target,
  UserRoundCheck,
} from "lucide-react";

const personalizationInputs = [
  {
    title: "Role and context",
    description: "Student, professional, job seeker, or independent learner.",
    icon: UserRoundCheck,
  },
  {
    title: "Learning goal",
    description: "Fluency, exams, business communication, grammar, or culture.",
    icon: Target,
  },
  {
    title: "Current level",
    description: "Self-assessed reading and writing level to set the starting point.",
    icon: BarChart3,
  },
  {
    title: "Interests and weak areas",
    description: "Topics, learning style, daily commitment, and improvement focus.",
    icon: Compass,
  },
];

const outcomes = [
  "Relevant writing prompts",
  "Feedback aligned to learner goals",
  "Mistake memory based on actual submissions",
  "Progress tracking that reflects continued practice",
];

export default function PersonalizedLearningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6">
        <section className="max-w-5xl mx-auto text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-7">
              <Layers3 className="w-3.5 h-3.5 text-accent" />
              Personalized Learning
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight mb-7">
              Learning paths informed by each learner&apos;s profile.
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              EchoLearn uses onboarding, goals, level assessment, interests, and
              weak areas to make practice more relevant from the first session.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24 sm:mb-32">
          {personalizationInputs.map((input, index) => (
            <motion.div
              key={input.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/10"
            >
              <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mb-5">
                <input.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{input.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{input.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="bg-secondary rounded-[12px] p-8 sm:p-10 border border-primary/10 shadow-terra">
            <ClipboardCheck className="w-10 h-10 text-primary mb-7" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-5">
              Assessment becomes the operating context
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The profile is not decorative. It defines the learner&apos;s starting
              point and gives the system context for better prompts, feedback, and
              improvement tracking.
            </p>
            <Link href="/auth/login">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-[12px] px-6 py-6 font-bold shadow-terra">
                Start Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="bg-card rounded-[12px] p-8 sm:p-10 border border-primary/10 shadow-terra">
            <BookMarked className="w-10 h-10 text-accent mb-7" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              What personalization improves
            </h2>
            <div className="space-y-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3 rounded-[12px] bg-primary/5 border border-primary/10 p-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                  <p className="font-semibold text-foreground/80">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
