import React from "react";
import { PlayCircle, Star } from "lucide-react";

export default function MyCourses() {

    // Demo data (replace with API later)
    const courses = [
        {
            title: "Full Stack Web Development",
            teacher: "Dr. Rajesh",
            progress: 75,
            rating: 4.8,
            thumbnail:
                "https://miro.medium.com/v2/resize:fit:828/format:webp/1*4L2VNMerXp2aX2nO7hJk9w.png",
        },
        {
            title: "Python & Data Science",
            teacher: "Prof. Priya",
            progress: 45,
            rating: 4.9,
            thumbnail:
                "https://www.princeton.edu/sites/default/files/styles/medium/public/images/2022/09/Python-logo.png",
        },
        {
            title: "Digital Marketing & SEO",
            teacher: "Amit Singh",
            progress: 90,
            rating: 4.7,
            thumbnail:
                "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/01/digital-marketing.jpg",
        },
    ];

    return (
        <div className="space-y-6">

            {/* Page Title */}
            <div>
                <h2 className="text-2xl font-semibold">My Courses</h2>
                <p className="text-gray-500 text-sm mt-1">Keep learning and track your progress</p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                        {/* Thumbnail */}
                        <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-40 object-cover"
                        />

                        <div className="p-4 space-y-3">
                            {/* Title + Teacher */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    By {course.teacher}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span>{course.rating}</span>
                            </div>

                            {/* Progress Bar */}
                            <div>
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                    <span>Progress</span>
                                    <span>{course.progress}%</span>
                                </div>

                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-2 bg-gradient-to-r from-indigo-600 to-teal-400 rounded-full"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Continue Button */}
                            <button
                                className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition"
                            >
                                <PlayCircle className="w-4 h-4" />
                                Continue Learning
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
