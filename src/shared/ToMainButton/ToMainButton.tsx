import React from 'react';
import styles from "./ToMainButton.module.css";
import {NavLink} from "react-router-dom";

const ToMainButton = () => {
    return (
        <NavLink className={styles.Link} to={'/'}> На главную </NavLink>
    );
};

export default ToMainButton;