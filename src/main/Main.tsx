import React from 'react';
import s from './Main.module.css'
import c from './../common/styles/Container.module.css'
import {Nav} from "../header/navigation/Nav";
import photo from '../common/images/photo.jpg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {NavLink} from "react-router-dom";
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.mainContent}>
                    <div className={s.photoBlock}>
                        <img src={photo} alt={'photo'} className={s.photo}/>
                    </div>
                    <div className={s.greetingBlock}>
                        {/*<div>*/}
                        <p className={s.greeting}>Hello, I am</p>
                        <h1 className={s.name}>Ksenia Krasnikova</h1>
                        <div className={s.animatedBar}/>
                        <div className={s.animatedText}>
                            <h3>front-end developer</h3>
                            <h3>web-developer</h3>
                            <h3>software Engineer</h3>
                        </div>
                        <div className={s.contacts}>
                            <a href={'#'} target={'_blank'} className={s.iconLink}><TelegramIcon/></a>
                            <a href={'#'} target={'_blank'} className={s.iconLink}><GitHubIcon/></a>
                            <a href={'#'} target={'_blank'} className={s.iconLink}><LinkedInIcon/></a>
                        </div>
                        {/*</div>*/}
                        <p className={s.greetingText}>
                            I'm front-end developer. I have experience in cross-browser, adaptive,
                            responsive development, creating SPA with react, redux, typescript, using RestAPI.
                            I will be glad to join your team and work together on interesting projects
                        </p>
                        <div>
                            <NavLink to={'/about'} className={s.mainButton}>
                                <span className={s.mainBtnText}>About me</span>
                                <div className={s.iconArrow}>
                                    <ArrowForwardIcon/>
                                </div>
                                <div className={s.forAnimation}/>
                            </NavLink>
                            <NavLink to={'/contact'} className={s.mainButton}>
                                <span className={s.mainBtnText}>Hire me</span>
                                <div className={s.iconArrow}>
                                    <ArrowForwardIcon/>
                                </div>
                                <div className={s.forAnimation}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Nav/>*/}
        </div>
    );
};