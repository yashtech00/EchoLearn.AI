// app/Dashboard/layout.tsx

import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardSidebar />

      <DashboardNavbar />

      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-1">{children}</div>
      </main>
    </div>
  );
}