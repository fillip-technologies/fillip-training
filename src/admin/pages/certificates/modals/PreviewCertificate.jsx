import React from "react";
import { certificateTemplates } from "../components";

export default function PreviewCertificate({ open, onClose, templateId, data }) {
    if (!open) return null;

    const Template = certificateTemplates[templateId];

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-6">
            <div className="bg-white p-6 rounded-lg w-full max-w-4xl overflow-auto relative">

                <button onClick={onClose} className="absolute right-4 top-3 text-xl">
                    ✕
                </button>

                <Template data={data} />
            </div>
        </div>
    );
}
