import React, {useEffect} from 'react';
import {fetchTodolistsTC, TodolistDomainType} from "../../entities/TodolistItem/model/todolists-reducer";
import {useAppDispatch, useAppSelector} from "../../shared/store/store";
import TodolistItem from "../../entities/TodolistItem/ui/TodolistItem";
import styles from './TodolistsList.module.css'

const TodolistsList = () => {

    useEffect(() => {
        console.log(123)
        if (!isLogined) {

            return
        }
        dispatch(fetchTodolistsTC())
    }, [])

    const todolists = useAppSelector<Array<TodolistDomainType>>(state => state.todolists);

    const isLogined = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    const dispatch = useAppDispatch()

    return (
        <div className={styles.TodolistsList}>
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