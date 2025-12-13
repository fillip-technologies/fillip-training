// src/modules/CourseTemplate/CourseTemplate.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import EnrollModal from "@/components/common/EnrollModal";

import HeroSection from "./HeroSection";
import IndustrySection from "./IndustrySection";
import StickyTabs from "./StickyTabs";
import CurriculumSection from "./CurriculumSection";
import CourseBenefitsSection from "./CourseBenefitsSection";
import CareerSection from "./CareerSection";
import FacultySection from "./FacultySection";
import TestimonialsSection from "./TestimonialsSection";
// import PlansSection from "./PlansSection";
import FAQSection from "./FAQSection";

export default function CourseTemplate({ data }) {
    const navigate = useNavigate();

    // Modal
    const [openEnroll, setOpenEnroll] = useState(false);

    // Curriculum Accordion
    const [openCurr, setOpenCurr] = useState(null);

    // Sticky section highlighter
    const [activeSection, setActiveSection] = useState("curriculum");

    const sectionIds = [
        "curriculum",
        "benefits",
        "career",
        "faculty",
        "testimonials",

        "faqs",
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Handle pricing use case
    const handleSelect = (mode) => {
        navigate("/cart", {
            state: {
                courseName: data.title,
                mode,
                price: mode === "online" ? data.emi : data.price,
            },
        });
    };

    return (
        <main className="w-full bg-slate-50">

            <HeroSection data={data} setOpenEnroll={setOpenEnroll} />

            <IndustrySection industry={data.industry} />


            <StickyTabs activeSection={activeSection} />

            {/* CURRICULUM SECTION (fixed props!) */}
            <CurriculumSection
                data={data}
                openCurr={openCurr}
                setOpenCurr={setOpenCurr}
                setOpenEnroll={setOpenEnroll}
            />

            <CourseBenefitsSection benefits={data.benefits} />

            <CareerSection />

            <FacultySection />

            <TestimonialsSection />



            <FAQSection data={data} />

            <EnrollModal
                open={openEnroll}
                onClose={() => setOpenEnroll(false)}
                onSelect={handleSelect}
            />

        </main>
    );
}
