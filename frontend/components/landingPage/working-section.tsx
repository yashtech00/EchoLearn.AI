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
    <section className="relative overflow-hidden bg-[#f7f8fa] px-6 py-28">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_72%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-sky-500" />
              How It Works
            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              A clearer path from
              <span className="block text-sky-600">practice to fluency</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              The experience should feel intuitive and premium. Instead of a generic step list, this section now
              explains the learning journey like a polished product workflow.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.28)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Why this flow works
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              Learners understand what happens next, why it matters, and what result they get.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
              That makes the product feel more trustworthy and more valuable from the first scroll.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group grid gap-5 rounded-[30px] border border-slate-200/75 bg-white p-6 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_70px_-38px_rgba(15,23,42,0.36)] md:grid-cols-[110px_minmax(0,1fr)_230px] md:items-center md:p-7"
            >
              <div className="flex items-center gap-4 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-0 md:mt-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Step
                  </div>
                  <div className="mt-1 text-3xl font-semibold tracking-tight text-orange-500">
                    {step.label}
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Outcome
                  </div>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    {step.stat}
                  </p>
                </div>

                {idx < steps.length - 1 ? (
                  <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1" />
                ) : (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Growth
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
