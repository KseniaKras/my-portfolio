import React from 'react';
import s from './Project.module.css'


type ProjectPropsType = {
    title: string
    description: string
}

export const Project = ({title, description}:ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.image}>
                {/*<img src={''} />*/}
                <a href={'#'} className={s.link}>Смотреть</a>
            </div>
            <span className={s.title}>{title}</span>
            <span className={s.description}>{description}</span>
        </div>
    );
};