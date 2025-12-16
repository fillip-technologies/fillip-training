import React from 'react';

import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowRight, Shield, Cloud, Code, Database, Cpu, Download, Globe } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";


const Courses = () => {

  const location = useLocation();
  const isInternship = location.pathname.toLowerCase().includes("internship");



  // WHY: Static course list helps easily maintain / update offerings,
  //      and supports mapping to render dynamic course cards.
  const courses = [
    {
      id: 1,
      title: 'UI/UX Designing',
      description: 'Join our UI UX Designing Training to craft user-friendly interfaces and engaging experiences through hands-on projects and expert mentorship.',
      icon: Cloud,
      duration: '12 weeks',
      students: '2.5K',
      rating: 4.9,
      level: 'Intermediate',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      path: "/course/uiux"
    },
    {
      id: 2,
      title: 'Graphics Designing',
      description: 'Learn creative design, visual storytelling, and industry-standard tools in our Graphic Designing Training Program with real-time project exposure.',
      icon: Shield,
      duration: '10 weeks',
      students: '1.8K',
      rating: 4.8,
      level: 'Beginner',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      path: "/course/graphics"
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      description: 'Learn to build dynamic websites and applications with our Full Stack Development Training, covering front-end, back-end, and database integration techniques.',
      icon: Code,
      duration: '16 weeks',
      students: '3.2K',
      rating: 4.9,
      level: 'Intermediate',
      color: 'from-green-500 to-emerald-500',
      path: "/course/fullstack"
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Learn in-demand skills in SEO, SMM, PPC, and content strategies through our Digital Marketing Training, guided by industry experts and live campaigns.',
      icon: Database,
      duration: '8 weeks',
      students: '1.2K',
      rating: 4.7,
      level: 'Advanced',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      path: "/course/digital-marketing"
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      description: 'Explore AI concepts, build predictive models, and solve real-world problems with our AI & Machine Learning Training program.',
      icon: Cpu,
      duration: '14 weeks',
      students: '2.1K',
      rating: 4.8,
      level: 'Advanced',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
    },
    {
      id: 6,
      title: 'Business Development',
      description: 'Enhance growth strategies, lead generation, and client relationship management with our practical Business Development Training.',
      icon: Globe,
      duration: '10 weeks',
      students: '1.5K',
      rating: 4.6,
      level: 'Intermediate',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      path: "/course/business-analytics "
    },
  ];


  // WHY: Dynamically sets difficulty badge styling → visually communicates level quickly.
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* WHY: Section header sets user expectation and communicates course value */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {isInternship ? (
              <>
                Turn Learning into Earning:

                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {" "}Industry-Focused Internships
                </span>
              </>
            ) : (
              <>
                Master Job-Ready IT Skills with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Learn Job-Ready IT Skills Today
                </span>
              </>
            )}
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {isInternship
              ? "Join Fillip Internship Programs to gain real-world experience, work on live projects, and become job-ready with expert mentorship."
              : "Develop real job-ready IT skills through our internship program, offered by the best internship company in Patna. Learn from expert mentors and work on hands-on projects designed to prepare you for real workplace challenges"}
          </p>

        </div>

        {/* WHY: Cards grid makes it easy to browse many courses at a glance */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200"
            >

              {/* WHY: Header area highlights branding and key details instantly */}
              <div className={`${course.bgColor} p-6 relative`}>

                {/* WHY: Icon + Download placement creates a visually balanced layout */}
                <div className="flex items-start justify-between">

                  {/* WHY: Icon visually represents the category → improves identification */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* WHY: Brochure download supports informed decision-making */}
                  {/* <a
                    href="/brochures/sample.pdf" // placeholder
                    download
                    className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
                  >
                    <Download className="w-5 h-5 text-green-600" />
                  </a> */}

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">{course.title}</h3>
                <p className="text-slate-600 text-sm">{course.description}</p>

                {/* WHY: Level badge helps user quickly assess course difficulty */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>

              </div>

              {/* WHY: Lower section presents key decision metrics (rating, duration, students) */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-slate-600">

                    {/* WHY: Duration helps users estimate commitment before enrolling */}
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>

                    {/* WHY: Student count acts as social proof */}
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>

                  {/* WHY: Rating gives trust & improves conversion */}
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium text-slate-700">{course.rating}</span>
                  </div>
                </div>

                {/* WHY: CTA directs user to the course detail page for more info */}
                <Link to={course.path}>
                  <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black group">
                    {isInternship ? "Apply for Internship" : "Enroll Now"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* WHY: Secondary CTA allows users to explore entire catalog → boosts engagement */}
        <div className="text-center">
          <Link to="/certifications">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4"
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
