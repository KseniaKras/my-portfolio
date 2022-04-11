import React, {FC} from 'react';
import s from './Nav.module.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WebIcon from '@material-ui/icons/Web';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <NavItem text={'Home'} path={'/home'}/>
            <NavItem text={'About me'} path={'/about'}/>
            <NavItem text={'Portfolio'} path={'/portfolio'}/>
            <NavItem text={'Contact'} path={'/contact'}/>
        </div>
    );
};


type NavTextPropsType = {
    text: string
    path: string
}
export const NavItem: FC<NavTextPropsType> = ({text, path}) => {

    const showIcon = () => {
        if (text === 'Home') return <HomeRoundedIcon/>
        if (text === 'About me') return <PersonRoundedIcon/>
        if (text === 'Portfolio') return <WebIcon/>
        if (text === 'Contact') return <ChatRoundedIcon/>
    }

    return <div className={s.navLinkBlock}>
        <NavLink
            to={path}
            className={({isActive}) => isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`}
        >
            <div className={s.navText}>{text}</div>
            <div className={s.navIcon}>{showIcon()}</div>
        </NavLink>
    </div>
}


// navData => navData.isActive ? `${s.active} ${s.navLink}` : s.navLink}