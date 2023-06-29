import React from 'react';
import styles from './NavigationItem.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../shared/store/store";
import {setNavBarOpenAC} from "../../app/model/app-reducer";

type propsType = {
    title: string,
    link: string,
    svgPath: string
}
const NavigationItem = ({title, link, svgPath}: propsType) => {
    const dispatch = useAppDispatch()

    const onClickHandle = () => {
        dispatch(setNavBarOpenAC({isOpen: false}))
    }
    return (
        <NavLink onClick={onClickHandle} to={link} className={({isActive}) => isActive ? styles.ActiveLink : styles.Link}>
            <svg fill='currentColor' version="1.1" width="16" height="16">
                <path
                    d={svgPath}></path>
            </svg>
            <span className={styles.Title}>
                    {title}
                </span>
        </NavLink>
    );
};

export default NavigationItem;