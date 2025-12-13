import React from "react";
import { Link } from "react-router-dom";
import { courseCategories } from "./courseData";

const MegaMenu = ({ isOpen, onClose, menuRef }) => {
    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-[900px] bg-white shadow-2xl border border-slate-200 rounded-2xl p-6 grid md:grid-cols-4 gap-6 animate-fadeIn"
            style={{ zIndex: 60 }}
        >
            {courseCategories.map((cat) => (
                <div key={cat.title}>
                    <h4 className="font-semibold text-slate-800 mb-3">{cat.title}</h4>
                    <ul className="space-y-2">
                        {cat.courses.map((c) => (
                            <li key={c.name}>
                                <Link
                                    to={c.path}
                                    onClick={onClose}
                                    className="text-sm text-slate-600 hover:text-blue-600 block"
                                >
                                    {c.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}


        </div>
    );
};

export default MegaMenu;
