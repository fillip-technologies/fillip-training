import React from "react";

export default function Certificates() {
    const certs = [
        { title: "HTML & CSS Basics", date: "2024" },
        { title: "JavaScript Beginner", date: "2024" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Certificates</h1>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certs.map((c, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                    >
                        <h3 className="font-semibold text-lg">{c.title}</h3>

                        <p className="text-gray-500 mb-2">Issued: {c.date}</p>

                        <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg w-full sm:w-auto">
                            Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
