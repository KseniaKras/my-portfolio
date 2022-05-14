import React, {FC} from "react";
import s from "./InfoBlock.module.scss";
import photo from "../../common/images/photo.jpg";
import {IconsBlock} from "../../main/icons/IconsBlock";
import {MainData} from "../../DATA/MainComponenetData";
import {PersonalDataType} from "../../DATA/BlockAboutData";


type PersonalInfoPropsType = {
    data: PersonalDataType
}

export const PersonalInfoBlock: FC<PersonalInfoPropsType> = ({data}) => {
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
                    <IconsBlock
                        data={MainData.icons}
                        fontSize={"large"}
                        className={s.iconLink}
                    />
                </div>
                <a href={"https://drive.google.com/file/d/13R2bLAlBk5jjV_jDXSI519anacpwHTsf/view?usp=sharing"}
                   target={"_blank"}
                   rel={"noreferrer"}
                   className={s.linkToCV}
                >
                    Download CV
                </a>
            </div>
        </div>
    )
}