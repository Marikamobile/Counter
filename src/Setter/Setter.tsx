import React, {ChangeEvent, EffectCallback, useEffect, useState} from "react";
import "./Setter.css";
import {Button} from "../Button/Button";
import {DisplaySetter} from "./Display-setter/Display-setter";

type SetterPropsType = {
    getValue: (minvalue: any, maxvalue: any) => void
    compare: (minvalue: any, maxvalue: any) => void
}

export function Setter(props: SetterPropsType) {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)

    const onNewSetterMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        setMin(value);
        props.compare(value, max)
    }
    const onNewSetterMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        setMax(value);
        props.compare(min, value)
    }

    useEffect(() => {
        const newMaxValue = localStorage.getItem('maxValue')
        const newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            setMin(JSON.parse(newMinValue))
        }
        if (newMaxValue) {
            setMax(JSON.parse(newMaxValue))
        }
    }, [])


    return (
        <div className={"counter"}>
            <div className={"display-set"}>
                <DisplaySetter onNewSetterValue={onNewSetterMaxValue} value={max} children={'maxValue'}
                               className={min < 0 || max < 0 || min >= max ? 'error-display' : ''}/>
                <DisplaySetter onNewSetterValue={onNewSetterMinValue} value={min} children={'minValue'}
                               className={min < 0 || max < 0 || min >= max ? 'error-display' : ''}/>
            </div>
            <div className='button-set'><Button onClick={props.getValue} disabled={min >= max || min<0}
                                                minValue={min} maxValue={max} children={'set'}/>
            </div>
        </div>
    )
}