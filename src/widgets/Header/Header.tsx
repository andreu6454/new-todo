import React, {useCallback} from 'react';
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../shared/store/store";
import {logoutTC} from "../../pages/LoginPage/model/auth-reducer";
import {AddItemForm} from "../../shared/AddItemForm/AddItemForm";
import {addTodolistTC} from "../../entities/TodolistItem/model/todolists-reducer";

const Header = () => {
    const isAuth = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistTC(title))
    }, [dispatch])

    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    if(!isAuth){
        return <></>
    }
    return (
        <div className={styles.header}>
            <AddItemForm callBack={addTodolist} />
            <button className={styles.button} onClick={logoutHandler}>log out</button>
        </div>
    );
};

export default Header;