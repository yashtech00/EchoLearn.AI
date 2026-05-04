"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OAuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      const accessToken = searchParams.get("accessToken");
      const isNewUser = searchParams.get("isNewUser");

      if (!accessToken) {
        router.replace("/auth/login");
        return;
      }

      // 1. token store
      localStorage.setItem("token", accessToken);

      // 2. redirect based on isNewUser
      if (isNewUser === "true") {
        // 🆕 new user - redirect to profile setup
        router.replace("/UserProfile");
      } else {
        // ✅ existing user - redirect to dashboard
        router.replace("/Dashboard");
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