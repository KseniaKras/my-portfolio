import React, {useEffect} from 'react';
import s from "./PhotoBlock.module.scss";
import photo from "../../common/images/photo.jpg";
import Particles from "react-tsparticles";
import {tsParticles} from "tsparticles-engine";


const PhotoBlock = () => {

    useEffect(() => {
        tsParticles
            .loadJSON("tsparticles", "presets/default.json")
            .then(container => {
                console.log("callback - tsparticles config loaded");
            })
            .catch(error => {
                console.error(error);
            });
    })

    return (
        <div className={s.photoBlock}>
            {/*@ts-ignore*/}
            <Particles
                className={s.tsparticles}
                params={{
                    background: {
                        image: 'photo',
                        size: 'cover'
                    },
                    fullScreen: false,
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {enable: true, mode: 'push'},
                            onHover: {enable: true, mode: 'repulse'},
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {particles_nb: 4},
                            repulse: {distance: 100, duration: 0.4},
                        },
                    },
                    particles: {
                        color: {value: '#ffffff'},
                        links: {color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1},
                        move: {
                            bounce: true,
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {density: {enable: true, value_area: 800}, value: 40},
                        opacity: {value: 0.5},
                        shape: {type: 'polygon'},
                        size: {random: true, value: 3},
                    },
                    detectRetina: true,
                }}
            />
            <img src={photo} alt={'photo'} className={s.photo}/>
        </div>
    );
};

export default PhotoBlock;