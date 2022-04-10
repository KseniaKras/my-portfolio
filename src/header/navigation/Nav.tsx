import React, {FC} from 'react';
import s from './Nav.module.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WebIcon from '@material-ui/icons/Web';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';

export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <NavItem text={'Home'}/>
            <NavItem text={'About me'}/>
            <NavItem text={'Portfolio'}/>
            <NavItem text={'Contact'}/>
        </div>
    );
};


type NavTextPropsType = {
    text: string
}
export const NavItem: FC<NavTextPropsType> = ({text}) => {

    const showIcon = () => {
        if (text === 'Home') return <HomeRoundedIcon/>
        if (text === 'About me') return <PersonRoundedIcon/>
        if (text === 'Portfolio') return <WebIcon/>
        if (text === 'Contact') return <ChatRoundedIcon/>
    }

    return <div className={s.navLinkBlock}>
        <a href='#' className={s.navLink}>
            <div className={s.navText}>{text}</div>
            <div className={s.navIcon}>{ showIcon() }</div>
        </a>
    </div>
}


// navData => navData.isActive ? `${s.active} ${s.navLink}` : s.navLink}