import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Star } from "lucide-react";

export default function CartPage() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("token");

    // const handleCheckout = () => {
    //     if (!isLoggedIn) {
    //         window.location.href = "https://nextindia-training.fillipsoftware.com/auth";
    //         return;
    //     }
    //     navigate("/checkout", { state });
    // };

    const handleCheckout = () => {
        navigate("/checkout", { state });
    };



    const goBack = () => navigate(-1);

    const [saved, setSaved] = useState([]);

    const handleSaveForLater = () => {
        setSaved([...saved, state]);
    };

    // ⭐ Real-world recommended courses with real images
    const recommended = [
        {
            title: "Full Stack MERN Development",
            price: "₹34,999",
            rating: 4.7,
            thumbnail:
                "https://miro.medium.com/v2/resize:fit:828/format:webp/1*4L2VNMerXp2aX2nO7hJk9w.png"
        },
        {
            title: "Digital Marketing Professional",
            price: "₹19,999",
            rating: 4.6,
            thumbnail:
                "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/01/digital-marketing.jpg"
        },
        {
            title: "Python Programming Essentials",
            price: "₹9,999",
            rating: 4.8,
            thumbnail:
                "https://www.princeton.edu/sites/default/files/styles/medium/public/images/2022/09/Python-logo.png"
        }
    ];

    // ⭐ Recently viewed with real thumbnails
    const recentlyViewed = [
        {
            title: "UI/UX Product Design",
            price: "₹24,999",
            rating: 4.9,
            thumbnail:
                "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/182987728/original/9806828596258c671706efcccc022a7eda25c691/create-an-awesome-ui-ux-design-for-your-mobile-app.png"
        },
        {
            title: "Data Science & AI",
            price: "₹54,999",
            rating: 4.8,
            thumbnail:
                "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/data-science-vs-ai.jpg"
        }
    ];

    return (
        <div
            className="min-h-screen py-10 px-4 md:px-6"
            style={{
                background:
                    "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') repeat"
            }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm mb-6"
                >
                    <ChevronLeft className="w-4" /> Back to courses
                </button>

                <h1 className="text-2xl text-gray-800 mb-8">Your Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT SECTION */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* CART ITEM */}
                        <div className="bg-white border rounded-xl shadow-sm p-6 flex gap-6 items-start">

                            {/* Thumbnail */}
                            <img
                                src={
                                    state?.thumbnail ||
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gf8Cv6LY8LSaGG3ukBqaa6-OIhFnO9gYGQ"
                                }
                                className="w-40 h-28 rounded-lg object-cover border"
                                alt="course"
                            />

                            {/* Info */}
                            <div className="flex-1 space-y-2">
                                <p className="text-gray-800 text-lg">
                                    {state?.courseName}
                                </p>

                                <div className="flex items-center gap-1 text-gray-600 text-sm">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    4.8 • Beginner Friendly
                                </div>

                                <p className="text-gray-500 text-sm">
                                    Mode: <span className="text-gray-700">{state?.mode}</span>
                                </p>

                                <p className="text-gray-800 text-xl mt-3">
                                    ₹{state?.price}
                                </p>

                                <button
                                    onClick={handleSaveForLater}
                                    className="text-indigo-600 text-sm hover:text-indigo-700"
                                >
                                    Save for later
                                </button>
                            </div>
                        </div>

                        {/* SAVE FOR LATER */}
                        {saved.length > 0 && (
                            <div className="bg-white border rounded-xl shadow-sm p-6">
                                <p className="text-gray-700 mb-4">Saved for later</p>

                                {saved.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 py-3">
                                        <img
                                            src={
                                                item.thumbnail ||
                                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gf8Cv6LY8LSaGG3ukBqaa6-OIhFnO9gYGQ"
                                            }
                                            className="w-20 h-16 rounded-lg object-cover border"
                                            alt=""
                                        />
                                        <div>
                                            <p className="text-gray-800 text-sm">{item.courseName}</p>
                                            <p className="text-gray-600 text-sm mt-1">₹{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* RECOMMENDED */}
                        <div className="mt-10">
                            <p className="text-gray-700 text-lg mb-4">You may also like</p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {recommended.map((course, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border rounded-xl p-4 shadow-sm hover:shadow transition"
                                    >
                                        <img
                                            src={course.thumbnail}
                                            className="w-full h-32 object-cover rounded-lg mb-3"
                                            alt={course.title}
                                        />

                                        <p className="text-gray-800 text-sm">{course.title}</p>

                                        <div className="flex items-center gap-1 text-gray-600 text-xs mt-1">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>

                                        <p className="text-gray-600 text-sm mt-1">{course.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RECENTLY VIEWED */}
                        <div className="mt-10">
                            <p className="text-gray-700 text-lg mb-4">You viewed recently</p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {recentlyViewed.map((course, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border rounded-xl p-4 shadow-sm hover:shadow transition"
                                    >
                                        <img
                                            src={course.thumbnail}
                                            className="w-full h-32 object-cover rounded-lg mb-3"
                                            alt={course.title}
                                        />

                                        <p className="text-gray-800 text-sm">{course.title}</p>

                                        <div className="flex items-center gap-1 text-gray-600 text-xs mt-1">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>

                                        <p className="text-gray-600 text-sm mt-1">{course.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SUMMARY */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border rounded-xl shadow-sm p-6">

                            <p className="text-gray-700 text-lg mb-4">Order summary</p>

                            <div className="flex justify-between text-gray-600 mb-3">
                                <span>Course price</span>
                                <span>₹{state?.price}</span>
                            </div>

                            <div className="border-t my-4"></div>

                            <div className="flex justify-between text-gray-800 text-lg mb-6">
                                <span>Total</span>
                                <span>₹{state?.price}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full py-4 bg-indigo-600 text-white rounded-xl text-base transition hover:bg-indigo-700"
                            >
                                Proceed to checkout
                            </button>

                            <p className="text-center text-gray-500 text-xs mt-4">
                                Secure payment • No hidden fees
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
