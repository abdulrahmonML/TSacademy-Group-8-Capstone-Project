import React from 'react';
import HeroSection from './components/HeroSection'; // Ensure this path matches your folder

function App() {
  return (
    <>
      <HeroSection />
      
      {/* Placeholders so the scroll buttons have a destination */}
      <section id="planets-section" style={{ height: '100vh', background: '#111' }}></section>
      <section id="contact-section" style={{ height: '100vh', background: '#222' }}></section>
    </>
  );
}

export default App;