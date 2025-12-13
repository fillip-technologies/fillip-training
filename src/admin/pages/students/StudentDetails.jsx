import { useParams } from "react-router-dom";

export default function StudentDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Student Details - ID: {id}</h1>

            <div className="bg-white p-6 rounded-xl shadow border">
                <p><strong>Name:</strong> Shruti Singh</p>
                <p><strong>Email:</strong> shruti@example.com</p>
                <p><strong>Phone:</strong> 9876543210</p>
                <p><strong>Batch:</strong> FS-01</p>
                <p><strong>Mode:</strong> Online</p>
                <p><strong>Course Status:</strong> In Progress</p>
            </div>
        </div>
    );
}
