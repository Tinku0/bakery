import React from 'react';
import { Cake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Cake className="h-8 w-8 text-amber-300" />
              <span className="ml-2 text-2xl font-serif font-bold">Famous Bakes</span>
            </div>
            <p className="text-amber-200">
              Crafting moments of joy through artisanal baking excellence since 1995.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-amber-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-amber-200">
              <li>Monday - Friday: 7am - 7pm</li>
              <li>Saturday: 8am - 6pm</li>
              <li>Sunday: 8am - 3pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Famous Bakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;