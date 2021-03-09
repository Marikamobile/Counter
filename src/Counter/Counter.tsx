import React, {useState} from "react";
import st from './Counter.module.css'
import {Button} from "../Button/Button";
import {CounterDisplay} from "./display-counter/Counter-display";

type CounterType = {
    reset: () => void
    inc: () => void
    count: number
    maxValue: number
    minValue: number
}

function Counter(props: CounterType) {

    return (
        <div className={`${st.counter}`}>
            <CounterDisplay count={props.count} maxValue={props.maxValue}/>
            <Button  onClick={props.inc} disabled={props.count === props.maxValue} children={'inc'}
                    maxValue={props.maxValue}/>
           <Button  onClick={props.reset} disabled={props.count === props.minValue} children={'reset'}
                    minValue={props.minValue}/>
        </div>
    )
}

export default Counter;