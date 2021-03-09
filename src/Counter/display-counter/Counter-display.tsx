import React from "react";
import st from '../Counter.module.css'

type CounterType = {
    count: number
    maxValue: number
}

export function CounterDisplay (props: CounterType) {

    return (

        <div className={props.count === props.maxValue ? st.error : ''}>{props.count}</div>
    )
}

