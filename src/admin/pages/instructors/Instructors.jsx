import { useState } from "react";
import { Pencil, Trash2, User, BookOpen, Clock } from "lucide-react";

export default function Instructors() {
    const [instructors, setInstructors] = useState([
        {
            id: 1,
            name: "Rajesh Kumar",
            email: "rajesh@example.com",
            phone: "9876543210",
            specialization: "Full Stack Development",
            batches: ["FS-01", "FS-02"],
            students: 45,
            todaysClasses: [
                { time: "10:00 AM", course: "FS Module 6", batch: "FS-01" },
                { time: "2:30 PM", course: "React Advanced", batch: "FS-02" },
            ],
        },
        {
            id: 2,
            name: "Priya Sharma",
            email: "priya@example.com",
            phone: "9998881234",
            specialization: "UI/UX Design",
            batches: ["UIUX-01"],
            students: 22,
            todaysClasses: [
                { time: "12:00 PM", course: "Figma Wireframes", batch: "UIUX-01" },
            ],
        },
    ]);

    const deleteInstructor = (id) => {
        setInstructors(instructors.filter((i) => i.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Instructors</h1>

            {/* Add New Instructor Button */}
            <button
                className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
                + Add New Instructor
            </button>

            {/* Instructor Cards */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {instructors.map((inst) => (
                    <div
                        key={inst.id}
                        className="bg-white rounded-xl shadow border p-5 flex flex-col gap-4 hover:shadow-md transition"
                    >
                        {/* PROFILE HEADER */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                                <User size={26} className="text-blue-700" />
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">{inst.name}</h2>
                                <p className="text-sm text-gray-600">{inst.email}</p>
                                <p className="text-sm text-gray-600">{inst.phone}</p>
                            </div>
                        </div>

                        {/* SPECIALIZATION */}
                        <div className="text-sm">
                            <strong>Specialization:</strong>{" "}
                            <span className="text-blue-700">{inst.specialization}</span>
                        </div>

                        {/* BATCHES */}
                        <div className="text-sm">
                            <strong>Batches:</strong>
                            <div className="flex gap-2 flex-wrap mt-1">
                                {inst.batches.map((b, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700"
                                    >
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* STUDENT COUNT */}
                        <div className="flex items-center gap-2 text-sm">
                            <BookOpen size={16} className="text-purple-600" />
                            <strong>Students:</strong> {inst.students}
                        </div>

                        {/* TODAY'S CLASSES */}
                        <div className="mt-2">
                            <h3 className="font-semibold mb-1 text-sm">Today's Classes</h3>
                            <div className="space-y-2">
                                {inst.todaysClasses.map((c, idx) => (
                                    <div
                                        key={idx}
                                        className="p-2 border rounded-lg text-sm bg-gray-50"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Clock size={15} className="text-blue-600" />
                                            <span>{c.time}</span>
                                        </div>
                                        <p className="text-gray-700">{c.course}</p>
                                        <p className="text-xs text-gray-500">Batch: {c.batch}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex justify-between items-center pt-2">
                            <button className="text-blue-600 hover:underline text-sm">
                                View Details
                            </button>

                            <div className="flex gap-3">
                                <button>
                                    <Pencil size={18} className="text-green-600 hover:text-green-800" />
                                </button>

                                <button onClick={() => deleteInstructor(inst.id)}>
                                    <Trash2 size={18} className="text-red-500 hover:text-red-700" />
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
