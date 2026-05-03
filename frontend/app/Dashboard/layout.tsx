import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({ children }: any) {
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )
}