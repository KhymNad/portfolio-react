import React from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_left}>
                Khym
            </div>
            <ul className={styles.nav_right}>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;