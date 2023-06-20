import React from 'react';
import Checkbox from "../../shared/Checkbox/Checkbox";
import {EditableSpan} from "../../shared/EditableSpan/EditableSpan";
import styles from './TaskItem.module.css'

type TaskItemType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string,
    id: string,
    todoListId: string,
    order: number,
    addedDate: string
}
type TaskItemPropsType = {
    task: TaskItemType
}
const TaskItem = ({task}:TaskItemPropsType) => {
    return (
        <div className={styles.TaskItem} >
            <Checkbox isChecked={task.completed}/>
            <EditableSpan callBack={()=>{}} title={task.title}/>
        </div>
    );
};

export default TaskItem;