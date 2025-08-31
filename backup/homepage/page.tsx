{/* Originaler Inhalt der Startseite */}
import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import styles from '@/styles/sectionSpacing.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
}