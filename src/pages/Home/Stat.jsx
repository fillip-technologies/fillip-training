import React, { useState } from "react";
import { CornerRightDown } from "lucide-react";


export default function StatisticsSection() {
    const [activeStat, setActiveStat] = useState(null);

    // Realistic IT Training Platform Stats
    const stats = [
        { value: "12,500+", label: "Students Trained" },
        { value: "85+", label: "Partner Colleges" },
        { value: "3,200+", label: "Internships Provided" },
        { value: "1,450+", label: "Live Projects Completed" },
        { value: "13+", label: "Long years of Experience" },
        { value: "96%", label: "Skill Growth Analytics" },
    ];

    return (
        <section className="py-16 bg-[#F5F7FD] relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800">
                    Milestones We’re Proud Of
                </h2>

                <div className="flex justify-center mt-3 mb-10">
                    <CornerRightDown className="w-20 h-20 text-[#004AAD]" />
                </div>



                {/* Center Floating Box */}
                <div className="flex justify-center mb-12">
                    <div className="
            bg-white shadow-lg border border-slate-200
            rounded-xl px-6 py-4 text-center
            text-slate-700 text-lg transition-all duration-300
          ">
                        {/* Default Text (always visible) */}
                        {!activeStat && (
                            <>
                                We have helped{" "}
                                <span className="text-[#004AAD] font-bold text-xl">12,500+</span>
                                {" "}students build careers in IT through{" "}
                                <span className="text-[#004AAD] font-bold">real projects</span>.
                            </>
                        )}

                        {/* Hover Dynamic Text */}
                        {activeStat && (
                            <>
                                <span className="text-[#004AAD] font-bold text-xl">
                                    {activeStat.value}
                                </span>{" "}
                                <span className="text-slate-700">
                                    {activeStat.label}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveStat(item)}
                            onMouseLeave={() => setActiveStat(null)}
                            className="
                flex flex-col items-center
                transition-all duration-300 
                hover:scale-105 cursor-pointer
              "
                        >
                            <span className="text-2xl font-bold text-[#004AAD]">{item.value}</span>
                            <span className="text-slate-600 text-sm mt-1">{item.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
