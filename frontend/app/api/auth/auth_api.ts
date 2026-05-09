import axiosInstance from "../axiosInstances";
import { tokenManager } from "@/lib/tokenManager";

export const login = async (email: string, password: string) => {
    try{
        const response = await axiosInstance.post('/auth/login', { email, password });
        // Store access token in token manager
        if (response.data.accessToken) {
            tokenManager.setAccessToken(response.data.accessToken);
        }
        return response.data;
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
};

export const register = async (name: string, email: string, password: string) => {
    try{
        const response = await axiosInstance.post('/auth/register', { name, email, password });
        // Store access token in token manager
        if (response.data.accessToken) {
            tokenManager.setAccessToken(response.data.accessToken);
        }
        return response.data;
    } catch (error) {
        console.error("Register Error:", error);
        throw error;
    }
};      

export const logout = async () => {
    try{
        const response = await axiosInstance.post('/auth/logout');
        // Clear access token from token manager
        tokenManager.clearAccessToken();
        return response.data;
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
};

export const refresh = async () => {
    try{
        const response = await axiosInstance.post('/auth/refresh');
        // Update access token in token manager
        if (response.data.accessToken) {
            tokenManager.setAccessToken(response.data.accessToken);
        }
        return response.data;
    } catch (error) {
        console.error("Refresh Error:", error);
        throw error;
    }
};

export const profile = async () => {
    try{
        const response = await axiosInstance.get('/auth/profile');
        return response.data;
    } catch (error) {
        console.error("Profile Error:", error);
        throw error;
    }
};

export const googleAuth = async () => {
    try{
        const response = await axiosInstance.get('/auth/google');
        return response.data;
    } catch (error) {
        console.error("Google Auth Error:", error);
        throw error;
    }
};

export const googleAuthCallback = async (code: string, state: string) => {
    try{
        const response = await axiosInstance.get(`/auth/google/callback?code=${code}&state=${state}`);
        return response.data;
    } catch (error) {
        console.error("Google Auth Callback Error:", error);
        throw error;
    }
};

export const getMe = async () => {
    try{
        const response = await axiosInstance.get('/auth/me');
        return response.data;
    } catch (error) {
        console.error("Get Me Error:", error);
        throw error;
    }
};