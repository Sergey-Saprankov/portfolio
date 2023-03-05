import React from "react";
import s from "./Navigate.module.scss";
import { NavLink } from "react-router-dom";
import cv from "./myCV.pdf";

const activeList = {
  ["1"]: "one",
  ["2"]: "two",
  ["3"]: "three",
  ["4"]: "four",
  ["5"]: "five",
  ["6"]: "six",
  ["7"]: "seven",
  ["8"]: "eight",
  ["9"]: "nine",
  ["10"]: "ten",
  ["11"]: "eleven",
  ["12"]: "twelve",
};

const Navigate = ({ flex, setDynamic, setActive, color, colorList }) => {
  return (
    <ul style={flex} className={s.navigation}>
      <li onClick={() => setDynamic("home")} className={s.item}>
        <NavLink
          onClick={() => setActive(false)}
          to={"/Home"}
          className={({ isActive }) =>
            isActive ? `${s.link}  ${s[activeList[color]]}` : s.link
          }
        >
          Home
        </NavLink>
      </li>
      <li onClick={() => setDynamic("skills")} className={s.item}>
        <NavLink
          onClick={() => setActive(false)}
          to={"/Skills"}
          className={({ isActive }) =>
            isActive ? `${s.link} ${s[activeList[color]]}` : s.link
          }
        >
          Skills
        </NavLink>
      </li>
      <li onClick={() => setDynamic("portfolio")} className={s.item}>
        <NavLink
          onClick={() => setActive(false)}
          to={"/Portfolio"}
          className={({ isActive }) =>
            isActive ? `${s.link} ${s[activeList[color]]}` : s.link
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li onClick={() => setDynamic("contacts")} className={s.item}>
        <NavLink
          onClick={() => setActive(false)}
          to={"/Contacts"}
          className={({ isActive }) =>
            isActive ? `${s.link} ${s[activeList[color]]}` : s.link
          }
        >
          Contacts
        </NavLink>
      </li>
      <li
        style={{
          background: colorList[color],
        }}
        className={`${s.item} ${s.download}`}
      >
        <a className={s.link} target={"_blank"} href={cv}>
          Download CV
        </a>
      </li>
    </ul>
  );
};

export default Navigate;
