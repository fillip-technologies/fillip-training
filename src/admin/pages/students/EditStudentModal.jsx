import { X } from "lucide-react";
import { useState } from "react";

export default function EditStudentModal({ student, setEditingStudent, setStudents }) {
    const [form, setForm] = useState(student);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const saveChanges = () => {
        setStudents((prev) =>
            prev.map((s) => (s.id === form.id ? form : s))
        );
        setEditingStudent(null);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[400px] p-6 rounded-xl shadow relative">

                {/* Close button */}
                <button
                    className="absolute top-3 right-3"
                    onClick={() => setEditingStudent(null)}
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

                {/* Name */}
                <label className="block mb-2 text-sm">Full Name</label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                {/* Email */}
                <label className="block mb-2 text-sm">Email</label>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                {/* Phone */}
                <label className="block mb-2 text-sm">Phone</label>
                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                {/* Mode */}
                <label className="block mb-2 text-sm">Class Mode</label>
                <select
                    name="mode"
                    value={form.mode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-3"
                >
                    <option>Online</option>
                    <option>Offline</option>
                </select>

                {/* Completion */}
                <label className="block mb-2 text-sm">Course Status</label>
                <select
                    name="completed"
                    value={form.completed}
                    onChange={(e) =>
                        setForm({ ...form, completed: e.target.value === "true" })
                    }
                    className="w-full px-3 py-2 border rounded mb-4"
                >
                    <option value={false}>In Progress</option>
                    <option value={true}>Completed</option>
                </select>

                {/* Save Button */}
                <button
                    onClick={saveChanges}
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
