import React from 'react';
import styles from './NavBar.module.css';
import { HashLink } from 'react-router-hash-link';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_left}>
                Khym
            </div>
            <ul className={styles.nav_right}>
                <HashLink smooth to="#home">Home</HashLink>
                <HashLink smooth to="#projects">Projects</HashLink>
                <li>Skills</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;