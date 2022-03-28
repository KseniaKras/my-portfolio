import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <a href='#' >Home</a>
            <a href='' >About me</a>
            <a href='' >Skills</a>
            <a href='' >Portfolio</a>
            <a href='' >Contact</a>
        </div>
    );
};