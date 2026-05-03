import axios from "axios";
import { UserProfile } from "../../../types";

export const createUserProfile = async (userProfile: UserProfile) => {
    try{
        const response = await axios.post<UserProfile>('/api/v1/user-profile', userProfile);
        return response.data;
    } catch (error: any) {
        console.error(error);
        return { error: error.response.data.message };
    }
}

export const getUserProfile = async (userId: UserProfile['id']) => {
    try{
        const response = await axios.get<UserProfile>(`/api/v1/user-profile/${userId}`);
        return response.data;
    } catch (error: any) {
        console.error(error);
        return { error: error.response.data.message };
    }
}

export const updateUserProfile = async (userId: UserProfile['id'], userProfile: UserProfile) => {
    try{
        const response = await axios.put<UserProfile>(`/api/v1/user-profile/${userId}`, userProfile);
        return response.data;
    } catch (error: any) {
        console.error(error);
        return { error: error.response.data.message };
    }
}