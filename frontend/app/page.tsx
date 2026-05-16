"use client"

import { FeaturesSection } from "@/components/landingPage/Features-section";
import { FooterSection } from "@/components/landingPage/Footer";
import { WorkingSection } from "@/components/landingPage/working-section";
import { FAQSection } from "@/components/landingPage/Faq";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/userAuth";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Sparkles, ArrowRight, PenTool, MessageSquare, Brain } from "lucide-react";
import Background from "@/components/backgrounds";

export default function Home() {
  const { user, loading, isNewUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      if (isNewUser) {
        router.replace("/user-profile");
      } else {
        router.replace("/Dashboard");
      }
    }
  }, [loading, user, isNewUser, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        
        {/* Hero Section wrapped in Terra-colored Background */}
        <Background>
          <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                <Sparkles className="w-4 h-4 text-accent" />
                Elevate Your English
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
                Master English with <br />
                <span className="text-primary italic">Rooted Warmth.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Experience a calm, AI-powered writing coach that grows with you. 
                Personalized feedback, organic progress, and focused mastery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  onClick={() => router.push("/auth/login")}
                  className="px-10 py-8 bg-primary hover:bg-primary/90 text-white rounded-[16px] text-xl font-bold shadow-terra transition-all hover:scale-[1.02] flex items-center gap-3"
                >
                  Begin Your Journey
                  <ArrowRight className="w-6 h-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => router.push("/auth/login")}
                  className="px-10 py-8 border-primary/20 text-primary bg-background hover:bg-primary/5 rounded-[16px] text-xl font-bold transition-all"
                >
                  Explore Features
                </Button>
              </div>

              {/* Social Proof / Trust */}
              <div className="mt-20 pt-10 border-t border-primary/5 flex flex-wrap justify-center gap-12 grayscale opacity-40">
                <div className="flex items-center gap-2 text-xl font-serif font-bold">
                  <Brain className="w-6 h-6" /> Cognitive AI
                </div>
                <div className="flex items-center gap-2 text-xl font-serif font-bold">
                  <PenTool className="w-6 h-6" /> Writing Coach
                </div>
                <div className="flex items-center gap-2 text-xl font-serif font-bold">
                  <MessageSquare className="w-6 h-6" /> Natural Flow
                </div>
              </div>
            </div>
          </section>
        </Background>

        <div className="space-y-0">
          <FeaturesSection />
          <WorkingSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    );
  }

  return null;
}
