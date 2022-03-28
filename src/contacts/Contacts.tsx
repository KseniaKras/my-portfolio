import React from 'react';
import s from './Contacts.module.css';
import {Input} from "../common/input/Input";
import {Textarea} from "../common/textarea/Textarea";
import c from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
                <div className={s.formsBlock}>
                    <h3 className={s.title}>Контакты</h3>
                    <form className={s.forms}>
                        <Input/>
                        <Input/>
                        <Textarea/>
                    </form>
                    <a href={'#'} className={s.link}>Отправить</a>
                </div>
            </div>
        </div>
    );
};
