import React, {ChangeEvent, EffectCallback, useEffect, useState} from "react";
import "./Setter.css";
import {Button} from "../Button/Button";
import {DisplaySetter} from "./Display-setter/Display-setter";
import {Compare, useDispatch} from "../BLL/Reducer/reducers";
import {IncMax, IncMin, SetValue, useDispatch_setter} from "../BLL/Setter-BLL/Setter-actions";
import {useSelector} from "react-redux";
import {selectAllStore} from "../BLL/Selecton";

type SetterPropsType = {
  /*  getValue: (minvalue: any, maxvalue: any) => void*/
}

export function Setter(props: SetterPropsType) {
    const {setter} = useSelector(selectAllStore)
    const dispatch = useDispatch()
    const settDispatch = useDispatch_setter()

    const onNewSetterMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        settDispatch(IncMin(value));
        dispatch(Compare(value, setter.maxValue))
    }
    const onNewSetterMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        settDispatch(IncMax(value));
        dispatch(Compare(setter.minValue, value))
    }

    useEffect(() => {
        const newMaxValue = localStorage.getItem('maxValue')
        const newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            settDispatch(IncMin(JSON.parse(newMinValue)));
        }
        if (newMaxValue) {
            settDispatch(IncMax(JSON.parse(newMaxValue)));
        }
    }, [])


    return (
        <div className={"counter"}>
            <div className={"display-set"}>
                <DisplaySetter onNewSetterValue={onNewSetterMaxValue} value={setter.maxValue} children={'maxValue'}
                               className={setter.minValue < 0 || setter.maxValue < 0 || setter.minValue >= setter.maxValue ? 'error-display' : ''}/>
                <DisplaySetter onNewSetterValue={onNewSetterMinValue} value={setter.minValue} children={'minValue'}
                               className={setter.minValue < 0 || setter.maxValue < 0 || setter.minValue >= setter.maxValue ? 'error-display' : ''}/>
            </div>
            <div className='button-set'><Button onClick={() => {
                settDispatch(SetValue())/*
                dispatch(Compare(setter.minValue, setter.maxValue))*/
            }} disabled={setter.minValue >= setter.maxValue || setter.minValue < 0}
                                                minValue={setter.minValue} maxValue={setter.maxValue} children={'set'}/>
            </div>
        </div>
    )
}