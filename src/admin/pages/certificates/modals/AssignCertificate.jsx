import React, { useState } from "react";
import PreviewCertificate from "./PreviewCertificate";

export default function AssignCertificate({ open, onClose, templateId }) {
    if (!open) return null;

    const [course, setCourse] = useState("");
    const [student, setStudent] = useState("");
    const [previewOpen, setPreviewOpen] = useState(false);

    const sampleData = {
        name: student || "Student Name",
        course: course || "Course Name",
        date: "10 Jan 2025",
        instructor: "Admin",
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative">

                <button onClick={onClose} className="absolute right-4 top-3 text-xl">
                    ✕
                </button>

                <h2 className="text-xl font-semibold mb-4">Assign Certificate</h2>

                {/* Course */}
                <select
                    className="w-full border p-2 rounded mb-4"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                >
                    <option value="">Select Course</option>
                    <option value="FullStack Development">FullStack Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                </select>

                {/* Student */}
                <select
                    className="w-full border p-2 rounded mb-4"
                    value={student}
                    onChange={(e) => setStudent(e.target.value)}
                >
                    <option value="">Select Student</option>
                    <option value="Shruti Singh">Shruti Singh</option>
                    <option value="Rahul Verma">Rahul Verma</option>
                </select>

                <button
                    className="w-full bg-blue-600 text-white py-2 rounded"
                    onClick={() => setPreviewOpen(true)}
                >
                    Preview Certificate
                </button>

                <PreviewCertificate
                    open={previewOpen}
                    onClose={() => setPreviewOpen(false)}
                    templateId={templateId}
                    data={sampleData}
                />
            </div>
        </div>
    );
}
