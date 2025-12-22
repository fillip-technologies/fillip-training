import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import { URL } from "@/services/const";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const EnrolledStudents = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [totalEnrolledStudents, settotalEnrolledStudents] = useState(0);

  async function fetchContacts() {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const res = await axios.get(`${URL}newEnrollment`, {
        params: {
          page: page,
          limit: limit,
          search: "Enrolled",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log(res.data.data);
      //   console.log(res.data.currentPage);
      //   console.log(res.data.totalEnrollments);
      //   console.log(res.data.totalPages);

      settotalEnrolledStudents(res.data.enrolledCount || 0);
      setContacts(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  }

  const enrolledStudent = contacts.filter(
    (student) => student.enrollmentStatus === "Enrolled"
  );
  console.log(enrolledStudent);

  const handleDownloadCertificate = async (studentId) => {
    console.log(studentId);
    const certificateIdNumber = enrolledStudent.find(
      (student) => student.id === studentId
    )?.certificateId;
    console.log(certificateIdNumber);
    if (!certificateIdNumber) {
      toast.error("Certificate ID not found for this student.");
      return;
    } else {
      try {
        window.open(
          `https://api.fillipskillacademy.com/api/certificates/download/${certificateIdNumber}`,
          "_blank",
          "noopener,noreferrer"
        );
      } catch (error) {
        console.error("Error downloading certificate:", error);
        toast.error("Failed to download certificate. Please try again later.");
      }
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoaderCircle className="animate-spin w-12 h-12" />
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="text-xl flex items-center justify-center h-screen uppercase">
        NO Enrolled Students FOUND
      </div>
    );
  }
  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Enrolled Students</h1>
        <p className="text-gray-500 mt-1">List of all enrolled students</p>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow-sm border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-gray-600 font-medium">
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Email</th>
              <th className="px-5 py-3 text-left">Phone</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="px-5 py-3 font-medium">{row.name}</td>
                <td className="px-5 py-3">{row.email || "-"}</td>
                <td className="px-5 py-3">{row.phone || "-"}</td>
                <td className="px-5 py-3">{row.enrollmentStatus || "-"}</td>
                <td className="px-5 py-3">
                  <Button
                    className="cursor-pointer"
                    onClick={() => handleDownloadCertificate(row.id)}
                  >
                    Download Certificate
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center gap-3 mt-4">
        <div className="flex-col items-center justify-between px-4 py-2 text-gray-500">
          <div>
            Showing <span className="font-medium text-gray-700">{page}</span> of{" "}
            <span className="font-medium text-gray-700">
              {totalPages} Pages
            </span>
          </div>

          <div>
            Total records:{" "}
            <span className="text-gray-800">{totalEnrolledStudents}</span>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="text-sm">Page {page}</span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledStudents;
