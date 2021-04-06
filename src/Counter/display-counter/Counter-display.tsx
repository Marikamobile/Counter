import React from "react";

type CounterType = {
    count: number
    maxValue: number
    className: string
}

export function CounterDisplay (props: CounterType) {

    return (
        <div className={props.className}>{props.count}</div>
    )
}

