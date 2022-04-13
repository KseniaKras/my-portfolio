import React, {FC} from "react";
import s from "./IntroBlock.module.scss";
import photo from "../../common/images/photo.jpg";

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
};