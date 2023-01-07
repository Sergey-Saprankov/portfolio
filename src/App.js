import React, {useCallback, useEffect, useState} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import './App.css';
import Animation from "./components/Animation/Animation";
import Header from "./components/Header/Header";
import AnimatedCursor from "react-animated-cursor";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import s from "./components/Header/Burger/Burger.module.scss";
import Modal from "./components/Modal/Modal";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Loading from "./components/Loading/Loading";
import Contacts from "./components/Contacts/Contacts";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const App = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [active, setActive] = useState(false)
    const [dynamic, setDynamic] = useState('home')
    const [hide, setHide] = useState(true)
    setTimeout(() => setHide(false), 5000)
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className={active || hide? "container hidden" : 'container'}>
            <Loading hide={hide}/>
            <Modal dynamic={dynamic} setDynamic={setDynamic} active={active} setActive={setActive}/>
            <Header dynamic={dynamic} setDynamic={setDynamic} setActive={setActive} active={active}
                    windowSize={windowSize}/>
            <div className={'content'}>
                <Routes>

                    {!hide && <Route path={'/'} element={<Home windowSize={windowSize.innerWidth}/>}/>}
                    {!hide && <Route path={'/Home'} element={<Home windowSize={windowSize.innerWidth}/>}/>}
                    <Route path={'/Skills'} element={<Skills/>}/>
                    <Route path={'/Portfolio'} element={<Portfolio/>}/>
                    <Route path={'/Contacts'} element={<Contacts/>}/>
                </Routes>
            </div>
            <div className={'animationContainer'}>
                <Animation/>
            </div>
        </div>
    );
};

export default App;
