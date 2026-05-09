"use client"

import Background from "@/components/backgrounds";
import { FeaturesSection } from "@/components/landingPage/Features-section";
import { FooterSection } from "@/components/landingPage/Footer";
import { WorkingSection } from "@/components/landingPage/working-section";
import { FAQSection } from "@/components/landingPage/Faq";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/userAuth";
import { Button } from "@/components/ui/button";
import {Navbar} from "@/components/Navbar";

export default function Home() {
  const { user, loading, isNewUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if user is logged in
    if (!loading && user) {
      if (isNewUser) {
        router.replace("/user-profile");
      } else {
        router.replace("/Dashboard");
      }
    }
  }, [loading, user, isNewUser, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Show landing page for non-logged in users
  if (!user) {
    return (
      <div>
        <Background />
        <div className="min-h-screen">
          {/* Hero Section with CTA */}
          <section className="relative py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Master English Writing with AI Coaching
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get personalized feedback, track your progress, and improve your writing skills with our intelligent AI coach.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => router.push("/auth/login")}
                  className="px-8 py-3"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => router.push("/auth/login")}
                  className="px-8 py-3"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </section>
<Navbar />
          <FeaturesSection />
          <WorkingSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    );
  }

  // Show loading while redirecting logged-in users
  return <div>Loading...</div>;
}
