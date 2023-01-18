import React from "react";
import s from "./Home.module.scss";
import avatar from "./img/ava3.jpg";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import { NavLink } from "react-router-dom";

const Home = ({ windowSize, colorList, color }) => {
  const fontSize = () => {
    return windowSize > 1200
      ? `${windowSize / 55}px`
      : windowSize < 1200 && windowSize > 800
      ? `${windowSize / 39}px`
      : windowSize < 800 && windowSize > 600
      ? `${windowSize / 33}px`
      : windowSize < 600 && windowSize > 500
      ? `${windowSize / 31}px`
      : `17px`;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.animate}></div>
      <Title title={"Home"} />
      <div className={s.container}>
        <div className={s.innerWrapper}>
          <div className={s.avatarContainer}>
            <img className={s.avatar} src={avatar} alt="" />
          </div>
          <div style={{ fontSize: fontSize() }} className={s.name}>
            <div className={s.text}>
              <ul>
                <li>H</li>
                <li>e</li>
                <li>l</li>
                <li>l</li>
                <li>o</li>
                <li>,</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>i</li>
                <li>'</li>
                <li>m</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>s</li>
                <li>e</li>
                <li>r</li>
                <li>g</li>
                <li>e</li>
                <li>y</li>
              </ul>
            </div>
            <span style={{ color: colorList[color] }} className={s.red}>
              Saprankov
            </span>
          </div>

          <h1 style={{ fontSize: fontSize() }} className={s.title}>
            <ul>
              <li>f</li>
              <li>r</li>
              <li>o</li>
              <li>n</li>
              <li>t</li>
              <li>e</li>
              <li>n</li>
              <li>d</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>d</li>
              <li>e</li>
              <li>v</li>
              <li>e</li>
              <li>l</li>
              <li>o</li>
              <li>p</li>
              <li>e</li>
              <li>r</li>
            </ul>
          </h1>

          <div style={{ background: colorList[color] }} className={s.btn}>
            <NavLink
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/Contacts"}
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
