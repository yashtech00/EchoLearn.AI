"use client";

import { useAuth } from "@/lib/userAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, loading, isNewUser } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const publicRoutes = [
            "/",
            "/auth/login",
            "/auth/register",
            "/LandingPages/Program",
            "/LandingPages/Blogs",
            "/LandingPages/AboutUs",
            "/LandingPages/Platform",
            "/LandingPages/WritingIntelligence",
            "/LandingPages/PersonalizedLearning",
        ];
        const isPublicRoute = publicRoutes.some(route => pathname === route);

        if (!loading && !user && !isPublicRoute) {
            router.replace("/auth/login");
        } else if (!loading && user && isNewUser && pathname !== "/UserProfile") {
            router.replace("/UserProfile");
        }
    }, [loading, user, isNewUser, router, pathname]);

    if (loading) return <div>Loading...</div>;

    return children;
}
