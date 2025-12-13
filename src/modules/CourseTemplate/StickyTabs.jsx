// src/modules/CourseTemplate/StickyTabs.jsx
import React from "react";

export default function StickyTabs({ activeSection }) {
    const tabs = [
        { id: "curriculum", label: "Curriculum" },
        { id: "benefits", label: "Course benefits" },
        { id: "career", label: "Career support" },
        { id: "faculty", label: "Faculty" },
        { id: "testimonials", label: "Testimonials" },
    ];

    // FIXED Smooth scroll with perfect offset
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const stickyOffset = 100; // navbar + tabs exact offset

        const top = el.getBoundingClientRect().top + window.scrollY - stickyOffset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return (
        <div className="sticky top-[72px] z-40 bg-white/70">
            <div className="max-w-7xl mx-auto px-4">

                {/* Scrollable wrapper */}
                <div className="overflow-x-auto no-scrollbar py-4">

                    {/* Floating glass container */}
                    <div className="w-max sm:w-full mx-auto flex justify-center">
                        <div className="
                            flex gap-2 sm:gap-3 px-3 py-2 
                            rounded-full border border-gray-200 
                            bg-white/70 backdrop-blur-xl shadow-md
                        ">
                            {tabs.map((tab) => {
                                const isActive = activeSection === tab.id;

                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => scrollToSection(tab.id)}
                                        className={`
                                            relative px-5 py-2 rounded-full text-sm font-medium
                                            transition-all duration-300 whitespace-nowrap
                                            ${isActive
                                                ? "text-white"
                                                : "text-gray-600 hover:text-gray-900"}
                                        `}
                                    >
                                        {/* Gradient highlight pill */}
                                        {isActive && (
                                            <span
                                                className="
                                                    absolute inset-0 rounded-full 
                                                    bg-gradient-to-r from-indigo-600 to-purple-600
                                                    shadow-md
                                                "
                                            ></span>
                                        )}

                                        {/* Text (above highlight) */}
                                        <span className="relative z-10">
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
