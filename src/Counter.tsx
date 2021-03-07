import React, {useState} from "react";
import st from './Counter.module.css'
import {CounterButton} from "./Counter-button";
import {CounterDisplay} from "./Counter-display";

type CounterType = {
    reset: () => void
    inc: () => void
    count: number
    maxValue: number
    minValue:number
}

function Counter(props: CounterType) {

    return (
        <div className={st.counter}>
            <CounterDisplay count={props.count}/>
            <CounterButton count={props.count} inc={props.inc} reset={props.reset} maxValue={props.maxValue} minValue={props.minValue}/>
        </div>
    )
}

export default Counter;