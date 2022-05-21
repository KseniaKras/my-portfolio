import {BlockTitleType} from "./MainComponenetData";
import socNet from '../common/images/projects/socnet.png';
import cards from '../common/images/projects/cards.png';
import searcher from '../common/images/projects/searcher.png';
import todo from '../common/images/projects/todo.png';
import scanner from '../common/images/projects/scanner.png';
import counter from '../common/images/projects/counter.png';

type ProjectType = {
    id: number
    title: string
    description: string
    stack: string
    img: string
    link: string
}
export type ProjectsDataType = {
    blockTitle: BlockTitleType
    projects: ProjectType[]
}

export const ProjectsData:ProjectsDataType = {
    blockTitle: {title: 'My projects'},
    projects: [
        {
            id: 1,
            title: 'Cards',
            description: 'Application that can help you in learning by flashcards',
            stack: 'React, Redux-toolkit, Redux-thunk, TypeScript, MUI, RestAPI, styled-components',
            img: cards,
            link: 'https://veronikaulyanchik.github.io/cardsproject/#/login',
        },
        {
            id: 2,
            title: 'GitHub Searcher',
            description: 'Application for searching users on GitHub',
            stack: 'React, Redux, Redux-thunk, TypeScript, MUI, RestAPI, SCSS',
            img: searcher,
            link: 'https://timely-fenglisu-45966c.netlify.app/',
        },
        {
            id: 3,
            title: 'To-do List App',
            description: 'To-do list',
            stack: 'React, Redux, Redux-thunk, TypeScript, MUI, Axios',
            img: todo,
            link: 'https://github.com/KseniaKras/ToDo-learningApp',
        },
        {
            id: 4,
            title: 'Social Network',
            description: 'Social Network',
            stack: 'React, Redux, TypeScript',
            img: socNet,
            link: 'https://github.com/KseniaKras/react-ts-socialNetwork',
        },
        {
            id: 5,
            title: 'QR-code Scanner',
            description: 'Browser QR-code scanner',
            stack: 'React, TypeScript',
            img: scanner,
            link: 'https://github.com/KseniaKras/qr-code-scanner',
        },
        {
            id: 6,
            title: 'Counter',
            description: 'Just a counter',
            stack: 'React, Redux, TypeScript',
            img: counter,
            link: 'https://github.com/KseniaKras/Counter',
        },
    ]
}
