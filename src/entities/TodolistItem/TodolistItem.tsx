import React from 'react';
import styles from './Todolist.module.css'
import TaskItem from "../TaskItem/TaskItem";

type TodolistItemType = {
    id: string,
    addedDate: string,
    order: number,
    title: string
}

type TodolistItemPropsType = {
    todolist: TodolistItemType
}

const testData = {
    title: 'taskTitle',
    addedDate: "",
    id: "sss",
    order: 1,
    completed: true,
    deadline: '',
    description: '',
    startDate: '',
    priority: 1,
    status: 1,
    todoListId: '1111'
}

const TodolistItem = ({todolist}: TodolistItemPropsType) => {
    return (
        <div className={styles.TodolistItem}>

            <span className={styles.title}>

                {todolist.title}

            </span>

            <div className={styles.taskContainer}>

                <TaskItem task={testData} />
                <TaskItem task={testData} />
                <TaskItem task={testData} />
                <TaskItem task={testData} />

            </div>

            <div className={styles.buttonContainer}>

                <button>All</button>
                <button>Completed</button>
                <button>Active</button>

            </div>
        </div>
    );
};

export default TodolistItem;