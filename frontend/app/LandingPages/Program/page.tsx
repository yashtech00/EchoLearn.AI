"use client";

import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landingPage/Footer";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  MessageSquare, 
  PenTool, 
  Zap, 
  Target, 
  Award,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramPage() {
  const tracks = [
    {
      title: "The Professional Path",
      level: "Intermediate to Advanced",
      focus: "Workplace communication, emails, and presentations.",
      icon: MessageSquare,
      color: "bg-primary/5",
      features: ["Business Etiquette", "Technical Clarity", "Executive Presence"]
    },
    {
      title: "The Creative Narrative",
      level: "All Levels",
      focus: "Expressive writing, storytelling, and personal branding.",
      icon: PenTool,
      color: "bg-accent/5",
      features: ["Vivid Vocabulary", "Narrative Flow", "Personal Voice"]
    },
    {
      title: "The Mastery Engine",
      level: "Advanced to C2",
      focus: "Perfecting nuance, high-level grammar, and academic precision.",
      icon: Target,
      color: "bg-primary/5",
      features: ["Nuance Mastery", "Logic & Cohesion", "Complex Structures"]
    }
  ];

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
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              Learning Tracks
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              A curriculum that <span className="text-primary italic">evolves</span> <br />
              with your <span className="text-accent italic">ambition</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don't believe in one-size-fits-all lessons. Our AI-driven programs 
              are designed to adapt to your specific goals, mapping a peaceful 
              yet rigorous path toward your desired level of English mastery.
            </p>
          </motion.div>
        </section>

        {/* Tracks Grid */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-[24px] p-10 shadow-terra border border-primary/5 flex flex-col hover:scale-[1.02] transition-transform duration-500"
            >
              <div className={`w-16 h-16 rounded-[16px] ${track.color} flex items-center justify-center mb-8`}>
                <track.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2 block">
                  {track.level}
                </span>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                  {track.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {track.focus}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {track.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
                    <Zap className="w-4 h-4 text-accent" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button className="w-full py-6 bg-primary/5 border border-primary/10 text-primary hover:bg-primary hover:text-white rounded-[12px] font-bold transition-all group">
                Explore Curriculum
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </section>

        {/* The Methodology */}
        <section className="max-w-6xl mx-auto mb-32 bg-primary rounded-[32px] p-12 md:p-20 text-white shadow-terra relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Our Rooted Warmth <br />
                <span className="italic opacity-80">Methodology.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cognitive Synchronization</h4>
                    <p className="text-white/70 leading-relaxed">
                      We map our feedback to how the brain actually acquires language 
                      nuance, ensuring long-term retention over short-term memorization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Adaptive Pacing</h4>
                    <p className="text-white/70 leading-relaxed">
                      The platform senses your cognitive load. If you're struggling, 
                      we simplify the context. If you're thriving, we push the boundary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-[24px] border border-white/10 p-10">
              <blockquote className="text-2xl font-serif italic leading-relaxed mb-8">
                "Learning a language isn't about collecting words; it's about building 
                a new home for your thoughts. EchoLearn provided the peaceful 
                architecture I needed."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20" />
                <div>
                  <p className="font-bold">Sofia Chen</p>
                  <p className="text-sm opacity-60">Global Marketing Lead</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-64 -mb-64 blur-3xl" />
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
