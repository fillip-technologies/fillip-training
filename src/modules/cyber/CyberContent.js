const CyberContent = {
    title: "Cyber Security Course",
    tag: "#1 Cyber Security Training",
    duration: "16 weeks",
    learners: "3.2K learners",
    rating: "4.8 rating",
    price: "₹29,999",
    emi: "₹2,999",
    heroImg: "/course/cyber.png",

    highlights: [
        { title: "Hands-on Labs", desc: "Live practical hacking sessions" },
        { title: "Network Security", desc: "Secure systems & networks" },
        { title: "Ethical Hacking", desc: "Learn Kali Linux & tools" }
    ],

    learnPoints: [
        "Ethical hacking fundamentals",
        "Network Security",
        "Linux Essentials",
        "Bug bounty basics"
    ],

    // ⭐ NEW: BENEFITS (used by CourseBenefitsSection)
    benefits: [
        {
            title: "Learn from Ethical Hackers",
            desc: "Direct training from cyber security professionals working in real-world penetration testing roles."
        },
        {
            title: "Live Hacking Labs",
            desc: "Hands-on practice in real vulnerable systems, Kali Linux labs, and web-security labs."
        },
        {
            title: "Become Job Ready",
            desc: "Master tools like Nmap, Metasploit, Burp Suite and build a strong professional penetration testing portfolio."
        },
        {
            title: "Master Network & Web Attacks",
            desc: "Learn how hackers exploit real systems and how organizations defend them."
        },
        {
            title: "Participate in Cyber Drills",
            desc: "Join Capture-the-Flag events, red team exercises, and cyber defense activities."
        },
        {
            title: "Certificate + Projects",
            desc: "Receive a recognized certificate plus multiple cyber security projects."
        }
    ],

    // ⭐ CURRICULUM (FULL PROFESSIONAL VERSION)
    curriculum: [
        {
            title: "Module 1 — Introduction to Cyber Security & Ethical Hacking",
            description: "Start your journey by understanding the foundations of hacking, cyber laws, attack methods, and reconnaissance.",
            learningOutcome: "You will understand how cyber attacks work, what hackers target, and how to perform ethical hacking legally.",
            topics: [
                "What is Cyber Security?",
                "Cyber Laws & Compliance",
                "Types of Hackers (White/Black/Grey Hat)",
                "Footprinting & Reconnaissance",
                "Cyber Kill Chain Model",
                "Common Attack Vectors"
            ],
            skills: [
                "Reconnaissance",
                "Security Analysis",
                "Threat Modeling",
                "Risk Identification"
            ],
            projectList: [
                "Recon Report on a Live Website",
                "Vulnerability Identification Exercise"
            ]
        },

        {
            title: "Module 2 — Networking & Network Security",
            description: "Master networking concepts, network attacks, scanning, firewalls, and intrusion detection systems.",
            learningOutcome: "Gain the ability to analyze networks, protect them, and perform real-world network assessments.",
            topics: [
                "Basics of Networking",
                "OSI & TCP/IP Model",
                "Firewalls & VPN",
                "Proxy Servers",
                "IDS & IPS",
                "Network Scanning (Nmap)"
            ],
            skills: [
                "Network Scanning",
                "Firewall Configuration",
                "VPN Security",
                "Traffic Analysis"
            ],
            projectList: [
                "Nmap Scan & Analysis Report",
                "Firewall & VPN Simulation Lab"
            ]
        },

        {
            title: "Module 3 — Linux for Hackers (Kali Linux)",
            description: "Learn Linux fundamentals and explore hacking tools used in penetration testing.",
            learningOutcome: "You will become comfortable with Linux, shell scripting, and security tools used in Kali Linux.",
            topics: [
                "Linux Basics & Commands",
                "File System Navigation",
                "User & Permission Management",
                "Bash Scripting",
                "Kali Linux Tools Overview",
                "Service & Process Management"
            ],
            skills: [
                "Linux Command Line",
                "Scripting",
                "Kali Tools",
                "System Administration"
            ],
            projectList: [
                "Automated Bash Script for Recon",
                "Kali Linux Attack Simulation"
            ]
        },

        {
            title: "Module 4 — Web Application Security (OWASP Top 10)",
            description: "Understand how web applications work and how attackers exploit them.",
            learningOutcome: "You will perform web attacks like SQLi, XSS and secure applications using OWASP best practices.",
            topics: [
                "Introduction to OWASP",
                "SQL Injection",
                "Cross-Site Scripting (XSS)",
                "Broken Authentication",
                "Security Misconfiguration",
                "Insecure Direct Object Reference"
            ],
            skills: [
                "Web Penetration Testing",
                "SQLi & XSS Testing",
                "OWASP Analysis",
                "Bug Hunting"
            ],
            projectList: [
                "SQL Injection Attack Lab",
                "XSS Exploitation Demonstration"
            ]
        },

        {
            title: "Module 5 — System Hacking & Vulnerability Analysis",
            description: "Explore system-based attacks, privilege escalation, and exploit development basics.",
            learningOutcome: "You will perform system hacking techniques and learn to secure operating systems.",
            topics: [
                "Password Cracking (Hydra, John)",
                "Privilege Escalation",
                "Backdoors & Rootkits",
                "Buffer Overflow Basics",
                "System Hardening",
                "Patch Management"
            ],
            skills: [
                "System Penetration",
                "Privilege Escalation",
                "Attack Analysis",
                "Hardening Techniques"
            ],
            projectList: [
                "Privilege Escalation Lab",
                "Password Attack Simulation"
            ]
        },

        {
            title: "Module 6 — Penetration Testing & Cyber Tools",
            description: "Learn complete penetration testing workflow, reporting, and real professional tools.",
            learningOutcome: "You will complete a full penetration test cycle and create a professional report.",
            topics: [
                "Penetration Testing Process",
                "Metasploit Framework",
                "Burp Suite Testing",
                "Wireless Attacks",
                "Sniffing & MITM Attacks",
                "Pen-test Reporting"
            ],
            skills: [
                "Metasploit",
                "Burp Suite",
                "Wireless Security",
                "Documentation & Reporting"
            ],
            projectList: [
                "Full Penetration Test Simulation",
                "Professional Pen-test Report"
            ]
        }
    ],

    projects: [
        { title: "Vulnerability Lab", desc: "Find and fix vulnerabilities in intentionally weak apps" },
        { title: "Pen Testing Report", desc: "Create industry-standard cyber security documentation" }
    ],

    faqs: [
        { q: "Is coding required?", a: "No, basic computer knowledge is enough to start cyber security." },
        { q: "Do you provide practical labs?", a: "Yes — Linux labs, Nmap labs, OWASP labs and more." },
        { q: "Is this job-oriented?", a: "Yes — you will learn real-world skills and tools used by cyber professionals." }
    ]
};

export default CyberContent;
