import { getUserProfile } from "@/app/api/user_profile/user_profile";
import { useEffect, useState } from "react";
import { UserProfile } from "@/types";

export const useAuth = () => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [isNewUser, setIsNewUser] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserProfile( user?.id as string );

                if ('error' in res) {
                    if (res.error === "USER_NOT_FOUND") {
                        setIsNewUser(true);
                    }
                } else {
                    setUser(res);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, isNewUser };
};