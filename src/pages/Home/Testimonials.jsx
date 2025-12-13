import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import CompanyCardSwap from "./CompanyCardSwap";


export default function TrustedBy() {
    const testimonials = [
        {
            text: "We have the best engineers on board from Fillip Technologies. Their value addition and ownership make them our top hiring choice.",
            name: "Yogesh Lokhande",
            title: "Co-founder, PayGlobal",
            avatar: "/dummy-image.webp"
        },
        {
            text: "Their interns always show great problem-solving skills and hands-on development experience.",
            name: "Ritesh Sharma",
            title: "Engineering Manager, BlueTech",
            avatar: "/dummy-image.webp"
        }
    ];

    const hexLogos = [
        { label: "HSBC", logo: "/companies/hsbc.png" },
        { label: "Capgemini", logo: "/companies/capgemini.png" },
        { label: "PayTM", logo: "/companies/paytm.png" },
        { label: "Neustar", logo: "/companies/neustar.png" }
    ];

    return (
        <section className="relative py-24 bg-[#032B77] overflow-hidden text-white ">

            {/* Wavy BG */}
            {/* <img
                src="/patterns/waves.png"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                alt="bg"
            /> */}

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: CAROUSEL TESTIMONIALS */}
                <div>
                    <h2 className="text-4xl md:text-4xl font-bold mb-6">
                        Where Fillip Technologies {" "}
                        <span className="text-blue-300">Students Win</span>
                    </h2>

                    <Marquee speed={30} gradient={false} pauseOnHover className="max-w-xl">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-lg p-6 mx-4 w-96 rounded-2xl shadow-xl"
                            >
                                <p className="text-white/90 leading-relaxed">{t.text}</p>

                                <div className="flex items-center gap-3 mt-6">
                                    <img
                                        src={t.avatar}
                                        className="w-12 h-12 rounded-full border-2 border-white"
                                        alt="avatar"
                                    />
                                    <div>
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-white/60 text-sm">{t.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* RIGHT: HEXAGON GRID */}

                <div className="flex justify-center items-center">
                    <CompanyCardSwap />
                </div>





            </div>

            {/* BOTTOM COUNTERS */}
            {/* <div className="relative max-w-5xl mx-auto mt-20 flex justify-around text-center">
                {[
                    { count: "500+", label: "COMPANIES" },
                    { count: "8000+", label: "OPENINGS" },
                    { count: "2000+", label: "PLACEMENTS" }
                ].map((item, i) => (
                    <div key={i}>
                        <h2 className="text-4xl font-extrabold">{item.count}</h2>
                        <p className="text-white/60 text-sm tracking-widest mt-1">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div> */}
        </section>
    );
}
