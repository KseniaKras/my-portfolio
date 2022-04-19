import React from 'react';
import s from './Contacts.module.scss';
import {Input} from "../common/input/Input";
import {Textarea} from "../common/textarea/Textarea";
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {Button} from "../common/button/Button";
import {MyContacts} from "./MyContacts";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
                <div className={s.formsContent}>
                    <BlockTitle title={'My Contact'} />
                    <div className={s.formsBlock}>
                        <div className={s.contactInfoBlock}>
                           <MyContacts title={'Address'} text={'Minsk, Belarus'} />
                           <MyContacts title={'Email'} text={'ksenia.kras29@gmail.com'}/>
                           <MyContacts title={'Phone'} text={'+375291626439'} />
                        </div>
                        <form className={s.forms}>
                            <Input placeholderText={'Name'}/>
                            <Input placeholderText={'Email'}/>
                            <Input placeholderText={'Phone'}/>
                            <Input placeholderText={'Subject'}/>
                            <Textarea placeholderText={'Enter Your Message'}/>
                            <div className={s.button}>
                                <Button name={'Send'} callback={()=>{}} />
                            </div>

                        </form>

                    </div>

                    {/*<a href={'#'} className={s.link}>Отправить</a>*/}
                </div>
            </div>
        </div>
    );
};

