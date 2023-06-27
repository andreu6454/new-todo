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
    return (
        <div className={isLoading === 'loading' ? styles.Opacity : ''}>
            {isLoading === 'loading' &&
                <div className={styles.PreLoader}>
                    <PreLoader/>
                </div>
            }

            <div ref={parent} className={styles.TodoContainer}>
                {!!todolists.length && todolists.map((el) => {
                    return (
                        <TodolistItem
                            key={el.id}
                            todolist={el}
                        />
                    )
                })
                }
                {!(todolists.length) &&
                    <div className={styles.EmptyMessage}>
                        <h2>
                             Здесь пока пусто!
                        </h2>
                        <h3>
                            Но вы всегда можете что-то добавить
                        </h3>
                    </div>
                }
            </div>

        </div>
    );
};

export default TodolistsList;