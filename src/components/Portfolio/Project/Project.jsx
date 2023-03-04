import React from "react";
import s from "./Project.module.scss";
import todo from "../img/todo.jpg";

const Project = ({ title, img, color, colorList, href }) => {
  return (
    <div className={s.portfolio}>
      <div className={s.modal}>
        <div className={s.demo}>
          <a href={href} target={"_blank"}>
            Demo
          </a>
        </div>
      </div>
      <div className={s.containerImg}>
        <img className={s.img} src={img} alt="JS" />
      </div>
      <h3 className={s.portfolioText}>{title}</h3>
      <div className={s.stackBlock}>
        <div style={{ color: colorList[color] }} className={s.stack}>
          React
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          Redux
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          Typescript
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          React-router-dom v6
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          Axios
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          Redux form
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          Reselect
        </div>
        <div style={{ color: colorList[color] }} className={s.stack}>
          Material UI
        </div>
      </div>
    </div>
  );
};

export default Project;
