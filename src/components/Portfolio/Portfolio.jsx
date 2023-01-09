import React, {useState} from 'react';
import s from './Portfolio.module.scss'
import todo from './img/todo.jpg'
import social from './img/social.jpg'
import cards from './img/cards.jpg'
import javascript from "../Skills/img/javaScript.svg";
import Project from "./Project/Project";
import Title from "../Title/Title";

const Portfolio = () => {
    return (
        <div className={s.container}>
            <div className={s.animate}></div>
            <Title title={'Portfolio'}/>
            <div className={s.wrapper}>
                <div className={s.contentBlock}>
                    <div className={s.portfolioContainer}>
                        <Project title={'Todolist'} img={todo}/>
                        <Project title={'SOCIAL NETWORK'} img={social}/>
                        <Project title={'QUESTIONS APP'} img={cards}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;