const CloudContent = {
    title: "Cloud Computing Course",
    tag: "#1 Cloud Computing Course",
    duration: "12 weeks",
    learners: "1.8K learners",
    rating: "4.9 rating",
    price: "₹22,999",
    emi: "₹2,299",
    heroImg: "/cloud.jpg",

    highlights: [
        { title: "AWS + Azure", desc: "Learn top cloud platforms" },
        { title: "Hands-on Labs", desc: "Deploy apps on cloud" },
        { title: "Expert Mentors", desc: "Learn from cloud engineers" },
    ],

    learnPoints: [
        "Cloud fundamentals",
        "Virtual Machines",
        "Load Balancing",
        "Cloud Storage",
    ],

    // ⭐ MUST HAVE (CourseTemplate reads this)
    modules: [
        {
            title: "Module 1 — Cloud Basics",
            topics: [
                "Intro to Cloud",
                "Cloud Models (IaaS/PaaS/SaaS)",
                "Cloud Architecture"
            ]
        },
        {
            title: "Module 2 — AWS Services",
            topics: [
                "EC2",
                "S3",
                "IAM",
                "RDS",
            ]
        }
    ],

    projects: [
        { title: "Deploy App on AWS", desc: "Hands-on EC2 deployment" },
    ],

    faqs: [
        { q: "Do I need coding?", a: "No, this course starts from basics." }
    ]
};

export default CloudContent;
