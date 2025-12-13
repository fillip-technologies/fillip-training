// ------------------------------------------------------
// CYBER SECURITY — COURSE CONTENT FILE
// PLACE IN: /src/modules/cyber/CyberSecurityContent.js
// ------------------------------------------------------

const CyberSecurityContent = {
    title: "Cyber Security & Ethical Hacking",
    tag: "#1 Cyber Security Training Program",
    duration: "16 weeks",
    learners: "3.9K learners",
    rating: "4.9 rating",
    price: "₹29,999",
    emi: "₹2,999",
    heroImg: "/cyber.jpg",

    description:
        "Learn Ethical Hacking, Network Security, Kali Linux, Web App Pentesting, and real-world cyber attack simulations. Become job-ready for cyber security and penetration testing roles.",

    /* ------------------------------------------------------
        INDUSTRY SECTION
    ------------------------------------------------------ */
    industry: {
        title: "Cyber Security Jobs Are Growing Faster Than Any IT Career",
        subtitle:
            "With rising cyber attacks, companies urgently need skilled cyber security analysts, ethical hackers, penetration testers, and SOC experts.",
        points: [
            {
                icon: "Sparkles",
                title: "3.5 Million Open Cyber Jobs",
                desc: "Global shortage of cyber security professionals — huge opportunity for freshers."
            },
            {
                icon: "Users",
                title: "High Salary & Job Stability",
                desc: "Cyber Security roles offer high pay, job security, and continuous career growth."
            },
            {
                icon: "ArrowUpRight",
                title: "Work With Global Companies",
                desc: "Cyber experts are hired by MNCs, government agencies, banks & startups."
            }
        ]
    },

    /* ------------------------------------------------------
        HIGHLIGHTS
    ------------------------------------------------------ */
    highlights: [
        { title: "Hands-on Hacking Labs", desc: "Live simulations with real vulnerable systems" },
        { title: "Kali Linux Training", desc: "Master professional hacking tools" },
        { title: "Network & Web Security", desc: "Protect systems, servers & web apps" },
        { title: "Career Support", desc: "Resume, interview prep & guidance" }
    ],

    /* ------------------------------------------------------
        WHAT YOU WILL LEARN
    ------------------------------------------------------ */
    learnPoints: [
        "Ethical hacking fundamentals",
        "Kali Linux & Cyber Tools",
        "Network Security & Firewalls",
        "Web App Pentesting (OWASP Top 10)",
        "Bug Bounty Basics",
        "Footprinting & Reconnaissance",
        "Cryptography Essentials",
        "Incident Response & SOC Operations"
    ],

    /* ------------------------------------------------------
        BENEFITS SECTION (For Benefits Component)
    ------------------------------------------------------ */
    benefits: [
        {
            title: "Learn from Ethical Hackers",
            desc: "Training from real-world cyber security experts working in penetration testing roles."
        },
        {
            title: "Live Practical Labs",
            desc: "Perform attacks, find vulnerabilities and secure systems in real lab machines."
        },
        {
            title: "Become Job & Internship Ready",
            desc: "Build skills needed for cyber analyst, SOC analyst & ethical hacker roles."
        },
        {
            title: "Master Top Hacking Tools",
            desc: "Nmap, Metasploit, Burp Suite, Wireshark, Hydra, Nikto & more."
        },
        {
            title: "Participate in CTF Challenges",
            desc: "Hands-on offensive security exercises like a real hacker."
        },
        {
            title: "Certificate + Portfolio",
            desc: "Get certified + build real cyber security project reports."
        }
    ],

    /* ------------------------------------------------------
        CURRICULUM (Accordion)
    ------------------------------------------------------ */
    curriculum: [
        {
            title: "Module 1 — Cyber Security & Ethical Hacking Fundamentals",
            description: "Start your journey by understanding how hackers think and how systems get hacked.",
            learningOutcome: "You will understand attack lifecycle, cyber laws, fundamentals of hacking & security principles.",
            topics: [
                "Introduction to Cyber Security",
                "Types of Hackers",
                "Cyber Laws in India",
                "Footprinting & Reconnaissance",
                "Scanning Targets"
            ],
            skills: ["Recon", "Scanning", "Threat Understanding"],
            projectList: ["Reconnaissance Report"]
        },
        {
            title: "Module 2 — Network Security & Defense",
            description: "Learn how networks operate, how they get hacked, and how to defend them.",
            learningOutcome: "You will gain strong fundamentals in networking and secure architecture.",
            topics: [
                "TCP/IP Model",
                "Firewalls, IDS & IPS",
                "Proxy Servers",
                "Packet Analysis with Wireshark",
                "VPN & Secure Communications"
            ],
            skills: ["Network Monitoring", "Packet Analysis"],
            projectList: ["Network Vulnerability Assessment"]
        },
        {
            title: "Module 3 — Kali Linux & Ethical Hacking Tools",
            description: "Master the most popular tools used by professional ethical hackers.",
            learningOutcome: "You will perform attacks using Kali Linux and automate tasks.",
            topics: [
                "Kali Linux Overview",
                "Nmap Scanning",
                "Hydra Brute Force",
                "Metasploit Framework",
                "Password Attacks"
            ],
            skills: ["Kali Linux", "Metasploit", "Brute Force Attacks"],
            projectList: ["Exploiting Vulnerable Machine"]
        },
        {
            title: "Module 4 — Web Application Penetration Testing",
            description: "Learn how to hack websites and web apps ethically using OWASP standards.",
            learningOutcome: "You will find vulnerabilities like SQLi, XSS, CSRF and exploit them in labs.",
            topics: [
                "OWASP Top 10",
                "SQL Injection",
                "Cross-Site Scripting",
                "Broken Authentication",
                "Burp Suite Mastery"
            ],
            skills: ["Web Pentesting", "Reporting"],
            projectList: ["Web App Pentesting Report"]
        },
        {
            title: "Module 5 — Incident Response, SOC & Bug Bounty",
            description: "Learn how companies detect, analyse and respond to cyber attacks.",
            learningOutcome: "You will be ready for SOC analyst & bug bounty roles.",
            topics: [
                "SOC Operations",
                "Incident Response Process",
                "Log Analysis",
                "SIEM Tools Overview",
                "Bug Bounty Platforms"
            ],
            skills: ["Incident Response", "Log Analysis"],
            projectList: ["Incident Response Case Study"]
        }
    ],

    /* ------------------------------------------------------
        PROJECTS
    ------------------------------------------------------ */
    projects: [
        { title: "Vulnerability Lab", desc: "Find and exploit vulnerabilities in a test machine" },
        { title: "Web Pentesting Report", desc: "Professional OWASP-style security report" },
        { title: "Network Security Audit", desc: "Analyze and secure a simulated network" }
    ],

    /* ------------------------------------------------------
        FAQ
    ------------------------------------------------------ */
    faqs: [
        { q: "Do I need coding?", a: "No. Basic computer knowledge is enough to begin." },
        { q: "Will we do real hacking?", a: "Yes — in safe, legal lab environments designed for training." },
        { q: "Is this course job-ready?", a: "Absolutely. You gain skills for Cyber Analyst & Ethical Hacker roles." },
        { q: "Do you provide certificate?", a: "Yes, with project reports for portfolio." }
    ]
};

export default CyberSecurityContent;
