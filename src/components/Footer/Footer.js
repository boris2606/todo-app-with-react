import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.header_wrapper}>
            <p className={styles.footer_text}>Розроблено</p>
            <a href='https://boris2606.github.io/resume.github.io/#ua' className={styles.footer_text} target='_blank' rel='noreferrer'>BS</a>
        </div>
    );
};

export default Footer;