import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle,
    Play,
    Download,
    Clock,
    Users,
    Star,
    MessageCircle
} from "lucide-react";

const GRADIENT_STYLE = "linear-gradient(90deg,#4F46E5,#9333EA,#06B6D4)";

export default function HeroSection({ data, setOpenEnroll }) {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">

                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                                {data.tag}
                            </span>

                            {data.tagline && (
                                <div className="text-sm text-slate-500">{data.tagline}</div>
                            )}
                        </div>

                        <motion.h1
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
                        >
                            {data.title}
                        </motion.h1>

                        <motion.p
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.08 }}
                            className="text-lg text-slate-600 max-w-2xl"
                        >
                            {data.subtitle}
                        </motion.p>

                        {/* Meta Chips */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <span className="inline-flex items-center gap-3 bg-white border rounded-md px-4 py-2 shadow-sm">
                                <Clock className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-700">{data.duration}</span>
                            </span>

                            <span className="inline-flex items-center gap-3 bg-white border rounded-md px-4 py-2 shadow-sm">
                                <Users className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-700">{data.learners}</span>
                            </span>

                            <span className="inline-flex items-center gap-3 bg-white border rounded-md px-4 py-2 shadow-sm">
                                <Star className="w-4 h-4 text-amber-400" />
                                <span className="text-sm text-slate-700">{data.rating}</span>
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button
                                onClick={() => setOpenEnroll(true)}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                                style={{ background: GRADIENT_STYLE }}
                            >
                                <Play className="w-4 h-4" /> Enquiry Now
                            </button>

                            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border bg-white text-slate-700 shadow-sm">
                                <Download className="w-4 h-4" /> Download Syllabus
                            </button>

                            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border bg-white text-slate-700 shadow-sm">
                                <MessageCircle className="w-4 h-4" /> Talk to Mentor
                            </button>
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {data.highlights?.map((h, idx) => (
                                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
                                    <div>
                                        <div className="font-semibold">{h.title}</div>
                                        <div className="text-sm text-slate-600">{h.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT PRICE CARD */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl p-6 shadow-2xl border"
                        >
                            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-teal-50 p-4">
                                <img
                                    src={data.heroImg}
                                    alt={data.title}
                                    className="w-full h-60 object-cover rounded-lg shadow"
                                />
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <div className="bg-white border rounded-lg p-3 text-center">
                                    <span className="text-sm text-slate-500">Offline Fee</span>
                                    <div className="text-lg font-bold">{data.price}</div>
                                </div>

                                <div className="bg-white border rounded-lg p-3 text-center">
                                    <span className="text-sm text-slate-500">Online</span>
                                    <div className="text-lg font-bold">From {data.emi}</div>
                                </div>
                            </div>

                            <div className="mt-4 space-y-3">
                                <button
                                    onClick={() => setOpenEnroll(true)}
                                    className="w-full py-3 rounded-lg text-white font-semibold"
                                    style={{ background: GRADIENT_STYLE }}
                                >
                                    Apply Now
                                </button>

                                <a href="tel:7545999993" className="block w-full">
                                    <button className="w-full py-3 rounded-lg border">
                                        Request Call
                                    </button>
                                </a>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
