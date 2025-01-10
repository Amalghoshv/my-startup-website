import React from 'react';
import { useState } from 'react';
import { 
  Code, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const Website = () => {
  const [activeSection, setActiveSection] = useState('home');

  const Navigation = () => (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">UPSCALENEXT</span>
          </div>
          <div className="flex space-x-4">
            {['Home', 'About', 'Services', 'Careers', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses with ERPNext Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Young, dynamic experts delivering cutting-edge ERPNext implementations
            and consulting services
          </p>
          <button 
            onClick={() => setActiveSection('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'ERPNext Development',
              icon: <Code className="w-12 h-12 text-blue-600" />,
              description: 'Custom ERPNext solutions tailored to your business needs'
            },
            {
              title: 'Expert Consultation',
              icon: <Users className="w-12 h-12 text-blue-600" />,
              description: 'Strategic guidance from experienced ERPNext professionals'
            },
            {
              title: 'Implementation Support',
              icon: <Briefcase className="w-12 h-12 text-blue-600" />,
              description: '24/7 support and maintenance for your ERPNext systems'
            }
          ].map((service) => (
            <div key={service.title} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Founded by a team of young, passionate technologists, TechForge is revolutionizing 
              how businesses implement and utilize ERPNext solutions. Our fresh perspective 
              combined with technical expertise allows us to deliver innovative solutions that 
              drive real business value.
            </p>
            <p className="text-lg text-gray-600">
              We pride ourselves on our ability to understand modern business challenges 
              and provide cutting-edge solutions that help organizations thrive in the 
              digital age.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-4">
              {[
                'Innovation at the core',
                'Customer-first approach',
                'Continuous learning',
                'Quality delivery',
                'Collaborative growth'
              ].map((value) => (
                <li key={value} className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const CareersPage = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Team</h2>
        <p className="text-lg text-gray-600 mb-8">
          We're always looking for talented individuals who are passionate about technology 
          and innovation. Join us in building the future of business solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              position: 'ERPNext Developer',
              type: 'Full-time',
              location: 'Remote'
            },
            {
              position: 'Business Analyst',
              type: 'Full-time',
              location: 'Hybrid'
            },
            {
              position: 'Project Manager',
              type: 'Full-time',
              location: 'On-site'
            },
            {
              position: 'Technical Consultant',
              type: 'Contract',
              location: 'Remote'
            }
          ].map((job) => (
            <div key={job.position} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <span>{job.type}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6 text-blue-600" />,
                  label: 'Email',
                  value: 'contact@techforge.com'
                },
                {
                  icon: <Phone className="w-6 h-6 text-blue-600" />,
                  label: 'Phone',
                  value: '+1 (555) 123-4567'
                },
                {
                  icon: <MapPin className="w-6 h-6 text-blue-600" />,
                  label: 'Address',
                  value: '123 Innovation Street, Tech City, TC 12345'
                }
              ].map((contact) => (
                <div key={contact.label} className="flex items-start">
                  <div className="mr-4">{contact.icon}</div>
                  <div>
                    <h3 className="font-semibold">{contact.label}</h3>
                    <p className="text-gray-600">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {activeSection === 'home' && <HomePage />}
      {activeSection === 'about' && <AboutPage />}
      {activeSection === 'careers' && <CareersPage />}
      {activeSection === 'contact' && <ContactPage />}
    </div>
  );
};

export default Website;