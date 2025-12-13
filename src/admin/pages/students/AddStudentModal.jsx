import { X } from "lucide-react";
import { useState } from "react";

export default function AddStudentModal({ setShowAddModal, setStudents }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        batch: "",
        mode: "Online",
        completed: false,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addStudent = () => {
        setStudents((prev) => [
            ...prev,
            {
                id: Date.now(),
                ...form,
                completed: form.completed === "true",
            }
        ]);

        setShowAddModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[400px] shadow relative">

                <button
                    className="absolute top-3 right-3"
                    onClick={() => setShowAddModal(false)}
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

                <label className="block mb-2">Full Name</label>
                <input
                    name="name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <label className="block mb-2">Email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <label className="block mb-2">Phone</label>
                <input
                    name="phone"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <label className="block mb-2">Batch</label>
                <input
                    name="batch"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <label className="block mb-2">Class Mode</label>
                <select
                    name="mode"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>

                <label className="block mb-2">Course Status</label>
                <select
                    name="completed"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-4"
                >
                    <option value="false">In Progress</option>
                    <option value="true">Completed</option>
                </select>

                <button
                    onClick={addStudent}
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Add Student
                </button>
            </div>
        </div>
    );
}
