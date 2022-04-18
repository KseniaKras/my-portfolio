import React from 'react';
import s from './Remote.module.scss'
import c from "../common/styles/Container.module.scss";
import {NavLink} from "react-router-dom";
import {Button} from "../common/button/Button";

export const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
                <div className={s.remoteContent}>
                    <h3 className={s.title}>Looking into remote work</h3>
                    <NavLink to={'./contact'} className={s.link}>
                        <Button name={'Hire me'} callback={()=>{alert('Hire')}}/>
                    </NavLink>
                </div>
        </div>
    );
};