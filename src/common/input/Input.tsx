import React from 'react';
import s from './Input.module.css'

type InputPropsType = {
    type: string
    className?: string
    placeholderText: string
}

export const Input = ({type, className, placeholderText}: InputPropsType) => {

    let onChangeHandler = () => {}
    let onKeyPressHandler = () => {}

    let finalClassName = className ? `${className} ${s.input}` : s.input

    return (
        <input
            type={type}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={finalClassName}
            placeholder={placeholderText}
        />
    );
};