// src/modules/fullstack/FullStackContent.js

const FullStackContent = {
    title: "Full Stack Web Development",
    tag: "#1 MERN Bootcamp",
    duration: "20 weeks",
    learners: "4.8K learners",
    rating: "4.9 rating",
    price: "₹34,999",
    emi: "₹3,499",
    heroImg: "/course/frontendev.png",

    highlights: [
        { title: "Frontend + Backend", desc: "HTML, CSS, JS, React, Node, MongoDB, Express" },
        { title: "Real Projects", desc: "Full-stack apps + APIs + admin dashboards" },
        { title: "Placement Support", desc: "Resume, mock interviews, portfolio review" },
        { title: "Lifetime Access", desc: "Resources + recordings forever" }
    ],

    learnPoints: [
        "Full Frontend Development",
        "Backend + API Building",
        "Database + Authentication",
        "Deployment + GitHub Portfolio"
    ],

    industry: {
        title: "Full Stack Developers Are in Massive Demand",
        subtitle:
            "Every company today needs developers who can build complete applications — from UI to backend APIs. MERN stack developers are among the highest-paid in the tech industry.",
        points: [
            {
                icon: "Sparkles",
                title: "Huge Hiring Demand",
                desc: "Startups, MNCs & software companies are urgently hiring MERN developers."
            },
            {
                icon: "Users",
                title: "High-Paying Career Growth",
                desc: "Full-stack developers earn 40–70% more than traditional frontend or backend roles."
            },
            {
                icon: "ArrowUpRight",
                title: "Future-Proof Skillset",
                desc: "Companies prefer developers who can build complete products end-to-end."
            }
        ]
    },

    /* ----------------------------------------------------
        NEW: BENEFITS SECTION (for CourseBenefitsSection)
    ---------------------------------------------------- */
    benefits: [
        {
            title: "Master Full MERN Stack",
            desc: "From frontend UI to backend APIs — learn complete full-stack development."
        },
        {
            title: "Build Real-World Projects",
            desc: "Create production-level apps like e-commerce, social apps & dashboards."
        },
        {
            title: "Job-Ready Skills",
            desc: "Master Git, REST APIs, database modeling, deployment, and authentication."
        },
        {
            title: "React + Node Expertise",
            desc: "Learn the most in-demand technologies used by top startups worldwide."
        },
        {
            title: "Career Support Included",
            desc: "Resume building, interview prep, GitHub portfolio optimization."
        },
        {
            title: "Hands-on Learning",
            desc: "Daily coding tasks, assignments, and real API integrations."
        }
    ],

    /* ----------------------------------------------------
        FRONTEND & BACKEND TAB SECTION (if you show tabs)
    ---------------------------------------------------- */
    tabs: {
        frontend: {
            title: "Frontend Development",
            modules: [
                "HTML5, CSS3, JavaScript",
                "Responsive Layouts (Flexbox, Grid)",
                "ES6+, Modern JavaScript",
                "React.js (Hooks, State, Routing)",
                "Reusable Components",
                "API Integration (Axios/Fetch)",
                "Tailwind CSS / Bootstrap",
                "Frontend Authentication",
                "Frontend Deployment (Netlify/Vercel)"
            ]
        },
        backend: {
            title: "Backend Development",
            modules: [
                "Node.js & Express.js",
                "MongoDB + Mongoose ORM",
                "Authentication (JWT, bcrypt)",
                "REST API Design",
                "File Uploads & Middleware",
                "Role-based Access Control",
                "Error Handling & Security",
                "Payment Gateway Integration",
                "Backend Deployment (Render, Railway)"
            ]
        }
    },

    /* ----------------------------------------------------
       MAIN CURRICULUM (Accordion Section)
    ---------------------------------------------------- */
    curriculum: [
        {
            title: "Module 1 — Web Basics",
            description: "Learn the fundamentals of how the internet works and build your first web pages.",
            learningOutcome: "You will understand client-server architecture and build static websites.",
            topics: [
                "Internet & Web Architecture",
                "HTML, CSS, JS Fundamentals",
                "Client vs Server",
                "Responsive Design",
                "Developer Tools"
            ],
            skills: ["HTML/CSS", "Responsive Pages", "Basic JavaScript"],
            projectList: ["Personal Portfolio Website"]
        },
        {
            title: "Module 2 — Advanced JavaScript",
            description: "Deep dive into modern JavaScript and problem-solving essentials.",
            learningOutcome: "You will be able to work with APIs, DOM, ES6+, and asynchronous JS.",
            topics: [
                "ES6+ Concepts",
                "Async/Await",
                "Callbacks & Promises",
                "DOM Manipulation",
                "Data Structures",
                "API Handling"
            ],
            skills: ["Advanced JS", "API Workflows", "Problem Solving"],
            projectList: ["Weather App (API Based)"]
        },
        {
            title: "Module 3 — React Development",
            description: "Learn React — the most in-demand frontend library.",
            learningOutcome: "You will build reusable components and dynamic applications.",
            topics: [
                "React Components",
                "Props & State",
                "React Router",
                "Custom Hooks",
                "Context API",
                "API Integration with Axios",
                "Tailwind + UI Libraries"
            ],
            skills: ["React.js", "State Management", "Reusable UI"],
            projectList: ["React Dashboard", "Movie App (API Based)"]
        },
        {
            title: "Module 4 — Backend Development with Node.js",
            description: "Learn server-side programming and build secure REST APIs.",
            learningOutcome: "You will be able to build complete backend systems using Node + Express.",
            topics: [
                "Node.js Basics",
                "Express.js Routing",
                "CRUD Operations",
                "JWT Authentication",
                "Middleware",
                "MongoDB + Mongoose",
                "Security Best Practices"
            ],
            skills: ["API Development", "DB Modeling", "Auth Systems"],
            projectList: ["Authentication System", "Blog REST API"]
        },
        {
            title: "Module 5 — Deployment & DevOps Basics",
            description: "Learn essential developer tools and deploy your apps.",
            learningOutcome: "You will deploy both frontend and backend servers live.",
            topics: [
                "Git & GitHub",
                "Frontend Deployment",
                "Backend Deployment",
                "Environment Variables",
                "CI/CD Basics",
                "Cloud Hosting (Vercel, Render)"
            ],
            skills: ["Git Workflow", "Cloud Deployment", "Version Control"],
            projectList: ["Full Stack Deployment (Frontend + Backend)"]
        }
    ],

    /* ----------------------------------------------------
       ⭐ PROJECTS
    ---------------------------------------------------- */
    projects: [
        {
            title: "Full Stack E-Commerce App",
            desc: "Products, cart, orders, admin panel, authentication"
        },
        {
            title: "Social Media App",
            desc: "Posts, likes, comments, follows, JWT auth"
        },
        {
            title: "Restaurant Ordering System",
            desc: "Menus, cart, order flow, payment gateway"
        }
    ],

    /* ----------------------------------------------------
        FAQ
    ---------------------------------------------------- */
    faqs: [
        {
            q: "Do I need coding experience?",
            a: "No. We start from complete basics and gradually move to advanced MERN stack."
        },
        {
            q: "How many real projects will I build?",
            a: "You will build 3 major full-stack projects + multiple small assignments."
        },
        {
            q: "Does this include placement support?",
            a: "Yes. Resume, GitHub portfolio, mock interviews and job referrals included."
        }
    ]
};

export default FullStackContent;
