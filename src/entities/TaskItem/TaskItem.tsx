import React from 'react';
import Checkbox from "../../shared/Checkbox/Checkbox";
import {EditableSpan} from "../../shared/EditableSpan/EditableSpan";
import styles from './TaskItem.module.css'

const TaskItem = () => {
    return (
        <div className={styles.TaskItem} >
            <Checkbox isChecked={true}/>
            <EditableSpan callBack={()=>{}} title={'title'}/>
        </div>
    );
};

export default TaskItem;