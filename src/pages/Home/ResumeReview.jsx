import React, { useRef } from "react";

export default function HeroResumeReview() {

    const fileInputRef = useRef();
    // WHY: Using a ref to trigger the hidden file input programmatically 
    //      keeps UI clean and allows custom styling of the upload button.

    // WHY: This function ensures the user uploads only PDF files, 
    //      preventing format issues and maintaining a controlled workflow.
    const handleFileSelect = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        // WHY: Restricting to PDF avoids parsing/rendering complications for other formats.
        if (file.type !== "application/pdf") {
            alert("Only PDF files are allowed!");
            e.target.value = ""; // WHY: Reset input so user can re-upload
            return;
        }

        console.log("Selected PDF:", file);
        alert("File selected: " + file.name);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F7FF] p-8">

            {/* WHY: Hidden file input to enforce PDF restriction while using a custom UI button */}
            <input
                type="file"
                accept="application/pdf"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
            />

            {/* WHY: Main review container with soft gradient to match brand visual identity */}
            <div
                className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl"
                style={{
                    background:
                        "linear-gradient(90deg,#E8F2FF 0%, #F3F7FF 40%, #EAF6FF 100%)",
                }}
            >

                {/* WHY: Subtle grid overlay adds depth and modern UI texture without distracting the user */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(59,91,254,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,91,254,0.03) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-12 lg:p-20 items-center">

                    {/* WHY: Left section explains purpose and drives the user to upload a resume */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#0E2245]">
                            Get Your Resume Reviewed by
                            <span className="block text-[#3B5BFE]">AI — Instantly</span>
                        </h2>

                        {/* WHY: Encourages users by reassuring them about recruiter insights */}
                        <p className="mt-6 text-lg text-[#12314A]">
                            Know what recruiters see and improve it before you apply.
                        </p>

                        <div className="mt-8 flex items-center gap-4">

                            {/* WHY: Opens file input programmatically for smoother UX */}
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="px-6 py-3 rounded-xl bg-[#3B5BFE] text-white font-semibold shadow-md hover:opacity-95"
                            >
                                Evaluate My Resume
                            </button>

                        </div>
                    </div>

                    {/* WHY: Right side visually demonstrates what the AI system returns (mock UI preview) */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* WHY: Background blurred card adds depth + layered effect */}
                        <div className="absolute top-10 right-20 w-72 h-48 rounded-xl bg-white shadow-lg p-4 
                            opacity-60 scale-90 transform rotate-1 z-0 blur-[0.5px]">
                            <div className="text-xs text-black-400">Resume Review</div>
                            <div className="mt-2 text-sm text-[#12314A] opacity-70">
                                Name : Shruti Singh .<br />
                                Company : Fillip Skill Academy.
                            </div>
                        </div>

                        {/* WHY: Score card shows user a sample benchmark result for motivation */}
                        <div className="w-80 h-52 rounded-xl bg-white shadow-lg p-4 relative z-30">
                            <div className="text-xs text-gray-400">Your Resume Score</div>
                            <div className="flex items-center justify-between mt-2">
                                <div>
                                    <div className="text-3xl font-bold text-[#0E2245]">81.23</div>
                                    <div className="text-sm text-green-600 mt-1">Excellent</div>
                                </div>
                                <div className="w-20 h-20 rounded-full border-4 border-[#3B5BFE] 
                                    flex items-center justify-center text-sm font-semibold">
                                    81
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-3">
                                Resumes with 80+ Score have 2x more chances of getting shortlisted.
                            </div>
                        </div>

                        {/* WHY: AI suggestion preview gives user an idea of actionable feedback */}
                        <div className="absolute top-20 right-0 w-72 rounded-xl bg-white shadow-md p-4 
                            transform rotate-3 z-20">
                            <div className="text-xs text-gray-500">AI Suggestion</div>
                            <div className="mt-2 text-sm text-[#12314A]">
                                No Professional Summary — Please include a concise career summary
                                specific to the job role.
                            </div>
                        </div>

                        {/* WHY: Section breakdown card shows score distribution to simulate ATS scanning */}
                        <div className="absolute bottom-4 right-10 w-60 rounded-xl bg-white shadow p-4 
                            transform -rotate-2 border-l-4 border-[#3B5BFE] z-10">
                            <div className="text-xs text-gray-500">Section Wise Breakdown</div>
                            <ul className="mt-2 text-sm text-[#12314A] space-y-1">
                                <li>Order of Sections: <span className="font-semibold">6/10</span></li>
                                <li>Experience: <span className="font-semibold">20/20</span></li>
                                <li>Skills: <span className="font-semibold">20/20</span></li>
                            </ul>
                        </div>

                        {/* WHY: Circular AI/ATS tags simulate real ATS + AI scanning badges */}
                        <div className="absolute left-6 top-6 w-10 h-10 rounded-full bg-[#3B5BFE] 
                            flex items-center justify-center text-white font-bold shadow z-40">
                            AI
                        </div>

                        <div className="absolute left-20 top-60 w-10 h-10 rounded-full bg-[#FFC5D3] 
                            flex items-center justify-center text-white font-bold shadow z-40">
                            ATS
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
