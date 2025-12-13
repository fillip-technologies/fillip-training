import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Award,
  Clock,
  Users,
  CheckCircle,
  Star,
  BookOpen,
  Download,
  ExternalLink,
  Calendar,
  TrendingUp,
  Shield,
  Code,
  Database,
  Cloud,
  Brain,
  Smartphone,
  Lock,
  Globe,
  Zap,
  Target,
  Trophy,
  FileText,
  Play
} from 'lucide-react';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = [
    { icon: Award, value: '25+', label: 'Certifications Available', color: 'text-blue-600' },
    { icon: Users, value: '15,000+', label: 'Certified Professionals', color: 'text-purple-600' },
    { icon: TrendingUp, value: '95%', label: 'Pass Rate', color: 'text-green-600' },
    { icon: Trophy, value: '98%', label: 'Job Placement', color: 'text-orange-600' },
  ];

  const certificationCategories = [
    { id: 'all', name: 'All Certifications', icon: Award },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'data', name: 'Data Science', icon: Database },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone },
    { id: 'security', name: 'Cybersecurity', icon: Lock }
    // { id: 'web', name: 'Web Technologies', icon: Globe }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development Professional',
      category: 'development',
      level: 'Intermediate',
      duration: '6 months',
      price: '₹30,000 ',
      rating: 4.9,
      students: 2500,
      description: 'Master modern web development with React, Node.js, and cloud deployment.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Live project development',
        'Industry mentor guidance',
        'Portfolio creation',
        'Job placement assistance'
      ],
      curriculum: [
        'Frontend Development with React',
        'Backend APIs with Node.js',
        'Database Design & Management',
        'Cloud Deployment & DevOps',
        'Testing & Quality Assurance'
      ]
    },
    {
      id: 2,
      title: 'Data Science & Analytics Expert',
      category: 'data',
      level: 'Advanced',
      duration: '8 months',
      price: '₹40,000 ',
      rating: 4.8,
      students: 1800,
      description: 'Become a data science expert with Python, ML, and big data technologies.',
      skills: ['Python', 'Machine Learning', 'SQL', 'Tableau', 'Apache Spark'],
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Real-world datasets',
        'ML model deployment',
        'Industry case studies',
        'Research project'
      ],
      curriculum: [
        'Statistical Analysis & Python',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'Big Data Processing',
        'Data Visualization & Reporting'
      ]
    },
    {
      id: 3,
      title: 'AWS Cloud Solutions Architect',
      category: 'cloud',
      level: 'Professional',
      duration: '4 months',
      price: '₹59,999',
      rating: 4.9,
      students: 3200,
      description: 'Design and deploy scalable cloud solutions on Amazon Web Services.',
      skills: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'DevOps'],
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      features: [
        'AWS hands-on labs',
        'Real cloud projects',
        'Cost optimization strategies',
        'Security best practices'
      ],
      curriculum: [
        'AWS Core Services',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security & Compliance'
      ]
    },
    {
      id: 4,
      title: 'AI & Machine Learning Specialist',
      category: 'ai',
      level: 'Advanced',
      duration: '10 months',
      price: '₹45,999',
      rating: 4.9,
      students: 1200,
      description: 'Master artificial intelligence and machine learning technologies.',
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'MLOps'],
      icon: Brain,
      color: 'from-green-500 to-teal-500',
      features: [
        'AI model development',
        'Research paper implementation',
        'Industry collaboration',
        'Patent filing guidance'
      ],
      curriculum: [
        'Machine Learning Fundamentals',
        'Deep Learning & Neural Networks',
        'Computer Vision Applications',
        'Natural Language Processing',
        'MLOps & Model Deployment'
      ]
    },
    {
      id: 5,
      title: 'Mobile App Development Expert',
      category: 'mobile',
      level: 'Intermediate',
      duration: '5 months',
      price: '₹55,999',
      rating: 4.7,
      students: 2100,
      description: 'Build native and cross-platform mobile applications.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Cross-platform development',
        'App store deployment',
        'Performance optimization',
        'User experience design'
      ],
      curriculum: [
        'Mobile Development Fundamentals',
        'React Native Development',
        'Flutter Framework',
        'Backend Integration',
        'App Store Optimization'
      ]
    },
    {
      id: 6,
      title: 'Cybersecurity Professional',
      category: 'security',
      level: 'Professional',
      duration: '6 months',
      price: '₹35,999',
      rating: 4.8,
      students: 1500,
      description: 'Protect organizations from cyber threats and security vulnerabilities.',
      skills: ['Ethical Hacking', 'Network Security', 'CISSP', 'Penetration Testing', 'Incident Response'],
      icon: Lock,
      color: 'from-red-500 to-pink-500',
      features: [
        'Hands-on security labs',
        'Real threat simulation',
        'Industry certifications',
        'Security audit projects'
      ],
      curriculum: [
        'Network Security Fundamentals',
        'Ethical Hacking & Penetration Testing',
        'Incident Response & Forensics',
        'Security Compliance & Governance',
        'Advanced Threat Detection'
      ]
    }
  ];

  const certificationProcess = [
    {
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the certification that aligns with your career goals and current skill level.',
      icon: Target
    },
    {
      step: 2,
      title: 'Complete Training',
      description: 'Engage in immersive 3D learning experiences with hands-on projects and expert guidance.',
      icon: BookOpen
    },
    {
      step: 3,
      title: 'Build Portfolio',
      description: 'Create real-world projects that demonstrate your skills to potential employers.',
      icon: Code
    },
    {
      step: 4,
      title: 'Take Assessment',
      description: 'Complete comprehensive practical and theoretical assessments to validate your expertise.',
      icon: FileText
    },
    {
      step: 5,
      title: 'Get Certified',
      description: 'Receive your industry-recognized certification and join our alumni network.',
      icon: Award
    },
    {
      step: 6,
      title: 'Career Support',
      description: 'Access lifetime career support, job placement assistance, and networking opportunities.',
      icon: Users
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Average 40% salary increase within 6 months of certification completion.'
    },
    {
      icon: Shield,
      title: 'Industry Recognition',
      description: 'Certifications recognized by top tech companies and industry leaders.'
    },
    {
      icon: Users,
      title: 'Professional Network',
      description: 'Join a community of 15,000+ certified professionals and industry experts.'
    },
    {
      icon: Zap,
      title: 'Cutting-edge Skills',
      description: 'Learn the latest technologies and frameworks used by leading companies.'
    }
  ];

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

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
              <Award className="w-4 h-4 mr-2" />
              Industry-Recognized Certifications
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Advance Your Career with
              <span className="text-gradient"> Professional Certifications</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Gain industry-recognized credentials that validate your expertise and open doors to
              exciting career opportunities in the rapidly evolving tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Explore Certifications
              </Button>
              <Button variant="outline" size="lg" className="border-2">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Get Certified?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our certifications provide tangible benefits that accelerate your career growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Available Certifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive range of industry-focused certification programs.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {certificationCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'border-slate-300 hover:border-blue-500'
                  }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCertifications.map((cert) => (
              <Card key={cert.id} className="bg-white/70 backdrop-blur-sm border-white/20 hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center`}>
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">{cert.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{cert.level}</Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-sm text-slate-600">{cert.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{cert.price}</div>
                      <div className="text-sm text-slate-600">{cert.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {cert.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="curriculum" className="mt-4">
                      <ul className="space-y-2">
                        {cert.curriculum.map((module, index) => (
                          <li key={index} className="flex items-center text-sm text-slate-600">
                            <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="w-4 h-4 mr-1" />
                      {cert.students.toLocaleString()} students
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Brochure
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Certification Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our structured approach ensures you gain practical skills and industry recognition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationProcess.map((process, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">Step {process.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Certified?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with our industry-recognized certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              <ExternalLink className="mr-2 w-5 h-5" />
              View All Programs
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Certifications;

