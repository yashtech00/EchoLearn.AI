"use client";

import { useAuth } from "@/lib/userAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: any) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/auth/login");
        }
    }, [loading, user]);

    if (loading) return <div>Loading...</div>;

    return children;
}