import React from "react";


export default function StatCard({ title, value, delta, hint }) {
    const positive = String(delta || "").startsWith("+");
    return (
        <div className="bg-white border rounded-lg px-4 py-4 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className="text-2xl font-semibold text-slate-900">{value}</p>
                {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
            </div>

            {delta ? (
                <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                        {delta}
                    </span>
                </div>
            ) : null}
        </div>
    );
}
