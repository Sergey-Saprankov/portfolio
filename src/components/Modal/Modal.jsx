import React from 'react';
import close from './img/close1.svg'
import s from './Modal.module.scss'
import Navigate from "../Header/Navigate/Navigate";



const Modal = ({setActive, active, setDynamic, dynamic}) => {
    return (
        <div className={active ? `${s.modal} ${s.active}` :s.modal}>
            <img onClick={() => setActive(false)} className={s.close} src={close} alt="close"/>
            <div className={s.container}>
                <Navigate dynamic={dynamic} setDynamic={setDynamic} setActive={setActive} flex={{['flex-direction']: 'column'}} active={active}/>
            </div>
        </div>
    );
};

export default Modal;