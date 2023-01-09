import React from 'react';
import s from './Loading.module.scss'

const Loading = ({hide}) => {
    return (
        <div className={!hide ? `${s.container} ${s.hide}` : s.container}>

            <ul className={s.loadingItems}>
                <li>L</li>
                <li>O</li>
                <li>A</li>
                <li>D</li>
                <li>I</li>
                <li>N</li>
                <li>G</li>
            </ul>

        </div>
    );
};

export default Loading;