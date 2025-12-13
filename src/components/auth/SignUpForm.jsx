import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function SignUpForm() {
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();


        // 
        navigate("/dashboard");
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <Input placeholder="First name" required />
                <Input placeholder="Last name" required />
            </div>

            <Input type="email" placeholder="Email address" required />
            <Input type="tel" placeholder="Phone number" required />
            <Input type="password" placeholder="Create password" required />

            <div className="flex items-start gap-2 text-sm">
                <Checkbox required />
                <span className="text-slate-600">
                    I agree to the Terms & Privacy Policy
                </span>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Sign Up
            </Button>
        </form>
    );
}
