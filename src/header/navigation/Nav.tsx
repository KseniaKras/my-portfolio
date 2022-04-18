import React, {FC} from 'react';
import s from './Nav.module.scss'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WebIcon from '@material-ui/icons/Web';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import {NavLink} from 'react-router-dom';


export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <NavItem text={'Home'} path={'/'}/>
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
        if (text === 'Home') return <HomeRoundedIcon fontSize="large" />
        if (text === 'About me') return <PersonRoundedIcon fontSize="large" />
        if (text === 'Portfolio') return <WebIcon fontSize="large" />
        if (text === 'Contact') return <ChatRoundedIcon fontSize="large" />
    }

    return (
        <div className={s.navLinkBlock}>
            <NavLink
                to={path}
                className={({isActive}) => isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`}
            >
                <div className={s.navIcon}>
                    <span className={s.icon}>{showIcon()}</span>
                </div>
                <div className={s.navText}>
                    {text}
                </div>

            </NavLink>
        </div>
    )
}
