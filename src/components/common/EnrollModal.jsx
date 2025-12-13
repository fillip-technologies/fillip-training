import { useState, useEffect } from "react";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, XCircle, AlertCircle, ChevronsUpDown } from "lucide-react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";

export default function EnrollFormModal({ open, onClose, course }) {
    const COURSE_OPTIONS = [
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "UI/UX Design",
        "Graphic Design",
        "Cyber Security",
        "Cloud Computing",
        "Digital Marketing",
        "SEO (Search Engine Optimization)",
        "Google Ads",
        "Meta Ads",
        "Business Analytics",
        "Mobile App Development",
        "CyberSecurity Professional",
        "AI & Machine Learning",
    ];

    const initialForm = {
        name: "",
        email: "",
        phone: "",
        location: "",
        college: "",
        course: course || "",
        message: "",
    };

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const [openCourse, setOpenCourse] = useState(false);

    // Reset on open
    useEffect(() => {
        if (open) {
            setForm({ ...initialForm, course });
            setErrors({});
            setTouched({});
            setStatus(null);
        }
    }, [open, course]);



    // ----------------------
    // VALIDATION
    // ----------------------
    const validators = {
        name: v =>
            !v.trim() ? "Name is required"
                : !/^[A-Za-z ]+$/.test(v) ? "Only letters allowed"
                    : v.length < 3 ? "Minimum 3 characters"
                        : "",

        email: v =>
            !v.trim() ? "Email is required"
                : !/^\S+@\S+\.\S+$/.test(v) ? "Enter a valid email"
                    : "",

        phone: v =>
            !v.trim() ? "Phone required"
                : !/^\d{10}$/.test(v) ? "Must be 10 digits"
                    : "",

        location: v =>
            !v.trim() ? "Location required"
                : !/^[A-Za-z ]+$/.test(v) ? "Only letters allowed"
                    : "",

        college: v =>
            !v.trim() ? "College required"
                : !/^[A-Za-z ]+$/.test(v) ? "Only letters allowed"
                    : "",

        course: v =>
            !v.trim() ? "Course is required"
                : "",

        // ⭐ FINAL FIX — this MUST be included
        message: () => ""
    };


    const validate = (field, value) => validators[field](value);

    const validateAll = () => {
        const e = {};
        Object.keys(form).forEach(k => {
            const err = validate(k, form[k]);
            if (err) e[k] = err;
        });
        return e;
    };

    // ----------------------
    // Handlers
    // ----------------------
    const handleChange = e => {
        const { name, value } = e.target;
        let processed = value;

        if (["name", "location", "college"].includes(name))
            processed = processed.replace(/[^A-Za-z ]/g, "");

        if (name === "phone")
            processed = processed.replace(/\D/g, "").slice(0, 10);

        setForm(prev => ({ ...prev, [name]: processed }));

        if (touched[name])
            setErrors(prev => ({ ...prev, [name]: validate(name, processed) }));
    };

    const handleBlur = e => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const touchAll = Object.keys(form).reduce((a, k) => ({ ...a, [k]: true }), {});
        setTouched(touchAll);

        const err = validateAll();
        setErrors(err);
        if (Object.keys(err).length) return;

        setLoading(true);
        try {
            const res = await fetch("https://fillips-tech-training-portal-1.onrender.com/api/enquiry/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            console.log(res)

            if (!res.ok) throw new Error();
            setStatus("success");
            setTimeout(onClose, 1500);
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const fields = [
        { name: "name", label: "Full Name", placeholder: "John Doe" },
        { name: "email", label: "Email Address", placeholder: "john@mail.com" },
        { name: "phone", label: "Phone Number", placeholder: "9876543210" },
        { name: "location", label: "Location", placeholder: "New Delhi" },
        { name: "college", label: "College Name", placeholder: "ABC University" },
    ];

    // ----------------------
    // UI
    // ----------------------
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-[95%] sm:max-w-md rounded-xl p-0 overflow-hidden shadow-xl">

                {/* HEADER */}
                <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Enquiry Now</DialogTitle>
                        <DialogDescription className="text-white/80">
                            Secure your spot in {course || "your selected course"}
                        </DialogDescription>
                    </DialogHeader>
                </div>

                {/* BODY */}
                <div className="p-6 max-h-[70vh] overflow-y-auto">

                    {/* SUCCESS */}
                    {status === "success" && (
                        <div className="text-center py-8">
                            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-3">Enquiry Submitted</h3>
                        </div>
                    )}

                    {/* ERROR */}
                    {status === "error" && (
                        <div className="text-center py-8">
                            <XCircle className="w-16 h-16 text-red-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-3">Submission Failed</h3>
                        </div>
                    )}

                    {/* FORM */}
                    {!status && (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {fields.map(f => (
                                    <div key={f.name} className="space-y-1">
                                        <label className="text-sm font-medium">{f.label}</label>
                                        <div className="relative">
                                            <Input
                                                name={f.name}
                                                value={form[f.name]}
                                                placeholder={f.placeholder}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors[f.name] ? "border-red-500 bg-red-50" : ""}
                                            />
                                            {errors[f.name] && (
                                                <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                                            )}
                                        </div>
                                        {errors[f.name] && <p className="text-xs text-red-500">{errors[f.name]}</p>}
                                    </div>
                                ))}
                            </div>

                            {/* COURSE FIELD — SEARCHABLE DROPDOWN */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium">Course</label>

                                <Popover open={openCourse} onOpenChange={setOpenCourse}>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className={`w-full h-11 px-4 bg-white text-left rounded-md border flex justify-between items-center
                        ${errors.course ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                                        >
                                            {form.course || "Search a course..."}
                                            <ChevronsUpDown className="w-4 h-4 opacity-60" />
                                        </button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search course..." />
                                            <CommandList>
                                                <CommandEmpty>No course found.</CommandEmpty>
                                                <CommandGroup>
                                                    {COURSE_OPTIONS.map((c, i) => (
                                                        <CommandItem
                                                            key={i}
                                                            value={c}
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

                            {/* MESSAGE */}
                            <div>
                                <label className="text-sm font-medium">Message (Optional)</label>
                                <Textarea
                                    name="message"
                                    rows={3}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Any specific information?"
                                />
                            </div>

                            {/* SUBMIT */}
                            <Button type="submit" disabled={loading} className="w-full h-12 bg-blue-600 text-white">
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Enquiry"}
                            </Button>

                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
