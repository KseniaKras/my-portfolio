import React from 'react';
import s from './Textarea.module.css'

type TextareaPropsType = {
    className?: string
}

export const Textarea = ({className}: TextareaPropsType) => {

    let onChangeHandler = () => {}
    let onKeyPressHandler = () => {}

    let finalClassName = className ? `${className} ${s.textarea}` : s.textarea

    return (
        <textarea className={finalClassName}/>
    );
};