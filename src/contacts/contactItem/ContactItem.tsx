import React, {FC} from "react";
import s from './ContactItem.module.scss';



type MyContactsPropsType = {
    title: string
    text: string
}
export const ContactItem: FC<MyContactsPropsType> = ({title, text, children}) => {
    //
    // let showIcon = () => {
    //     if (title === 'Address') return <BusinessIcon/>
    //     if (title === 'Email') return <AlternateEmailIcon/>
    //     if (title === 'Phone') return <PhoneInTalkIcon/>
    // }

    return (
        <div className={s.myContactsBlock}>
            <div className={s.icon}>
                {/*{showIcon()}*/}
                {children}
            </div>
            <div className={s.contactItem}>
                <h3>{title}</h3>
                <span>{text}</span>
            </div>
        </div>
    )
}