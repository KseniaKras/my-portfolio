import React from 'react';
import s from './Main.module.css'
import c from './../common/styles/Container.module.css'
import {Nav} from "../header/navigation/Nav";
import photo from '../common/images/myphoto.jpg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={s.mainBlockElement}/>
            <div className={c.container}>
                <div className={s.mainContent}>
                    <div className={s.photoBlock}>
                        <img src={photo} alt={'photo'} className={s.photo}/>
                    </div>
                    <div className={s.greetingBlock}>
                        <h1>
                            <div className={s.name}>I'm Ksenia</div>
                            <div className={s.name}>Krasnikova.</div>
                            <span className={s.profession}>front-end developer</span>
                        </h1>
                        <p className={s.greetingText}>
                            Hello, I'm front-end developer. I have experience in
                            creating SPA with react/redux/typescript/axios.
                        </p>
                        <button className={s.mainButton}>
                            <span className={s.mainBtnText}>About me</span>
                            <div className={s.iconArrow}>
                                <ArrowForwardIcon/>
                            </div>
                            <div className={s.forAnimation}/>
                        </button>
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    );
};