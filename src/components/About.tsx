import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'All our products are baked fresh every morning'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only the finest ingredients available'
  },
  {
    icon: Users,
    title: 'Family Owned',
    description: 'Serving our community since 1995'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Famous Bakes"
          subtitle="A tradition of excellence in every bite"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&q=80"
              alt="Bakery interior"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Famous Bakes has been serving our community with the finest artisanal breads and pastries for over two decades. Our commitment to quality and tradition sets us apart.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <feature.icon className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;