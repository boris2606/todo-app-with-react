import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.header_content}>
                <p className={styles.header_tit}><span className={styles.span_header}>TODO</span> помічник</p>
            </div>
        </div>
    );
};

export default Header;