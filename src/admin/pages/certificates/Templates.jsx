import { useState } from "react";
import { Plus, Trash2, Eye } from "lucide-react";
import UploadTemplateModal from "./modals/UploadTemplateModal";

export default function Templates() {
    const [showUploadModal, setShowUploadModal] = useState(false);

    // SAMPLE TEMPLATES — in real app you fetch these
    const [templates, setTemplates] = useState([
        { id: 1, name: "FullStack Certificate", file: "/certificates/template1.jpg" },
        { id: 2, name: "UI/UX Certificate", file: "/certificates/template2.png" },
        { id: 3, name: "AI/ML Certificate", file: "/certificates/template3.png" },
    ]);

    const deleteTemplate = (id) => {
        setTemplates(templates.filter(t => t.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Certificate Templates</h1>

            {/* Upload Button */}
            <button
                onClick={() => setShowUploadModal(true)}
                className="mb-6 px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                <Plus size={18} /> Upload New Template
            </button>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((t) => (
                    <div
                        key={t.id}
                        className="bg-white rounded-xl shadow border hover:shadow-lg transition p-4"
                    >
                        <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src={t.file} alt="template preview" className="w-full h-full object-cover" />
                        </div>

                        <h2 className="text-lg font-semibold mt-3">{t.name}</h2>

                        {/* ACTION BUTTONS */}
                        <div className="flex justify-between items-center mt-4">
                            <button className="flex items-center gap-1 text-blue-600 hover:underline">
                                <Eye size={18} /> Preview
                            </button>

                            <button onClick={() => deleteTemplate(t.id)}>
                                <Trash2 size={18} className="text-red-500 hover:text-red-700" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <UploadTemplateModal
                    setShowUploadModal={setShowUploadModal}
                    setTemplates={setTemplates}
                />
            )}
        </div>
    );
}
