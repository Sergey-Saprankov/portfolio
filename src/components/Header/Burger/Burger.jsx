import React, {useState} from 'react';
import s from './Burger.module.scss'
import close from './img/close1.svg'

const Burger = ({setActive, active}) => {


    const onClickHandler = () => {
        setActive(true)
    }
    return (
        <>
            {!active && <div onClick={onClickHandler} className={s.container}>
                <div className={s.block}></div>
                <div className={s.block}></div>
                <div className={s.block}></div>
            </div>}
        </>
    );
};

export default Burger;