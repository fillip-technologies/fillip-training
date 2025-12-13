import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Users, BookOpen, AlertCircle, ChevronsUpDown, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Courses from "../Home/Courses";
import AnimatedCertificateReveal from "../Home/Coursecertificate";
import StatCard from "../Home/Stat";
import COLLEGES from "../Home/Colleges";
import TrustedBy from "../Home/Testimonials";
import FaqSection from "../Home/Faq";


import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

import {
    Command,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem,
    CommandEmpty,
} from "@/components/ui/command";

const FillipTrainingPage = () => {

    // ---------------- FORM LOGIC ----------------
    const COURSE_OPTIONS = [
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "UI/UX Design",
        "Graphic Design",
        "Cyber Security",
        "Cloud Computing",
        "Digital Marketing",
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Mobile App Development",
        "Business Analytics",
        "AI & Machine Learning"
    ];

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        college: "",
        course: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [openCourse, setOpenCourse] = useState(false);


    const validators = {
        name: v => !v ? "Name required" : "",
        email: v => !/^\S+@\S+\.\S+$/.test(v) ? "Invalid email" : "",
        phone: v => v.length !== 10 ? "10 digits required" : "",
        location: v => !v ? "Location required" : "",
        college: v => !v ? "College required" : "",
        course: v => !v ? "Select a course" : "",
        message: () => ""
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(form).forEach(k => {
            const err = validators[k](form[k]);
            if (err) newErrors[k] = err;
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length) return;

        setLoading(true);

        try {
            const res = await fetch("https://fillips-tech-training-portal-1.onrender.com/api/enquiry/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!res.ok) throw new Error();
            alert("Enquiry submitted successfully!");

            // 
            setForm({
                name: "",
                email: "",
                phone: "",
                location: "",
                college: "",
                course: "",
                message: "",
            });

            // Clear errors
            setErrors({});
        } catch {
            alert("Error submitting enquiry");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- UI SECTIONS ---------------
    const stats = [
        { icon: Users, value: "50K+", label: "Active Learners" },
        { icon: BookOpen, value: "200+", label: "Courses" },
        { icon: Star, value: "4.9", label: "Rating" },
    ];

    return (
        <>
            <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">

                {/* Background design */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* ---------------- LEFT CONTENT ---------------- */}
                        <div className="text-center lg:text-left">

                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                                <Star className="w-4 h-4 mr-2" />
                                #1 IT Training Platform In Patna
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                Build IT Skills on
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {" "}
                                    Real Projects
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-8 max-w-2xl text-justify">
                                Experience immersive learning with AI/ML and Web Development courses.
                                Join the best internship company in Patna. Learn with real projects and
                                grow with expert guidance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg">
                                    Join Us <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                {/* <Button variant="outline" className="border-2 border-slate-300 px-8 py-4 text-lg">
                                    <Play className="mr-2 w-5 h-5" />  DemoWatch
                                </Button> */}
                            </div>

                            <div className="grid grid-cols-3 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start mb-2">
                                            <stat.icon className="w-5 h-5 text-blue-600 mr-2" />
                                            <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                                        </div>
                                        <p className="text-slate-600 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ---------------- RIGHT SIDE FORM ---------------- */}
                        <div className="w-full bg-white shadow-xl rounded-2xl p-6">

                            <h2 className="text-xl font-bold mb-1">Enquiry Now</h2>
                            <p className="text-sm text-slate-600 mb-6">Secure your spot in your selected course</p>

                            <form className="space-y-6" onSubmit={handleSubmit}>

                                {/* GRID */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <div>
                                        <label className="text-sm font-medium">Full Name</label>
                                        <Input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={errors.name ? "border-red-500" : ""}
                                        />
                                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="text-sm font-medium">Email</label>
                                        <Input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@gmail.com"
                                            className={errors.email ? "border-red-500" : ""}
                                        />
                                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="text-sm font-medium">Phone</label>
                                        <Input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="999999999"
                                            className={errors.phone ? "border-red-500" : ""}
                                        />
                                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="text-sm font-medium">Location</label>
                                        <Input
                                            name="location"
                                            value={form.location}
                                            onChange={handleChange}
                                            placeholder="New Delhi"
                                            className={errors.location ? "border-red-500" : ""}
                                        />
                                        {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                                    </div>

                                    {/* College */}
                                    <div>
                                        <label className="text-sm font-medium">College</label>
                                        <Input
                                            name="college"
                                            value={form.college}
                                            onChange={handleChange}
                                            placeholder="ABC University"
                                            className={errors.college ? "border-red-500" : ""}
                                        />
                                        {errors.college && <p className="text-xs text-red-500">{errors.college}</p>}
                                    </div>

                                    {/* Course Dropdown */}
                                    <div>
                                        <label className="text-sm font-medium">Course</label>

                                        <Popover open={openCourse} onOpenChange={setOpenCourse}>
                                            <PopoverTrigger asChild>
                                                <button
                                                    type="button"
                                                    className={`w-full h-11 px-4 border rounded-md flex items-center justify-between ${errors.course ? "border-red-500 bg-red-50" : "border-gray-300"
                                                        }`}
                                                >
                                                    {form.course || "Search a course..."}
                                                    <ChevronsUpDown className="w-4 h-4 opacity-60" />
                                                </button>
                                            </PopoverTrigger>

                                            <PopoverContent className="w-full p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search..." />
                                                    <CommandList>
                                                        <CommandEmpty>No course found.</CommandEmpty>

                                                        <CommandGroup>
                                                            {COURSE_OPTIONS.map((c, i) => (
                                                                <CommandItem
                                                                    key={i}
                                                                    onSelect={() => {
                                                                        setForm(prev => ({ ...prev, course: c }));
                                                                        setErrors(prev => ({ ...prev, course: "" }));
                                                                        setOpenCourse(false);
                                                                    }}
                                                                >
                                                                    {c}
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>

                                        {errors.course && <p className="text-xs text-red-500">{errors.course}</p>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="text-sm font-medium">Message</label>
                                    <Textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Any specific information?"
                                    />
                                </div>

                                {/* Submit */}
                                <Button className="w-full h-12 bg-blue-600 text-white" type="submit" disabled={loading}>
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Enquiry"}
                                </Button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Courses />
            <AnimatedCertificateReveal />
            <COLLEGES />
            <TrustedBy />
            <FaqSection />
        </>
    );

};






export default FillipTrainingPage;
