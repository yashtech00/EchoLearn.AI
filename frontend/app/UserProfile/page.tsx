"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GoalsForm from "./GoalsForm";
import LevelAssessment from "./LevelAssessment";
import InterestsForm from "./InterestsForm";
import { createUserProfile } from "@/app/api/user_profile/user_profile";

export default function UserProfilePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    primaryRole: "",
    educationLevel: "",
    institutionContext: "",
    occupationTitle: "",
    englishReadingSelfScore: 3,
    englishWritingSelfScore: 3,
    primaryGoal: "",
    weeklyTimeMinutes: 60,
    interestTags: [] as string[],
    preferredGenres: [] as string[],
    learningPurpose: "",
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

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await createUserProfile({
        ...formData,
        targetScoreGoal: formData.targetScoreGoal ? Number(formData.targetScoreGoal) : null,
      });

      if (!('error' in response)) {
        router.push("/Dashboard");
      } else {
        console.error("Profile creation failed:", response.error);
      }
    } catch (err) {
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
    <div className="min-h-screen">
      {renderStep()}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Creating your profile...</p>
          </div>
        </div>
      )}
    </div>
  );
}