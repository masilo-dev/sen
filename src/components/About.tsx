import React from 'react';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    'Certified Special Education Consultant',
    'Master\'s in Special Education',
    '15+ Years of Experience',
    'Specialized in Autism Spectrum Disorders',
    'IEP Meeting Advocate',
    'Behavioral Intervention Specialist',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Every Child's Success
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in special education, I am passionate about helping children with diverse learning needs reach their full potential. My approach combines evidence-based practices with compassionate, individualized support.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe that every child deserves the opportunity to learn and grow in an environment that celebrates their unique strengths while addressing their specific challenges.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Award className="text-primary-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="text-center">
                <Users className="text-primary-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <Heart className="text-primary-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Dedication</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-6">
              <img
                src="https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Special education professional"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;