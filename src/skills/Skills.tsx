import React, {FC} from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {RemoteWork} from "../remote/Remote";
import photo from '../common/images/photo.jpg'


export const Skills: FC = () => {
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


