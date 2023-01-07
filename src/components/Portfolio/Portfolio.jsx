import React, {useState} from 'react';
import s from './Portfolio.module.scss'
import todo from './img/todo.jpg'
import social from './img/social.jpg'
import cards from './img/cards.jpg'
import javascript from "../Skills/img/javaScript.svg";
import Project from "./Project/Project";

const Portfolio = () => {
    return (
        <div className={s.container}>
            <div className={s.animate}></div>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    Portfolio
                </h2>
                <div className={s.content}>
                    <div className={s.description}>
                        <div>P</div>
                        <div>o</div>
                        <div>r</div>
                        <div>t</div>
                        <div>f</div>
                        <div>o</div>
                        <div>l</div>
                        <div>i</div>
                        <div>o</div>
                    </div>
                    <div className={s.contentBlock}>

                        <div className={s.portfolioContainer}>
                            <Project title={'Todolist'} img={todo}/>
                            <Project title={'SOCIAL NETWORK'} img={social}/>
                            <Project title={'QUESTIONS APP'} img={cards}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;