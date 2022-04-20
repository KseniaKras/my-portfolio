import React from 'react';
import s from './Main.module.scss'
import c from '../common/styles/Container.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {NavLink} from "react-router-dom";
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhotoBlock from "./photoBlock/PhotoBlock";
import {BlockTitle} from "../common/blockTitle/BlockTitle";


export const Main = () => {

    return (
            <div className={c.container}>
                <div className={s.mainContent}>
                    <div className={s.mainPhoto}><PhotoBlock /></div>
                    <div className={s.greetingBlock}>
                        <BlockTitle introText={'Hello, I am'} title={'Ksenia Krasnikova'} />
                        <div className={s.animatedText}>
                            <h3 className={s.animatedTextTitle}>front-end developer</h3>
                            <h3 className={s.animatedTextTitle}>web-developer</h3>
                            <h3 className={s.animatedTextTitle}>software Engineer</h3>
                        </div>
                        <div className={s.contacts}>
                            <a href={'#'} target={'_blank'} className={s.iconLink}><TelegramIcon/></a>
                            <a href={'#'} target={'_blank'} className={s.iconLink}><GitHubIcon/></a>
                            <a href={'#'} target={'_blank'} className={s.iconLink}><LinkedInIcon/></a>
                        </div>
                        <p className={s.greetingText}>
                            I'm front-end developer. I have experience in cross-browser, adaptive,
                            responsive development, creating SPA with react, redux, typescript, using RestAPI.
                            I will be glad to join your team and work together
                        </p>
                        <div className={s.buttonsBlock}>
                            <NavLink to={'/about'} className={s.mainButton}>
                                <span className={s.mainBtnText}>About me</span>
                                <div className={s.iconArrow}>
                                    <ArrowForwardIcon/>
                                </div>
                            </NavLink>
                            <NavLink to={'/contact'} className={s.mainButton}>
                                <span className={s.mainBtnText}>Hire me</span>
                                <div className={s.iconArrow}>
                                    <ArrowForwardIcon/>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
    );
};