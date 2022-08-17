import React, {MouseEventHandler} from 'react';

interface buttonProps {
    title:String,
    bgColor: String,
    onClick: MouseEventHandler,
    //children: JSX.Element | JSX.Element[]
}

export function Button({title, bgColor, onClick}:buttonProps){
    console.log(bgColor);
    return <button onClick={onClick}>{title}</button>
}