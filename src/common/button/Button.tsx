import React from 'react';
import s from './Button.module.scss'


type ButtonPropsType = {
    name: string
    callback: ()=>void
    className?: string
}

export const Button = ({name, callback, className}:ButtonPropsType) => {

    let finalClassName = className ? `${className} ${s.button}` : s.button

    return (
        <button onClick={callback} className={finalClassName}>{name}</button>
    );
};
