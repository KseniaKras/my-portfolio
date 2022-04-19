import React, {FC} from "react";
import s from './MyContacts.module.scss';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import BusinessIcon from '@material-ui/icons/Business';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


type MyContactsPropsType = {
    title: string
    text: string
}
export const MyContacts: FC<MyContactsPropsType> = ({title, text}) => {

    let showIcon = () => {
        if (title === 'Address') return <BusinessIcon/>
        if (title === 'Email') return <AlternateEmailIcon/>
        if (title === 'Phone') return <PhoneInTalkIcon/>
    }

    return (
        <div className={s.myContactsBlock}>
            <div className={s.icon}>
                {showIcon()}
            </div>
            <div className={s.contactItem}>
                <h3>{title}</h3>
                <span>{text}</span>
            </div>
        </div>
    )
}