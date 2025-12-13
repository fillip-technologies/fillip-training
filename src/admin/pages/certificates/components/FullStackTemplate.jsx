export default function CertificateDesign({ data }) {
    const {
        certificateNo = "RR25-10-1881823001",
        name = "SHRUTI SINGH",
        description =
        "He has demonstrated strong dedication, actively participated in the Python Programming training, and consistently performed with sincerity throughout the program.",
        title = "CERTIFICATE OF COMPLETION",
        subtitle = "THIS CERTIFIES THAT",
        logo = "/certificates/logo.png",
        badge = "/certificates/badge.png",
    } = data || {};

    return (
        <div className="w-full flex justify-center px-4 py-10 bg-gradient-to-br from-gray-50 to-gray-100">

            {/* Outer clean card */}
            <div className="w-full max-w-5xl bg-white p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-200 relative overflow-hidden">

                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-3xl"></div>

                {/* Certificate Number */}
                <p className="text-sm text-gray-600 mb-6 tracking-wide">
                    <strong className="font-semibold">Certificate No : </strong>
                    {certificateNo}
                </p>

                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-12 sm:h-14 md:h-16 object-contain opacity-90"
                    />
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 text-center uppercase tracking-wide">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mt-3 tracking-wider">
                    {subtitle}
                </p>

                {/* Name */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 text-center mt-4 uppercase tracking-wider">
                    {name}
                </h2>

                {/* Decorative underline */}
                <div className="flex justify-center mt-3 mb-6">
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
                    {description}
                </p>

                {/* Badge */}
                <div className="flex justify-center mt-12 mb-6">
                    <img
                        src={badge}
                        alt="Badge"
                        className="h-20 sm:h-24 md:h-28 object-contain drop-shadow-md"
                    />
                </div>

                {/* Signatures */}
                <div className="flex justify-between items-center mt-10 px-8">
                    <div className="w-32 sm:w-40 border-t border-gray-500"></div>
                    <div className="w-32 sm:w-40 border-t border-gray-500"></div>
                </div>

                {/* Footer subtle line */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-600 rounded-b-3xl"></div>
            </div>
        </div>
    );
}
