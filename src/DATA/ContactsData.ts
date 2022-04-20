import {BlockTitleType} from "./MainComponenetData";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import BusinessIcon from '@material-ui/icons/Business';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";


export type contactItemsType = {
    id: number
    title: string
    text: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}
export type ContactsDataType = {
    blockTitle: BlockTitleType
    contactItems: contactItemsType[]
}
export const ContactsData = {
    blockTitle: {
        title: 'My Contact'
    },
    contactItems: [
        {id: 1, title: 'Address', text: 'Minsk, Belarus', icon: BusinessIcon},
        {id: 2, title: 'Email', text: 'ksenia.kras29@gmail.com', icon: AlternateEmailIcon},
        {id: 3, title: 'Phone', text: '+375291626439', icon: PhoneInTalkIcon},
    ]
}