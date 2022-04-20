import {IconType} from "../../DATA/MainComponenetData";
import React, {FC} from "react";
import s from "./IconsBlock.module.scss";


type IconsBlockPropsType = {
    data: IconType[]
    fontSize?: "small" | "inherit" | "default" | "large" | "medium"
    className?: string
}

export const IconsBlock: FC<IconsBlockPropsType> = ({data, fontSize, className}) => {

    let finalIconClassName = className ? `${s.iconLink} ${className}` : s.iconLink;
    let icons = data.map(i => {
        return <a key={i.id} href={i.href} target={'_blank'} rel="noreferrer" className={finalIconClassName}>
            <i.icon fontSize={fontSize}/>
        </a>
    })
    return (
        <div className={s.contacts}>
            {icons}
        </div>
    )
}