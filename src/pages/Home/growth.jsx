import React from "react";

export default function GrowthSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

                {/* WHY: Left block introduces the theme and highlights IT industry opportunity */}
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold tracking-widest text-gray-500">
                        {/* WHY: Empty for now — reserved space for small label if needed later */}
                    </p>

                    <h2 className="text-4xl font-bold mt-3 leading-snug">
                        IT Sector Growth <span className="text-blue-600">A Future Full </span> of Opportunities
                    </h2>

                    {/* WHY: CTA encourages users to download more details → increases engagement */}
                    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                        Download Brochure
                    </button>
                </div>

                {/* WHY: Right block displays real trending IT news visuals → builds trust */}
                <div className="relative w-full flex flex-col gap-6">

                    {/* WHY: Top image conveys news-style authenticity and market relevance */}
                    <div className="relative w-full">
                        <img
                            src="/NEWS.png"
                            alt="Growth News Top"
                            className="rounded-xl shadow-lg object-cover"
                            style={{ width: "100%", height: "180px" }}
                        />

                        {/* WHY: Bottom blur effect gives depth & smooth visual separation */}
                        <div className="absolute bottom-0 left-0 w-full h-20 
                            bg-gradient-to-t from-white via-white/60 to-transparent 
                            rounded-b-xl"
                        />
                    </div>

                    {/* WHY: Second news block reinforces credibility with multiple sources */}
                    <div className="relative w-full">
                        <img
                            src="/NEWS2.png"
                            alt="Growth News Bottom"
                            className="w-full rounded-xl shadow-lg object-cover"
                            style={{ width: "100%", height: "180px" }}
                        />

                        {/* WHY: Additional blur maintains consistent design language */}
                        <div className="absolute bottom-0 left-0 w-full h-20 
                            bg-gradient-to-t from-white via-white/60 to-transparent 
                            rounded-b-xl"
                        />
                    </div>

                </div>
            </div>

            {/* WHY: Lower section showcases salary growth and job demand using real-like data visuals */}
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

                {/* WHY: Left card emphasizes salary hike trend → appeals to career seekers */}
                <div
                    className="rounded-2xl p-8 shadow-sm border bg-contain bg-bottom bg-no-repeat"
                    style={{ backgroundImage: "url('/graph.png')" }}
                >
                    <p className="text-sm font-semibold text-gray-500">STARTED AT</p>
                    <h3 className="text-xl font-bold text-blue-600">10 Lacs P.A.</h3>

                    <p className="text-sm font-semibold text-gray-500 mt-6">NOW AT</p>
                    <h3 className="text-xl font-bold text-green-600">24 Lacs P.A.</h3>

                    {/* WHY: Text explains market growth in simple terms → encourages beginners */}
                    <p className="mt-6 text-gray-600 leading-relaxed">
                        High Pay for Lifetime — Junior Data Science roles start at ₹10 LPA with 100% average hikes.
                    </p>
                </div>

                {/* WHY: Right block highlights job availability — critical for conversion */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border">
                    <h3 className="font-semibold text-gray-500">CURRENT OPEN ROLES</h3>
                    <h2 className="text-2xl font-bold text-blue-600">2,40,000</h2>

                    {/* WHY: Market insight text adds credibility and proven trend value */}
                    <p className="text-gray-600 mt-6 leading-relaxed">
                        From 2019 to 2023, Data Science industry saw 2.5x boom in Open Job Roles.
                    </p>

                    {/* WHY: Placeholder graph area gives visual balance and future scope for real data */}
                    <div className="mt-6">
                        <div className="h-40 bg-gradient-to-b from-blue-300/40 to-white rounded-xl"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
