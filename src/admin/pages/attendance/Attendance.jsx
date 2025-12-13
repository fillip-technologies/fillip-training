import { useState } from "react";

export default function MarkAttendance() {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [students, setStudents] = useState([]);

    // Fake batches & student data (replace with backend later)
    const courses = ["FullStack Development", "UI/UX Design", "AI/ML"];
    const batches = {
        "FullStack Development": ["FS-01", "FS-02"],
        "UI/UX Design": ["UX-01"],
        "AI/ML": ["AI-01"],
    };

    const sampleStudents = [
        { id: 1, name: "Shruti Singh", status: "Present" },
        { id: 2, name: "Rahul Mehta", status: "Present" },
        { id: 3, name: "Anjali Kapoor", status: "Absent" },
        { id: 4, name: "Manish Kumar", status: "Present" },
    ];

    const loadStudents = () => {
        if (!selectedCourse || !selectedBatch || !selectedDate) {
            alert("Please select Course, Batch, and Date.");
            return;
        }

        setStudents(sampleStudents);
    };

    const updateStatus = (id, newStatus) => {
        setStudents(prev =>
            prev.map(s =>
                s.id === id ? { ...s, status: newStatus } : s
            )
        );
    };

    return (
        <div className="space-y-8">

            <h1 className="text-3xl font-semibold text-gray-800">Mark Attendance</h1>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* Course */}
                <div>
                    <label className="text-sm font-medium">Select Course</label>
                    <select
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={selectedCourse}
                        onChange={(e) => {
                            setSelectedCourse(e.target.value);
                            setSelectedBatch("");
                        }}
                    >
                        <option value="">Choose Course</option>
                        {courses.map((c) => <option key={c}>{c}</option>)}
                    </select>
                </div>

                {/* Batch */}
                <div>
                    <label className="text-sm font-medium">Select Batch</label>
                    <select
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={selectedBatch}
                        onChange={(e) => setSelectedBatch(e.target.value)}
                        disabled={!selectedCourse}
                    >
                        <option value="">Choose Batch</option>
                        {selectedCourse &&
                            batches[selectedCourse].map((b) => (
                                <option key={b}>{b}</option>
                            ))}
                    </select>
                </div>

                {/* Date */}
                <div>
                    <label className="text-sm font-medium">Select Date</label>
                    <input
                        type="date"
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Load Students Button */}
            <button
                onClick={loadStudents}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Load Student List
            </button>

            {/* Student Attendance Table */}
            {students.length > 0 && (
                <div className="bg-white p-6 border rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Student List</h2>

                    <table className="w-full text-sm">
                        <thead className="border-b">
                            <tr>
                                <th className="text-left py-3">Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((s) => (
                                <tr key={s.id} className="border-b">
                                    <td className="py-3">{s.name}</td>

                                    {/* Attendance Status */}
                                    <td>
                                        <select
                                            className="p-2 border rounded-lg"
                                            value={s.status}
                                            onChange={(e) => updateStatus(s.id, e.target.value)}
                                        >
                                            <option value="Present">Present</option>
                                            <option value="Absent">Absent</option>
                                            <option value="Leave">Leave</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        Save Attendance
                    </button>
                </div>
            )}
        </div>
    );
}
