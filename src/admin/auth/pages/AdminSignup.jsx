import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "@/services/const";
import { ToastContainer, toast } from "react-toastify";

export default function AdminSignup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert("All fields required");
      return;
    }

    try {
      const response = await axios.post(`${URL}auth/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: "Admin",
      });
      console.log("Signup Response:", response);
      toast.success("Signup Successful! Please login.");
      navigate("/admin/login");

      //   window.location.href = "/admin/login";
    } catch (error) {
      console.log("Error while admin signup", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error("Signup Failed. " + message);

      setErrorMsg(message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('/admin-bg.png')", // <-- use a different image from login
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
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="text-white font-medium mb-1 block">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="John"
              className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-green-300 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="text-white font-medium mb-1 block">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Doe"
              className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/70 focus:ring-2 focus:ring-green-300 outline-none"
            />
          </div>
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

        {errorMsg && (
          <div className="my-4 text-center text-sm text-red-200 bg-red-500/80 border border-red-300/30 rounded-lg p-2">
            {errorMsg}
          </div>
        )}
      </div>
    </div>
  );
}
