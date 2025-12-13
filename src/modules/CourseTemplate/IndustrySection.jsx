import React from "react";
import { Sparkles, Users, ArrowUpRight } from "lucide-react";

const ICONS = {
    Sparkles,
    Users,
    ArrowUpRight
};

export default function IndustrySection({ industry }) {

    if (!industry) return null; // Prevent crash

    return (
        <section className="py-20 bg-white relative">

            {/* Soft Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 opacity-60 "></div>

            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Heading – SAME DESIGN LIKE ORIGINAL */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                    {industry.title.split(" ").slice(0, -3).join(" ")}
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                        {" "}{industry.title.split(" ").slice(-3).join(" ")}
                    </span>
                </h2>

                {/* Subtitle */}
                <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                    {industry.subtitle}
                </p>

                {/* POINTS GRID */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industry.points?.map((point, i) => {
                        const Icon = ICONS[point.icon] || Sparkles;

                        return (
                            <div key={i} className="flex flex-col items-center text-center">

                                {/* Icon */}
                                <Icon className="w-8 h-8 text-indigo-600 mb-3" />

                                {/* Title */}
                                <h3 className="font-semibold text-gray-900 text-lg">
                                    {point.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mt-2 text-sm">
                                    {point.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
