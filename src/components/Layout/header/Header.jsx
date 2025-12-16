import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Home, User, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeDrawerCategory, setActiveDrawerCategory] = React.useState(null);
    const [isMegaOpenDesktop, setIsMegaOpenDesktop] = React.useState(false);

    const menuRef = React.useRef();   // Mega Menu Reference
    const toggleRef = React.useRef(); // Courses Button Reference

    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: "Certifications", href: "/certifications" },
        { name: "Contact", href: "/Contact" },
    ];

    // Scroll or navigate without reload
    const handleNavClick = (href) => {
        if (href.startsWith("/#") && location.pathname === "/") {
            document.querySelector(href.replace("/#", "#"))?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            navigate(href);
        }
    };

    // CLICK OUTSIDE TO CLOSE MEGA MENU
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (
                isMegaOpenDesktop &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setIsMegaOpenDesktop(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMegaOpenDesktop]);

    return (
        <>
            <div className="site-header">

                {/* MOBILE HEADER */}
                <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white h-14 flex items-center justify-between px-3 border-b shadow-sm">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/fillip-logo.png" alt="logo" className="h-10 object-contain" />
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* <Link to="/auth" className="text-slate-700 text-sm font-medium">
                            Sign In
                        </Link> */}

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 rounded-md hover:bg-slate-100"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </header>

                {/* DESKTOP HEADER */}
                <header className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b shadow-sm z-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-center h-16">

                            {/* LOGO */}
                            <Link to="/">
                                <img src="/fillip-logo.png" alt="Logo" className="h-10 object-contain" />
                            </Link>

                            {/* NAVIGATION */}
                            <nav className="flex items-center space-x-8 relative">

                                {/* COURSES + MEGA MENU */}
                                <div className="relative">
                                    <button
                                        ref={toggleRef}
                                        onClick={() => setIsMegaOpenDesktop((prev) => !prev)}
                                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600"
                                    >
                                        Courses <ChevronDown size={16} />
                                    </button>

                                    {/* MEGA MENU */}
                                    <MegaMenu
                                        isOpen={isMegaOpenDesktop}
                                        onClose={() => setIsMegaOpenDesktop(false)}
                                        menuRef={menuRef}
                                    />
                                </div>

                                {/* OTHER NAV ITEMS */}
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-slate-600 hover:text-blue-600"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </nav>

                            {/* CTA BUTTONS */}
                            <div className="flex items-center gap-4">

                                {/* <Link to="/auth">
                                    <Button variant="ghost">Sign In</Button>
                                </Link> */}

                                {/* <Link to="/auth">
                                    <Button className="bg-blue-600">Sign In</Button>
                                </Link> */}

                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                    Request a Call Back
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* MOBILE DRAWER */}
                <MobileDrawer
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    activeDrawerCategory={activeDrawerCategory}
                    setActiveDrawerCategory={setActiveDrawerCategory}
                />

                {/* MOBILE BOTTOM NAV */}
                {/* <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-md">
                    <div className="flex justify-around items-center py-1">

                        <button
                            onClick={() => navigate("/")}
                            className="flex flex-col items-center text-xs text-blue-600"
                        >
                            <Home size={20} />
                            <span>Home</span>
                        </button>

                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            className="flex flex-col items-center text-xs text-green-600"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                                className="h-6 w-6"
                            />
                            <span>WhatsApp</span>
                        </a>

                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="flex flex-col items-center text-xs text-indigo-600"
                        >
                            <Phone size={20} />
                            <span>Call</span>
                        </a>
                    </div>
                </nav> */}
            </div>
        </>
    );
};

export default Header;
