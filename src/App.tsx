import './App.css'
import { NavBar, HeroSection, ProjectSection, SkillsSection, EducationSection, ContactSection, Footer } from './components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash) as HTMLElement;
      if (element) {
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  )
}


export default App;
