import React from 'react';
import styles from './NavigationItem.module.css'

type propsType = {
    title: string,
    link: string,
    svgPath: string
}
const NavigationItem = ({title, link, svgPath}: propsType) => {
    return (
        <a href={link} className={styles.Link}>
            <svg fill='currentColor' version="1.1" width="16" height="16">
                <path
                    d={svgPath}></path>
            </svg>
            <span className={styles.Title}>
                    {title}
                </span>
        </a>
    );
};

export default NavigationItem;