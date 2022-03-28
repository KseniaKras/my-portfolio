import React from 'react';
import s from './Skill.module.css'


type SkillComponentPropsType = {
    title: string
    description: string
}


export const Skill = ({title, description}:SkillComponentPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.image}/>
            <span className={s.title}>{title}</span>
            <div className={s.description}>{description}</div>
        </div>
    );
};