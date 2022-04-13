import React, {FC} from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import c from "../common/styles/Container.module.css";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {RemoteWork} from "../remote/Remote";
import photo from '../common/images/photo.jpg'


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={c.container}>
                <div className={s.skillsContent}>
                    <BlockTitle introText={'Intro'} title={'About me'}/>


                    <div className={s.skillsItems}>
                        <Skill title={'React'}
                               description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                        <Skill title={'React'} description={'Описание навыка'}/>
                    </div>
                    <RemoteWork/>
                </div>
            </div>
        </div>
    );
};


export const IntroBlock: FC = () => {


    return (
        <div className={s.intro}>
            <div className={s.photoBlock}>
                <img src={photo} alt={'photo'}/>
            </div>
            <div className={s.introInfo}>
                <h3>Personal Information</h3>
                <IntroBlockItem property={''} value={''}/>
            </div>
        </div>
    );
}

type IntroBlockItemPropsType = {
    property: string
    value: string
}
export const IntroBlockItem: FC<IntroBlockItemPropsType> = ({property, value}) => {
    return (
        <span className={s.itemBlock}>
            <span className={s.property}>{property}</span>
            <span className={s.value}>{value}</span>
        </span>

    )
}