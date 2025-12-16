import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Target,
  Eye,
  Award,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  TrendingUp,
  BookOpen,
  Star
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Students Trained', color: 'text-blue-600' },
    { icon: BookOpen, value: '200+', label: 'Courses Offered', color: 'text-purple-600' },
    { icon: Award, value: '95%', label: 'Success Rate', color: 'text-green-600' },
    { icon: TrendingUp, value: '5+', label: 'Years Experience', color: 'text-orange-600' },
  ];

  const teamMembers = [
    {
      name: 'Shruti Sinha',
      role: 'Full Stack Developer',
      image: '/api/placeholder/300/300',
      bio: 'Former Tech Lead atFillip Skill Academy with 5+ years in Full Stack Development and education.',
      skills: ['Leadership', 'AI/ML', 'Cloud Computing'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Shruti ',
      role: 'Web Developer',
      image: '/api/placeholder/300/300',
      bio: 'Ex-Microsoft engineer specializing in full-stack development and DevOps.',
      skills: ['Full-Stack', 'DevOps', 'Cybersecurity'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mohit Kumar',
      role: 'Lead Instructor',
      image: '/api/placeholder/300/300',
      bio: 'Industry veteran with expertise in data science and machine learning.',
      skills: ['Data Science', 'Python', 'Machine Learning'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sneha Gupta',
      role: 'Student Success Manager',
      image: '/api/placeholder/300/300',
      bio: 'Dedicated to ensuring every student achieves their career goals.',
      skills: ['Career Guidance', 'Mentoring', 'Project Management'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of learners, mentors, and industry professionals.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Constantly evolving our teaching methods with the latest technology and industry trends.'
    },
    {
      icon: Award,
      title: 'Success',
      description: 'Measuring our success by the achievements and career growth of our students.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'FoundedFillip Skill Academy', description: 'Started with a vision to transform IT education in India' },
    { year: '2020', event: 'First 1,000 Students', description: 'Reached our first major milestone during the pandemic' },
    { year: '2021', event: 'Industry Partnerships', description: 'Established partnerships with leading tech companies' },
    { year: '2022', event: 'Advanced 3D Platform', description: 'Launched our revolutionary 3D learning environment' },
    { year: '2023', event: 'International Recognition', description: 'Received awards for innovation in education technology' },
    { year: '2024', event: '50,000+ Alumni Network', description: 'Built one of India\'s largest IT professional networks' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              About Fillip Skill Academy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming IT Education
              <span className="text-gradient"> Through Innovation</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We're on a mission to bridge the gap between traditional education and industry requirements
              through immersive 3D learning experiences and cutting-edge technology.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                To democratize quality IT education by making advanced technology skills accessible to everyone,
                regardless of their background or location. We believe in learning by doing, and our immersive
                3D platform makes complex concepts easy to understand and apply.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Industry-relevant curriculum updated quarterly</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Hands-on projects with real-world applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Personalized learning paths for every student</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                To become India's leading technology education platform, empowering millions of professionals
                to build successful careers in the digital economy. We envision a future where quality
                education is not limited by geography or economic barriers.
              </p>
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">2030 Goals</h3>
                <div className="space-y-2 text-slate-700">
                  <div>• Train 1 million+ IT professionals</div>
                  <div>• Expand to 50+ cities across India</div>
                  <div>• Launch international programs</div>
                  <div>• Achieve 98% job placement rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From a small startup to India's leading IT education platform.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-blue-600 font-semibold">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.event}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry experts and passionate educators dedicated to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;

