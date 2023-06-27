import React, {useCallback, useEffect} from 'react';
import styles from './Todolist.module.css'
import {
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    removeTodolistTC,
    TodolistDomainType
} from "../model/todolists-reducer";
import {EditableSpan} from "../../../shared/components/EditableSpan/EditableSpan";
import TaskItem from "../../TaskItem/ui/TaskItem";
import {addTaskTC, fetchTasksTC} from "../../TaskItem/model/taskItem-reducer";
import {useAppDispatch, useAppSelector} from "../../../shared/store/store";
import {TaskStatuses, TaskType} from "../api/todolists-api";
import {v1} from 'uuid'
import {AddItemForm} from "../../../shared/components/AddItemForm/AddItemForm";
import PreLoader from "../../../shared/components/PreLoader/PreLoader";
import {useAutoAnimate} from "@formkit/auto-animate/react";

type TodolistItemPropsType = {
    todolist: TodolistDomainType
}

const TodolistItem = ({todolist}: TodolistItemPropsType) => {
    const [parent] = useAutoAnimate()

    useEffect(() => {
        dispatch(fetchTasksTC({todolistId: todolist.id}))
    }, [todolist.id])

    let tasks = useAppSelector<Array<TaskType>>(state => state.tasks[todolist.id]);
    const dispatch = useAppDispatch()

    const addTask = useCallback((title: string) => {
        dispatch(addTaskTC(title, todolist.id))
    }, [dispatch, todolist.id])
    const removeTodolist = useCallback(() => {
        dispatch(removeTodolistTC(todolist.id))
    }, [dispatch, todolist.id])
    const changeTodolistTitle = useCallback((title: string) => {
        if (todolist.title !== title) {
            dispatch(changeTodolistTitleTC(todolist.id, title))
        }
    }, [dispatch, todolist.id])
    const onAllClickHandler = useCallback(() =>
        dispatch(changeTodolistFilterAC({id: todolist.id, filter: "all"})
        ), [dispatch, todolist.id]);
    const onActiveClickHandler = useCallback(() =>
        dispatch(changeTodolistFilterAC({id: todolist.id, filter: "active"})
        ), [dispatch, todolist.id]);
    const onCompletedClickHandler = useCallback(() =>
        dispatch(changeTodolistFilterAC({id: todolist.id, filter: "completed"})
        ), [dispatch, todolist.id]);

    let allTodolistTasks = tasks;
    let tasksForTodolist = allTodolistTasks;

    if (todolist.filter === "active") {
        tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatuses.New);
    }
    if (todolist.filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(t => {
            return t.status === TaskStatuses.Completed;
        });
    }

    // if (todolist.entityStatus === "loading") {
    //     return <div className={styles.TodolistItem}>
    //         <PreLoader/>
    //     </div>
    // }

    return (
        <div className={styles.TodolistItem}>
            <h3 className={styles.title}>
                <EditableSpan key={v1()} title={todolist.title} callBack={changeTodolistTitle}/>
                <button className={styles.DeleteButton} onClick={removeTodolist}>
                    X
                </button>
            </h3>

            <AddItemForm callBack={addTask}/>

            <div ref={parent} className={styles.taskContainer}>
                {tasksForTodolist.length === 0 && <div className={styles.NoTasksMessage}> Тасок нет </div>}
                {tasksForTodolist.map(t => {
                    return <TaskItem key={t.id} task={t}/>
                })
                }
            </div>

            <div className={styles.buttonContainer}>

                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
                <button onClick={onActiveClickHandler}>Active</button>

            </div>
        </div>
    );
};

export default TodolistItem;
