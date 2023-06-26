import React, {useCallback} from 'react';
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../shared/store/store";
import {logoutTC} from "../../pages/LoginPage/model/auth-reducer";
import {AddItemForm} from "../../shared/components/AddItemForm/AddItemForm";
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
    if (!isAuth) {
        return <></>
    }
    return (
        <div className={styles.header}>
            <div className={styles.AddNewTodo}>
                Add new todolist:
                <AddItemForm callBack={addTodolist}/>
            </div>
            <button className={styles.button} onClick={logoutHandler}>log out</button>

        </div>
    );
};

export default Header;