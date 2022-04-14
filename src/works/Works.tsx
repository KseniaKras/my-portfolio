import React from 'react';
import s from "./Works.module.scss";
import {Project} from "./project/Project";
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={c.container}>
                <div className={s.worksContent}>
                    <BlockTitle title={'My projects'}/>

                    <div className={s.projectsBlock}>
                        <Project
                            title={'Название проекта'}
                            description={'Описание проекта'}
                        />
                        <Project
                            title={'Название проекта'}
                            description={'Описание проекта'}
                        />
                        <Project
                            title={'Название проекта'}
                            description={'Описание проекта'}
                        />
                        <Project
                            title={'Название проекта'}
                            description={'Описание проекта'}
                        />
                        <Project
                            title={'Название проекта'}
                            description={'Описание проекта'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};