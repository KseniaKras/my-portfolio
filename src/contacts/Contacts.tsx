import React from 'react';
import s from './Contacts.module.scss';
import {Input} from "../common/input/Input";
import {Textarea} from "../common/textarea/Textarea";
import c from "../common/styles/Container.module.scss";
import {BlockTitle} from "../common/blockTitle/BlockTitle";
import {Button} from "../common/button/Button";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
                <div className={s.formsContent}>
                    <BlockTitle title={'Contacts'} />
                    <div className={s.formsBlock}>
                        <div className={s.contactInfoBlock}>

                        </div>
                        <form className={s.forms}>
                            <Input placeholderText={'Name'}/>
                            <Input placeholderText={'Email'}/>
                            <Input placeholderText={'Phone'}/>
                            <Input placeholderText={'Subject'}/>
                            <Textarea placeholderText={'Message'}/>
                            <div>
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
