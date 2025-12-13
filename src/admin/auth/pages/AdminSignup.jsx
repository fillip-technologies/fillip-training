import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        if (!name || !email || !password) {
            alert("All fields required");
            return;
        }

        alert("Signup successful! Please login.");
        window.location.href = "/admin/login";
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
            style={{
                backgroundImage: "url('/admin-bg.png')" // <-- use a different image from login
            }}
        >
            {/* Dark blur overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Signup Card */}
            <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10">

                <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
                    Create Admin Account
                </h1>

                {/* FULL NAME */}
                <div className="mb-4">
                    <label className="text-white font-medium mb-1 block">Full Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-green-300 outline-none"
                    />
                </div>

                {/* EMAIL */}
                <div className="mb-4">
                    <label className="text-white font-medium mb-1 block">Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="admin@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-green-300 outline-none"
                    />
                </div>

                {/* PASSWORD */}
                <div className="mb-4">
                    <label className="text-white font-medium mb-1 block">Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="••••••••"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-green-300 outline-none"
                    />
                </div>

                {/* SIGNUP BUTTON */}
                <button
                    onClick={handleSignup}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition mt-2"
                >
                    Create Account
                </button>

                {/* FOOTER */}
                <p className="text-center text-white/80 text-sm mt-4">
                    Already registered?{" "}
                    <Link to="/admin/login" className="text-green-300 underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
