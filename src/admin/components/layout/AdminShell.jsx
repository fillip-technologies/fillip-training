import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { Outlet } from "react-router-dom";

export default function AdminShell({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex">

            {/* Sidebar */}
            <AdminSidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Main */}
            <div className="flex-1 min-h-screen bg-gray-50 lg:ml-64">

                {/* Topbar with hamburger */}
                <AdminTopbar setIsSidebarOpen={setIsSidebarOpen} />



                <main className="p-6">
                    <Outlet />
                </main>

            </div>
        </div>
    );
}
