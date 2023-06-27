import React, {useEffect} from 'react';
import {fetchTodolistsTC, TodolistDomainType} from "../../entities/TodolistItem/model/todolists-reducer";
import {useAppDispatch, useAppSelector} from "../../shared/store/store";
import TodolistItem from "../../entities/TodolistItem/ui/TodolistItem";
import styles from './TodolistsList.module.css'
import PreLoader from "../../shared/components/PreLoader/PreLoader";
import {useAutoAnimate} from "@formkit/auto-animate/react";

const TodolistsList = () => {
    const [parent] = useAutoAnimate()
    useEffect(() => {
        if (!isLogined) {
            return
        }
        dispatch(fetchTodolistsTC())
    }, [])

    const todolists = useAppSelector<Array<TodolistDomainType>>(state => state.todolists);

    const isLogined = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const isLoading = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()

    // if(isLoading === 'loading'){
    //     return <PreLoader/>
    // }
    return (
        <div ref={parent} className={styles.TodolistsList}>
            {todolists.map((el) => {
                return (
                    <TodolistItem
                        key={el.id}
                        todolist={el}
                    />
                )
            })
            }
        </div>
    );
};

export default TodolistsList;