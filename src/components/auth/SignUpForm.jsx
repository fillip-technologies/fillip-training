import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function SignUpForm() {
    const navigate = useNavigate();



    // API
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        console.log("FORM DATA:", formData); // 

        try {
            const res = await axios.post(
                "https://fillips-tech-training-portal-1.onrender.com/api/auth/register",
                {
                    name: formData.firstName + " " + formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password
                }
            );

            console.log("SIGNUP SUCCESS:", res.data);
            navigate("/dashboard");

        } catch (error) {
            console.log("SIGNUP ERROR:", error);
        }
    };

    // 


    return (
        <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <Input name="firstName" placeholder="First name" onChange={handleChange} required />
                <Input name="lastName" placeholder="Last name" onChange={handleChange} required />
            </div>

            <Input name="email" type="email" placeholder="Email address" onChange={handleChange} required />
            <Input name="phone" type="tel" placeholder="Phone number" onChange={handleChange} required />
            <Input name="password" type="password" placeholder="Create password" onChange={handleChange} required />

            <div className="flex items-start gap-2 text-sm">
                <Checkbox />
                <span className="text-slate-600">
                    I agree to the Terms & Privacy Policy
                </span>
            </div>

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
            >
                Sign Up
            </Button>

        </form>
    );
}
