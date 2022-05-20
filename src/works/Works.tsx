import React from 'react';
import s from "./Works.module.scss";
import {Project} from "./project/Project";
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {ProjectsData} from "../DATA/ProjectsComponentData";


export const Works = () => {

    const projectElements = ProjectsData.projects.map(item => {
        return <Project key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.img}
        />
    })

    return (
        <div className={s.worksBlock}>
            <div className={c.container}>
                <div className={s.worksContent}>
                    <BlockTitle title={ProjectsData.blockTitle.title}/>

                    <div style={{color: 'white', fontSize: '20px'}}>Page in development process. To see my projects
                        follow the link to
                        <a target={'_blank'} rel={'noreferrer'} style={{color: 'white'}}
                           href="https://github.com/KseniaKras"> GiHub </a>
                        or you can open and download my CV in block About
                    </div>

                    <div className={s.projectsBlock}>
                        {projectElements}
                    </div>
                </div>
            </div>
        </div>
    );
};