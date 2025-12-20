import axios from "axios";
import { useState, useEffect } from "react";
import {
  Search,
  CheckCircle,
  Clock,
  Trash2,
  Edit3,
  ChevronDown,
  LoaderCircle,
} from "lucide-react";
import { URL } from "@/services/const";
import { set } from "react-hook-form";

export default function EnquiryFormUI() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const [loading, setLoading] = useState(true);

  const [remarkModal, setRemarkModal] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [remark, setRemark] = useState("");

  const [statusDropdown, setStatusDropdown] = useState(null);

  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, settotalPages] = useState(0);

  // API integration with axios

  async function user() {
    try {
      setLoading(true);
      const res = await axios.get(`${URL}enquiry`, {
        params: {
          page: page,
          limit: limit,
          search: debouncedSearch || undefined,
        },
      });
      console.log(res.data);
      console.log(res.data.data);
      settotalPages(res.data.totalPages);
      setEnquiries(res.data.data);
      console.log("userData");
    } catch (error) {
      console.log("getting error in user details");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const [enquiries, setEnquiries] = useState([]);
  console.log("the enquiries", enquiries);

  const filtered = enquiries.filter((e) => {
    // const q = search.toLowerCase();
    // const matchSearch =
    //   e.name.toLowerCase().includes(q) ||
    //   e.email.toLowerCase().includes(q) ||
    //   e.phone.includes(q);

    const matchCourse = courseFilter === "All" || e.course === courseFilter;
    const matchStatus = statusFilter === "All" || e.status === statusFilter;

    // return matchSearch && matchCourse && matchStatus;
    return matchCourse && matchStatus;
  });

  console.log(filtered);
  console.log(filtered.map((r) => r.id));

  const allCousres = enquiries.map((e) => e.course);
  const courseOptions = ["All", ...new Set(allCousres)];
  console.log("the fi", courseOptions);

  const allStatuses = enquiries.map((e) => e.status);
  const statusOptions = ["All", ...new Set(allStatuses)];
  console.log("the status options", statusOptions);

  //   const courseOptions = [
  //     "All",
  //     "Full Stack Development",
  //     "UI/UX Design",
  //     "Cyber Security",
  //   ];

  // --- OPEN REMARK MODAL ---
  const openRemarkModal = (row) => {
    setEditingRow(row);
    setRemark(row.remark || "");
    setRemarkModal(true);
  };

  const saveRemark = async () => {
    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === editingRow.id ? { ...item, remark: remark } : item
      )
    );
    try {
      const res = await axios.put(`${URL}enquiry/${editingRow.id}`, {
        remark: remark,
      });
      setRemarkModal(false);
      await user();
      console.log("Remarks Updated");
      console.log(res.data.data);
    } catch (error) {
      console.log("getting error in updating remarks");
      console.log(error);
    }
  };

  // --- UPDATE STATUS ---
  const updateStatus = async (id, newStatus) => {
    console.log(id);
    setEnquiries((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status: newStatus } : row))
    );

    // console.log(row.id);

    try {
      const res = await axios.put(`${URL}enquiry/${id}`, {
        status: newStatus,
      });

      setStatusDropdown(null);
      await user();
      console.log("Status Updated");
      console.log(res.data.data);
    } catch (error) {
      console.log("getting error in updating status");
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    console.log("hii");
    user();
  }, [page, debouncedSearch]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <LoaderCircle className="animate-spin w-12 h-12" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-xl flex items-center justify-center h-screen">
          NO ENQUIRIES FOUND
        </div>
      ) : (
        <div className="p-6 space-y-6">
          {/* PAGE HEADER */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Enquiry Form Data
            </h1>
            <p className="text-gray-500 mt-1">
              Manage enquiries — update status, add remarks, delete entries.
            </p>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            {/* SEARCH */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search name, email, phone..."
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* COURSE FILTER */}
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              {courseOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {/* STATUS FILTER */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* MAIN TABLE */}
          <div className="bg-white shadow-sm border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr className="text-gray-600 font-medium">
                  <th className="px-5 py-3 text-left">Name</th>
                  <th className="px-5 py-3 text-left">Email</th>
                  <th className="px-5 py-3 text-left">Phone</th>
                  <th className="px-5 py-3 text-left">Course</th>
                  <th className="px-5 py-3 text-left">College</th>

                  <th className="px-5 py-3 text-left">Status</th>
                  <th className="px-5 py-3 text-left">Remark</th>
                  <th className="px-5 py-3 text-center"></th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50">
                    <td className="px-5 py-3 font-medium">{row.name}</td>
                    <td className="px-5 py-3">{row.email}</td>
                    <td className="px-5 py-3">{row.phone}</td>
                    <td className="px-5 py-3">{row.course}</td>
                    <td className="px-5 py-3">
                      {row.college || row.clgName || "—"}
                    </td>

                    {/* STATUS BADGE WITH DROPDOWN */}
                    <td className="px-5 py-3 relative">
                      <button
                        onClick={() =>
                          setStatusDropdown(
                            statusDropdown === row.id ? null : row.id
                          )
                        }
                        className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
                      >
                        {row.status === "Enquiry Completed" ? (
                          <span className="flex items-center gap-1 text-green-700 text-xs">
                            <CheckCircle className="w-3 h-3" />
                            Completed
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-700 text-xs">
                            <Clock className="w-3 h-3" />
                            Pending
                          </span>
                        )}
                        <ChevronDown className="w-3 h-3" />
                      </button>

                      {statusDropdown === row.id && (
                        <div className="absolute z-20 bg-white shadow-md border rounded-lg w-32 mt-1">
                          <button
                            onClick={() =>
                              updateStatus(row.id, "Enquiry Pending")
                            }
                            className="w-full px-3 py-2 text-left hover:bg-gray-100 text-sm"
                          >
                            Pending
                          </button>
                          <button
                            onClick={() =>
                              updateStatus(row.id, "Enquiry Completed")
                            }
                            className="w-full px-3 py-2 text-left hover:bg-gray-100 text-sm"
                          >
                            Completed
                          </button>
                        </div>
                      )}
                    </td>

                    {/* REMARK COLUMN */}
                    <td className="px-5 py-3 text-gray-600">
                      {row.remark ? (
                        <span className="italic text-gray-400">
                          {row.remark.length > 10
                            ? row.remark.slice(0, 10) + "..."
                            : row.remark}
                        </span>
                      ) : (
                        <span className="italic text-gray-400">No Remark</span>
                      )}
                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-3">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => openRemarkModal(row)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        {/* <button className="text-red-600 hover:text-red-800">
                                            <Trash2 className="w-4 h-4" />
                                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end items-center gap-3 mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
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

          {/* REMARK MODAL */}
          {remarkModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Edit Remark</h3>

                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setRemarkModal(false)}
                    className="px-4 py-2 border rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveRemark}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
