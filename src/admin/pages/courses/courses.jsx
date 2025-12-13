import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import EditCourseModal from "./EditCourseModal";
import { Pencil, Trash2, BookOpen } from "lucide-react";

export default function Courses() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Full Stack Development",
            duration: "16 Weeks",
            instructor: "Rajesh Kumar",
            price: "₹29,999",
            students: 45,
        },
        {
            id: 2,
            title: "UI/UX Design",
            duration: "12 Weeks",
            instructor: "Priya Sharma",
            price: "₹19,999",
            students: 22,
        },
        {
            id: 3,
            title: "AI / ML Foundation",
            duration: "20 Weeks",
            instructor: "Manish Gupta",
            price: "₹34,999",
            students: 30,
        },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);

    const deleteCourse = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">All Courses</h1>

            {/* Add Course Button */}
            <button
                onClick={() => setShowAddModal(true)}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                + Add New Course
            </button>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white p-5 rounded-xl shadow border flex flex-col gap-3 hover:shadow-md transition"
                    >
                        <div className="flex items-center gap-3">
                            <BookOpen size={28} className="text-blue-600" />
                            <h2 className="font-bold text-lg">{course.title}</h2>
                        </div>

                        <p className="text-sm text-gray-600">
                            <strong>Duration:</strong> {course.duration}
                        </p>

                        <p className="text-sm text-gray-600">
                            <strong>Instructor:</strong> {course.instructor}
                        </p>

                        <p className="text-sm text-gray-600">
                            <strong>Price:</strong> {course.price}
                        </p>

                        <p className="text-sm text-gray-600">
                            <strong>Enrolled Students:</strong> {course.students}
                        </p>

                        <div className="mt-3 flex justify-between items-center">
                            <button className="text-blue-600 text-sm hover:underline">
                                View Details
                            </button>

                            <div className="flex items-center gap-3">
                                <button onClick={() => setEditingCourse(course)}>
                                    <Pencil size={18} className="text-green-600 hover:text-green-800" />
                                </button>
                                <button onClick={() => deleteCourse(course.id)}>
                                    <Trash2 size={18} className="text-red-500 hover:text-red-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Course Modal */}
            {showAddModal && (
                <AddCourseModal
                    setShowAddModal={setShowAddModal}
                    setCourses={setCourses}
                />
            )}

            {/* Edit Course Modal */}
            {editingCourse && (
                <EditCourseModal
                    course={editingCourse}
                    setEditingCourse={setEditingCourse}
                    setCourses={setCourses}
                />
            )}
        </div>
    );
}
