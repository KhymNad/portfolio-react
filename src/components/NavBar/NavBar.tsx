import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Work Experience', target: 'work-experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Education', target: 'education' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Contact', target: 'contact' },
];

const NavBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isHomepage = location.pathname === '/' || location.pathname === '/#';

        if (!isHomepage) {
            setActiveSection('');
            setScrolled(true);
            return;
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let current = 'home';

            for (const item of navItems) {
                const section = document.getElementById(item.target);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        current = item.target;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Link to="/#home" className={styles.nav_left} aria-label="Khym Nad, home">Khym<span>.</span></Link>

            {/* Burger menu */}
            <button
                type="button"
                className={`${styles.burger} ${menuOpen ? styles.active : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Collapsible nav */}
            <ul className={`${styles.nav_right} ${menuOpen ? styles.active : ''}`}>
                {navItems.map((item) => (
                    <li key={item.target}>
                        <Link
                            className={`${styles.nav_item} ${
                                activeSection === item.target ? styles.active : ''
                            }`}
                            to={`/#${item.target}`}
                            onClick={() => setMenuOpen(false)}  // close after click
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
