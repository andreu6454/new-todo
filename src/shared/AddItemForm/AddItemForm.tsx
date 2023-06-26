import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import styles from './AddItemForm.module.css'

type AddItemProps = {
    callBack: (title: string) => void,
    disabled?: boolean;
}
export const AddItemForm = memo((props: AddItemProps) => {
    const {callBack} = props
    let [title, setTitle] = useState("")
    let [error, setError] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error){
            setError(false);
        }
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            callBack(title.trim());
            setTitle("");
        } else {
            setError(true);
        }
    }

    return (
        <div className={styles.AddItemForm}>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                disabled={props.disabled}
                className={styles.AddItemInput}

            />
            <button
                onClick={addTask}
                disabled={props.disabled}>+</button>
        </div>
    );
});