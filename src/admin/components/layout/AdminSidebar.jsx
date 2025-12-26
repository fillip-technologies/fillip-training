import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  ClipboardList,
  FileBadge,
  Settings,
  FileText,
  ChevronDown,
  Globe,
  LogOut,
  X,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AdminSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [openForms, setOpenForms] = useState(false);
  const [openStudents, setOpenStudents] = useState(false);
  const [openWebsite, setOpenWebsite] = useState(false);

  const navigate = useNavigate();

  const navItem =
    "flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition";

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
                    fixed top-0 left-0 h-screen w-64 bg-white border-r z-50 shadow-lg
                    flex flex-col transition-transform duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"}
                    lg:translate-x-0
                `}
      >
        {/* Logo */}
        <div className="h-16 border-b flex items-center justify-between px-4 text-lg font-semibold">
          IT Training Admin
          {/* mobile close button */}
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          <NavLink
            to="/admin"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>
          {/* 
                    <NavLink to="/admin/students" className={navItem} onClick={() => setIsSidebarOpen(false)}>
                        <Users size={18} /> Students
                    </NavLink> */}

          {/* Students Dropdown */}
          <div>
            <button
              onClick={() => setOpenStudents(!openStudents)}
              className={`${navItem} w-full justify-between`}
            >
              <span className="flex items-center gap-3">
                <Users size={18} /> Students
              </span>
              <ChevronDown
                size={16}
                className={`${openStudents ? "rotate-180" : ""} transition`}
              />
            </button>

            {openStudents && (
              <div className="ml-8 space-y-1">
                <NavLink
                  to="/admin/students/fullstack"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  FullStack Course Students
                </NavLink>

                <NavLink
                  to="/admin/students/uiux"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  UI/UX Course Students
                </NavLink>

                <NavLink
                  to="/admin/students/aiml"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  AI/ML Students
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/admin/enrolled-students"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <UserCheck size={18} /> Enrolled Students
          </NavLink>

          <NavLink
            to="/admin/enquiry"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <UserCheck size={18} /> Enquiry
          </NavLink>

          <NavLink
            to="/admin/instructors"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GraduationCap size={18} /> Instructors
          </NavLink>

          <NavLink
            to="/admin/courses"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <BookOpen size={18} /> Courses
          </NavLink>

          <NavLink
            to="/admin/batches"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <ClipboardList size={18} /> Batches
          </NavLink>

          <NavLink
            to="/admin/certificates"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <FileBadge size={18} /> Certificates
          </NavLink>

          <NavLink
            to="/admin/schedule"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Calendar size={18} /> Schedule
          </NavLink>

          <NavLink
            to="/admin/attendance"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <FileText size={18} /> Attendance
          </NavLink>

          {/* Forms Dropdown */}
          <div>
            <button
              onClick={() => setOpenForms(!openForms)}
              className={`${navItem} w-full justify-between`}
            >
              <span className="flex items-center gap-3">
                <FileText size={18} /> Forms
              </span>
              <ChevronDown
                size={16}
                className={`${openForms ? "rotate-180" : ""} transition`}
              />
            </button>

            {openForms && (
              <div className="ml-8 space-y-1">
                <NavLink
                  to="/admin/forms/enquiryform"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Enquiry Form Data
                </NavLink>
                <NavLink
                  to="/admin/forms/landing"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Landing Form
                </NavLink>
                <NavLink
                  to="/admin/forms/contact"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact Form
                </NavLink>
              </div>
            )}
          </div>

          {/* Website CMS */}
          <div>
            <button
              onClick={() => setOpenWebsite(!openWebsite)}
              className={`${navItem} w-full justify-between`}
            >
              <span className="flex items-center gap-3">
                <Globe size={18} /> Website CMS
              </span>
              <ChevronDown
                size={16}
                className={`${openWebsite ? "rotate-180" : ""} transition`}
              />
            </button>

            {openWebsite && (
              <div className="ml-8 space-y-1">
                <NavLink
                  to="/admin/website/hero"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Hero Section
                </NavLink>
                <NavLink
                  to="/admin/website/testimonials"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Testimonials
                </NavLink>
                <NavLink
                  to="/admin/website/banners"
                  className={navItem}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Banners
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/admin/settings"
            className={navItem}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Settings size={18} /> Settings
          </NavLink>
        </nav>

        {/* LOGOUT */}
        <button
          className="flex items-center gap-3 px-4 py-3 border-t hover:bg-gray-50 text-red-600 hover:cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>
    </>
  );
}
