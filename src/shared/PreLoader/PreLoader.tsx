import style from './PreLoader.module.css'
import React from 'react';
import loader from '../Assets/tail-spin.svg'


const PreLoader = () => {
    return (
        <div className={style.preLoader}>
            <img className={style.preLoaderImg} src={loader} alt={"preLoader"}/>
        </div>
    );
};

export default PreLoader;