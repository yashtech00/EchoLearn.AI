"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Award,
  Flame,
  TrendingUp,
  BookOpen,
  Zap,
  User,
  Pencil,
  Save,
  X,
  Loader2,
  PenTool,
  AlertCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getProfileMe,
  updateProfileMe,
  type ProfileMeUpdate,
} from "@/app/api/user_profile/user_profile";
import type { ProfileMeUser, ProfileStats, ProfileProgress } from "@/types";

const ROLE_OPTIONS = [
  { id: "STUDENT", label: "Student" },
  { id: "WORKING_PROFESSIONAL", label: "Professional" },
  { id: "JOB_SEEKER", label: "Job Seeker" },
  { id: "HOBBYIST", label: "Hobbyist" },
];

const GOAL_OPTIONS = [
  { id: "FLUENCY", label: "Fluency" },
  { id: "PROFICIENCY", label: "Proficiency" },
  { id: "EXAM_PREP", label: "Exam Prep" },
  { id: "BUSINESS_ENGLISH", label: "Business English" },
  { id: "TRAVEL_AND_CULTURE_ENGLISH", label: "Travel & Culture" },
  { id: "GRAMMAR_MASTERY", label: "Grammar Mastery" },
];

const INTEREST_TAGS = [
  "Finance",
  "Sports",
  "Technology",
  "Movies",
  "Science",
  "Art",
  "Travel",
  "History",
  "Cooking",
  "Fashion",
];

const LEVEL_LABELS = ["Beginner", "Elementary", "Intermediate", "Advanced", "Fluent"];

interface RecentActivity {
  id: string;
  activityType?: string;
  xpEarned: number;
}

function formatLabel(value?: string) {
  if (!value) return "—";
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getInitials(name?: string) {
  if (!name) return "?";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const [user, setUser] = useState<ProfileMeUser | null>(null);
  const [profile, setProfile] = useState<Record<string, unknown> | null>(null);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [progress, setProgress] = useState<ProfileProgress | null>(null);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);

  const [form, setForm] = useState<ProfileMeUpdate>({});

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProfileMe();
      setUser(data.user);
      setProfile(data.profile ?? null);
      setStats(data.stats);
      setProgress(data.progress);
      setRecentActivities(data.recentActivities || []);

      if (data.profile) {
        setForm({
          name: data.user?.name,
          displayName: data.user?.displayName ?? "",
          primaryRole: data.profile.primaryRole,
          primaryGoal: data.profile.primaryGoal ?? "",
          englishReadingSelfScore: data.profile.englishReadingSelfScore,
          englishWritingSelfScore: data.profile.englishWritingSelfScore,
          dailyGoalMinutes: data.profile.dailyGoalMinutes ?? 20,
          weeklyTimeMinutes: data.profile.weeklyTimeMinutes ?? 60,
          interestTags: data.profile.interestTags ?? [],
          preferredLearningStyle: data.profile.preferredLearningStyle ?? "",
          weakAreas: data.profile.weakAreas ?? [],
        });
      } else {
        setForm({
          name: data.user?.name,
          displayName: data.user?.displayName ?? "",
        });
      }
    } catch (e) {
      console.error(e);
      setError("Could not load your profile. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage(null);
    setError(null);
    try {
      const res = await updateProfileMe(form);
      setUser((prev) =>
        prev
          ? {
              ...prev,
              name: res.user?.name ?? prev.name,
              displayName: res.user?.displayName ?? prev.displayName,
            }
          : prev,
      );
      if (res.userProfile) setProfile(res.userProfile);
      setSaveMessage("Profile saved successfully.");
      setEditing(false);
    } catch (e: unknown) {
      const responseData =
        typeof e === "object" &&
        e !== null &&
        "response" in e &&
        typeof e.response === "object" &&
        e.response !== null &&
        "data" in e.response
          ? e.response.data
          : null;
      const msg =
        typeof responseData === "object" &&
        responseData !== null &&
        "message" in responseData
          ? responseData.message
          : typeof responseData === "object" &&
              responseData !== null &&
              "errors" in responseData
            ? responseData.errors
            : null;
      const fallback =
        msg ||
        "Failed to save profile.";
      setError(typeof fallback === "string" ? fallback : "Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  const toggleInterest = (tag: string) => {
    const current = form.interestTags ?? [];
    setForm({
      ...form,
      interestTags: current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag],
    });
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-sans">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6" />
          <p className="text-foreground/60 font-medium">Loading your profile…</p>
        </div>
      </div>
    );
  }

  const xpPercent = stats?.levelProgressPercent ?? 0;
  const xpToNext = stats?.xpToNextLevel ?? 50;
  const displayName = user?.displayName || user?.name || "Learner";
  const hasProfile = Boolean(profile);

  return (
    <div className="space-y-6 sm:space-y-8 font-sans pb-8">
      {/* Hero */}
      <div
        className="relative overflow-hidden rounded-[12px] border border-primary/10 bg-secondary p-6 sm:p-8"
        style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] bg-primary text-white flex items-center justify-center text-xl sm:text-2xl font-bold shrink-0 shadow-terra">
            {getInitials(displayName)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">
              Your account
            </p>
            <h1
              className="text-2xl sm:text-3xl font-bold text-foreground truncate"
              style={{ fontFamily: "'Literata', serif" }}
            >
              {displayName}
            </h1>
            <p className="text-sm text-foreground/60 truncate">{user?.email}</p>
            {user?.createdAt && (
              <p className="text-xs text-foreground/50 mt-1">
                Member since{" "}
                {new Date(user.createdAt).toLocaleDateString(undefined, {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
          <div className="flex gap-2 shrink-0">
            {!hasProfile ? (
              <Button
                onClick={() => router.push("/user-profile")}
                className="rounded-[12px] bg-primary hover:bg-primary/90 text-white"
              >
                Complete setup
              </Button>
            ) : editing ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditing(false);
                    loadData();
                  }}
                  className="rounded-[12px] border-primary/20"
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={saving}
                  className="rounded-[12px] bg-primary hover:bg-primary/90 text-white"
                >
                  {saving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </>
                  )}
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={() => setEditing(true)}
                className="rounded-[12px] border-primary/20 text-primary hover:bg-primary/5"
              >
                <Pencil className="w-4 h-4 mr-1" />
                Edit profile
              </Button>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-[12px] border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}
      {saveMessage && (
        <div className="rounded-[12px] border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
          {saveMessage}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          icon={Award}
          label="Total XP"
          value={stats?.totalXp?.toLocaleString() ?? "0"}
          accent="bg-primary text-white"
          iconClass="text-white/80"
        />
        <StatCard
          icon={TrendingUp}
          label="Level"
          value={String(stats?.level ?? 1)}
          accent="bg-card border border-primary/10"
          valueClass="text-primary"
        />
        <StatCard
          icon={Flame}
          label="Streak"
          value={`${stats?.currentStreak ?? 0}d`}
          accent="bg-card border border-primary/10"
          sub={`Best: ${stats?.longestStreak ?? 0}d`}
        />
        <StatCard
          icon={PenTool}
          label="Sessions"
          value={String(progress?.submissionsCount ?? 0)}
          accent="bg-card border border-primary/10"
          sub={`${progress?.completedSubmissions ?? 0} completed`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level progress */}
          <Card title="Level progress" icon={Zap}>
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-foreground/70">
                  Level {stats?.level ?? 1}
                </span>
                <span className="text-primary font-bold">{xpPercent}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
              <p className="text-sm text-foreground/60">
                <span className="font-bold text-foreground">{xpToNext} XP</span>{" "}
                until Level {(stats?.level ?? 1) + 1}
              </p>
            </div>
          </Card>

          {/* Edit / view learning profile */}
          <Card title="Learning profile" icon={User}>
            {editing && hasProfile ? (
              <div className="space-y-5">
                <Field label="Display name">
                  <input
                    value={form.displayName ?? ""}
                    onChange={(e) =>
                      setForm({ ...form, displayName: e.target.value })
                    }
                    className={inputClass}
                    placeholder="How we greet you"
                  />
                </Field>
                <Field label="Full name">
                  <input
                    value={form.name ?? ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </Field>
                <Field label="Role">
                  <select
                    value={form.primaryRole ?? ""}
                    onChange={(e) =>
                      setForm({ ...form, primaryRole: e.target.value })
                    }
                    className={inputClass}
                  >
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Primary goal">
                  <select
                    value={form.primaryGoal ?? ""}
                    onChange={(e) =>
                      setForm({ ...form, primaryGoal: e.target.value })
                    }
                    className={inputClass}
                  >
                    <option value="">Select a goal</option>
                    {GOAL_OPTIONS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label={`Reading — ${LEVEL_LABELS[(form.englishReadingSelfScore ?? 3) - 1]}`}
                  >
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={form.englishReadingSelfScore ?? 3}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          englishReadingSelfScore: Number(e.target.value),
                        })
                      }
                      className="w-full accent-primary"
                    />
                  </Field>
                  <Field
                    label={`Writing — ${LEVEL_LABELS[(form.englishWritingSelfScore ?? 3) - 1]}`}
                  >
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={form.englishWritingSelfScore ?? 3}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          englishWritingSelfScore: Number(e.target.value),
                        })
                      }
                      className="w-full accent-primary"
                    />
                  </Field>
                </div>
                <Field label="Daily goal (minutes)">
                  <input
                    type="number"
                    min={5}
                    max={180}
                    value={form.dailyGoalMinutes ?? 20}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        dailyGoalMinutes: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </Field>
                <Field label="Interests">
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_TAGS.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                          form.interestTags?.includes(tag)
                            ? "bg-primary text-white border-primary"
                            : "bg-card text-foreground/70 border-primary/20 hover:border-primary/40"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
            ) : hasProfile ? (
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <InfoRow label="Role" value={formatLabel(form.primaryRole)} />
                <InfoRow label="Goal" value={formatLabel(form.primaryGoal)} />
                <InfoRow
                  label="Reading level"
                  value={
                    LEVEL_LABELS[(form.englishReadingSelfScore ?? 3) - 1] ??
                    "—"
                  }
                />
                <InfoRow
                  label="Writing level"
                  value={
                    LEVEL_LABELS[(form.englishWritingSelfScore ?? 3) - 1] ??
                    "—"
                  }
                />
                <InfoRow
                  label="Daily goal"
                  value={`${form.dailyGoalMinutes ?? 20} min`}
                />
                <InfoRow
                  label="Weekly time"
                  value={`${form.weeklyTimeMinutes ?? 60} min`}
                />
                {form.interestTags && form.interestTags.length > 0 && (
                  <div className="sm:col-span-2">
                    <dt className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                      Interests
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {form.interestTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            ) : (
              <p className="text-sm text-foreground/60">
                Finish onboarding to personalize prompts and track your goals.
              </p>
            )}
          </Card>

        
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card title="Habit tracker" icon={Flame}>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 rounded-[12px] bg-primary/5 border border-primary/10">
                <span className="text-sm text-foreground/70">Current</span>
                <span
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "'Literata', serif" }}
                >
                  {stats?.currentStreak ?? 0} days
                </span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-[12px] bg-secondary border border-primary/10">
                <span className="text-sm text-foreground/70">Longest</span>
                <span
                  className="text-2xl font-bold text-accent"
                  style={{ fontFamily: "'Literata', serif" }}
                >
                  {stats?.longestStreak ?? 0} days
                </span>
              </div>
              {stats?.lastActiveDate && (
                <p className="text-xs text-foreground/50 pt-1">
                  Last active{" "}
                  {new Date(stats.lastActiveDate).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </Card>

          <Card title="Progress snapshot" icon={BookOpen}>
            <ul className="space-y-3 text-sm">
              <SnapshotRow
                label="Mistakes tracked"
                value={progress?.mistakesCount ?? 0}
              />
              <SnapshotRow
                label="Completed sessions"
                value={progress?.completedSubmissions ?? 0}
              />
              <SnapshotRow
                label="Total sessions"
                value={progress?.submissionsCount ?? 0}
              />
            </ul>
            <Link
              href="/Dashboard/WritingCoach/MistakeMemory"
              className="mt-4 flex items-center justify-center gap-1 text-sm font-bold text-primary hover:underline"
            >
              View mistake memory
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Card>

          <Card title="Recent XP" icon={Sparkles}>
            {recentActivities.length > 0 ? (
              <ul className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30">
                {recentActivities.map((a) => (
                  <li
                    key={a.id}
                    className="flex justify-between items-center py-2.5 px-3 rounded-[10px] bg-secondary/40 border border-primary/5 text-sm"
                  >
                    <span className="text-foreground/80 capitalize truncate pr-2">
                      {a.activityType?.replace(/_/g, " ") ?? "Activity"}
                    </span>
                    <span className="font-bold text-primary shrink-0">
                      +{a.xpEarned} XP
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-foreground/50">No activity yet.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-[12px] border border-primary/20 bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30";

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-[12px] border border-primary/10 bg-card p-5 sm:p-6"
      style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
    >
      <h2
        className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"
        style={{ fontFamily: "'Literata', serif" }}
      >
        <Icon className="w-5 h-5 text-accent" />
        {title}
      </h2>
      {children}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
  iconClass = "text-primary",
  valueClass = "text-foreground",
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent: string;
  iconClass?: string;
  valueClass?: string;
  sub?: string;
}) {
  return (
    <div
      className={`rounded-[12px] p-4 sm:p-5 ${accent}`}
      style={{ boxShadow: "0 4px 20px rgba(46, 50, 48, 0.06)" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconClass}`} />
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
          {label}
        </span>
      </div>
      <p
        className={`text-2xl sm:text-3xl font-bold ${valueClass}`}
        style={{ fontFamily: "'Literata', serif" }}
      >
        {value}
      </p>
      {sub && <p className="text-xs opacity-60 mt-1">{sub}</p>}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-widest text-accent mb-0.5">
        {label}
      </dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}

function SnapshotRow({ label, value }: { label: string; value: number }) {
  return (
    <li className="flex justify-between items-center py-2 border-b border-primary/10 last:border-0">
      <span className="text-foreground/70">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </li>
  );
}
