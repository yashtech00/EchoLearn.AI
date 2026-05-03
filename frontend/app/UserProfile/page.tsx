"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserProfilePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    primaryRole: "",
    educationLevel: "",
    intitutionContext: "",
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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleArrayValue = (field: string, value: string) => {
    setForm((prev: any) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v: string) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/user_profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          targetScoreGoal: form.targetScoreGoal
            ? Number(form.targetScoreGoal)
            : null,
        }),
      });

      if (res.ok) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Setup Your Learning Profile</h1>

      {/* ROLE */}
      <div>
        <label className="block font-medium">Your Role</label>
        <input
          name="occupationTitle"
          placeholder="Student / Developer / Job Seeker"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* GOAL */}
      <div>
        <label className="block font-medium">Primary Goal</label>
        <select
          name="primaryGoal"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="fluency">Fluency</option>
          <option value="job">Job Preparation</option>
          <option value="study">Study Abroad</option>
        </select>
      </div>

      {/* SELF SCORE */}
      <div>
        <label>Reading Level: {form.englishReadingSelfScore}</label>
        <input
          type="range"
          min="1"
          max="5"
          name="englishReadingSelfScore"
          onChange={handleChange}
          className="w-full"
        />

        <label>Writing Level: {form.englishWritingSelfScore}</label>
        <input
          type="range"
          min="1"
          max="5"
          name="englishWritingSelfScore"
          onChange={handleChange}
          className="w-full"
        />
      </div>

      {/* TIME */}
      <div>
        <label className="block font-medium">Daily Practice (minutes)</label>
        <input
          name="dailyGoalMinutes"
          type="number"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* PURPOSE */}
      <div>
        <label className="block font-medium">Why are you learning English?</label>
        <input
          name="learningPurpose"
          placeholder="Interviews, Travel, Confidence..."
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* TARGET */}
      <div>
        <label className="block font-medium">Target Score (optional)</label>
        <input
          name="targetScoreGoal"
          type="number"
          placeholder="e.g. IELTS 7"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* LEARNING STYLE */}
      <div>
        <label className="block font-medium">Preferred Learning Style</label>
        {["conversation", "visual", "quiz", "reading"].map((style) => (
          <label key={style} className="block">
            <input
              type="radio"
              name="preferredLearningStyle"
              value={style}
              onChange={handleChange}
            />
            {style}
          </label>
        ))}
      </div>

      {/* WEAK AREAS */}
      <div>
        <label className="block font-medium">Weak Areas</label>
        {["grammar", "speaking", "vocabulary", "confidence"].map((item) => (
          <label key={item} className="block">
            <input
              type="checkbox"
              onChange={() => toggleArrayValue("weakAreas", item)}
            />
            {item}
          </label>
        ))}
      </div>

      {/* INTEREST TAGS */}
      <div>
        <label className="block font-medium">Topics You Like</label>
        {["finance", "sports", "technology", "movies"].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => toggleArrayValue("interestTags", tag)}
            className="mr-2 mb-2 px-3 py-1 border rounded"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white p-3 rounded"
      >
        Continue
      </button>
    </div>
  );
}