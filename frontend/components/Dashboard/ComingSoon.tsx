"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, Compass, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  title: string;
  description: string;
  icon?: any;
}

export default function ComingSoon({ title, description, icon: Icon = Compass }: ComingSoonProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      {/* Organic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          <Sparkles className="w-4 h-4 text-accent" />
          Expanding the Horizon
        </div>

        <div className="w-20 h-20 bg-card rounded-[20px] shadow-terra flex items-center justify-center mx-auto mb-8 border border-primary/5">
          <Icon className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
          {title} <br />
          <span className="text-primary italic">Coming Soon</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.push("/Dashboard/WritingCoach/practice")}
            size="lg"
            className="px-8 py-7 bg-primary hover:bg-primary/90 text-white rounded-[12px] text-lg font-bold shadow-terra transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            Go to Writing Coach
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-7 border-primary/20 text-primary bg-background hover:bg-primary/5 rounded-[12px] text-lg font-bold transition-all flex items-center gap-2"
          >
            <Timer className="w-5 h-5" />
            Notify Me
          </Button>
        </div>
      </motion.div>

      {/* Rhythmic floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 opacity-20 hidden lg:block"
      >
        <div className="w-16 h-16 border-2 border-primary rounded-[12px] rotate-12" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 opacity-10 hidden lg:block"
      >
        <div className="w-24 h-24 bg-accent rounded-full" />
      </motion.div>
    </div>
  );
}
