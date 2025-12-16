import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">

            {/* Background blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-300 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Get in Touch with
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}Fillip Skill Academy
                        </span>
                    </h1>
                    <p className="mt-6 text-gray-600 text-lg">
                        Have questions about courses, admissions, or career guidance?
                        Our team is here to help you.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT – Contact Info */}
                    <div className="lg:sticky lg:top-28 space-y-10">

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-600">
                                Reach out to us anytime. We usually respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <InfoItem
                                icon={<MapPin />}
                                title="Office Address"
                                value={
                                    <>
                                        A3, Ground Floor, Beside Kalyan Jewellers,<br />
                                        Near Chandan Hero,<br />
                                        Kankarbagh Main Road,<br />
                                        Patna, Bihar – 800020
                                    </>
                                }
                            />

                            <InfoItem
                                icon={<Phone />}
                                title="Phone"
                                value={
                                    <>
                                        +91 7545999990<br />
                                        +91 7545999996
                                    </>
                                }
                            />

                            <InfoItem
                                icon={<Mail />}
                                title="Email"
                                value="training@filliptechnologies.com"
                            />

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/917545999990"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 mt-6 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-md hover:bg-green-600 transition"
                            >
                                💬 WhatsApp Us
                            </a>

                            {/* Google Maps Direction */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Fillip+Technologies+Kankarbagh+Patna"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-4 text-blue-600 font-medium hover:underline"
                            >
                                Get direction →
                            </a>

                        </div>

                    </div>

                    {/* RIGHT – Form */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-10">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                            Send us a Message
                        </h3>

                        <form className="space-y-6">

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Input label="Full Name" />
                                <Input label="Email Address" />
                            </div>

                            <Input label="Phone Number" />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition"
                            >
                                Send Message <Send size={18} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Reusable Components */

function Input({ label }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <input
                type="text"
                placeholder={label}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
        </div>
    );
}

function InfoItem({ icon, title, value }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {icon}
            </div>
            <div>
                <p className="font-medium text-gray-900">{title}</p>
                <p className="text-gray-600">{value}</p>
            </div>
        </div>
    );
}
