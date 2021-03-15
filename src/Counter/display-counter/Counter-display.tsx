import React from "react";

type CounterType = {
    count: number
    maxValue: number
}

export function CounterDisplay (props: CounterType) {

    return (
        <div className='display-counter'>{props.count}</div>
    )
}

