import React from "react";
import'./Display-setter.css'

type DisplaySetterPropsType = {
    onNewSetterValue: (e: any) => void
    value: number
    children: string
    className: string | undefined

}

export function DisplaySetter(props: DisplaySetterPropsType) {

    return (<div className='form-inline'>
        <label>{props.children}</label>
        <input type="number" id="number" value={props.value} onChange={props.onNewSetterValue} className={props.className}/>
    </div>)
}