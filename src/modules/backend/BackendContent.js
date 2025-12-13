// ---------------------------------------------------
// BACKEND DEVELOPMENT — COURSE CONTENT FILE
// PLACE FILE IN: /src/modules/backend/BackendContent.js
// ---------------------------------------------------

const BackendContent = {
    title: "Backend Developme",
    tag: "#1 Backend Development Bootcamp",
    duration: "16 weeks",
    learners: "3.4K learners",
    rating: "4.9 rating",
    price: "₹27,999",
    emi: "₹2,799",
    heroImg: "/course/backend.png",

    description:
        "Become a high-paid Backend Developer by mastering Node.js, Express, MongoDB, Laravel (PHP), Authentication, System Security, and API Development. Perfect for students who want to build strong technical careers.",

    /* ----------------------------------------------------
       INDUSTRY SECTION — Motivational + High Impact
    ---------------------------------------------------- */
    industry: {
        title: "Backend Developers Are the Backbone of Every Tech Company",
        subtitle:
            "Without backend engineers, apps cannot store data, authenticate users, or run business logic. This is why companies pay backend developers premium salaries.",

        points: [
            {
                icon: "salary",
                title: "High Salaries & Strong Job Security",
                desc: "Backend developers are among the top paid tech professionals due to their critical role in product architecture."
            },
            {
                icon: "demand",
                title: "Massive Hiring Demand",
                desc: "Startups, IT companies, fintech platforms, and SaaS products need backend developers every single day."
            },
            {
                icon: "growth",
                title: "Career Growth Into Architecture Roles",
                desc: "Backend leads directly into DevOps, Cloud, Microservices, and System Design — roles with 20–40 LPA salary range."
            }
        ]
    },

    /* ----------------------------------------------------
         HIGHLIGHTS
    ---------------------------------------------------- */
    highlights: [
        { title: "API Development", desc: "Build modern REST APIs like professional backend engineers." },
        { title: "Authentication Systems", desc: "JWT, hashing, sessions, guards, middleware — complete security." },
        { title: "Database Mastery", desc: "MongoDB + MySQL + Mongoose + Eloquent ORM." },
        { title: "Node.js + Laravel Frameworks", desc: "Master both JavaScript and PHP backend ecosystems." },

    ],

    /* ----------------------------------------------------
         WHAT YOU WILL LEARN (Motivational)
    ---------------------------------------------------- */
    learnPoints: [
        "Node.js + Express.js complete backend development",
        "Laravel (PHP) framework for enterprise-grade backend apps",
        "MongoDB + MySQL database design",
        "Authentication: JWT, bcrypt hashing, access control",
        "API development with Postman testing",
        "Cloud deployment & server management"
    ],

    /* ----------------------------------------------------
        BENEFITS (for CourseBenefitsSection)
    ---------------------------------------------------- */
    benefits: [
        {
            title: "Master Real Backend Engineering",
            desc: "You learn how real-world apps work — APIs, servers, security, middleware, routing & more."
        },
        {
            title: "Learn Node.js + Laravel Together",
            desc: "Two backend ecosystems — double the job opportunities & higher freelance earning potential."
        },
        {
            title: "Work With Real Tools",
            desc: "Postman, MongoDB Compass, MySQL Workbench, JWT, bcrypt, Express, Artisan CLI, Eloquent ORM."
        },
        {
            title: "Become Job & Freelance Ready",
            desc: "Backend developers earn more because they manage mission-critical systems."
        },
        {
            title: "Production Deployment",
            desc: "Deploy full backend applications to cloud servers + learn environment secrets."
        },
        {
            title: "Certificate + Lifetime Access",
            desc: "Get certified & access all recordings forever to revisit concepts anytime."
        }
    ],

    /* ----------------------------------------------------
         MAIN CURRICULUM (Accordion)
    ---------------------------------------------------- */
    curriculum: [
        {
            title: "Module 1 — Backend Fundamentals",
            description: "Understand the architecture behind every web or mobile application.",
            learningOutcome: "You will learn servers, APIs, routing, and how requests flow inside backend apps.",
            topics: [
                "How the Internet Works",
                "HTTP, HTTPS, REST APIs",
                "Client–Server Architecture",
                "Node.js & JavaScript Runtime"
            ],
            skills: ["Servers", "HTTP", "API Basics"],
            projectList: ["Build a Simple HTTP Server"]
        },
        {
            title: "Module 2 — Node.js + Express.js",
            description: "Build backend applications with modern JavaScript tools.",
            learningOutcome: "You will build real APIs, implement routing, controllers, and middleware.",
            topics: [
                "Express Routing & Controllers",
                "Middleware & Error Handling",
                "Environment Variables",
                "MVC Architecture"
            ],
            skills: ["Express.js", "API Routing", "Error Handling"],
            projectList: ["Blog API Backend"]
        },
        {
            title: "Module 3 — MongoDB + MySQL Databases",
            description: "Master both NoSQL & SQL database systems to become versatile.",
            learningOutcome: "You will store, fetch and update data in real databases.",
            topics: [
                "CRUD Operations",
                "Schema Design",
                "Query Operators",
                "Indexes & Aggregation",
                "MySQL Tables, Joins, Keys"
            ],
            skills: ["Database Design", "Data Modeling", "SQL + NoSQL Queries"],
            projectList: ["User Management System"]
        },
        {
            title: "Module 4 — Authentication & Security",
            description: "Build secure, professional-grade backend applications.",
            learningOutcome: "You will implement authentication, hashing, and role-based access.",
            topics: [
                "JWT Authentication",
                "bcrypt Password Hashing",
                "Sessions vs Tokens",
                "Authorization & RBAC"
            ],
            skills: ["Auth Systems", "Security", "Token Handling"],
            projectList: ["Secure Login System"]
        },
        {
            title: "Module 5 — Laravel Backend Framework",
            description: "Learn Laravel, the most powerful PHP framework used in enterprises.",
            learningOutcome: "You will build APIs and dashboards using Laravel’s MVC architecture.",
            topics: [
                "Laravel Installation & Setup",
                "Routing & Controllers",
                "Blade Templates",
                "Eloquent ORM",
                "Laravel API Resources",
                "Authentication with Laravel Breeze"
            ],
            skills: ["Laravel", "Eloquent ORM", "PHP Backend"],
            projectList: ["Laravel API Project"]
        },
        {
            title: "Module 6 — Deployment & Optimization",
            description: "Deploy backend apps to cloud platforms like a real developer.",
            learningOutcome: "You will deploy Node.js and Laravel apps to production servers.",
            topics: [
                "Git & GitHub Workflow",
                "Node Deployment (Render / Railway)",
                "Laravel Deployment (cPanel / VPS)",
                "Environment Secrets",
                "Postman API Testing"
            ],
            skills: ["DevOps Basics", "API Testing", "Cloud Deployment"],
            projectList: ["Full Backend Deployment"]
        }
    ],

    /* ----------------------------------------------------
      PROJECTS
    ---------------------------------------------------- */
    projects: [
        { title: "Blog API", desc: "Create CRUD blog API with authentication." },
        { title: "E-commerce Backend", desc: "Products, orders, users, cart & checkout API." },
        { title: "Laravel Admin Panel", desc: "Build a Laravel dashboard with CRUD operations." },
        { title: "Authentication Service", desc: "JWT-based login/registration system." }
    ],

    /* ----------------------------------------------------
        FAQ
    ---------------------------------------------------- */
    faqs: [
        { q: "Do I need coding experience?", a: "Basic JavaScript helps, but we teach everything from scratch." },
        { q: "Do we build real backend projects?", a: "Yes! You build large-scale backend applications used in real companies." },
        { q: "Is this course job-ready?", a: "Absolutely. Students get placed as Backend Developers, API Developers & Node.js Engineers." }
    ]
};

export default BackendContent;
