import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ChevronsUpDown } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "@/services/const";

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
import { set } from "react-hook-form";

const COURSE_OPTIONS = [
  "Full Stack Development Internship",
  "Frontend Development Internship",
  "Backend Development Internship",
  "UI/UX Design Internship",
  "Graphic Design Internship",
  "Cyber Security Internship",
  "Cloud Computing Internship",
  "Digital Marketing Internship",
  "AI & Machine Learning Internship",
];

const EnquiryStudents = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    college: "",
    course: "",
    message: "",
    mode: "Offline",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted:", form);
    try {
      const res = await axios.post(`${URL}enquiry`, form);
      console.log(res.data);
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        college: "",
        course: "",
        message: "",
        mode: "Offline",
      });
      toast.success("Enquiry submitted successfully");
    } catch (error) {
      console.log(error);
      // console.log("Error in submitting enquiry");
      toast.error("Error in submitting enquiry");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="  p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-1">
        Apply for Internship
      </h2>
      <p className="text-sm text-slate-600 mb-6">
        Fill the form to start your internship journey
      </p>

      <form
        className="space-y-5"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <input type="hidden" name="type" value="internship" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input name="name" value={form.name} onChange={handleChange} />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <Input name="email" value={form.email} onChange={handleChange} />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <Input name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Location</label>
            <Input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">College</label>
            <Input
              name="college"
              value={form.college}
              onChange={handleChange}
            />
            {errors.college && (
              <p className="text-xs text-red-500">{errors.college}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Department</label>

            <Popover open={openCourse} onOpenChange={setOpenCourse}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="w-full h-11 px-4 border rounded-md flex justify-between items-center"
                >
                  {form.course || "Select course"}
                  <ChevronsUpDown className="w-4 h-4 opacity-60" />
                </button>
              </PopoverTrigger>

              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Search..." />
                  <CommandList>
                    <CommandEmpty>No course found</CommandEmpty>
                    <CommandGroup>
                      {COURSE_OPTIONS.map((c, i) => (
                        <CommandItem
                          key={i}
                          onSelect={() => {
                            setForm((p) => ({ ...p, course: c }));
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

            {errors.course && (
              <p className="text-xs text-red-500">{errors.course}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Any specific information?"
          />
        </div>

        <Button
          className="w-full h-12 bg-blue-600 text-white"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
};

export default EnquiryStudents;
