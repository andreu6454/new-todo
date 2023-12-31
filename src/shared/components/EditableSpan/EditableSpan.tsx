import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import styles from './EditableSpan.module.css'

type EditableSpanType = {
    title: string
    callBack: (newTitle: string) => void
}
export const EditableSpan = memo((props: EditableSpanType) => {
    const {title, callBack} = props
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(title)
    let finalTitle

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }, [])

    const addTask = useCallback(() => {
        callBack(newTitle);

    }, [callBack, newTitle])

    const toggleHandler = useCallback(() => {
        setEdit(!edit)
        addTask()
    }, [addTask, edit])

    if(title.length > 13){
        finalTitle = title.slice(0,13) + "..."
    } else{
        finalTitle = title
    }

    return (
        edit
            ? <input className={styles.Input} type={"text"} value={newTitle} onChange={onChangeHandler}
                     onBlur={toggleHandler} autoFocus/>
            :
            <span onDoubleClick={toggleHandler}>
                {finalTitle}
            </span>
    );
});