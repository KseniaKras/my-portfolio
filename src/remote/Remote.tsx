import React from 'react';
import s from './Remote.module.css'
import c from "../common/styles/Container.module.css";

export const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={c.container}>
                <div className={s.remoteContent}>
                    <h3 className={s.title}>Рассматриваю варианты удаленной работы</h3>
                    <a href={'#'} className={s.link}>Нанять меня</a>
                </div>
            </div>
        </div>
    );
};