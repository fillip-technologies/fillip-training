import React from "react";

export default function FacultySection() {
    const faculty = [
        { name: "Mentor 1", img: "/dummy-image.webp" },
        { name: "Mentor 2", img: "/mentor.jpg" },
        { name: "Mentor 3", img: "/mentor.jpg" }
    ];

    return (
        <section id="faculty" className="py-10 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Meet Your Mentors
                    </h2>
                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Learn from experienced industry professionals.
                    </p>
                </div>

                {/* Faculty Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                    {faculty.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl 
                                       transition-all duration-300 text-center hover:-translate-y-1"
                        >
                            {/* Mentor Image */}
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                                <img
                                    src={f.img}
                                    alt={f.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Mentor Name */}
                            <h3 className="mt-5 text-xl font-semibold text-gray-900">
                                {f.name}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
