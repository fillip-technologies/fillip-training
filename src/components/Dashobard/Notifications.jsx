import React from "react";

export default function Notifications() {
    const data = [
        { type: "info", msg: "New Machine Learning course available!", time: "2h ago" },
        { type: "warning", msg: "Assignment due tomorrow!", time: "5h ago" },
        { type: "success", msg: "Certificate earned!", time: "1d ago" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>

            <div className="space-y-4">
                {data.map((n, i) => (
                    <div key={i} className="bg-white p-4 shadow rounded-xl flex items-start gap-4">
                        <span className="text-2xl">
                            {n.type === "info" && "ℹ️"}
                            {n.type === "warning" && "⚠️"}
                            {n.type === "success" && "✅"}
                        </span>

                        <div>
                            <p className="font-semibold">{n.msg}</p>
                            <p className="text-gray-400 text-sm">{n.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
