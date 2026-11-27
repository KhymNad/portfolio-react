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
import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { motion } from 'framer-motion';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowIntro = location.pathname === '/' && location.hash === '';
  const [isSplashVisible, setIsSplashVisible] = useState(shouldShowIntro);
  const [introStarted, setIntroStarted] = useState(!shouldShowIntro);
  const hasRedirected = useRef(false);
  const handleTitleReady = useCallback(() => setIntroStarted(true), []);

  useEffect(() => {
    if (!isSplashVisible) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [isSplashVisible]);

  // Run redirect only once on initial mount if URL is not clean "/"
  useEffect(() => {
    if (!hasRedirected.current) {
      if (location.pathname !== "/" || location.hash !== "") {
        navigate("/", { replace: true });
      }
      hasRedirected.current = true;
    }
  }, [location.pathname, location.hash, navigate]);

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
    <LayoutGroup id="portfolio-intro">
      {!isSplashVisible && <CustomCursor />}

      <AnimatePresence>
        {isSplashVisible && (
          <SplashScreen
            onTitleReady={handleTitleReady}
            onFinish={() => {
              setIsSplashVisible(false);
            }}
          />
        )}
      </AnimatePresence>

      {introStarted && <HeroSection introComplete={!isSplashVisible} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSplashVisible ? 0 : 1 }}
        transition={{ duration: 0.7, delay: isSplashVisible ? 0 : 0.05, ease: 'easeOut' }}
      >
        {!isSplashVisible && <NavBar />}
        <WorkExperience />
        <ProjectSection />
        <SkillsSection />
        <EducationSection />
        <Certifications />
        <ContactSection />
        <Footer />
      </motion.div>
    </LayoutGroup>
  );
}

export default App;
