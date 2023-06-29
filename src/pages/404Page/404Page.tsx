import React from 'react';
import styles from './404Page.module.css'
import model from './model.png'
import message from './message.png'
import ToMainButton from "../../shared/ToMainButton/ToMainButton";

const NotFoundPage = () => {
    return (
        <>
            <div className={styles.NotFoundPage}>
                <img src={message} alt={'404message'}/>
                <img src={model} alt={'404model'}/>
            </div>
            <div className={styles.LinkContainer}>
                <ToMainButton/>
            </div>
        </>

    );
};

export default NotFoundPage;