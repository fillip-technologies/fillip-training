import React from "react";

const BLOGS = [
    {
        title: "How to Start Your Career in Web Development in 2025",
        desc: "A complete roadmap for beginners to master HTML, CSS, JavaScript, and modern frameworks like React.",
        category: "Career Guide",
        image: "/blog/blog1.png",
        date: "Feb 2025",
        link: "/blog/web-development-career-roadmap",
    },
    {
        title: "Why Internship in IT is the Most Important Step for Students",
        desc: "Internships provide practical learning, real project experience, and industry exposure—here’s why it matters.",
        category: "Internship",
        image: "/blog/blog2.png",
        date: "Jan 2025",
        link: "/blog/importance-of-internships",
    },
    {
        title: "Top 7 Programming Languages to Learn in 2025",
        desc: "From Python to Rust — learn what languages will dominate the IT job market in 2025.",
        category: "Programming",
        image: "/blog/blog3.png",
        date: "Feb 2025",
        link: "/blog/best-programming-languages-2025",
    },
];

export default function HomeBlogSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/40">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blogs</span>
                    </h2>

                    <div className="flex justify-center mt-4">
                        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>

                    <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-lg">
                        Stay updated with trending technologies, IT career tips, internship insights, and learning resources.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {BLOGS.map((blog, i) => (
                        <a key={i} href={blog.link} className="group block">

                            {/* Card Container */}
                            <div className="
                bg-white rounded-2xl shadow-md border border-blue-100
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                overflow-hidden
              ">

                                {/* Blog Image */}
                                <div className="h-52 w-full overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    {/* Category Tag */}
                                    <span className="
                    inline-block px-3 py-1 text-xs font-semibold rounded-full 
                    bg-blue-100 text-blue-700 mb-3
                  ">
                                        {blog.category}
                                    </span>

                                    {/* Blog Title */}
                                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
                                        {blog.title}
                                    </h3>

                                    {/* Short Description */}
                                    <p className="text-slate-600 text-sm mt-2 line-clamp-3">
                                        {blog.desc}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-xs text-slate-500">{blog.date}</span>

                                        <span className="text-blue-600 font-medium text-sm group-hover:underline">
                                            Read More →
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
