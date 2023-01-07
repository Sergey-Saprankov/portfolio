import React from 'react';
import s from "./Project.module.scss";
import todo from "../img/todo.jpg";

const Project = ({title, img}) => {
    return (
        <div className={s.portfolio}>
            <div className={s.modal}>
                <div className={s.demo}>
                    <a href="#">Demo</a>
                </div>
            </div>
            <div className={s.containerImg}>
                <img className={s.img} src={img} alt="JS"/>
            </div>
            <h3 className={s.portfolioText}>
                {title}
            </h3>
            <div className={s.stackBlock}>
                <div className={s.stack}>
                    React
                </div>
                <div className={s.stack}>
                    Redux
                </div>
                <div className={s.stack}>
                    Typescript
                </div>
                <div className={s.stack}>
                    React-router-dom v6
                </div>
                <div className={s.stack}>
                    Axios
                </div>
                <div className={s.stack}>
                    Redux form
                </div>
                <div className={s.stack}>
                    Reselect
                </div>
                <div className={s.stack}>
                    Material UI
                </div>
            </div>
        </div>
    );
};

export default Project;