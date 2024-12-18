import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';

const menuCategories = [
  {
    name: 'Breads',
    items: [
      { name: 'Sourdough Bread', price: '$6.99', description: 'Traditional fermented bread' },
      { name: 'Whole Wheat', price: '$5.99', description: 'Healthy whole grain bread' },
      { name: 'Baguette', price: '$4.99', description: 'Classic French bread' }
    ]
  },
  {
    name: 'Pastries',
    items: [
      { name: 'Croissant', price: '$3.99', description: 'Buttery layered pastry' },
      { name: 'Danish', price: '$4.50', description: 'Fruit filled pastry' },
      { name: 'Éclair', price: '$4.99', description: 'Chocolate topped choux pastry' }
    ]
  }
];

const MenuItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex justify-between items-start p-4 border-b border-amber-100"
  >
    <div>
      <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
    <span className="text-amber-600 font-semibold">{item.price}</span>
  </motion.div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Menu"
          subtitle="Discover our daily selection of freshly baked goods"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          {menuCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6">{category.name}</h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;