import React from "react";

export default function Dashboard() {

    const todaysClasses = [
        {
            time: "10:00 AM",
            title: "Full Stack Web Dev (Module 6)",
            instructor: "Rajesh Kumar",
            batch: "FS-A1",
            mode: "Online",
            status: "Scheduled",
        },
        {
            time: "12:30 PM",
            title: "Digital Marketing Advanced",
            instructor: "Priya Sharma",
            batch: "DM-B3",
            mode: "Offline",
            status: "In Progress",
        },
        {
            time: "03:00 PM",
            title: "Python & ML Lab Session",
            instructor: "Amit Tiwari",
            batch: "PY-C2",
            mode: "Online",
            status: "Completed",
        },
    ];


    const coursePerformance = [
        { title: "Full Stack Development", progress: 85 },
        { title: "Cyber Security", progress: 60 },
        { title: "Data Science Mastery", progress: 45 },
        { title: "Digital Marketing Advanced", progress: 70 },
    ];

    const batches = [
        { batch: "FS-A1", course: "Full Stack Development", mode: "Online", students: 36 },
        { batch: "CS-B2", course: "Cyber Security", mode: "Offline", students: 22 },
        { batch: "DM-X3", course: "Digital Marketing", mode: "Online", students: 41 },
    ];

    const instructors = [
        { name: "Rajesh Kumar", rating: 4.8, attendance: 92, batches: 3 },
        { name: "Priya Sharma", rating: 4.6, attendance: 88, batches: 2 },
        { name: "Amit Tiwari", rating: 4.9, attendance: 94, batches: 4 },
    ];

    return (
        <div className="space-y-10 pb-10">

            {/* TITLE */}




            {/* TODAY'S LIVE CLASSES */}
            {/* TODAY'S CLASSES (ADMIN VIEW) */}
            <div className="bg-white border rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Today's Classes</h2>

                <div className="space-y-4">
                    {todaysClasses.map((c, i) => (
                        <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 transition">

                            <p className="font-semibold text-slate-800">{c.time} — {c.title}</p>
                            <p className="text-sm text-slate-500">Instructor: {c.instructor}</p>
                            <p className="text-sm text-slate-500">Batch: {c.batch}</p>

                            <span
                                className={`inline-block mt-2 px-2 py-1 text-xs rounded ${c.mode === "Online"
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-orange-100 text-orange-600"
                                    }`}
                            >
                                {c.mode}
                            </span>

                            <span
                                className={`inline-block ml-2 px-2 py-1 text-xs rounded ${c.status === "Scheduled"
                                    ? "bg-gray-100 text-gray-600"
                                    : c.status === "In Progress"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-slate-200 text-slate-600"
                                    }`}
                            >
                                {c.status}
                            </span>

                            <div className="mt-3">
                                <button className="px-4 py-1.5 text-sm rounded-md bg-slate-700 text-white hover:bg-slate-800">
                                    View Class Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* COURSE PERFORMANCE */}
            <div className="bg-white border rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Course Performance</h2>

                <div className="space-y-5">
                    {coursePerformance.map((course, i) => (
                        <div key={i}>
                            <div className="flex justify-between">
                                <p className="font-medium">{course.title}</p>
                                <p className="text-sm text-slate-500">{course.progress}%</p>
                            </div>
                            <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                                <div
                                    className="h-3 bg-indigo-600 rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BATCHES OVERVIEW */}
            <div className="bg-white border rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Active Batches Overview</h2>

                <div className="space-y-4">
                    {batches.map((b, i) => (
                        <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                            <p className="font-semibold">{b.batch} — {b.course}</p>
                            <p className="text-sm text-slate-500">Students: {b.students}</p>

                            <span
                                className={`inline-block mt-2 px-2 py-1 text-xs rounded ${b.mode === "Online"
                                    ? "bg-purple-100 text-purple-600"
                                    : "bg-pink-100 text-pink-600"
                                    }`}
                            >
                                {b.mode}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* INSTRUCTOR PERFORMANCE */}
            <div className="bg-white border rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Instructor Performance</h2>

                <div className="space-y-4">
                    {instructors.map((ins, i) => (
                        <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                            <div className="flex justify-between">
                                <p className="font-semibold">{ins.name}</p>
                                <p className="text-sm text-yellow-600">⭐ {ins.rating}</p>
                            </div>
                            <p className="text-sm text-slate-500">Attendance: {ins.attendance}%</p>
                            <p className="text-sm text-slate-500">Active Batches: {ins.batches}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white border rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

                <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">Add New Course</button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm">Create Batch</button>
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 text-sm">Schedule Class</button>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 text-sm">Assign Instructor</button>
                    <button className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 text-sm">Issue Certificates</button>
                </div>
            </div>

        </div>
    );
}
