import react from "./common/images/skills/atom.png";
import reduxThunk from "./common/images/skills/reduxThunk.png";
import redux from "./common/images/skills/redux.png";
import TS from "./common/images/skills/typescript.png";
import JS from "./common/images/skills/js.png";
import html from "./common/images/skills/html.png";
import css from "./common/images/skills/css.png";
import sass from "./common/images/skills/sass.png";
import git from "./common/images/skills/git.png";
import material from "./common/images/skills/material.png";
import axios from "./common/images/skills/axios2.png";
import restAPI from "./common/images/skills/restAPI.png";
import postman from "./common/images/skills/postman.png";
import formik from "./common/images/skills/formik.png";
import storybook from "./common/images/skills/Storybook.png";


export type PersonalDataType = PersonalInfoArray[]
type PersonalInfoArray = string[]


export const PersonalDATA:PersonalDataType = [
    ["firstName:", "Ksenia"],
    ["lastName:", "Krasnikova"],
    ["from:", "Minsk, Belarus"],
    ["email:", "ksenia.kras29@gmail.com"],
    // ["phone:", "+375(29)1626439"],
    ["languages:", "English, Russian"],
]


type SkillItemType = {
    id: number
    image: string
    title: string
}
export type SkillsType = SkillItemType[]

export const skills:SkillsType = [
    {id: 1, image: react, title: 'React'},
    {id: 2, image: redux, title: 'Redux'},
    // {id: 3, image: reduxThunk, title: 'Redux-thunk'},
    {id: 4, image: TS, title: 'TypeScript'},
    {id: 5, image: JS, title: 'JavaScript'},
    {id: 6, image: html, title: 'HTML'},
    {id: 7, image: css, title: 'CSS'},
    {id: 8, image: sass, title: 'SASS'},
    {id: 9, image: git, title: 'Git'},
    {id: 10, image: material, title: 'Material UI'},
    {id: 11, image: axios, title: 'Axios'},
    // {id: 12, image: restAPI, title: 'RestAPI'},
    {id: 13, image: postman, title: 'Postman'},
    {id: 14, image: formik, title: 'Formik'},
    // {id: 15, image: storybook, title: 'StoryBook'},
]

export type ProjectsType = {
    id: number
    title: string
    description: string
    img: string
}

export const ProjectsData = [
    {id: 1, title: 'TodoList App', description: 'Stack..', img: ''},
    {id: 2, title: 'Social Network App', description: 'Stack..', img: ''},
    {id: 3, title: 'Friday\'s Project App', description: 'Stack..', img: ''},
    {id: 4, title: 'QR-code Scanner', description: 'Stack..', img: ''},
]