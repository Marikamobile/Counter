import React, {ChangeEvent, EffectCallback, useEffect, useState} from "react";
import st from "./Setter.module.css";
import {Button} from "../Button/Button";
import {DisplaySetter} from "./Display-setter/Display-setter";

type SetterPropsType = {
    getValue: () => void
}

export function Setter(props: SetterPropsType) {
    const [minSetValue, setMinSetValue] = useState(0)
    const [maxSetValue, setMaxSetValue] = useState(0)

    const onNewSetterMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('minValue', JSON.stringify(minSetValue + 1))
        setMinSetValue(e.currentTarget.valueAsNumber);
    }
    const onNewSetterMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxValue', JSON.stringify(maxSetValue+ 1))
        setMaxSetValue(e.currentTarget.valueAsNumber);
    }

    useEffect(() => {
        const newMaxValue = localStorage.getItem('maxValue')
        const newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            setMinSetValue(JSON.parse(newMinValue))
        }
        if (newMaxValue) {
            setMaxSetValue(JSON.parse(newMaxValue))
        }/*

    setMaxSetValue(JSON.parse(newMaxValue ? newMaxValue : '5'))
    setMinSetValue(JSON.parse(newMinValue ? newMinValue : '0'))*/

    }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(minSetValue))
    // }, [minSetValue])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxSetValue))
    // }, [maxSetValue])



    return (
        <div className={st.counter}>
            <div className={st.display}>
                <DisplaySetter onNewSetterValue={onNewSetterMaxValue} value={maxSetValue} children={'maxValue'}/>
                <DisplaySetter onNewSetterValue={onNewSetterMinValue} value={minSetValue} children={'minValue'}/></div>
            <Button onClick={props.getValue} disabled={minSetValue >= maxSetValue} children={'set'}/>
        </div>
    )
}