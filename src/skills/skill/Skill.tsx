import React from 'react';
import s from './Skill.module.scss'
import react from '../../common/images/skills/atom.png'


type SkillComponentPropsType = {
    title: string
    description: string
    image?: string
}


export const Skill = ({title, description, image}:SkillComponentPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.imageBlock}>
                <img src={react} alt="react"/>
                {/*<img src={image} alt="react"/>*/}
            </div>
            <span className={s.title}>{title}</span>
            {/*<div className={s.description}>{description}</div>*/}
        </div>
    );
};