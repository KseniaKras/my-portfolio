import {BlockTitleType} from "./MainComponenetData";

type ProjectType = {
    id: number
    title: string
    description: string
    img: string
}
export type ProjectsDataType = {
    blockTitle: BlockTitleType
    projects: ProjectType[]
}

export const ProjectsData:ProjectsDataType = {
    blockTitle: {title: 'My projects'},
    projects: [
        {id: 1, title: 'TodoList App', description: 'Stack..', img: ''},
        {id: 2, title: 'Social Network App', description: 'Stack..', img: ''},
        {id: 3, title: 'Friday\'s Project App', description: 'Stack..', img: ''},
        {id: 4, title: 'QR-code Scanner', description: 'Stack..', img: ''},
        {id: 5, title: 'Counter', description: 'Stack..', img: ''},
    ]
}
