"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function OAuthSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      const isNewUser = searchParams.get("isNewUser") === "true";
      router.replace(
        isNewUser ? "/Dashboard/WritingCoach/practice" : "/Dashboard"
      );
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Signing you in...</p>
    </div>
  );
}

export default function OAuthSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Signing you in...</p>
      </div>
    }>
      <OAuthSuccessContent />
    </Suspense>
  );
}
