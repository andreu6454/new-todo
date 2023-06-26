import React, {ChangeEvent} from 'react';
import styles from './Checkbox.module.css'

type CheckboxPropsType = {
    isChecked: boolean,
    onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void
}
const Checkbox = ({isChecked,onChangeHandle}:CheckboxPropsType) => {
    return (
        <input type={'checkbox'} onChange={onChangeHandle} checked={isChecked}>

        </input>
    );
};

export default Checkbox;