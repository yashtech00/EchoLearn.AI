"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getUserProfile } from "@/app/api/user_profile/user_profile";

export default function OAuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      const accessToken = searchParams.get("accessToken");

      if (!accessToken) {
        router.replace("/login"); // fix path
        return;
      }

      // 1. token store
      localStorage.setItem("token", accessToken);

      try {
        // 2. user fetch
        const res = await getUserProfile(localStorage.getItem("user_id") as string || "");

        if ("error" in res) {
          if (res.error === "USER_NOT_FOUND") {
            // 🆕 new user
            router.replace("/user-profile");
          } else {
            router.replace("/login");
          }
        } else {
          // ✅ existing user
          router.replace("/dashboard");
        }
      } catch (err) {
        router.replace("/login");
      }
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Signing you in...</p>
    </div>
  );
}