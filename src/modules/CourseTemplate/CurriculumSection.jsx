import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    ChevronDown,
    Check,
    Target,
    Award
} from "lucide-react";

export default function CurriculumSection({ data, openCurr, setOpenCurr, setOpenEnroll }) {

    // Fallback to local state if parent did not pass state
    const [localOpen, setLocalOpen] = useState(null);

    const activeCurr = setOpenCurr ? openCurr : localOpen;

    const toggleCurr = (i) => {
        if (setOpenCurr) {
            setOpenCurr(activeCurr === i ? null : i);
        } else {
            setLocalOpen(activeCurr === i ? null : i);
        }
    };

    return (
        <section id="curriculum" className="py-16 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                        <BookOpen className="w-4 h-4" />
                        DETAILED CURRICULUM
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Master with our{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Structured Syllabus
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A carefully crafted curriculum designed by industry experts.
                    </p>
                </div>

                {/* MAIN CARD */}
                <div className="bg-white rounded-2xl shadow-lg border">

                    {/* Top Bar */}
                    <div className="border-b px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-700 font-medium">Live Classes Available</span>
                        </div>

                        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-700">
                            Download Syllabus
                        </button>
                    </div>

                    {/* MODULES LIST */}
                    <div className="divide-y">
                        {data.curriculum?.map((module, idx) => (
                            <div key={idx} className={`transition-all ${activeCurr === idx ? "bg-indigo-50/40" : "hover:bg-slate-50"}`}>

                                {/* MODULE HEADER */}
                                <button
                                    onClick={() => toggleCurr(idx)}
                                    className="w-full p-6 flex items-center justify-between text-left group"
                                >
                                    <div className="flex gap-5">

                                        {/* Badge */}
                                        <div className="w-12 h-12 rounded-xl bg-indigo-100 group-hover:shadow text-indigo-700 flex items-center justify-center font-bold text-lg">
                                            {idx + 1}
                                        </div>

                                        {/* Info */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700">
                                                {module.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mt-1 max-w-3xl">
                                                {module.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className={`p-2 rounded-lg transition-all ${activeCurr === idx ? "bg-indigo-100 text-indigo-600 rotate-180" : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600"}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                {/* DROPDOWN CONTENT */}
                                {activeCurr === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 pt-2 ml-16"
                                    >
                                        {/* Learning Outcome */}
                                        <div className="mb-6 p-4 bg-indigo-50 rounded-xl border-l-4 border-indigo-500">
                                            <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                                            <p className="text-gray-700">{module.learningOutcome}</p>
                                        </div>

                                        {/* Topics */}
                                        {module.topics?.length > 0 && (
                                            <div className="mb-6">
                                                <h5 className="font-semibold text-gray-900 mb-2">Topics Covered:</h5>
                                                <ul className="space-y-2">
                                                    {module.topics.map((topic, tIdx) => (
                                                        <li key={tIdx} className="flex items-start gap-2 text-gray-700">
                                                            <Check className="w-4 h-4 text-green-500 mt-1" />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Skills */}
                                        {module.skills?.length > 0 && (
                                            <div className="mb-6">
                                                <h5 className="font-semibold text-gray-900 mb-2">Skills You'll Gain:</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {module.skills.map((skill, sIdx) => (
                                                        <span key={sIdx} className="px-3 py-1 bg-white border rounded-full text-xs text-gray-700">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Projects */}
                                        {module.projects?.length > 0 && (
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-2">Projects Included:</h5>
                                                <ul className="space-y-2">
                                                    {module.projects.map((proj, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2 text-gray-700">
                                                            <Award className="w-4 h-4 text-blue-500 mt-1" />
                                                            {proj}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
