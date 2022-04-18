import React from 'react';
import s from './Project.module.scss'
import {Button} from "../../common/button/Button";


type ProjectPropsType = {
    title: string
    description: string
    image: string
}

export const Project = ({title, description, image}:ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.image}>
                {/*<img src={image} alt={''}/>*/}
                <a href={'#'} className={s.link}>
                    <Button name={'Look'} callback={()=>{}}/>
                </a>
            </div>
            <span className={s.title}>{title}</span>
            <span className={s.description}>{description}</span>
        </div>
    );
};