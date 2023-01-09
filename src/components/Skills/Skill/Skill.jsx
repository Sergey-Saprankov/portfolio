import React from 'react';
import s from './Skill.module.scss'

const Skill = ({src, alt}) => {
    return (
        <div className={s.skill}>
            <div className={s.containerImg}>
                <img className={s.img} src={src} alt={alt}/>
            </div>
            <h3 className={s.skillText}>
                JavaScript
            </h3>
        </div>
    );
};

export default Skill;