import React from "react";

const COLLEGES = [
    {
        name: "IIT Kanpur",
        logo: "/companylogo/iitkanpur.png",
        website: "https://www.iitk.ac.in"
    },
    {
        name: "IIT Bombay",
        logo: "/companylogo/IITBombay.png",
        website: "https://www.iitb.ac.in"
    },
    {
        name: "Bennett University",
        logo: "/companylogo/Bennett.jpg",
        website: "https://www.bennett.edu.in"
    },
    {
        name: "DTU",
        logo: "/companylogo/dtu.png",
        website: "https://dtu.ac.in/"
    },

    {
        name: "Amity University",
        logo: "/companylogo/AMITY.png",
        website: "https://www.amity.edu"
    },
    {
        name: "Christ University",
        logo: "/companylogo/Christ.png",
        website: "https://christuniversity.in"
    },

    {
        name: "Manipal University",
        logo: "/companylogo/manipal.png",
        website: "https://manipal.edu"
    },
    {
        name: "VIT Vellore",
        logo: "/companylogo/vit.png",
        website: "https://vit.ac.in"
    },
    {
        name: "SRM University",
        logo: "/companylogo/srm.png",
        website: "https://www.srmist.edu.in"
    },


    {
        name: "GNDU",
        logo: "/companylogo/gndu.png",
        website: "https://www.gndu.ac.in"
    },

];

export default function Colleges() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-4 h-0.5 bg-gray-400"></div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                            TRUSTED BY
                        </span>
                        <div className="w-4 h-0.5 bg-gray-400"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Students from India's
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-2">
                            Leading Institutions
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Our training programs are trusted by students from prestigious colleges nationwide,
                        building successful careers through practical learning.
                    </p>
                </div>

                {/* Colleges Grid with Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
                    {COLLEGES.map((college, index) => (
                        <a
                            key={index}
                            href={college.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="
                                bg-white rounded-xl border border-gray-200 shadow-sm
                                hover:shadow-xl hover:-translate-y-1 hover:border-blue-300
                                transition-all duration-300 h-full p-4
                                flex flex-col items-center justify-center
                            ">
                                {/* College Logo Container */}
                                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 p-2">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <img
                                            src={college.logo}
                                            alt={`${college.name} Logo`}
                                            className="
                                                max-w-full max-h-full object-contain
                                                group-hover:scale-105 transition-transform duration-300
                                                filter grayscale group-hover:grayscale-0
                                            "
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6' rx='8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3E${college.name.split(' ')[0]}%3C/text%3E%3C/svg%3E";
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    </div>
                                </div>

                                {/* College Name */}
                                <div className="text-center">
                                    <div className="font-semibold text-gray-800 text-sm leading-tight">
                                        {college.name}
                                    </div>
                                    <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center text-xs text-blue-600 font-medium">
                                            Visit Website
                                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Partnership Info Section */}
                {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Institutional Partnership Program
                            </h3>
                            <p className="text-gray-700 mb-6">
                                We collaborate with educational institutions to provide students with
                                industry-aligned training that complements their academic curriculum.
                                Our partnerships focus on skill development and career readiness.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Curriculum Integration</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Industry Workshops</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Internship Programs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Placement Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex justify-center">
                            <button className="
                                px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
                                text-white font-semibold rounded-lg shadow-md 
                                hover:shadow-lg transform hover:-translate-y-0.5 
                                transition-all duration-300 flex items-center gap-2
                            ">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Partner with Us
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-4 text-gray-600 mb-4">
                        <div className="w-8 h-px bg-gray-300"></div>
                        <span className="text-sm">More than 50 institutions nationwide</span>
                        <div className="w-8 h-px bg-gray-300"></div>
                    </div>
                    <a
                        href="#"
                        className="
                            inline-flex items-center gap-2 px-6 py-3 
                            border border-gray-300 text-gray-700 font-medium rounded-lg 
                            hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50
                            transition-all duration-300
                        "
                    >
                        View All Colleges Our Students Come From
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}