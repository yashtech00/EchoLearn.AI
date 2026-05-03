"use client"


import Background from "@/components/backgrounds";

import { FeaturesSection } from "@/components/landingPage/Features-section";
import { FooterSection } from "@/components/landingPage/Footer";
import { WorkingSection } from "@/components/landingPage/working-section";
import { FAQSection } from "@/components/landingPage/Faq";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/userAuth";


export default function Home() {

  const { user, loading, isNewUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (isNewUser) {
                router.replace("/pages/UserProfile");
            } else if (user) {
                router.replace("/pages/Dashboard");
            } else {
                router.replace("/login");
            }
        }
    }, [loading, user, isNewUser]);
    if (loading) {
        return <div>Loading...</div>;
    }

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
