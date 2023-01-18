import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import Animation from "./components/Animation/Animation";
import Header from "./components/Header/Header";
import AnimatedCursor from "react-animated-cursor";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import s from "./components/Header/Burger/Burger.module.scss";
import Modal from "./components/Modal/Modal";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Loading from "./components/Loading/Loading";
import Contacts from "./components/Contacts/Contacts";
import Setting from "./components/Setting/Setting";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const colorList = {
  ["1"]: "rgb(65, 105, 225)",
  ["2"]: "rgb(102, 185, 92)",
  ["3"]: "rgb(255, 152, 0)",
  ["4"]: "rgb(255, 94, 148)",
  ["5"]: "rgb(250, 91, 15)",
  ["6"]: "rgb(243, 153, 119)",
  ["7"]: "rgb(146, 0, 238)",
  ["8"]: "rgb(0, 212, 189)",
  ["9"]: "rgb(94, 158, 159)",
  ["10"]: "rgb(235, 74, 76)",
  ["11"]: "rgb(102, 109, 65)",
  ["12"]: "rgb(254, 0, 0)",
};

const App = () => {
  const [color, setColor] = useState("10");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [active, setActive] = useState(false);
  const [dynamic, setDynamic] = useState("home");
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => setHide(false), 3000);

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={active || hide ? "container hidden" : "container"}>
      <Setting color={color} setColor={setColor} colorList={colorList} />
      <Loading hide={hide} />
      <Modal
        color={color}
        colorList={colorList}
        dynamic={dynamic}
        setDynamic={setDynamic}
        active={active}
        setActive={setActive}
      />
      <Header
        color={color}
        colorList={colorList}
        dynamic={dynamic}
        setDynamic={setDynamic}
        setActive={setActive}
        active={active}
        windowSize={windowSize}
      />
      <div className={"content"}>
        <Routes>
          {<Route path={"/"} element={<Navigate to={"/Home"} />} />}
          {!hide && (
            <Route
              path={"/Home"}
              element={
                <Home
                  color={color}
                  colorList={colorList}
                  windowSize={windowSize.innerWidth}
                />
              }
            />
          )}
          <Route path={"/Skills"} element={<Skills />} />
          <Route
            path={"/Portfolio"}
            element={<Portfolio color={color} colorList={colorList} />}
          />
          <Route
            path={"/Contacts"}
            element={<Contacts color={color} colorList={colorList} />}
          />
        </Routes>
      </div>
      <div className={"animationContainer"}>
        <Animation color={color} colorList={colorList} />
      </div>
    </div>
  );
};

export default App;
