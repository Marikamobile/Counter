import React from "react";
import st from './Counter.module.css'

type CounterType = {
    count: number
}

export function CounterDisplay (props: CounterType) {

    return (

        <div className={props.count === 5 ? st.error : ''}>{props.count}</div>
    )
}

