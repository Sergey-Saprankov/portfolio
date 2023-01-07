import React, {useState} from 'react';
import s from './Skills.module.scss'
import javascript from './img/javaScript.svg'
import ts from './img/typeScript.svg'
import react from './img/react.svg'
import redux from './img/reduxToolkit.svg'
import formik from './img/formik.svg'
import rest from './img/restAPI.svg'
import git from './img/git.svg'
import test from './img/unitTest.svg'
import Preloader from "../Preloader/Preloader";


const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    Skills
                </h2>
                <div className={s.wrapperContent}>
                    <div className={s.description}>
                        <div>S</div>
                        <div>k</div>
                        <div>i</div>
                        <div>l</div>
                        <div>l</div>
                        <div>s</div>
                    </div>


                    <div className={s.skillContainer}>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={javascript} alt="JS"/>
                            </div>
                            <h3 className={s.skillText}>
                                JavaScript
                            </h3>
                        </div>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={ts} alt="TS"/>
                            </div>
                            <h3 className={s.skillText}>
                                TypeScript
                            </h3>
                        </div>
                        <div className={s.skill}>

                            <div className={s.containerImg}>
                                <img className={s.img} src={react} alt="React"/>
                            </div>
                            <h3 className={s.skillText}>
                                React
                            </h3>
                        </div>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={redux} alt="Redux"/>
                            </div>
                            <h3 className={s.skillText}>
                                Redux
                            </h3>
                        </div>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={formik} alt="Formik"/>
                            </div>
                            <h3 className={s.skillText}>
                                Formik
                            </h3>
                        </div>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={rest} alt="RestApi"/>
                            </div>
                            <h3 className={s.skillText}>
                                RestApi
                            </h3>
                        </div>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={git} alt="Git"/>
                            </div>
                            <h3 className={s.skillText}>
                                Git
                            </h3>
                        </div>
                        <div className={s.skill}>
                            <div className={s.containerImg}>
                                <img className={s.img} src={test} alt="Unit test"/>
                            </div>
                            <h3 className={s.skillText}>
                                Unit test
                            </h3>
                        </div>
                    </div>
                </div>


            </div>
            }
        </div>
    );
};

export default Skills;