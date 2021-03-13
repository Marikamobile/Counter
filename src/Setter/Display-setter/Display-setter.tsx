import React, {ChangeEventHandler, useState} from "react";
import st from './Display-setter.module.css'

type DisplaySetterPropsType = {
    onNewSetterValue: (e: any) => void
    value: number
    children: string

}

export function DisplaySetter(props: DisplaySetterPropsType) {

    return (<div className={`${st.body} ${st.template_4up}`}>
        <label>{props.children}</label>
        <input type="number" id="number" value={props.value} onChange={props.onNewSetterValue} className={st.input}/>
    </div>)
}