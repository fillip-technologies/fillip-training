// src/Dashboard/DashboardHome.jsx
import React from "react";
import { Star, PlayCircle, Upload, PieChart, Clock } from "lucide-react";

/* Small Progress component (simple) */
function ProgressBar({ value = 0 }) {
    return (
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div style={{ width: `${value}%` }} className="h-full bg-gradient-to-r from-indigo-600 to-teal-400" />
        </div>
    );
}

export default function DashboardHome() {
    // demo data (replace with real props / api later)
    const courses = [
        { name: "Full Stack Web Dev", progress: 45, score: "72%" },
        { name: "UI/UX Designing", progress: 30, score: "60%" },
        { name: "Cybersecurity Basics", progress: 75, score: "88%" },
        { name: "Data Structures (JS)", progress: 10, score: "—" },
    ];

    const upcoming = [
        { title: "Sprint Review: MERN", teacher: "Rahul S.", time: "Today • 6:00 PM", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
        { title: "UI Critique Session", teacher: "Anita P.", time: "Tomorrow • 11:00 AM", avatar: "https://randomuser.me/api/portraits/women/65.jpg" }
    ];

    return (
        <div className="space-y-6">

            {/* GREETING + small quick stats row */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-semibold">Good afternoon, Shruti 👋</h2>
                    <p className="text-sm text-gray-500 mt-1">Here's your learning overview and next actions</p>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="hidden md:flex gap-3">
                        <div className="bg-white border rounded-xl p-3 text-sm shadow">
                            <div className="text-xs text-gray-500">Total Hours</div>
                            <div className="text-base font-medium">120h</div>
                        </div>
                        <div className="bg-white border rounded-xl p-3 text-sm shadow">
                            <div className="text-xs text-gray-500">Courses Enrolled</div>
                            <div className="text-base font-medium">3</div>
                        </div>
                        <div className="bg-white border rounded-xl p-3 text-sm shadow">
                            <div className="text-xs text-gray-500">Certificates</div>
                            <div className="text-base font-medium">2</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200" />
                    </div>
                </div>
            </div>

            {/* TOP KPI CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border p-4 shadow-sm">
                    <div className="text-xs text-gray-500">Overall performance</div>
                    <div className="mt-3 flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-medium">80%</div>
                            <div className="text-xs text-gray-500">Pro Learner</div>
                        </div>
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-teal-50">
                            <PieChart className="w-7 h-7 text-indigo-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border p-4 shadow-sm">
                    <div className="text-xs text-gray-500">Total hours</div>
                    <div className="mt-3 text-xl font-medium">120h</div>
                    <div className="text-xs text-green-600 mt-2">+25% this month</div>
                </div>

                <div className="bg-white rounded-xl border p-4 shadow-sm">
                    <div className="text-xs text-gray-500">Courses completed</div>
                    <div className="mt-3 text-xl font-medium">1</div>
                    <div className="text-xs text-green-600 mt-2">+5% this week</div>
                </div>

                <div className="bg-white rounded-xl border p-4 shadow-sm">
                    <div className="text-xs text-gray-500">Active streak</div>
                    <div className="mt-3 text-xl font-medium">5 days</div>
                    <div className="text-xs text-indigo-600 mt-2">Keep going!</div>
                </div>
            </div>

            {/* MAIN GRID — left: upcoming + courses table, right: summary + assignments */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT: Upcoming + course list */}
                <div className="lg:col-span-2 space-y-6">

                    {/* UPCOMING CLASSES */}
                    <div className="bg-white rounded-xl border p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">Upcoming classes</h3>
                            <div className="text-xs text-gray-500">No upcoming classes • Add schedule</div>
                        </div>

                        <div className="mt-4 space-y-3">
                            {upcoming.map((c, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img src={c.avatar} alt="" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <div className="text-sm font-medium">{c.title}</div>
                                            <div className="text-xs text-gray-500">{c.teacher} • {c.time}</div>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm flex items-center gap-2">
                                        <PlayCircle className="w-4 h-4" /> Join
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COURSES TABLE */}
                    <div className="bg-white rounded-xl border p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-base font-medium">Your courses</h3>
                            <div className="text-xs text-gray-500">View all</div>
                        </div>

                        <div className="space-y-4">
                            {courses.map((c, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium">{c.name.split(" ").slice(0, 2).map(s => s[0]).join("")}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-800">{c.name}</div>
                                            <div className="text-xs text-gray-500">{c.score}</div>
                                        </div>
                                        <div className="mt-2">
                                            <ProgressBar value={c.progress} />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="text-indigo-600 text-sm">Resume</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT: Summary / assignments */}
                <aside className="space-y-6">

                    <div className="bg-white rounded-xl border p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs text-gray-500">Learning this month</div>
                                <div className="text-lg font-medium mt-2">46h 30m</div>
                            </div>
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-50 to-teal-50 flex items-center justify-center">
                                <Star className="w-6 h-6 text-indigo-600" />
                            </div>
                        </div>
                        <div className="mt-3 text-xs text-gray-500">Your current level: Advanced</div>
                    </div>

                    <div className="bg-white rounded-xl border p-4 shadow-sm">
                        <h4 className="text-sm font-medium mb-3">Assignment</h4>
                        <div className="text-sm text-gray-800">Advanced problem solving — Math</div>
                        <div className="text-xs text-gray-500 mt-2">Due: 15 Oct, 2024 • 12:00 PM</div>
                        <div className="mt-4 flex gap-2">
                            <button className="flex-1 px-3 py-2 bg-white border rounded-md text-sm">View</button>
                            <button className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Upload</button>
                        </div>
                    </div>

                    {/* <div className="bg-white rounded-xl border p-4 shadow-sm">
                        <h4 className="text-sm font-medium mb-2">Pending quizzes</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="text-sm">Vector division</div>
                                <button className="text-indigo-600 text-sm">Start</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">Vector structure</div>
                                <button className="text-indigo-600 text-sm">Start</button>
                            </div>
                        </div>
                    </div> */}

                </aside>
            </div>
        </div>
    );
}
