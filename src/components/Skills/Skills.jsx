import React from 'react';
import s from './Skills.module.scss'
import javascript from './img/javaScript.svg'
import ts from './img/typeScript.svg'
import react from './img/react.svg'
import redux from './img/reduxToolkit.svg'
import formik from './img/formik.svg'
import rest from './img/restAPI.svg'
import git from './img/git.svg'
import test from './img/unitTest.svg'
import Title from "../Title/Title";
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.animate}></div>
            <Title title={'Skills'}/>
            <div className={s.wrapper}>
                <div className={s.innerWrapper}>
                    <div className={s.skillContainer}>
                        <Skill src={javascript} alt={"JS"}/>
                        <Skill src={ts} alt={"TS"}/>
                        <Skill src={react} alt={"React"}/>
                        <Skill src={redux} alt={"Redux"}/>
                        <Skill src={formik} alt={"Formik"}/>
                        <Skill src={rest} alt={"RestApi"}/>
                        <Skill src={git} alt={"Git"}/>
                        <Skill src={test} alt={"Unit test"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;