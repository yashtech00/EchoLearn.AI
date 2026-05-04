import { useEffect, useState } from "react";
import { getMe } from "@/app/api/auth/auth_api";

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isNewUser, setIsNewUser] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
                
                if (!token) {
                    setLoading(false);
                    return;
                }

                const response = await getMe();
                
                if (response.user) {
                    setUser(response.user);
                    setIsNewUser(response.isNewUser);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
                // Clear invalid token
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, isNewUser };
};