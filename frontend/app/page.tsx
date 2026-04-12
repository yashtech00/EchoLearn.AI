"use client"


import Background from "@/components/backgrounds";

import { FeaturesSection } from "@/components/landingPage/Features-section";
import { FooterSection } from "@/components/landingPage/Footer";
import { WorkingSection } from "@/components/landingPage/working-section";
import { FAQSection } from "@/components/landingPage/Faq";



export default function Home() {
  return (
    <div>
      <Background />
      <FeaturesSection />
      <WorkingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
