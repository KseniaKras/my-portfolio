import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    name: string
    callback: ()=>void
    className?: string
}

export const Button = ({name, callback, className}:ButtonPropsType) => {

    let onClickHandler = () => callback
    let finalClassName = className ? `${className} ${s.button}` : s.button

    return (
        <button onClick={onClickHandler} className={finalClassName}>{name}</button>
    );
};
