import { Routes, Route, Navigate } from "react-router-dom";
import AdminShell from "./components/layout/AdminShell";
import Dashboard from "./pages/Dashboard/Dashboard";

import AdminLogin from "./auth/pages/AdminLogin";
import AdminSignup from "./auth/pages/AdminSignup";

// students
import FullStackStudents from "./pages/students/FullStackStudents";
import UiUxStudents from "./pages/students/UiUxCourseStudents";
import AiMlStudents from "./pages/students/AiMlStudents";

// other pages
import Instructors from "./pages/instructors/Instructors";
import Courses from "./pages/courses/courses";
import Batches from "./pages/Batches/Batches";

// Certificates
import Certificates from "./pages/certificates/Certificates";
import Templates from "./pages/certificates/Templates";
import AssignCertificate from "./pages/certificates/modals/AssignCertificate";

import Attendance from "./pages/attendance/Attendance";
import EnquiryFormUI from "./forms/enquiryform";
import Contactform from "./forms/Contactform";
import EnrolledStudents from "./components/EnrolledStudents";

export default function AdminApp() {
  // FRONTEND AUTH MOCK
  const isAuthenticated = () => {
    return localStorage.getItem("adminToken") !== null;
  };

  return (
    <Routes>
      {/*  PUBLIC AUTH ROUTES */}
      <Route path="login" element={<AdminLogin />} />
      <Route path="signup" element={<AdminSignup />} />

      {/*  PROTECTED ROUTES */}
      <Route
        path="/*"
        element={
          isAuthenticated() ? <AdminShell /> : <Navigate to="/admin/login" />
        }
      >
        <Route
          index
          element={
            isAuthenticated() ? (
              <Dashboard />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />

        {/* Students */}
        <Route path="students/fullstack" element={<FullStackStudents />} />
        <Route path="students/uiux" element={<UiUxStudents />} />
        <Route path="students/aiml" element={<AiMlStudents />} />

        {/* Other Pages */}
        <Route path="enrolled-students" element={<EnrolledStudents />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="courses" element={<Courses />} />
        <Route path="Batches" element={<Batches />} />

        {/* Certificates */}
        <Route path="certificates" element={<Certificates />} />
        <Route path="certificates/templates" element={<Templates />} />
        <Route path="certificates/assign" element={<AssignCertificate />} />

        {/* Attendance */}
        <Route path="attendance" element={<Attendance />} />

        {/* Forms */}
        <Route path="forms/enquiryform" element={<EnquiryFormUI />} />
        <Route path="forms/contact" element={<Contactform />} />
      </Route>
    </Routes>
  );
}
