import React, { useEffect, useState } from "react";
import { Phone, Facebook, Instagram, MessageCircle, Plus, X } from "lucide-react";

export default function SocialRadialMenu() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.querySelector(".hero-section");
        const faq = document.querySelector(".faq-section");

        if (!hero || !faq) return;

        // Observe HERO (when it leaves viewport → show menu)
        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setVisible(true);
                } else {
                    setVisible(false);
                    setOpen(false);
                }
            },
            { threshold: 0.2 }
        );

        // Observe FAQ (when it enters viewport → hide menu)
        const faqObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(false);
                    setOpen(false);
                }
            },
            { threshold: 0.1 }
        );

        heroObserver.observe(hero);
        faqObserver.observe(faq);

        return () => {
            heroObserver.disconnect();
            faqObserver.disconnect();
        };
    }, []);

    const items = [
        { icon: <Phone size={20} />, link: "tel:7545999996", color: "bg-orange-500" },
        { icon: <MessageCircle size={20} />, link: "https://wa.me/7545999996", color: "bg-green-500" },
        { icon: <Facebook size={20} />, link: "https://www.facebook.com/FillipTechnologies/", color: "bg-blue-600" },
        { icon: <Instagram size={20} />, link: "https://www.instagram.com/filliptechnologies/", color: "bg-pink-500" }
    ];

    return (
        <div
            className={`fixed right-4 top-1/2 -translate-y-1/2 z-[9999]
      transition-opacity duration-300
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            {/* Main Button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl flex items-center justify-center hover:scale-110 transition"
            >
                {open ? <X size={28} /> : <Plus size={28} />}
            </button>

            {/* Icons */}
            <div className="flex flex-col items-center mt-4 space-y-3">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
              w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg
              transition-all duration-300
              ${item.color}
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
