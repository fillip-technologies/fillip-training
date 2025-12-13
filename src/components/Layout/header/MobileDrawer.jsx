import React from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { courseCategories } from "./courseData";

const MobileDrawer = ({
    isMenuOpen,
    setIsMenuOpen,
    activeDrawerCategory,
    setActiveDrawerCategory,
}) => {
    if (!isMenuOpen) return null;

    return (
        <>
            {/* Dark Background */}
            <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <aside className="fixed left-0 top-0 h-full bg-white w-[78vw] max-w-xs z-50 shadow-2xl animate-[slideIn_.25s_ease-out] rounded-r-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <img src="/fillip-logo.png" className="h-12 object-contain" />

                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 hover:bg-slate-100 rounded-lg"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto h-full">
                    <h3 className="text-lg font-semibold mb-4 text-slate-900">
                        All Courses
                    </h3>

                    <div className="space-y-3">
                        {courseCategories.map((cat, idx) => {
                            const open = activeDrawerCategory === idx;

                            return (
                                <div key={cat.title} className="border-b pb-3">
                                    {/* Category Button */}
                                    <button
                                        onClick={() =>
                                            setActiveDrawerCategory(open ? null : idx)
                                        }
                                        className="w-full flex justify-between items-center py-2 text-left text-slate-800 font-medium"
                                    >
                                        <span>{cat.title}</span>
                                        {open ? (
                                            <ChevronDown className="text-slate-600" />
                                        ) : (
                                            <ChevronRight className="text-slate-600" />
                                        )}
                                    </button>

                                    {/* Submenu */}
                                    {open && (
                                        <ul className="mt-2 pl-3 space-y-2 text-slate-600">
                                            {cat.courses.map((c) => (
                                                <li key={c.name}>
                                                    <Link
                                                        to={c.path}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="block text-sm text-slate-700 hover:text-blue-600"
                                                    >
                                                        {c.name}
                                                    </Link>
                                                </li>
                                            ))}

                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </aside>

            <style>{`
        @keyframes slideIn {
          from { transform: translateX(-50%); opacity:0; }
          to { transform: translateX(0); opacity:1; }
        }
      `}</style>
        </>
    );
};

export default MobileDrawer;
