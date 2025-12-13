import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { X } from "lucide-react";

const CookieConsent = () => {

    // WHY: Local state to control whether the popup should be visible
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        // WHY: If user already made a choice earlier, do not show popup again
        const consent = Cookies.get("cookie-consent");
        if (consent) return;

        // WHY: Show cookie popup after 30 seconds to avoid interrupting user immediately
        const timer = setTimeout(() => setVisible(true), 30000);

        // WHY: Cleanup timeout to avoid memory leaks if component unmounts early
        return () => clearTimeout(timer);

    }, []);

    // WHY: Accept action stores consent so popup won't appear again for 1 year
    const acceptAll = () => {
        Cookies.set("cookie-consent", "accepted", { expires: 365 });
        setVisible(false);
    };

    // WHY: Reject action also stores choice to respect user's privacy preference
    const rejectAll = () => {
        Cookies.set("cookie-consent", "rejected", { expires: 365 });
        setVisible(false);
    };

    // WHY: Component returns nothing when popup should not be shown
    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-6 z-[9999] animate-fadeIn">

            {/* WHY: Main popup container positioned bottom-left for minimal intrusion */}
            <div className="relative w-80 p-5 rounded-2xl shadow-xl bg-blue-600 text-white">

                {/* WHY: Close button allows user to temporarily dismiss popup */}
                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-3 right-3 text-white/80 hover:text-white"
                >
                    <X size={20} />
                </button>

                <h3 className="text-lg font-semibold mb-2">Cookie Notice</h3>

                {/* WHY: Inform users about purpose of cookies for legal transparency (GDPR compliance) */}
                <p className="text-white/90 text-sm mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and improve our services. You can accept or reject cookies at any time.
                </p>

                {/* WHY: Buttons give user full control over privacy settings */}
                <div className="flex justify-between gap-2">

                    <button
                        onClick={rejectAll}
                        className="px-3 py-2 w-1/2 rounded-lg bg-blue-800 text-white text-sm hover:bg-blue-900 transition"
                    >
                        Reject
                    </button>

                    <button
                        onClick={acceptAll}
                        className="px-3 py-2 w-1/2 rounded-lg bg-white text-blue-700 font-semibold text-sm hover:bg-gray-200 transition"
                    >
                        Accept
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
