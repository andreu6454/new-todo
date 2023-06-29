import React from 'react';
import styles from "./ToMainButton.module.css";

const ToMainButton = () => {
    return (
        <a className={styles.Link} href={'/'}> На Главную </a>
    );
};

export default ToMainButton;