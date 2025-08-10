import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'The support we received was life-changing. My daughter went from struggling in school to thriving in her learning environment. The personalized approach made all the difference.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      content: 'Professional, compassionate, and incredibly knowledgeable. The IEP guidance helped us navigate the system and secure the best possible education for our son.',
      rating: 5,
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Parent',
      content: 'The behavioral strategies provided have transformed our home and school experience. Our child is more confident and engaged in learning than ever before.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Families Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from families who have experienced the positive impact of our special education consultancy services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative"
            >
              <Quote className="text-primary-200 absolute top-4 right-4" size={32} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;