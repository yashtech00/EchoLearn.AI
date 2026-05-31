import axiosInstance from "../axiosInstances";
import { getApiErrorMessage } from "../apiResponse";
import { UserProfile } from "../../../types";

export type ProfileMeUpdate = Partial<UserProfile> & {
  name?: string;
  displayName?: string | null;
};

export const createUserProfile = async (userProfile: UserProfile) => {
  try {
    const response = await axiosInstance.post("/profile/user-profile", userProfile);
    return response.data;
  } catch (error: unknown) {
    console.error(error);
    return { error: getApiErrorMessage(error, "Profile creation failed") };
  }
};

export const getProfileMe = async () => {
  const response = await axiosInstance.get("/profile/me");
  return response.data;
};

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile/user-profile");
    return response.data;
  } catch (error: unknown) {
    console.error(error);
    return { error: getApiErrorMessage(error, "Profile fetch failed") };
  }
};

export const updateProfileMe = async (payload: ProfileMeUpdate) => {
  const response = await axiosInstance.patch("/profile/me", payload);
  return response.data;
};

/** @deprecated use updateProfileMe */
export const updateUserProfile = async (
  userId: UserProfile["id"],
  userProfile: ProfileMeUpdate,
) => {
  void userId;

  try {
    const response = await axiosInstance.put("/profile/me", userProfile);
    return response.data;
  } catch (error: unknown) {
    console.error(error);
    return { error: getApiErrorMessage(error, "Profile update failed") };
  }
};

export const getProfileStats = async () => {
  const response = await axiosInstance.get("/profile/stats");
  return response.data;
};
