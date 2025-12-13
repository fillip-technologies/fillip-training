import { useState } from "react";
import { X } from "lucide-react";

export default function AddBatchModal({ setShowAddModal, setBatches }) {
    const [form, setForm] = useState({
        name: "",
        course: "",
        instructor: "",
        time: "",
        mode: "Online",
        seats: "",
        status: "Upcoming",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setBatches((prev) => [...prev, { id: Date.now(), ...form }]);
        setShowAddModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative animate-fadeIn space-y-4">

                {/* Close Button */}
                <button
                    onClick={() => setShowAddModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X size={22} />
                </button>

                {/* Modal Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Add New Batch
                </h2>

                {/* Form */}
                <div className="space-y-4">

                    {/* FIELD */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Batch Name</label>
                        <input
                            name="name"
                            placeholder="e.g. FullStack Batch FS-01"
                            className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Course Name</label>
                        <input
                            name="course"
                            placeholder="e.g. FullStack Development"
                            className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Instructor</label>
                        <input
                            name="instructor"
                            placeholder="Instructor Name"
                            className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Timing</label>
                        <input
                            name="time"
                            placeholder="7 PM - 9 PM"
                            className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Seats</label>
                        <input
                            name="seats"
                            placeholder="Number of seats"
                            className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    {/* SELECTS */}
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <label className="text-sm font-medium text-gray-700">Mode</label>
                            <select
                                name="mode"
                                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                onChange={handleChange}
                            >
                                <option>Online</option>
                                <option>Offline</option>
                            </select>
                        </div>

                        <div className="w-1/2">
                            <label className="text-sm font-medium text-gray-700">Status</label>
                            <select
                                name="status"
                                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                onChange={handleChange}
                            >
                                <option>Upcoming</option>
                                <option>Ongoing</option>
                            </select>
                        </div>
                    </div>

                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                    <button
                        onClick={() => setShowAddModal(false)}
                        className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow"
                    >
                        Add Batch
                    </button>
                </div>
            </div>
        </div>
    );
}
