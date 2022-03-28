import React from 'react';
import s from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <h4 className={s.name}>Ксения Красникова</h4>
            <div className={s.someBlocks}>
                <div className={s.blockItem}></div>
                <div className={s.blockItem}></div>
                <div className={s.blockItem}></div>
                <div className={s.blockItem}></div>
            </div>
            <span className={s.law}>2022 Все права защищены</span>
        </div>
    );
};