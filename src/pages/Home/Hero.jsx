import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star, Users, BookOpen } from 'lucide-react';

const Hero = () => {

  // WHY: Stats section increases trust by showing social proof & platform scale.
  const stats = [
    { icon: Users, value: '50K+', label: 'Active Learners' },
    { icon: BookOpen, value: '200+', label: 'Courses' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">


      {/* WHY: Background blobs create a soft, modern visual identity and add depth without distracting the user */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* WHY: Left content holds the main pitch + CTAs to drive conversions quickly */}
          <div className="text-center lg:text-left">

            {/* WHY: Small badge creates authority and positions brand as a top-rated platform */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              #1 IT Training Platform In Patna
            </div>

            {/* WHY: Strong headline communicates core value proposition immediately */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Build IT Skills on
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Real Projects</span>
            </h1>

            {/* WHY: Description adds clarity & relevance, helping users understand real project-based training */}
            <p className="text-xl text-slate-600 mb-8 max-w-2xl text-justify">
              Experience immersive learning with AI/ML and Web Development courses. Build practical skills for your career.
              Join the Best internship company in Patna. We offer internship for students with real projects.
              You learn, practice, and grow with expert guidance. Perfect for shaping your future in the tech world.

            </p>

            {/* WHY: CTAs guide users towards next steps — "Join" (primary) and "Demo" (secondary) */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Join Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-500 px-8 py-4 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* WHY: Stats instantly build credibility using measurable proof */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">

                  {/* WHY: Icons + values make stats easy to scan and visually engaging */}
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  </div>

                  {/* WHY: Label clarifies the meaning of each stat */}
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHY: Right block visually represents the 3D learning concept without heavy assets */}
          <div className="relative hidden md:block">

            {/* WHY: Placeholder 3D box visually hints at the immersive environment students experience */}
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center">

                {/* WHY: Floating 3D-style cube gives futuristic feel → aligns with tech training branding */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">3D</span>
                  </div>
                </div>

                <p className="text-slate-600 font-medium">Learning Environment</p>
                <p className="text-slate-500 text-sm">Interactive • Immersive • Engaging</p>
              </div>
            </div>

            {/* WHY: Floating badges create motion & visual excitement, reinforcing AI/ML focus */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white font-bold">AI</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-bold text-sm">ML</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
