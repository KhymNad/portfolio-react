import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    // Removed unused location variable

    const navItems = [
        { label: 'Home', target: '#home' },
        { label: 'Projects', target: '#projects' },
        { label: 'Skills', target: '#skills' },
        { label: 'Education', target: '#education' },
        { label: 'Contact', target: '#contact' },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_left}>Khym</div>
            <ul className={styles.nav_right}>
                {navItems.map((item) => (
                    <li key={item.target}>
                        <Link className={styles.nav_item} to={`/${item.target}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
