import React from 'react';
import s from './Header.module.css'
import {Nav} from "./navigation/Nav";

export const Header = () => {
    return (
        <div className={s.headerBlock}>
            <Nav />
        </div>
    );
};