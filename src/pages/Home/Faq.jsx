import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {

    const faqs = [
        {
            q: "What courses do you offer?",
            a: "We offer UI/UX Designing, Graphics Designing, Full-Stack Development, Digital Marketing, AI & Machine Learning, Business Development and other job-oriented courses with live training and expert mentorship."
        },
        {
            q: "Are the classes online or offline?",
            a: "We offer both online and offline classes, so you can choose the learning mode that suits your schedule and comfort."
        },
        {
            q: "Do you provide certificates?",
            a: "Yes, all our programs come with verified certificates after successful completion."
        },
        {
            q: "Are the classes live or recorded?",
            a: "Our classes are conducted live with interactive sessions, and recorded lessons are also provided so you can revise anytime."
        },
        {
            q: "Can beginners join your courses?",
            a: "Yes! Our courses are beginner-friendly. You can join without experience and start learning from scratch with step-by-step guidance."
        },
        {
            q: "Do you provide study materials?",
            a: "Yes, all enrolled students receive lifetime access to complete learning materials, along with future updates."
        },
        {
            q: "How can I enroll?",
            a: "You can enroll through our website, visit our center in person, or book a free career counselling call for guidance."
        }
    ];


    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
            <div className="max-w-4xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h2>

                    <div className="flex justify-center mt-3">
                        <span className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                    </div>

                    <p className="text-slate-600 max-w-2xl mx-auto mt-4">
                        Find answers to common queries about our training programs,
                        internships, certifications, and placements.
                    </p>
                </div>

                {/* FAQ LIST – SINGLE COLUMN */}
                <div className="space-y-6">

                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="
                  bg-white/80 backdrop-blur-xl border border-white/60
                  shadow-md rounded-2xl transition-all duration-300
                  hover:shadow-xl
                "
                            >

                                {/* QUESTION */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center gap-4 p-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {item.q}
                                    </h3>

                                    <ChevronDown
                                        size={24}
                                        className={`text-blue-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* ANSWER */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 px-6 pb-6" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-slate-700 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
