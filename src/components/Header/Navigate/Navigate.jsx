import React from 'react';
import s from "./Navigate.module.scss";
import {NavLink} from "react-router-dom";

const Navigate = ({flex, setDynamic, setActive}) => {
    return (
        <ul style={flex} className={s.navigation}>
            <li onClick={() => setDynamic('home')} className={s.item}>
                <NavLink onClick={() => setActive(false)}  to={'/Home'} className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} >
                    Home
                </NavLink>
            </li>
            <li onClick={() => setDynamic('skills')} className={s.item}>
                <NavLink onClick={() => setActive(false)} to={'/Skills'} className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}>
                    Skills
                </NavLink>
            </li>
            <li onClick={() => setDynamic('portfolio')} className={s.item}>
                <NavLink to={'/portfolio'} className={s.link} href="">
                    Portfolio
                </NavLink>
            </li>
            <li onClick={() => setDynamic('contacts')} className={s.item}>
                <a className={s.link} href="">
                    Contacts
                </a>
            </li>
            <li className={`${s.item} ${s.download}`}>
                <a className={s.link} href="">
                    Download CV
                </a>
            </li>
        </ul>
    );
};

export default Navigate;