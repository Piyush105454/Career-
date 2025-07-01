import React from 'react';
import { Target, Users, Heart, Zap, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We believe in honest guidance and transparent processes that build lasting trust.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly evolving our methods to provide cutting-edge career solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Inclusion',
      description: 'Ensuring every student has equal access to opportunities regardless of background.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from the halls of IIT Kharagpur, Beyond Career represents the vision of ambitious students who wanted to democratize career opportunities for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To democratize career opportunities by creating a world where every student has access to the guidance, resources, and connections needed to build a successful and fulfilling career.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower the next generation through personalized mentorship, exclusive internship opportunities, and a thriving community that bridges the gap between academic learning and real-world success.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Founded by Visionaries</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                  <p>Started by dynamic students from IIT Kharagpur</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                  <p>Built on the foundation of academic excellence and innovation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                  <p>Driven by the passion to create meaningful impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                  <p>Committed to transforming career journeys nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape the way we serve our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;