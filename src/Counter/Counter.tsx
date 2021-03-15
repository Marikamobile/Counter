import React from "react";
import st from './Counter.module.css'
import {Button} from "../Button/Button";
import {CounterDisplay} from "./display-counter/Counter-display";

type CounterType = {
    reset: () => void
    inc: () => void
    count: number
    maxValue: number
    minValue: number
    error: string | null
}

function Counter(props: CounterType) {

    return (
        <div className={`${st.counter}`}>
            <div className={st.display_count}> {props.error !== null ? <p className={props.error === 'incorrect value!'? st.error: ''}>{props.error}</p>
                : <CounterDisplay count={props.count} maxValue={props.maxValue}/>}
            </div>
            <div className={st.buttons_count}><Button onClick={props.inc}
                                                      disabled={props.error !== null || props.count === props.maxValue}
                                                      children={'inc'}
                                                      maxValue={props.maxValue}/>
                <Button onClick={props.reset} disabled={props.error !== null || props.count === props.minValue}
                        children={'reset'}
                        minValue={props.minValue}/></div>
        </div>
    )
}

export default Counter;