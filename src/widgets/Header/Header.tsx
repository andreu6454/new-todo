import React, {useCallback} from 'react';
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../shared/store/store";
import {logoutTC} from "../../pages/LoginPage/model/auth-reducer";
import {AddItemForm} from "../../shared/components/AddItemForm/AddItemForm";
import {addTodolistTC} from "../../entities/TodolistItem/model/todolists-reducer";
import {setNavBarOpenAC} from "../../app/model/app-reducer";
import {useLocation} from "react-router";

const Header = () => {
    const isAuth = useAppSelector(state => state.auth.isLoggedIn)
    const currentLocation = useLocation()

    const dispatch = useAppDispatch()

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistTC(title))
    }, [dispatch])

    const openNavBarHandle = () => {
        console.log(true)
        dispatch(setNavBarOpenAC({isOpen: true}))
    }
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <div className={styles.header}>
            <button
                className={styles.MenuButton}
                onClick={openNavBarHandle}
            >
                <svg aria-hidden="true" viewBox="0 0 16 16" className={styles.SvgButton}>
                    <path fill={'#7d8590'}
                          d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                </svg>
            </button>

            {isAuth && currentLocation.pathname === '/' && <div className={styles.AddNewTodo}>
                Add new todolist:
                <AddItemForm callBack={addTodolist}/>
            </div>
            }

            {isAuth &&
                <button className={styles.button} onClick={logoutHandler}>log out</button>
            }

        </div>
    );
};

export default Header;