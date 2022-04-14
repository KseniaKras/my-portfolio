import React, {FC} from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {RemoteWork} from "../remote/Remote";
import photo from '../common/images/photo.jpg'
import {PersonalDATA, PersonalDataType} from "../DATA";
import {Button} from "../common/button/Button";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Skills: FC = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={c.container}>
                <div className={s.skillsContent}>
                    <BlockTitle introText={'Intro'} title={'About me'}/>

                    <PersonalInfo data={PersonalDATA}/>

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

type PersonalInfoPropsType = {
    data: PersonalDataType
}
export const PersonalInfo: FC<PersonalInfoPropsType> = ({data}) => {

    let infoItems = data.map((item, index) => {
        return <ul key={index} className={s.items}>
            <li>
                {item[0]}
                <span>{item[1]}</span>
            </li>
        </ul>
    })

    return (
        <div className={s.personalInfoBlock}>
            <div className={s.photoBlock}>
                <img src={photo} alt="photo"/>
            </div>
            <div className={s.infoBlock}>
                <h3>
                    Personal
                    <span>Information</span>
                </h3>
                {infoItems}
            </div>
            <div className={s.contacts}>
                <div className={s.icons}>
                    <a href={'#'} target={'_blank'} className={s.iconLink}><TelegramIcon fontSize={"large"}/></a>
                    <a href={'#'} target={'_blank'} className={s.iconLink}><GitHubIcon fontSize={"large"}/></a>
                    <a href={'#'} target={'_blank'} className={s.iconLink}><LinkedInIcon fontSize={"large"}/></a>
                </div>
                {/*<button>Download CV</button>*/}
                <Button name={'Download CV'} callback={() => {
                    alert('Download')
                }} className={s.button}/>
            </div>
        </div>
    )
}


export const SkillsBlock: FC = () => {

    return (
        <div>

        </div>
    )
}

//
// export const PersonalInfoItem: FC = () => {
//
//     return (
//         <span>
//
//         </span>
//     )
// }

