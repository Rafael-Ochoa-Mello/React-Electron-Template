import React, {MouseEventHandler} from 'react';
import styles from './Button.module.css';

interface buttonProps {
    title:String,
    onClick: MouseEventHandler,
    bgColor: 'blue' | 'red' | 'green'
    //children: JSX.Element | JSX.Element[]
}

export function Button({title, bgColor, onClick}:buttonProps){
    console.log(bgColor);
    return <button onClick={onClick} className={chooseStyle(bgColor)}>{title}</button>
}

function chooseStyle(style:String){
    switch(style){
        case 'blue': return styles.buttonBlue
        case 'red':  return styles.buttonRed
        case 'green': return styles.buttonGreen
        default: return styles.button
    }
}