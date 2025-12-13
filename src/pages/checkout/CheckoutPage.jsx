import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Lock, CreditCard, Star } from "lucide-react";

export default function CheckoutPage() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const defaultImg =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gf8Cv6LY8LSaGG3ukBqaa6-OIhFnO9gYGQ";

    return (
        <div
            className="min-h-screen py-10 px-4 md:px-6"
            style={{
                background:
                    "url('https://www.toptal.com/designers/subtlepatterns/uploads/lightpaperfibers.png') repeat"
            }}
        >
            <div className="max-w-5xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm mb-6"
                >
                    <ChevronLeft className="w-4" /> Back to Cart
                </button>

                <h1 className="text-2xl text-gray-800 mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* COURSE SUMMARY CARD */}
                        <div className="bg-white rounded-xl border shadow-sm p-6 flex gap-5 items-start">
                            <img
                                src={state?.thumbnail || defaultImg}
                                className="w-36 h-24 rounded-lg object-cover border"
                                alt="course"
                            />
                            <div className="flex-1 space-y-1">
                                <p className="text-gray-800 text-base">{state?.courseName}</p>

                                <div className="flex items-center gap-1 text-gray-600 text-xs">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    4.8 (Top Rated)
                                </div>

                                <p className="text-gray-500 text-sm mt-1">
                                    Mode: <span className="text-gray-700">{state?.mode}</span>
                                </p>

                                <p className="text-gray-800 text-xl mt-3">₹{state?.price}</p>
                            </div>
                        </div>

                        {/* BILLING DETAILS */}
                        <div className="bg-white rounded-xl border shadow-sm p-6">
                            <p className="text-gray-700 text-lg mb-4">Billing Information</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <InputField label="Full Name" placeholder="Enter your name" />
                                <InputField label="Email Address" placeholder="you@example.com" />
                                <InputField label="Phone Number" placeholder="+91 XXXXXXXXXX" />
                                <InputField label="City" placeholder="Your city" />
                            </div>
                        </div>

                        {/* PAYMENT METHOD */}
                        <div className="bg-white rounded-xl border shadow-sm p-6">
                            <p className="text-gray-700 text-lg mb-4">Payment Method</p>

                            <div className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                                <CreditCard className="w-5 h-5 text-indigo-600" />
                                <span className="text-gray-700 text-sm">Credit / Debit Card</span>
                            </div>

                            <div className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer hover:bg-gray-50 mt-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Razorpay_logo.png"
                                    className="w-20 opacity-80"
                                />
                                <span className="text-gray-700 text-sm">UPI / Wallets (Razorpay)</span>
                            </div>

                            <div className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer hover:bg-gray-50 mt-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2c/PayPal_logo.svg"
                                    className="w-20 opacity-70"
                                />
                                <span className="text-gray-700 text-sm">PayPal</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SUMMARY SIDEBAR */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl border shadow-sm p-6 sticky top-24">

                            <p className="text-gray-700 text-lg mb-5">Order Summary</p>

                            <div className="flex justify-between text-gray-600 mb-3 text-sm">
                                <span>Course Price</span>
                                <span>₹{state?.price}</span>
                            </div>

                            <div className="flex justify-between text-gray-600 mb-3 text-sm">
                                <span>Platform Fee</span>
                                <span>₹0</span>
                            </div>

                            <div className="border-t my-4"></div>

                            <div className="flex justify-between text-gray-800 text-lg mb-6">
                                <span>Total</span>
                                <span>₹{state?.price}</span>
                            </div>

                            <button
                                onClick={() => alert("Payment Gateway UI Coming Soon")}
                                className="w-full py-4 bg-indigo-600 text-white rounded-xl text-base hover:bg-indigo-700 transition"
                            >
                                Pay Now
                            </button>

                            <div className="flex justify-center items-center gap-2 mt-4 text-gray-500 text-xs">
                                <Lock className="w-3" />
                                100% Secure Payment
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* ---------------- INPUT COMPONENT ---------------- */
function InputField({ label, placeholder }) {
    return (
        <div>
            <p className="text-gray-600 text-sm mb-1">{label}</p>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-3 rounded-lg border text-sm focus:ring focus:ring-indigo-100 outline-none"
            />
        </div>
    );
}
