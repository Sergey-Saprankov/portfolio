import React from 'react';
import s from './Title.module.scss'

const Title = ({title}) => {
    return (
        <div className={s.titleSection}>
            <div className={s.titleAbsolute}>
                {title.split('').map(w => <div>{w}</div>)}
            </div>
            <h2 className={s.title}>
                {title}
            </h2>
        </div>
    );
};

export default Title;