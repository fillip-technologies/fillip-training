// src/modules/CourseTemplate/CourseBenefitsSection.jsx

import React from "react";
import { CheckCircle, Sparkles, Star, Rocket, Shield } from "lucide-react";

export default function CourseBenefitsSection({ benefits }) {
    return (
        <section id="benefits" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Why Choose This Course?
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Designed to give you real skills and a strong career foundation.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits?.map((b, i) => (
                        <div
                            key={i}
                            className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-xl
                                       transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                                <CheckCircle className="w-6 h-6 text-indigo-600" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>

                            {/* Description */}
                            <p className="text-slate-600 mt-2 leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
