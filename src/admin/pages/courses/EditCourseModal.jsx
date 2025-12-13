import { useState } from "react";
import { X } from "lucide-react";

export default function EditCourseModal({ course, setEditingCourse, setCourses }) {
    const [form, setForm] = useState(course);

    const update = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const save = () => {
        setCourses((prev) =>
            prev.map((c) => (c.id === form.id ? form : c))
        );
        setEditingCourse(null);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[400px] relative shadow">

                <button className="absolute top-3 right-3" onClick={() => setEditingCourse(null)}>
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Edit Course</h2>

                <label className="block mb-2">Course Title</label>
                <input
                    name="title"
                    defaultValue={form.title}
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                />

                <label className="block mb-2">Duration</label>
                <input
                    name="duration"
                    defaultValue={form.duration}
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                />

                <label className="block mb-2">Instructor</label>
                <input
                    name="instructor"
                    defaultValue={form.instructor}
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                />

                <label className="block mb-2">Price</label>
                <input
                    name="price"
                    defaultValue={form.price}
                    className="w-full px-3 py-2 border rounded mb-3"
                    onChange={update}
                />

                <button
                    onClick={save}
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
