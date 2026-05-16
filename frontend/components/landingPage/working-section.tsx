import { motion } from "framer-motion";
import { ArrowRight, AudioLines, BrainCircuit, ChartNoAxesColumn, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Start with the right practice mode",
    desc: "Choose focused speaking, writing, or scenario-based practice depending on the skill you want to strengthen.",
    label: "01",
    stat: "Speaking, writing, roleplay",
    icon: Sparkles,
  },
  {
    title: "Respond naturally in real time",
    desc: "Interact with AI as if you were in a real conversation, not a textbook exercise, so your practice feels useful immediately.",
    label: "02",
    stat: "Live conversational interaction",
    icon: AudioLines,
  },
  {
    title: "Receive precise, actionable feedback",
    desc: "Get corrections on clarity, grammar, phrasing, fluency, and confidence with suggestions you can apply right away.",
    label: "03",
    stat: "Clear corrections with guidance",
    icon: BrainCircuit,
  },
  {
    title: "See growth over time",
    desc: "Progress is tracked across sessions so learners can spot improvement patterns and stay consistent with confidence.",
    label: "04",
    stat: "Measured progress and momentum",
    icon: ChartNoAxesColumn,
  },
];

export const WorkingSection = () => {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 border-t border-primary/5">
      {/* Subtle organic background elements */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/5 blur-3xl opacity-30" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-accent/5 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              How It Works
            </span>

            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground mb-8">
              A clearer path from <br />
              <span className="text-primary italic">practice to fluency</span>
            </h2>

            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experience an intuitive learning journey. Instead of generic lists, 
              we guide you through a polished, focused workflow that respects 
              your time and intelligence.
            </p>
          </div>

          <div className="rounded-[24px] border border-primary/10 bg-primary/5 p-8 shadow-terra backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
              Why this flow works
            </p>
            <p className="text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
              Understand what happens next, why it matters, and what results you get.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trust is built through transparency. Our platform makes your learning 
              visible and your progress undeniable from the first session.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group grid gap-6 rounded-[24px] border border-primary/5 bg-card p-8 shadow-terra transition-all duration-500 hover:scale-[1.01] hover:border-primary/20 md:grid-cols-[120px_minmax(0,1fr)_260px] md:items-center"
            >
              <div className="flex items-center gap-6 md:block">
                <div className="flex h-16 w-16 items-center justify-center rounded-[16px] bg-primary text-white shadow-terra">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mt-0 md:mt-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
                    Step
                  </div>
                  <div className="text-3xl font-serif font-bold text-accent">
                    {step.label}
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 rounded-[16px] border border-primary/5 bg-primary/5 p-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-2">
                    Outcome
                  </div>
                  <p className="text-sm font-bold text-primary leading-tight">
                    {step.stat}
                  </p>
                </div>

                {idx < steps.length - 1 ? (
                  <ArrowRight className="h-6 w-6 shrink-0 text-primary/30 transition-transform group-hover:translate-x-2" />
                ) : (
                  <span className="rounded-full bg-accent/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20">
                    Mastery
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
