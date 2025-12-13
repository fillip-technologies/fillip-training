import { useState } from "react";
import { Pencil, Trash2, User, Clock, BookOpen, Plus } from "lucide-react";
import AddBatchModal from "./AddBatchModal";
// import EditBatchModal from "./EditBatchModal";

export default function Batches() {
    const [batches, setBatches] = useState([
        {
            id: 1,
            name: "FullStack Batch FS-01",
            course: "FullStack Development",
            instructor: "Dr. Rajesh",
            mode: "Online",
            time: "7:00 PM - 9:00 PM",
            seats: 25,
            status: "Ongoing",
        },
        {
            id: 2,
            name: "UI/UX Batch UX-03",
            course: "UI/UX Design",
            instructor: "Priya Sharma",
            mode: "Offline",
            time: "11:00 AM - 1:00 PM",
            seats: 20,
            status: "Upcoming",
        },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingBatch, setEditingBatch] = useState(null);

    const deleteBatch = (id) => {
        setBatches(batches.filter((b) => b.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Manage Batches</h1>

            {/* ADD NEW BATCH BUTTON */}
            <button
                onClick={() => setShowAddModal(true)}
                className="mb-6 px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                <Plus size={18} /> Add New Batch
            </button>

            {/* BATCH CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {batches.map((b) => (
                    <div
                        key={b.id}
                        className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition"
                    >
                        <h2 className="text-lg font-semibold mb-2">{b.name}</h2>

                        <div className="text-sm space-y-1">
                            <p className="flex items-center gap-2">
                                <BookOpen size={16} /> Course: <b>{b.course}</b>
                            </p>
                            <p className="flex items-center gap-2">
                                <User size={16} /> Instructor: <b>{b.instructor}</b>
                            </p>
                            <p className="flex items-center gap-2">
                                <Clock size={16} /> Timing: <b>{b.time}</b>
                            </p>

                            <p>
                                Mode:{" "}
                                <span
                                    className={`px-2 py-1 text-xs rounded ${b.mode === "Online"
                                        ? "bg-blue-100 text-blue-600"
                                        : "bg-orange-100 text-orange-600"
                                        }`}
                                >
                                    {b.mode}
                                </span>
                            </p>

                            <p>
                                Status:{" "}
                                <span
                                    className={`px-2 py-1 text-xs rounded ${b.status === "Ongoing"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-yellow-100 text-yellow-600"
                                        }`}
                                >
                                    {b.status}
                                </span>
                            </p>

                            <p>Seats: <b>{b.seats}</b></p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3 mt-4">
                            <button onClick={() => setEditingBatch(b)}>
                                <Pencil
                                    size={18}
                                    className="text-green-600 hover:text-green-800"
                                />
                            </button>

                            <button onClick={() => deleteBatch(b.id)}>
                                <Trash2
                                    size={18}
                                    className="text-red-500 hover:text-red-700"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODALS */}
            {showAddModal && (
                <AddBatchModal
                    setShowAddModal={setShowAddModal}
                    setBatches={setBatches}
                />
            )}
            {editingBatch && (
                <EditBatchModal
                    batch={editingBatch}
                    setEditingBatch={setEditingBatch}
                    setBatches={setBatches}
                />
            )}
        </div>
    );
}
