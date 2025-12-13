import { useState } from "react";
import { X } from "lucide-react";

export default function AddCourseModal({ setShowAddModal, setCourses }) {
    const [form, setForm] = useState({
        title: "",
        duration: "",
        instructor: "",
        price: "",
        students: 0,
    });

    const update = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addCourse = () => {
        setCourses((prev) => [
            ...prev,
            { id: Date.now(), ...form },
        ]);
        setShowAddModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[400px] shadow relative">

                <button className="absolute top-3 right-3" onClick={() => setShowAddModal(false)}>
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Add New Course</h2>

                <label className="block mb-2">Course Title</label>
                <input
                    name="title"
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                />

                <label className="block mb-2">Duration</label>
                <input
                    name="duration"
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                    placeholder="Ex: 12 weeks"
                />

                <label className="block mb-2">Instructor</label>
                <input
                    name="instructor"
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                />

                <label className="block mb-2">Course Price</label>
                <input
                    name="price"
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                    placeholder="₹20,000"
                />

                <button
                    onClick={addCourse}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Add Course
                </button>
            </div>
        </div>
    );
}
