import axiosInstance from "../axiosInstances";
import { UserProfile } from "../../../types";

export const createUserProfile = async (userProfile: UserProfile) => {
    try{
        const response = await axiosInstance.post<UserProfile>('/profile/user-profile', userProfile);
        return response.data;
    } catch (error: any) {
        console.error(error);
        return { error: error.response?.data?.message || 'Profile creation failed' };
    }
}

export const getUserProfile = async (userId: UserProfile['id']) => {
    try{
        const response = await axiosInstance.get<UserProfile>(`/profile/user-profile/${userId}`);
        return response.data;
    } catch (error: any) {
        console.error(error);
        return { error: error.response?.data?.message || 'Profile fetch failed' };
    }
}

export const updateUserProfile = async (userId: UserProfile['id'], userProfile: UserProfile) => {
    try{
        const response = await axiosInstance.put<UserProfile>(`/profile/user-profile/${userId}`, userProfile);
        return response.data;
    } catch (error: any) {
        console.error(error);
        return { error: error.response?.data?.message || 'Profile update failed' };
    }
}