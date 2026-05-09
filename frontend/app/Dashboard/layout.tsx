"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

export default function DashboardLayout({ children }: any) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50">
                <DashboardSidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                <DashboardNavbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
                    <div className="p-6 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    )
}