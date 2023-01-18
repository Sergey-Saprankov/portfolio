import React, { useState } from "react";
import s from "./Setting.module.scss";
import setting from "./img/setting.svg";

const Setting = ({ setColor, colorList, color }) => {
  const [transition, setTransition] = useState(false);
  const transitionHandler = () => {
    setTransition(!transition);
  };
  const colorArr = new Array(12).fill(null).map((el, i) => {
    const onClickHandler = () => {
      setColor(+(i + 1));
      setTransition(!transition);
    };
    return (
      <li
        onClick={onClickHandler}
        style={{ background: colorList[i + 1] }}
        className={s.item}
        key={i + 1}
      ></li>
    );
  });
  return (
    <div
      className={transition ? `${s.container} ${s.transition}` : s.container}
    >
      <div className={s.wrapper}>
        <div className={s.iconBlock}>
          <img
            onClick={transitionHandler}
            className={s.icon}
            src={setting}
            alt="setting"
          />
        </div>
        <div className={s.settingBlock}>
          <h3>Change Color</h3>
          <ul className={s.colorBlock}>{colorArr}</ul>
        </div>
      </div>
    </div>
  );
};

export default Setting;
