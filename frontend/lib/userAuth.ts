import { useEffect, useState } from "react";
import { getMe } from "@/app/api/auth/auth_api";
import { tokenManager } from "@/lib/tokenManager";

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isNewUser, setIsNewUser] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getMe();
                
                if (response.user) {
                    setUser(response.user);
                    setIsNewUser(response.isNewUser);
                }
            } catch (error: any) {
                // Only log if it's not a 401, to keep the console clean for unauthenticated users
                if (error.response?.status !== 401) {
                    console.error("Auth check failed:", error);
                }
                // Clear invalid token
                tokenManager.clearAccessToken();
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, isNewUser };
};