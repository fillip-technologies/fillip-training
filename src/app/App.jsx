import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import { Helmet } from "react-helmet-async";

// Layout components used across all pages
import Header from "../components/Layout/header/Header";
import Footer from "../components/Layout/Footer";

import AuthPage from "@/components/auth/AuthPage";

// Home page sections
import Hero from '../pages/Home/Hero';
import StatisticsSection from '../pages/Home/Stat';
import Courses from '../pages/Home/Courses';
import TrustedBy from "../pages/Home/Testimonials";
import HeroResumeReview from "../pages/Home/ResumeReview";
import Colleges from '../pages/Home/Colleges';
import GrowthSection from '../pages/Home/growth';
import Scene3D from '../components/Scene3D';
import Coursecertificate from '../pages/Home/Coursecertificate';
import FaqSection from '../pages/Home/Faq';
import HomeBlogSection from '../pages/Home/HomeBlogSection';

// Additional pages
import AboutUs from '../pages/About/AboutUs';
import CoursePage from '../pages/Courses/CoursePage';
import Certifications from '../pages/Certfication/Certifications';
import ContactUs from '../pages/Contact/Contact';
// import AuthPage from '../components/AuthPage';


import Dashboard from '../components/Dashobard/Dashboard';

// Cookie consent banner for legal compliance
import CookieConsent from "../components/CookiesConsent";

// Cart
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";

// admin
import AdminApp from "../admin/AdminApp";

// css
import './App.css';

import { Target, Brain, Award, UserCheck } from "lucide-react";

import SocialRadialMenu from "@/components/SocialRadialMenu";

import FillipTrainingPage from "../pages/FillipTraining/FillipTrainingPage";
import FillipInternshipPage from "../pages/FillipInternship/FillipInternshipPage";





// -------------------------------------------------------
// Fallback loader to prevent layout shift while 3D scene loads
// -------------------------------------------------------
const Loading3D = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);


// -------------------------------------------------------
// Features Section: Highlights why users should choose Fillip
// -------------------------------------------------------
const Features = () => {

  // Defining features here allows easy expansion or editing in future
  const features = [
    {
      title: "Industry-Relevant Skills",
      description: "Unlock your potential with our internship program, learn all the important and trending skills in one place, ensuring you gain practical expertise for a successful professional future.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Friendly & Supportive Environment",
      description: "Experience a friendly, supportive environment in our internship program, where our team offers daily guidance, constructive feedback, and encouragement to grow professionally.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Live Project Training",
      description: "Our short-term internship program gives you real client project experience. Apply your skills instantly & build a strong portfolio that helps you get hired faster.",
      icon: Award,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Expert Instructors",
      description: "Gain practical skills through an internship for students, learning from professionals with real-world experience.",
      icon: UserCheck,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* WHY: Creates context about the value proposition for the user */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-gradient">Fillip Skill Academy</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choosing the right internship program is your gateway to success. Our short term internship program accelerates your learning, equips you with hands-on skills, and sets you on the path to a thriving professional future.
          </p>
        </div>

        {/* WHY: Displays a structured grid of benefits that support conversion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover-lift border border-white/20 shadow-lg"
            >
              {/* WHY: Icons visually differentiate each feature, improving readability */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


// -------------------------------------------------------
// Home Page: Combines all homepage sections in structured order
// -------------------------------------------------------
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          Dedicated Training & Internship Program for Skill Growth

        </title>
        <meta
          name="description"
          content="Upgrade your skills through our training & internship program with expert training, practical sessions, and career support for everyone. Start your journey now."
        />
      </Helmet>
      <main>

        {/* WHY: Hero must appear first visually; sets brand identity immediately */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">

          {/* WHY: 3D background runs behind hero to create immersive visual impact */}
          <div className="absolute inset-0 opacity-30">
            <Suspense fallback={<Loading3D />}>
              <Scene3D />
            </Suspense>
          </div>

          {/* WHY: Foreground hero text needs priority layering */}
          <div className="relative z-10">
            <Hero />
          </div>
        </section>

        {/* WHY: Visitors need quick access to strengths before scrolling further */}
        <StatisticsSection />



        {/* WHY: Courses are primary revenue driver; placed early in funnel */}
        <Courses />

        {/* WHY: Highlights certification value to build trust */}
        <Coursecertificate />

        {/* WHY: Testimonials reinforce trust and social proof */}
        <TrustedBy />

        {/* WHY: Shows companies involved or benefiting; builds credibility */}
        <Colleges />

        {/* WHY: Resume review adds engagement & utility to visitors */}
        {/* <HeroResumeReview /> */}

        {/* WHY: Growth metrics help establish authority and achievements */}
        {/* <GrowthSection /> */}

        {/* WHY: Visitors need quick access to strengths before scrolling further */}
        <Features />


        {/* WHY: FAQs reduce buyer hesitation and increase conversions */}
        <FaqSection />
      </main>
    </>
  );
};

// -------------------------------------------------------
// App Component: Manages routing & global layout
// -------------------------------------------------------
function App() {

  // to hide header in admin

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  // 
  return (

    <div className="min-h-screen">
      <SocialRadialMenu />

      {/* WHY: Header remains visible across all routes for navigation */}
      {!isAdminRoute && <Header />}

      {/* WHY: Routing allows modular page navigation without reload */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/course/:courseSlug" element={<CoursePage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}

        {/* Training – MULTIPLE SEO ROUTES */}
        <Route path="/fillip-training" element={<FillipTrainingPage />} />
        <Route path="/filliptraining" element={<FillipTrainingPage />} />
        <Route path="/it-training-in-patna" element={<FillipTrainingPage />} />
        <Route path="/training-in-patna" element={<FillipTrainingPage />} />

        {/*  INTERNSHIP – MULTIPLE SEO ROUTES */}
        <Route path="/fillipinternship" element={<FillipInternshipPage />} />
        <Route path="/fillip-internship" element={<FillipInternshipPage />} />
        <Route path="/internship" element={<FillipInternshipPage />} />
        <Route path="/internship-in-patna" element={<FillipInternshipPage />} />
        <Route path="/internship-in-web-development" element={<FillipInternshipPage />} />
        <Route path="/web-development-internship" element={<FillipInternshipPage />} />



        {/*  */}
        {/* ADMIN ROUTES */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>

      {/* WHY: Required for legal cookie consent compliance (GDPR/Cookie laws) */}
      <CookieConsent />

      {/* WHY: Footer gives closure & shows important business links */}
      {!isAdminRoute && <Footer />}

    </div>

  );
}

export default App;
