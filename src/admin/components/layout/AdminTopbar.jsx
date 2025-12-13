import { Bell, Search, User, Menu } from "lucide-react";

export default function AdminTopbar({ setIsSidebarOpen }) {
    return (
        <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">

            <div className="flex items-center gap-3">

                {/* HAMBURGER (MOBILE ONLY) */}
                <button
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Menu size={22} />
                </button>

                {/* SEARCH BAR */}
                <div className="relative w-64 hidden sm:block">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                        w-full 
                        pl-10 pr-4 py-2
                        bg-gray-100 
                        rounded-full
                        text-sm
                        outline-none
                        placeholder:text-gray-500
                        focus:ring-2 
                        focus:ring-blue-400 
                        focus:bg-white 
                        transition
                        "
                    />
                </div>

            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">

                <Bell size={22} className="cursor-pointer text-blue-500 hover:text-blue-600 transition" />

                <div className="flex items-center gap-2 cursor-pointer">
                    <User size={22} className="text-blue-500 hover:text-blue-600 transition" />
                    <span className="text-sm font-medium hidden sm:block">Admin</span>
                </div>
            </div>
        </header>
    );
}
