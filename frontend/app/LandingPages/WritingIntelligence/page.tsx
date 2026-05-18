"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landingPage/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  FileSearch,
  PenLine,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    title: "AI writing practice",
    description:
      "Learners respond to guided prompts designed for focused English composition.",
    icon: PenLine,
  },
  {
    title: "Structured feedback",
    description:
      "Submissions are reviewed for clarity, grammar, tone, vocabulary, and flow.",
    icon: Brain,
  },
  {
    title: "Rewrite guidance",
    description:
      "Learners can improve the same response with a clearer second attempt.",
    icon: RefreshCw,
  },
  {
    title: "Performance reports",
    description:
      "Reports translate writing output into practical improvement signals.",
    icon: FileSearch,
  },
];

export default function WritingIntelligencePage() {
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
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Writing Intelligence
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight mb-7">
              Professional feedback for better English writing.
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              EchoLearn turns each writing attempt into a practical improvement cycle:
              practice, feedback, rewrite, and report.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[12px] p-8 sm:p-10 text-white shadow-terra"
          >
            <BookOpen className="w-10 h-10 text-accent mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-5">
              From blank page to actionable insight
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              This is centered on writing because it exposes grammar, vocabulary,
              structure, and clarity in one high-signal activity.
            </p>
            <Link href="/auth/login">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-[12px] px-6 py-6 font-bold">
                Start Writing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-card rounded-[12px] p-6 shadow-terra border border-primary/10"
              >
                <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mb-5">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{capability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto bg-card rounded-[12px] p-6 sm:p-10 shadow-terra border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Prompt", "Draft", "Feedback", "Rewrite"].map((step, index) => (
              <div key={step} className="rounded-[12px] bg-secondary/60 border border-primary/10 p-5">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                  Step {index + 1}
                </span>
                <p className="text-xl font-serif font-bold mt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
