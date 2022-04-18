import React from 'react';
import s from './Textarea.module.css'

type TextareaPropsType = {
    className?: string
    placeholderText: string
}

export const Textarea = ({className, placeholderText}: TextareaPropsType) => {

    let onChangeHandler = () => {}
    let onKeyPressHandler = () => {}

    let finalClassName = className ? `${className} ${s.textarea}` : s.textarea

    return (
        <textarea className={finalClassName} placeholder={placeholderText}/>
    );
};