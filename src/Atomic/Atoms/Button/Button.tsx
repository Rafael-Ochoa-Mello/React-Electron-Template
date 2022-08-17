import React, {MouseEventHandler} from 'react';
import styles from './Button.module.css';

interface buttonProps {
    title:String,
    bgColor: String,
    onClick: MouseEventHandler,
    //children: JSX.Element | JSX.Element[]
}

export function Button({title, bgColor, onClick}:buttonProps){
    console.log(bgColor);
    return <button onClick={onClick} className={styles.button}>{title}</button>
}

