import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import c from "../common/styles/Container.module.css";
import {Nav} from "../header/navigation/Nav";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={c.container}>
                    <h3 className={s.skillsHeader}>
                        Мои скиллы
                    </h3>
                    <div className={s.skillsItems}>
                        <Skill title={'React'}
                               description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                    </div>
            </div>
        </div>
    );
};