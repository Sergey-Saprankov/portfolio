import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Navigate from "./Navigate/Navigate";
import Burger from "./Burger/Burger";

function Menu() {
  return null;
}

const Header = ({
  windowSize,
  setActive,
  active,
  setDynamic,
  dynamic,
  color,
  colorList,
}) => {
  return (
    <div className={s.container}>
      <div className={s.innerWrapper}>
        <div className={s.logoContainer}>
          <div style={{ color: colorList[color] }} className={s.circle}>
            S
          </div>
          <div>Saprankov</div>
        </div>

        {windowSize.innerWidth > 980 ? (
          <Navigate
            color={color}
            colorList={colorList}
            dynamic={dynamic}
            setDynamic={setDynamic}
            setActive={setActive}
            flex={{}}
          />
        ) : (
          <Burger setActive={setActive} active={active} />
        )}
      </div>
    </div>
  );
};

export default Header;
