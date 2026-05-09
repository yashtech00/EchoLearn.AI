"use client";

import { useAuth } from "@/lib/userAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: any) {
    const { user, loading, isNewUser } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/auth/login");
        } else if (!loading && user && isNewUser && pathname !== "/UserProfile") {
            router.replace("/UserProfile");
        }
    }, [loading, user, isNewUser, pathname, router]);

    if (loading) return <div>Loading...</div>;

    return children;
}