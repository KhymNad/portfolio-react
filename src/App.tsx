import './App.css';
import { NavBar, HeroSection, ProjectSection } from './components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectSection />
    </>
  );
}

export default App;
