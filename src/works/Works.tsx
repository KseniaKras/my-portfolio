import React from 'react';
import s from "../works/Works.module.css";
import {Project} from "./project/Project";
import c from "../common/styles/Container.module.css";
import {Nav} from "../header/navigation/Nav";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={c.container}>
                <h3 className={s.worksHeader}>
                    Мои работы
                </h3>
                <div className={s.worksContent}>
                    <Project title={'Название проекта'} description={'Описание проекта'}/>
                    <Project title={'Название проекта'} description={'Описание проекта'}/>
                </div>
            </div>
        </div>
    );
};