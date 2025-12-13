import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection({ data, openFaq, setOpenFaq }) {
    // If parent doesn't control state → use local state
    const [localOpen, setLocalOpen] = useState(null);

    const active = setOpenFaq ? openFaq : localOpen;

    const toggleFaq = (index) => {
        if (setOpenFaq) {
            setOpenFaq(active === index ? null : index);
        } else {
            setLocalOpen(active === index ? null : index);
        }
    };

    return (
        <section id="faqs" className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>

                <div className="mt-6 space-y-4">
                    {data.faqs?.map((f, i) => (
                        <div
                            key={i}
                            className="border rounded-xl bg-white shadow-sm transition-all"
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-50"
                            >
                                {f.q}
                                <ChevronDown
                                    className={`transition-transform duration-300 ${active === i ? "rotate-180 text-indigo-600" : ""
                                        }`}
                                />
                            </button>

                            {/* Body */}
                            {active === i && (
                                <div className="px-5 pb-4 text-slate-600 animate-fadeIn">
                                    {f.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
