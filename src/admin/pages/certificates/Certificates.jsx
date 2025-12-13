import React, { useState } from "react";
import { certificateTemplateList } from "./components";
import AssignCertificate from "./modals/AssignCertificate";

export default function Certificates() {
    const [assignOpen, setAssignOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Certificate Templates</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {certificateTemplateList.map((t) => (
                    <div key={t.id} className="border rounded-lg p-4 shadow-sm">

                        <h3 className="font-semibold">{t.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{t.description}</p>

                        <button
                            onClick={() => {
                                setSelectedTemplate(t.id);
                                setAssignOpen(true);
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
                        >
                            Assign Certificate
                        </button>

                    </div>
                ))}

            </div>

            {/* Assign Modal */}
            <AssignCertificate
                open={assignOpen}
                onClose={() => setAssignOpen(false)}
                templateId={selectedTemplate}
            />
        </div>
    );
}
