"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { tokenManager } from "@/lib/tokenManager";

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

      // Store access token in token manager
      tokenManager.setAccessToken(accessToken);

      // Redirect based on isNewUser
      if (isNewUser === "true") {
        // New user - redirect to profile setup
        router.replace("/UserProfile");
      } else {
        // Existing user - redirect to dashboard
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