"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full"
      >
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-card rounded-[24px] shadow-terra flex items-center justify-center mx-auto border border-primary/5 relative z-10">
            <Search className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-4 border-2 border-dashed border-primary/20 rounded-full"
          />
        </div>

        <h1 className="text-8xl font-serif font-black text-primary mb-4">404</h1>
        
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
          Path Not Found
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          It seems the page you are looking for has wandered off into the forest. 
          Let&apos;s get you back to familiar ground.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/Dashboard">
            <Button
              size="lg"
              className="px-8 py-7 bg-primary hover:bg-primary/90 text-white rounded-[12px] text-lg font-bold shadow-terra transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Dashboard
            </Button>
          </Link>
          
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-7 border-primary/20 text-primary bg-transparent hover:bg-primary/5 rounded-[12px] text-lg font-bold transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Return Home
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 opacity-20"
      >
        <AlertCircle className="w-8 h-8 text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 opacity-20"
      >
        <div className="w-4 h-4 bg-accent rounded-full" />
      </motion.div>
    </div>
  );
}
