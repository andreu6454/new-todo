import React, {ChangeEvent, useCallback} from 'react';
import Checkbox from "../../../shared/components/Checkbox/Checkbox";
import {EditableSpan} from "../../../shared/components/EditableSpan/EditableSpan";
import styles from './TaskItem.module.css'
import {TaskStatuses, TaskType} from "../../TodolistItem/api/todolists-api";
import {useAppDispatch} from "../../../shared/store/store";
import {removeTaskTC, updateTaskTC} from "../model/taskItem-reducer";

const TaskItem = ( props: {task: TaskType}) => {
    const dispatch = useAppDispatch()

    const onClickHandler = useCallback(() => dispatch(removeTaskTC({
        todolistId: props.task.todoListId,
        taskId: props.task.id
    })), [dispatch, props.task.id, props.task.todoListId])

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        let newStatus
        newIsDoneValue ? newStatus = TaskStatuses.Completed : newStatus = TaskStatuses.New
        dispatch(updateTaskTC(props.task.id, {status: newStatus}, props.task.todoListId));
    }, [dispatch, props.task.id, props.task.todoListId])

    const onTitleChangeHandler = useCallback((newValue: string) => {
        if(props.task.title !== newValue){
            dispatch(updateTaskTC(props.task.id, {title: newValue}, props.task.todoListId));
        }
    }, [dispatch,props.task.title ,props.task.id, props.task.todoListId])

    return (
        <div className={props.task.status === TaskStatuses.Completed ? styles.TaskItemIsDone : styles.TaskItem} >

            <div>

                <Checkbox isChecked={props.task.status === TaskStatuses.Completed} onChangeHandle={onChangeHandler}/>

                <EditableSpan title={props.task.title} callBack={onTitleChangeHandler}/>

            </div>

            <button aria-label="delete" onClick={onClickHandler} >
                X
            </button>

        </div>
    );
};

export default TaskItem