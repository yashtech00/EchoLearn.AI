"use client";

import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";

function OAuthSuccessContent() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      router.replace("/Dashboard");
    };

    handleAuth();
  }, [router]);

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
