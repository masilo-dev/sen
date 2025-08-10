import React from 'react';
import { Brain, FileText, Users, Lightbulb, Target, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Learning Assessments',
      description: 'Comprehensive evaluations to identify learning differences and develop targeted intervention strategies.',
    },
    {
      icon: FileText,
      title: 'IEP Development',
      description: 'Expert assistance in creating and reviewing Individualized Education Programs tailored to each child\'s needs.',
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Guidance and resources for families navigating the special education system and advocating for their children.',
    },
    {
      icon: Lightbulb,
      title: 'Behavioral Strategies',
      description: 'Evidence-based behavioral interventions to support positive learning environments and social development.',
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Collaborative development of achievable, measurable goals that promote academic and personal growth.',
    },
    {
      icon: BookOpen,
      title: 'Curriculum Adaptation',
      description: 'Customized learning materials and teaching strategies to accommodate diverse learning styles and abilities.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Special Education Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a full range of specialized services designed to support children with diverse learning needs and empower their families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-6">
                <service.icon className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;