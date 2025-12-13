// src/components/CompanyCardSwap.jsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CompanyCardSwap() {

    // WHY: Rotating list of companies to showcase multiple brand placements in a small space
    const companies = [
        { label: "HSBC", logo: "/review.png" },
        { label: "Capgemini", logo: "/review2.png" },
        { label: "PayTM", logo: "/review3.png" },
        { label: "Neustar", logo: "/review4.jpg" }
    ];

    // WHY: Index of the currently displayed company logo
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // WHY: Automatically switch logos every 3 seconds to attract attention and show multiple brands
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % companies.length);
        }, 3000);

        // WHY: Cleanup interval on unmount to prevent memory leaks
        return () => clearInterval(interval);
    }, []);

    // WHY: Easily track which company is currently shown
    const current = companies[index];

    return (
        <motion.img
            key={index} // WHY: Key forces framer-motion to animate each change as a new element
            src={current.logo}
            initial={{ opacity: 0 }}      // WHY: Fade-in animation start
            animate={{ opacity: 1 }}      // WHY: Smooth fade transition for visual appeal
            exit={{ opacity: 0 }}         // WHY: Ensures smooth fade-out when switching
            transition={{ duration: 0.8 }} // WHY: Controls animation timing for a clean UI
            className="w-100 h-100 object-contain rounded"
        />
    );
}
