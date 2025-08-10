import React from 'react';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Every Child's
              <span className="text-primary-600"> Unique Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Expert special education consultancy services helping children with diverse learning needs reach their full potential through personalized support and evidence-based strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="btn-primary flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-primary-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Families Helped</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="text-primary-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-primary-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Special education consultation"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl">🎯</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl">📚</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;