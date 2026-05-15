"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { tokenManager } from "@/lib/tokenManager";

export default function OAuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      const isNewUser = searchParams.get("isNewUser");

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