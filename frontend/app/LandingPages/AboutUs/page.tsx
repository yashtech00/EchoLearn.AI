"use client";

import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landingPage/Footer";
import { motion } from "framer-motion";
import { Heart, Sparkles, Target, Users, BookOpen, Coffee } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="pt-40 pb-24 px-6">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Heart className="w-3.5 h-3.5 text-accent" />
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Rooted in <span className="text-primary italic">learning</span>, <br />
              designed for <span className="text-accent italic">connection</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe language learning shouldn't be a sterile, clinical experience. 
              EchoLearn AI was born from the desire to create a calm, organic space 
              where technology serves the human journey, not the other way around.
            </p>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-[24px] p-12 shadow-terra border border-primary/5 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-[16px] bg-primary/5 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower global learners with a sophisticated, AI-driven environment 
                that mirrors the natural nuances of language mastery. We aim to 
                eliminate the "robotic" feel of modern apps and replace it with 
                rooted warmth and precise coaching.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-[24px] p-12 shadow-terra border border-primary/5 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-[16px] bg-accent/5 flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Community</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're building more than a tool; we're building a home for those who 
                value depth over shortcuts. Our users are thinkers, professionals, 
                and dreamers who know that true fluency is a journey worth taking 
                with care and intention.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full -ml-24 -mb-24 blur-3xl" />
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">What defines us</h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Human-Centric AI",
                desc: "We use technology to enhance human intuition, not replace it."
              },
              {
                icon: Coffee,
                title: "Calm Focused",
                desc: "No streaks-for-stress. We prioritize deep focus and peaceful progress."
              },
              {
                icon: BookOpen,
                title: "Contextual Depth",
                desc: "Language isn't just words; it's culture, intent, and subtle nuance."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-primary/5 rounded-[20px] p-8 border border-primary/5 hover:border-primary/20 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
