import axiosInstance from "../axiosInstances";
import { UserProfile } from "../../../types";

export type ProfileMeUpdate = Partial<UserProfile> & {
  name?: string;
  displayName?: string | null;
};

export const createUserProfile = async (userProfile: UserProfile) => {
  try {
    const response = await axiosInstance.post("/profile/user-profile", userProfile);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return { error: error.response?.data?.message || "Profile creation failed" };
  }
};

export const getProfileMe = async () => {
  const response = await axiosInstance.get("/profile/me");
  return response.data;
};

export const getUserProfile = async (_userId?: string) => {
  try {
    const response = await axiosInstance.get("/profile/user-profile");
    return response.data;
  } catch (error: any) {
    console.error(error);
    return { error: error.response?.data?.message || "Profile fetch failed" };
  }
};

export const updateProfileMe = async (payload: ProfileMeUpdate) => {
  const response = await axiosInstance.patch("/profile/me", payload);
  return response.data;
};

/** @deprecated use updateProfileMe */
export const updateUserProfile = async (
  _userId: UserProfile["id"],
  userProfile: ProfileMeUpdate,
) => {
  try {
    const response = await axiosInstance.put("/profile/me", userProfile);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return { error: error.response?.data?.message || "Profile update failed" };
  }
};

export const getProfileStats = async () => {
  const response = await axiosInstance.get("/profile/stats");
  return response.data;
};
