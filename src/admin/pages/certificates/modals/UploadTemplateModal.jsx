import { useState } from "react";
import { X } from "lucide-react";

export default function UploadTemplateModal({ setShowUploadModal, setTemplates }) {
    const [form, setForm] = useState({
        name: "",
        course: "",
        image: "",
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: URL.createObjectURL(file) });
    };

    const handleSubmit = () => {
        setTemplates((prev) => [
            ...prev,
            { id: Date.now(), ...form }
        ]);
        setShowUploadModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

                <button
                    onClick={() => setShowUploadModal(false)}
                    className="absolute right-4 top-4"
                >
                    <X size={22} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Upload Certificate Template</h2>

                <input
                    type="text"
                    placeholder="Template Name"
                    className="input"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Course Name"
                    className="input mt-3"
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                />

                <input
                    type="file"
                    className="mt-3"
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}
