// src/Dashboard/Dashboard.jsx
import React, { useState } from "react";
import { useEffect } from "react";
import {
    LayoutDashboard,
    BookOpen,
    Award,
    Bell,
    Settings as SettingsIcon,
    LogOut,
    Menu,
    Search,
    X   // 
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import DashboardHome from "./DashboardHome";
import MyCourses from "./MyCourses";
import Certificates from "./Certificates";
import Notifications from "./Notifications";
import Settings from "./Settings";

export default function Dashboard() {

    // hide footer and header for deisgn clarity 
    useEffect(() => {
        const header = document.querySelector(".site-header");
        const footer = document.querySelector("footer");

        if (header) header.style.display = "none";
        if (footer) footer.style.display = "none";

        return () => {
            if (header) header.style.display = "";
            if (footer) footer.style.display = "";
        };
    }, []);



    const [activeTab, setActiveTab] = useState("home");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
        { id: "courses", label: "My Courses", icon: <BookOpen size={18} /> },
        { id: "certificates", label: "Certificates", icon: <Award size={18} /> },
        { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
        { id: "settings", label: "Settings", icon: <SettingsIcon size={18} /> },
    ];

    const renderPage = () => {
        switch (activeTab) {
            case "home": return <DashboardHome />;
            case "courses": return <MyCourses />;
            case "certificates": return <Certificates />;
            case "notifications": return <Notifications />;
            case "settings": return <Settings />;
            default: return <DashboardHome />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 text-slate-800">

            {/* ---------------- DESKTOP SIDEBAR ---------------- */}
            <aside className="hidden md:flex flex-col w-72 bg-white border-r">
                <div className="px-6 py-5 flex items-center gap-3 border-b">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-indigo-600 to-teal-400 flex items-center justify-center text-white font-bold">N</div>
                    <div>
                        <div className="text-sm font-semibold">Fillip Technologies</div>
                        <div className="text-xs text-gray-500">IT Training</div>
                    </div>
                </div>

                <div className="px-4 py-3">
                    <div className="relative">
                        <input placeholder="Search courses..." className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-200" />
                        <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
                ${activeTab === item.id ? "bg-indigo-600 text-white" : "text-slate-700 hover:bg-gray-100"}`}
                        >
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 text-white">
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </aside>

            {/* ---------------- MOBILE HEADER ---------------- */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setDrawerOpen(true)} className="p-2 rounded-md bg-gray-100">
                            <Menu size={20} />
                        </button>
                        <div className="text-lg font-semibold">Dashboard</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-md bg-gray-100"><Bell size={18} /></button>
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200" />
                    </div>
                </div>
            </div>

            {/* small spacer under mobile header */}
            <div className="md:hidden h-14"></div>

            {/* ---------------- MOBILE DRAWER ---------------- */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-xl p-6"
                            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-lg font-semibold">Menu</div>
                                <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-md bg-gray-100"><X /></button>
                            </div>

                            <nav className="space-y-2">
                                {navItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setActiveTab(item.id); setDrawerOpen(false); }}
                                        className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg ${activeTab === item.id ? "bg-indigo-600 text-white" : "hover:bg-gray-100"}`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-6">
                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 text-white"><LogOut size={16} /> Logout</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="flex-1 p-6 md:pt-8 overflow-y-auto">
                {renderPage()}
            </main>
        </div>
    );
}
