import React from "react";
import { Briefcase, Compass, FileCheck, MessageCircle } from "lucide-react";

export default function CareerSection() {
    return (
        <section id="career" className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Guiding You Towards a Better Career
                    </h2>
                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-lg">
                        We don’t promise placements — but we ensure you grow with the right direction,
                        confidence, and clarity in your career journey.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="group p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition">
                            <Compass className="w-7 h-7 text-indigo-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Career Roadmapping
                        </h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                            Understand what path fits you best and how to start building expertise.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
                            <FileCheck className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Portfolio & Resume Review
                        </h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                            Personalized feedback to make your portfolio stand out in the industry.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition">
                            <MessageCircle className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            1:1 Mentorship Support
                        </h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                            Resolve doubts, get guidance, and stay motivated throughout the course.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                            <Briefcase className="w-7 h-7 text-amber-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Interview Confidence
                        </h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                            Mock Q&A, communication tips, and confidence building — without false promises.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
