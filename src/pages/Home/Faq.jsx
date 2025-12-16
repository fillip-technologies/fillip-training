import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {

    const faqs = [
        {
            q: "What courses do you offer?",
            a: "We provide IT training in Web Development, Software Testing, Digital Marketing, Data Science, Cloud Computing, and more job-oriented programs."
        },

        {
            q: "Are the classes online or offline?",
            a: "Both online and offline learning modes are available depending on student convenience."
        },
        {
            q: "Can beginners join your courses?",
            a: "Absolutely! Even without prior experience, you can join and learn from scratch."
        },


        {
            q: "What is the course duration?",
            a: "Most courses range from 2 to 9 months depending on program level."
        },
        {
            q: "Do you provide study materials?",
            a: "Yes, students get lifetime access to all learning materials and updates."
        },
        {
            q: "Are classes live or recorded?",
            a: "We provide live interactive classes along with recorded lessons for revision."
        },
        {
            q: "How can I enroll?",
            a: "You can enroll through our website, visit our center, or book a free career counselling call."
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
