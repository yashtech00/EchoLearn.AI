"use client";

import { useAuth } from "@/lib/userAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, loading } = useAuth();
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
        }
    }, [loading, user, router, pathname]);

    if (loading) return <div>Loading...</div>;

    return children;
}
