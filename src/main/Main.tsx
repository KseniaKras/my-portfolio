import React from 'react';
import s from './Main.module.css'
import c from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.mainContent}>
                    <div className={s.greetingText}>
                        <h5>Hello, I'm</h5>
                        <h3>Ksenia Krasnikova</h3>
                        <span>front-end developer</span>
                    </div>
                    <div className={s.mainPhoto}>
                        <img src={''} alt={'photo'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};