import React, { useState } from "react";
import { Camera, Sun, Moon, Monitor } from "lucide-react";

export default function Settings() {
    const [profilePic, setProfilePic] = useState("/default-user.png");
    const [tempPic, setTempPic] = useState(null);

    const [theme, setTheme] = useState("light");
    const [profile, setProfile] = useState({
        name: "Shruti Singh",
        email: "shrutisingh6738@gmail.com",
    });

    const [password, setPassword] = useState({
        old: "",
        new: "",
        confirm: "",
    });

    function uploadPic(e) {
        const file = e.target.files[0];
        if (file) {
            setTempPic(URL.createObjectURL(file));
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            {/* Profile */}
            <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">Profile</h2>

                <div className="flex items-center gap-6">
                    <div className="relative">
                        <img
                            src={tempPic || profilePic}
                            className="w-24 h-24 rounded-full object-cover border"
                        />
                        <label className="absolute bottom-0 right-0 p-2 bg-black text-white rounded-full cursor-pointer">
                            <Camera size={16} />
                            <input type="file" className="hidden" onChange={uploadPic} />
                        </label>
                    </div>

                    <div className="flex-1 space-y-3">
                        <input
                            className="w-full p-3 bg-gray-100 rounded-lg"
                            value={profile.name}
                            onChange={(e) =>
                                setProfile({ ...profile, name: e.target.value })
                            }
                        />
                        <input
                            className="w-full p-3 bg-gray-100 rounded-lg"
                            value={profile.email}
                            onChange={(e) =>
                                setProfile({ ...profile, email: e.target.value })
                            }
                        />
                    </div>
                </div>

                {tempPic && (
                    <button
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={() => {
                            setProfilePic(tempPic);
                            setTempPic(null);
                        }}
                    >
                        Save Photo
                    </button>
                )}
            </div>

            {/* Password */}
            <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>

                <div className="space-y-3">
                    <input
                        type="password"
                        placeholder="Old Password"
                        className="w-full p-3 bg-gray-100 rounded-lg"
                        onChange={(e) =>
                            setPassword({ ...password, old: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full p-3 bg-gray-100 rounded-lg"
                        onChange={(e) =>
                            setPassword({ ...password, new: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-3 bg-gray-100 rounded-lg"
                        onChange={(e) =>
                            setPassword({ ...password, confirm: e.target.value })
                        }
                    />

                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                        Update Password
                    </button>
                </div>
            </div>

            {/* Theme */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Theme</h2>

                <div className="flex gap-4">
                    <button
                        onClick={() => setTheme("light")}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 border 
                            ${theme === "light" ? "bg-black text-white" : ""}`}
                    >
                        <Sun size={16} /> Light
                    </button>

                    <button
                        onClick={() => setTheme("dark")}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 border 
                            ${theme === "dark" ? "bg-black text-white" : ""}`}
                    >
                        <Moon size={16} /> Dark
                    </button>

                    <button
                        onClick={() => setTheme("system")}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 border 
                            ${theme === "system" ? "bg-black text-white" : ""}`}
                    >
                        <Monitor size={16} /> System
                    </button>
                </div>
            </div>
        </div>
    );
}
