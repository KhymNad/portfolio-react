import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <p className={styles.name}>© {new Date().getFullYear()} Khym Nad. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;