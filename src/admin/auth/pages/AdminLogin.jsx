import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "@/services/const";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      navigate("/admin/");
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter details");
      return;
    }

    try {
      const response = await axios.post(
        `${URL}auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Login Response:", response);
      localStorage.setItem("adminToken", "dummy-token-123");
      navigate("/admin/");
    } catch (error) {
      console.log("Error while admin login", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/admin-bg.png')", // <-- replace with your image
      }}
    >
      {/* Overlay (blur + dark layer) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl shadow-xl border border-white/30 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Admin Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="text-white font-medium mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-300 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-white font-medium mb-1 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-300 outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        {/* Footer Link */}
        <p className="text-center text-white/80 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/admin/signup" className="text-blue-300 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
