// src/components/CompanyCardSwap.jsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CompanyCardSwap() {
    const companies = [
        { label: "HSBC", logo: "/review.png" },
        { label: "Capgemini", logo: "/review2.png" },
        { label: "PayTM", logo: "/review3.png" },
        { label: "Neustar", logo: "/review4.jpg" }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % companies.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:flex w-full justify-center items-center">
            <motion.img
                key={index}
                src={companies[index].logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                alt={companies[index].label}
                className="object-contain rounded"
            />
        </div>
    );
}
