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
            <div className={s.frontImage}>
                <img src={'https://media.proglib.io/wp-uploads/2019/07/clean-code.jpg'} alt={'Photo of project'}/>
            </div>
            <div className={s.backBlock}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
                    <Button name={'Look'} callback={()=>{}}/>
            </div>
        </div>
    );
};