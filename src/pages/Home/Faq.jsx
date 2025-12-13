import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {

    const faqs = [
        { q: "What courses do you offer?", a: "We provide IT training in Web Development, Software Testing, Digital Marketing, Data Science, Cloud Computing, and more job-oriented programs." },
        { q: "Do you offer placement support?", a: "We offer 100% placement assistance with mock interviews, resume building, and referral support." },
        { q: "Are the classes online or offline?", a: "Both online and offline learning modes are available depending on student convenience." },
        { q: "Can beginners join your courses?", a: "Absolutely! Even without prior experience, you can join and learn from scratch." },
        { q: "Do you provide certificates?", a: "Yes, all programs include industry-recognized certificates upon successful completion." },
        { q: "Is EMI available?", a: "We offer flexible EMI options including zero-cost EMI for most courses." },
        { q: "What is the course duration?", a: "Most courses range from 2 to 9 months depending on program level." },
        { q: "Do you provide study materials?", a: "Yes, students get lifetime access to all learning materials and updates." },
        { q: "Are classes live or recorded?", a: "We provide live interactive classes along with recorded lessons for revision." },
        { q: "How can I enroll?", a: "You can enroll through our website, visit our center, or book a free career counselling call." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h2>

                    <div className="flex justify-center mt-3">
                        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>

                    <p className="text-slate-600 max-w-2xl mx-auto mt-4">
                        Find answers to common queries about our training programs, internships, certifications, and placements.
                    </p>
                </div>

                {/* Two-Column FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className="
                bg-white/80 backdrop-blur-xl border border-white/60 shadow-md
                rounded-2xl p-6 cursor-pointer transition-all
                hover:shadow-xl hover:bg-white
              "
                        >
                            {/* Question Row */}
                            <div className="flex justify-between items-center gap-4">

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.q}
                                </h3>

                                <span className="text-blue-700">
                                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </span>
                            </div>

                            {/* Answer */}
                            <div
                                className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                                    }`}
                            >
                                <p className="text-slate-700 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
