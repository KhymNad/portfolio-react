import './App.css'
import { NavBar, HeroSection, ProjectSection, SkillsSection } from './components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <div
        id="home"
        style={{
          position: 'relative',
          top: '-30px',   
          height: '20px',
          visibility: 'hidden',
        }}
      />
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
    </>
  )
}


export default App;
