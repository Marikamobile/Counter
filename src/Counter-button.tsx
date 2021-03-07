import React, {useState} from "react";
import st from './Counter.module.css'

type CounterType = {
    reset: () => void
    inc: () => void
    count: number
    maxValue: number
    minValue: number
}

export function CounterButton (props: CounterType) {

    return (
        <div className={st.buttons}>
            <button id='inc' onClick={props.inc} disabled={props.count === props.maxValue} className={st.button}>inc</button>
            <button onClick={props.reset} disabled={props.count === props.minValue} className={st.button}>reset</button>
        </div>
    )
}

