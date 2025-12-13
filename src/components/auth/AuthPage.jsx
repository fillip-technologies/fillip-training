import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthPage() {
    const [mode, setMode] = useState("signin");

    return (
        <div className="
      min-h-screen flex items-center justify-center px-6
      bg-gradient-to-br from-[#f8fbff] via-[#eef4ff] to-[#eaf2ff]
    ">

            {/* OUTER CARD */}
            <div className="
        w-full max-w-5xl
        bg-white
        rounded-[32px]
        shadow-2xl
        overflow-hidden
        grid grid-cols-1 lg:grid-cols-2
      ">

                {/* LEFT IMAGE SECTION */}
                <div className="relative hidden lg:block">
                    <img
                        src="/auth-visual.png"
                        alt="Auth visual"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* very light overlay  */}
                    <div className="absolute inset-0 bg-black/10"></div>

                    {/* Logo */}
                    <div className="absolute top-8 left-8">
                        <img src="/fillip-logo-white.png" alt="Logo" className="h-8" />
                    </div>
                </div>

                {/* RIGHT FORM SECTION */}
                <div className="flex flex-col justify-center px-8 sm:px-12 py-10 bg-white">

                    <div className="mb-6">
                        <h2 className="text-3xl font-semibold text-slate-900">
                            {mode === "signin" ? "Log in" : "Create account"}
                        </h2>
                        <p className="text-sm text-slate-600 mt-1">
                            {mode === "signin"
                                ? "Don’t have an account?"
                                : "Already have an account?"}
                            <button
                                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                                className="ml-1 text-blue-600 font-medium hover:underline"
                            >
                                {mode === "signin" ? "Create an account" : "Log in"}
                            </button>
                        </p>
                    </div>

                    {mode === "signin" ? <SignInForm /> : <SignUpForm />}
                </div>
            </div>
        </div>
    );
}

