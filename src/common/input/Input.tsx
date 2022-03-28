import React from 'react';
import s from './Input.module.css'

type InputPropsType = {
    className?: string
}

export const Input = ({className}: InputPropsType) => {

    let onChangeHandler = () => {}
    let onKeyPressHandler = () => {}

    let finalClassName = className ? `${className} ${s.input}` : s.input

    return (
        <input
            type={'text'}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={finalClassName}
        />
    );
};