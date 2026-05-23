import axiosInstance from "../axiosInstances";


export const getAuditLogs = async (page = 1, limit = 50) => {
    try {
        const response = await axiosInstance.get(`/admin/audit?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Get Audit Logs Error:", error);
        throw error;
    }
};