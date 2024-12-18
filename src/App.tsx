import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ParallaxSection from './components/ParallaxSection';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AnimatePresence>
      <div className="relative">
        <Navbar />
        <Hero />
        <Products />
        <ParallaxSection />
        <Menu />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;