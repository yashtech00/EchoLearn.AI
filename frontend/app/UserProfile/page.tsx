"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Brain } from "lucide-react";
import GoalsForm from "../../components/UserProfile/GoalsForm";
import LevelAssessment from "../../components/UserProfile/LevelAssessment";
import InterestsForm from "../../components/UserProfile/InterestsForm";
import UserProfileNavbar from "../../components/UserProfile/UserProfileNavbar";
import { createUserProfile } from "@/app/api/user_profile/user_profile";
import { useQueryClient } from "@tanstack/react-query";

type ProfileMeCache = {
  profile?: unknown;
  user?: {
    isNewUser?: boolean;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export default function UserProfilePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPath] = useState(() => {
    if (typeof window === "undefined") return "/Dashboard/WritingCoach/practice";
    const next = new URLSearchParams(window.location.search).get("next");
    return next?.startsWith("/") && !next.startsWith("//") ? next : "/Dashboard/WritingCoach/practice";
  });

  const [formData, setFormData] = useState({
    primaryRole: "",
    englishReadingSelfScore: 3,
    englishWritingSelfScore: 3,
    primaryGoal: "",
    weeklyTimeMinutes: 60,
    interestTags: [] as string[],
    preferredGenres: [] as string[],
    targetScoreGoal: "",
    dailyGoalMinutes: 20,
    preferredLearningStyle: "",
    weakAreas: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await createUserProfile({
        ...formData,
        targetScoreGoal: formData.targetScoreGoal ? Number(formData.targetScoreGoal) : null,
      });

      if (!('error' in response)) {
        queryClient.setQueryData(["profile-me"], (current: ProfileMeCache | undefined) => {
          const nextUser = current?.user
            ? { ...current.user, isNewUser: false }
            : current?.user;

          return {
            ...current,
            profile: response.userProfile,
            user: nextUser,
          };
        });
        queryClient.removeQueries({ queryKey: ["writing-topic"] });
        router.push(nextPath);
      } else {
        setError(response.error);
        console.error("Profile creation failed:", response.error);
      }
    } catch (err) {
      setError("Profile creation failed. Please try again.");
      console.error("Error creating profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <GoalsForm
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <LevelAssessment
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <InterestsForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <UserProfileNavbar 
        currentStep={currentStep}
        totalSteps={3}
        onStepClick={handleStepClick}
        
      />
      {error && (
        <div className="mx-auto mt-6 flex w-[min(92vw,56rem)] items-start gap-3 rounded-[8px] border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}
      {renderStep()}
      {loading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-card p-8 sm:p-10 rounded-[12px] shadow-terra border border-primary/10 max-w-sm w-full mx-4">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-xl font-bold text-foreground">Creating your profile...</p>
                <p className="text-sm text-muted-foreground">Personalizing your learning journey</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
