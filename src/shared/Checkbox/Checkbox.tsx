import React from 'react';
import styles from './Checkbox.module.css'

type CheckboxPropsType = {
    isChecked: boolean
}
const Checkbox = ({isChecked}:CheckboxPropsType) => {
    return (
        <input type={'checkbox'}>

        </input>
    );
};

export default Checkbox;