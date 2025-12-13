import { motion } from "framer-motion";

export default function AnimatedCertificateReveal() {
    return (
        <section className="py-15 bg-white relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* WHY: Heading introduces the value of certification and builds user motivation */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Earn a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificate That Stands Out 🎓</span>
                    </h2>

                    {/* WHY: Supporting text highlights credibility + shareability to drive conversions */}
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Complete any course and unlock your professionally designed,
                        industry-recognized certificate—verified and shareable.
                    </p>
                </div>

                {/* WHY: Certificate reveal animation draws user attention and elevates visual appeal */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 80, scale: 0.9 }}   // WHY: Start animation below for smooth upward reveal
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}  // WHY: Ensures reveal happens when the user scrolls to section
                        transition={{ duration: 1, ease: "easeOut" }} // WHY: Smooth transition for premium experience
                        viewport={{ once: true }}                     // WHY: Prevents re-triggering when scrolling back
                        className="relative"
                    >

                        {/* WHY: Soft glow behind the certificate to make it feel premium and visually pop */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.4, 0.6, 0.4],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,          // WHY: Continuous gentle pulsing to create a dynamic effect
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 blur-3xl bg-blue-300 opacity-40 rounded-2xl"
                        ></motion.div>

                        {/* WHY: Main certificate image with hover interaction to increase engagement */}
                        <motion.img
                            src="/certificcate.jpeg"
                            alt="Certificate"
                            whileHover={{ scale: 1.03, rotate: 1 }}                // WHY: Subtle hover effect makes UI feel interactive
                            transition={{ type: "spring", stiffness: 100 }}
                            className="relative w-[650px] rounded-2xl shadow-2xl border border-gray-200"
                        />
                    </motion.div>
                </div>

                {/* WHY: Encourages users to share their achievement → social proof & organic marketing */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}             // WHY: Fade-in upward reveal to maintain consistent animation style
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center text-gray-600 mt-10"
                >
                    Share your certificate on LinkedIn, add it to your resume,
                    and prove your skills with confidence.
                </motion.p>

            </div>
        </section>
    );
}
