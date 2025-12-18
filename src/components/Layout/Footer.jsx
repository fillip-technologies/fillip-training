import React from "react";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden text-gray-300 pt-20 pb-14">

            {/*  Animated Background */}
            <div className="absolute inset-0 bg-black">
                <div className="aurora-bg"></div>
            </div>

            {/*  BIG BACKGROUND TEXT (Coding Ninjas Style) */}
            {/* BIG BACKGROUND TEXT WITH TORCH EFFECT */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none group"
            >
                {/* Spotlight / Torch Layer */}
                <div
                    id="torch-light"
                    className="absolute w-[200px] h-[200px] rounded-full opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
                        mixBlendMode: "screen",
                    }}
                ></div>

                {/* Text */}
                {/* <h1 className="text-[110px] sm:text-[150px] md:text-[220px] font-extrabold text-white/10 tracking-tight select-none">
                    Fillip Training
                </h1> */}
            </div>


            <div className="relative max-w-7xl mx-auto px-6 z-10">

                {/* ------------------- CCBP Style Top Grid ------------------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Development */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Development</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            <li><a href="/course/fullstack" className="hover:text-white">Web Development</a></li>
                            <li><a href="/course/frontend" className="hover:text-white">Frontend Development</a></li>
                            <li><a href="/course/backend" className="hover:text-white">Backend Development</a></li>

                        </ul>

                    </div>

                    {/* Design */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Design</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            <li><a href="/course/uiux" className="hover:text-white">UI/UX Design</a></li>
                            <li><a href="/course/uiux" className="hover:text-white">Figma</a></li>
                            <li><a href="/course/graphics" className="hover:text-white">Graphic Design</a></li>
                            <li><a href="/course/graphics" className="hover:text-white">Photoshop</a></li>
                        </ul>

                    </div>

                    {/* IT & Software */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">IT & Software</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            <li><a href="/course/cyber" className="hover:text-white">Cyber Security</a></li>
                            <li><a href="/course/cloud" className="hover:text-white">Cloud Computing</a></li>

                        </ul>

                    </div>

                    {/* Business */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Business</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            <li><a className="hover:text-white">Entrepreneurship</a></li>
                            <li><a className="hover:text-white">Business Analytics</a></li>
                            <li><a className="hover:text-white">Management</a></li>
                        </ul>
                    </div>

                    {/* Featured */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Featured</h3>
                        <ul className="space-y-3 text-[15px] text-gray-300">
                            <li><a className="hover:text-white">Full-Stack Bootcamp</a></li>
                            <li><a className="hover:text-white">Advanced React</a></li>
                            <li><a className="hover:text-white">Cyber Security Essentials</a></li>
                        </ul>
                    </div>

                </div>

                {/* ===== ROW 2: ADDRESS ===== */}
                <div className="mt-10 border-t border-gray-700 pt-10 mb-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                        {/* Address */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Address</h3>
                            <p className="text-[15px] leading-relaxed text-gray-300">
                                A3, Ground Floor, Beside Kalyan Jewellers,<br />
                                Near Chandan Hero,<br />
                                Kankarbagh Main Road,<br />
                                Patna, Bihar - 800020
                            </p>
                        </div>

                        {/* Phone */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Phone</h3>
                            <ul className="space-y-3 text-[15px] text-gray-300">
                                <li><a href="tel:+917545999990" className="hover:text-white">+91 7545999993</a></li>
                                <li><a href="tel:+917545999996" className="hover:text-white">+91 7545999995</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Contact</h3>

                            <p className="text-[15px] mb-3 text-gray-300">
                                ✉️ <a href="mailto:info@filliptechnologies.com" className="hover:text-white">
                                    training@filliptechnologies.com
                                </a>
                            </p>

                            <p className="text-[15px] mb-3 text-gray-300">
                                💬 <a href="https://wa.me/917545999990" target="_blank" className="hover:text-white">
                                    WhatsApp Us
                                </a>
                            </p>

                            <button className="text-blue-400 hover:text-white text-sm mt-2">
                                Get direction →
                            </button>
                        </div>

                    </div>
                </div>

                {/* ===== ROW 3: LINKS ===== */}
                <div className="mt-14 border-t border-gray-700 pt-10 mb-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Company</h3>
                            <ul className="space-y-3 text-[15px] text-gray-300">
                                <li><a className="hover:text-white">About Us</a></li>
                                <li><a className="hover:text-white">Careers</a></li>
                                <li><a className="hover:text-white">Become a Mentor</a></li>
                                <li><a className="hover:text-white">Partner With Us</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Support</h3>
                            <ul className="space-y-3 text-[15px] text-gray-300">
                                <li><a className="hover:text-white">FAQs</a></li>
                                <li><a className="hover:text-white">Help Center</a></li>
                                <li><a className="hover:text-white">Contact Support</a></li>
                                <li><a className="hover:text-white">Student Community</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Legal</h3>
                            <ul className="space-y-3 text-[15px] text-gray-300">
                                <li><a className="hover:text-white">Privacy Policy</a></li>
                                <li><a className="hover:text-white">Terms & Conditions</a></li>
                                <li><a className="hover:text-white">Refund & Cancellation</a></li>
                                <li><a className="hover:text-white">Cookie Policy</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Resources</h3>
                            <ul className="space-y-3 text-[15px] text-gray-300">
                                <li><a className="hover:text-white">Blogs</a></li>

                                <li><a className="hover:text-white">E-books</a></li>
                                <li><a className="hover:text-white">Success Stories</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* ===== ROW 4: PAYMENT METHODS ===== */}
                <div className="mt-14 border-t border-gray-700 pt-10 pb-6 text-center">

                    <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">
                        We Accept All Payment Methods
                    </h3>

                    <div className="flex justify-center items-center gap-6 flex-wrap text-gray-300 text-sm">

                        <div className="px-4 py-2 border border-gray-600 rounded-lg">UPI</div>
                        <div className="px-4 py-2 border border-gray-600 rounded-lg">Visa</div>
                        <div className="px-4 py-2 border border-gray-600 rounded-lg">Mastercard</div>
                        <div className="px-4 py-2 border border-gray-600 rounded-lg">RuPay</div>
                        <div className="px-4 py-2 border border-gray-600 rounded-lg">Net Banking</div>
                        <div className="px-4 py-2 border border-gray-600 rounded-lg">Wallets</div>

                    </div>
                </div>



                {/* ===== BOTTOM COPYRIGHT ===== */}
                <div className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">

                    <p className="text-gray-400 text-sm">
                        © 2025 Fillip Skill Academy. All rights reserved.
                    </p>

                    <div className="flex gap-5 mt-4 sm:mt-0">
                        {[Instagram, Youtube, Linkedin, Facebook].map((Icon, i) => (
                            <Icon
                                key={i}
                                className="w-5 h-5 hover:text-white transition duration-300 cursor-pointer"
                            />
                        ))}
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
