import { useState } from "react";
import EditStudentModal from "./EditStudentModal";
import AddStudentModal from "./AddStudentModal";
import { Link } from "react-router-dom";
import { Pencil, Trash2, User } from "lucide-react";

export default function UiUxStudents() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Aarav Patel",
            email: "aarav.uiux@example.com",
            phone: "9876541230",
            batch: "UIUX-01",
            mode: "Online",
            completed: false,
        },
        {
            id: 2,
            name: "Neha Kapoor",
            email: "neha.uiux@example.com",
            phone: "9123456780",
            batch: "UIUX-02",
            mode: "Offline",
            completed: true,
        },
    ]);

    const [editingStudent, setEditingStudent] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);

    const deleteStudent = (id) => {
        setStudents(students.filter((s) => s.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">UI/UX Course Students</h1>

            {/* ADD NEW STUDENT BUTTON */}
            <button
                onClick={() => setShowAddModal(true)}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                + Add New UI/UX Student
            </button>

            {/* STUDENT CARDS GRID */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {students.map((s) => (
                    <div
                        key={s.id}
                        className="bg-white rounded-xl shadow border p-5 flex flex-col gap-3 hover:shadow-md transition"
                    >
                        {/* PROFILE HEADER */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                                <User size={24} className="text-blue-600" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">{s.name}</h2>
                                <p className="text-sm text-gray-500">{s.email}</p>
                            </div>
                        </div>

                        {/* INFO */}
                        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                            <p><strong>Phone:</strong> {s.phone}</p>
                            <p><strong>Batch:</strong> {s.batch}</p>

                            <p>
                                <strong>Mode:</strong>{" "}
                                <span
                                    className={`px-2 py-1 text-xs rounded ${s.mode === "Online"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-orange-100 text-orange-600"
                                        }`}
                                >
                                    {s.mode}
                                </span>
                            </p>

                            <p>
                                <strong>Status:</strong>{" "}
                                {s.completed ? (
                                    <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">
                                        Completed
                                    </span>
                                ) : (
                                    <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                                        In Progress
                                    </span>
                                )}
                            </p>
                        </div>

                        {/* ACTIONS */}
                        <div className="mt-3 flex justify-between items-center">
                            <Link
                                to={`/admin/students/details/${s.id}`}
                                className="text-blue-600 text-sm hover:underline"
                            >
                                View Details
                            </Link>

                            <div className="flex items-center gap-3">
                                <button onClick={() => setEditingStudent(s)}>
                                    <Pencil size={18} className="text-green-600 hover:text-green-800" />
                                </button>

                                <button onClick={() => deleteStudent(s.id)}>
                                    <Trash2 size={18} className="text-red-500 hover:text-red-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODALS */}
            {editingStudent && (
                <EditStudentModal
                    student={editingStudent}
                    setEditingStudent={setEditingStudent}
                    setStudents={setStudents}
                />
            )}

            {showAddModal && (
                <AddStudentModal
                    setShowAddModal={setShowAddModal}
                    setStudents={setStudents}
                />
            )}
        </div>
    );
}
