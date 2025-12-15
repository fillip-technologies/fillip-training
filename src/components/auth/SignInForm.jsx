import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, ArrowRight, CloudHail } from "lucide-react";
import axios from "axios";

export default function SignInForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);



    // API
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        console.log("login data:", loginData);

        try {
            const res = await axios.post(
                "https://fillips-tech-training-portal-1.onrender.com/api/auth/login",
                {
                    email: loginData.email,
                    password: loginData.password
                }
            );
            console.log("login success:", res.data);

            // after sucess
            navigate("/dashboard");
        } catch (error) {
            console.log("login error:", error.response?.data || error.message);
        }

    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
                <p className="text-sm text-slate-600">
                    Sign in to continue your learning journey
                </p>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="space-y-5">
                {/* Email */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <label htmlFor="remember" className="text-slate-600">
                            Remember me
                        </label>
                    </div>

                    <button
                        type="button"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Forgot password?
                    </button>
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-slate-500">
                By signing in, you agree to our Terms & Privacy Policy
            </p>
        </div>
    );
}
