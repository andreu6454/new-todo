import React from 'react';
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../app/store/store";
import {logoutTC} from "../../pages/LoginPage/model/auth-reducer";

const Header = () => {
    const isAuth = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    if(!isAuth){
        return <></>
    }
    return (
        <div className={styles.header}>
            <button className={styles.button} onClick={logoutHandler}>log out</button>
        </div>
    );
};

export default Header;