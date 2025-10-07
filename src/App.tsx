import './App.css'
import { 
  NavBar, 
  HeroSection, 
  ProjectSection,
  WorkExperience, 
  SkillsSection, 
  EducationSection, 
  Certifications,
  ContactSection, 
  Footer, 
  SplashScreen,
  CustomCursor
} from './components';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const hasRedirected = useRef(false);
  const splashShown = useRef(false);

  // Run redirect only once on initial mount if URL is not clean "/"
  useEffect(() => {
    if (!hasRedirected.current) {
      if (location.pathname !== "/" || location.hash !== "") {
        navigate("/", { replace: true });
      }
      hasRedirected.current = true;
    }
  }, [location.pathname, location.hash, navigate]);

  // Show splash only once on initial mount if path is clean "/"
  useEffect(() => {
    if (!splashShown.current) {
      if (location.pathname === "/" && location.hash === "") {
        setIsSplashVisible(true);
        splashShown.current = true;
      }
    }
  }, []);

  // Scroll to hash after splash is hidden
  useEffect(() => {
    if (!isSplashVisible) {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const navHeight = document.querySelector('nav')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [location, isSplashVisible]);

  return (
    <>
      {!isSplashVisible && <CustomCursor />}

      <AnimatePresence>
        {isSplashVisible && (
          <SplashScreen
            onFinish={() => {
              setIsSplashVisible(false);
            }}
          />
        )}
      </AnimatePresence>

      {!isSplashVisible && (
        <>
          <NavBar />
          <HeroSection />
          <WorkExperience />
          <ProjectSection />
          <SkillsSection />
          <EducationSection />
          <Certifications />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
