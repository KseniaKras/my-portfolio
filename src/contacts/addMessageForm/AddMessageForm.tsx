import s from "./AddMessageForm.module.scss";
import {Input} from "../../common/input/Input";
import {Textarea} from "../../common/textarea/Textarea";
import {Button} from "../../common/button/Button";
import React from "react";

export const AddMessageForm = () => {
    return (
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
    )
}
