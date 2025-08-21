import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Education', target: 'education' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Contact', target: 'contact' },
];

const NavBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    useEffect(() => {
        const isHomepage = location.pathname === '/' || location.pathname === '/#';

        if (!isHomepage) {
            setActiveSection('');
            return;
        }

        const handleScroll = () => {
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
        <nav className={styles.nav}>
        <div className={styles.nav_left}>Khym</div>
        <ul className={styles.nav_right}>
            {navItems.map((item) => (
            <li key={item.target}>
                <Link
                className={`${styles.nav_item} ${
                    activeSection === item.target ? styles.active : ''
                }`}
                to={`/#${item.target}`}
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
