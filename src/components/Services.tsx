import React from 'react';
import { Compass, Briefcase, Users, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Compass className="w-12 h-12" />,
      title: 'Career Guidance',
      description: 'Personalized career counseling to help you discover your passion and chart the perfect career path.',
      features: ['One-on-one counseling', 'Career assessment tools', 'Industry insights', 'Goal setting sessions'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Internship Opportunities',
      description: 'Access to exclusive internships with top companies that match your interests and career goals.',
      features: ['Curated opportunities', 'Application support', 'Interview preparation', 'Performance tracking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Mentorship Programs',
      description: 'Connect with industry professionals who provide guidance, support, and valuable insights.',
      features: ['Expert mentors', 'Regular check-ins', 'Skill development', 'Network building'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Community Events',
      description: 'Join workshops, seminars, and networking events to expand your knowledge and connections.',
      features: ['Interactive workshops', 'Industry seminars', 'Networking sessions', 'Skill competitions'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive support to transform your career journey from exploration to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Icon with Gradient Background */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to success with Beyond Career.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;