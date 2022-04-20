import React, {FC} from 'react';
import s from './About.module.scss'
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {RemoteWorkBlock} from "../remote/Remote";
import {AboutBlockData} from "../DATA/BlockAboutData";
import {PersonalInfoBlock} from "./personalInfoBlock/PersonalInfoBlock";
import {SkillsBlock} from "./skills/Skills";


export const About: FC = () => {
    return (
        <div className={c.container}>
            <BlockTitle
                introText={AboutBlockData.blockTitle.intro}
                title={AboutBlockData.blockTitle.title}
            />
            <div className={s.skillsContent}>
                <PersonalInfoBlock
                    data={AboutBlockData.personalInfo}
                />
                <SkillsBlock
                    skillsData={AboutBlockData.skillsBlock}
                />
                <RemoteWorkBlock/>
            </div>
        </div>
    );
};



