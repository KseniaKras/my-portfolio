import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";



export type BlockTitleType = {
    intro?: string,
    title: string
}
type LinkItem = {
    id: number
    path: string
    title: string
}
type AnimatedTitleType = {
    id: number
    title: string
}
export type IconType = {
    id: number
    href: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}
export type MainDataType = {
    blockTitle: BlockTitleType
    animatedTitle: AnimatedTitleType[]
    icons: IconType[]
    greetingBlockText: string
    link: LinkItem[]
}

export const MainData: MainDataType = {
    blockTitle: {
        intro: 'Hello, I am',
        title: 'Ksenia Krasnikova',
    },
    animatedTitle: [
        {id: 1, title: 'front-end developer'},
        {id: 2, title: 'web-developer'},
        {id: 3, title: 'software Engineer'},
    ],
    icons: [
        {id: 1, href: '', icon: TelegramIcon},
        {id: 2, href: '', icon: GitHubIcon},
        {id: 3, href: '', icon: LinkedInIcon},
    ],
    greetingBlockText:
        ' I\'m front-end developer. I have experience in cross-browser, adaptive,\n' +
        ' responsive development, creating SPA with react, redux, typescript, using RestAPI.\n' +
        ' I will be glad to join your team and work together',
    link: [
        {id: 1, path: '/about', title: 'About me'},
        {id: 2, path: '/contact', title: 'Hire me'},
    ]

}