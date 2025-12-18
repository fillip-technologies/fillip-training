// ----------------------------------------------
// MOBILE APP DEVELOPMENT — COURSE CONTENT FILE
// PLACE FILE IN: /src/modules/mobile/MobileAppContent.js
// ----------------------------------------------

const MobileAppContent = {
    title: "Mobile App Development",
    tag: "#1 Android & iOS App Development Course",
    duration: "18 weeks",
    learners: "3.7K learners",
    rating: "4.9 rating",
    price: "₹32,999",
    emi: "₹3,299",
    heroImg: "/course/frontendev.png",

    description:
        "Become a professional mobile app developer. Learn Flutter + Dart to build beautiful Android & iOS apps with real projects, APIs, authentication, and deployment.",

    /* ----------------------------------------------
         INDUSTRY SECTION
    ---------------------------------------------- */
    industry: {
        title: "Mobile App Developers Are in Huge Demand",
        subtitle:
            "Every brand wants mobile apps. Companies are hiring Flutter and Android developers at scale — from startups to global tech giants.",
        points: [
            {
                icon: "Sparkles",
                title: "Explosive Growth in App Economy",
                desc: "India becomes the world's fastest-growing market for mobile apps."
            },
            {
                icon: "Users",
                title: "High-Paying Developer Jobs",
                desc: "Flutter developers earn more due to cross-platform expertise."
            },
            {
                icon: "ArrowUpRight",
                title: "Freelance & International Projects",
                desc: "Build apps for clients globally — even as a beginner."
            }
        ]
    },

    /* ----------------------------------------------
         HIGHLIGHTS
    ---------------------------------------------- */
    highlights: [
        { title: "Flutter + Dart", desc: "Build Android & iOS apps from a single codebase." },
        { title: "Real API Projects", desc: "Integrate live APIs, Firebase, authentication, etc." },
        { title: "App Store Deployment", desc: "Publish apps on Google Play Store." },
        { title: "Career Support", desc: "Resume, portfolio & interview preparation." }
    ],

    /* ----------------------------------------------
         WHAT YOU WILL LEARN
    ---------------------------------------------- */
    learnPoints: [
        "Dart programming language",
        "Flutter widgets & UI development",
        "State management (Provider / Riverpod)",
        "API integration (HTTP, JSON)",
        "Firebase authentication & database",
        "Navigation, routing & animations",
        "Publishing apps to Play Store"
    ],

    /* ----------------------------------------------
       BENEFITS (for CourseBenefitsSection)
    ---------------------------------------------- */
    benefits: [
        {
            title: "Most In-Demand Skill",
            desc: "Flutter developers are hired by startups, agencies, and global companies."
        },
        {
            title: "Build Android + iOS Apps",
            desc: "One codebase = double opportunities. Faster learning and faster jobs!"
        },
        {
            title: "Real Project Training",
            desc: "You will build 3–4 full apps with modern UI, APIs & Firebase."
        },
        {
            title: "Freelance Ready",
            desc: "Learn how to build apps for clients and start earning immediately."
        },
        {
            title: "Portfolio + GitHub Projects",
            desc: "Create a developer portfolio that impresses recruiters."
        },
        {
            title: "Lifetime Access + Certificate",
            desc: "Watch recordings anytime and receive an industry-recognized certificate."
        }
    ],

    /* ----------------------------------------------
       CURRICULUM (Accordion)
    ---------------------------------------------- */
    curriculum: [
        {
            title: "Module 1 — Dart Programming Fundamentals",
            description: "Start your journey by mastering Dart — the core language behind Flutter.",
            learningOutcome: "You will understand variables, functions, classes, OOP, and async programming.",
            topics: [
                "Dart Syntax & Variables",
                "Functions & Classes",
                "OOP Concepts",
                "Async/Await & Futures",
                "Collections, Maps & Lists"
            ],
            skills: ["Dart Programming", "OOP"],
            projectList: ["Mini Quiz App (Console-Based)"]
        },
        {
            title: "Module 2 — Flutter Basics & UI Development",
            description: "Learn how to create beautiful, responsive mobile interfaces.",
            learningOutcome: "You will build complete UI screens using Flutter widgets.",
            topics: [
                "Flutter Setup",
                "Stateless & Stateful Widgets",
                "Layouts (Row, Column, Stack)",
                "Material UI Components",
                "Navigation & Routing"
            ],
            skills: ["UI Design", "Widget Mastery"],
            projectList: ["Onboarding Screens", "Login UI"]
        },
        {
            title: "Module 3 — State Management",
            description: "Professional apps need robust state management.",
            learningOutcome: "You will manage app data using Provider / Riverpod.",
            topics: [
                "Provider State Management",
                "App-Level State",
                "Theme & Dark Mode",
                "Local Storage (SharedPrefs)"
            ],
            skills: ["State Management"],
            projectList: ["Todo App with Provider"]
        },
        {
            title: "Module 4 — API Integration + Firebase",
            description: "Learn how real apps fetch & store data.",
            learningOutcome: "You will integrate live APIs and use Firebase authentication.",
            topics: [
                "REST API Calls (GET/POST)",
                "JSON Parsing",
                "Firebase Authentication",
                "Firestore Database",
                "Real-Time Updates"
            ],
            skills: ["API Integration", "Firebase"],
            projectList: ["News App (API Based)", "Chat App (Firebase)"]
        },
        {
            title: "Module 5 — Deployment & Publishing",
            description: "Publish your app and make it public.",
            learningOutcome: "You will deploy apps to Play Store with proper signing.",
            topics: [
                "App Icons & Splash Screen",
                "App Bundles (AAB)",
                "Play Store Console Setup",
                "Versioning & Release"
            ],
            skills: ["Deployment"],
            projectList: ["App Store Ready Build"]
        }
    ],

    /* ----------------------------------------------
         PROJECTS
    ---------------------------------------------- */
    projects: [
        {
            title: "News App",
            desc: "Live API integration with category filters, search & infinite scroll."
        },
        {
            title: "Chat App",
            desc: "Real-time messaging using Firebase authentication."
        },
        {
            title: "E-commerce App UI",
            desc: "Product screens, cart, wishlist, modern UI interactions."
        }
    ],

    /* ----------------------------------------------
         FAQ
    ---------------------------------------------- */
    faqs: [
        { q: "Do I need coding experience?", a: "No. We start from the basics of Dart programming." },
        { q: "Will I build real apps?", a: "Yes! You will build at least 3 full working apps." },
        { q: "Can I get a job after this?", a: "Absolutely — Flutter dev roles are in huge demand." },
        { q: "Does this include certification?", a: "Yes, you receive a recognized course certificate." }
    ]
};

export default MobileAppContent;
