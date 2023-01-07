import React from 'react';
import s from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.container}>
            <div className={s.loader}>
                <div className={s.outer}></div>
                <div className={s.middle}></div>
                <div className={s.inner}></div>
                <div className={s.dot}></div>
            </div>
        </div>
    );
};

export default Preloader;