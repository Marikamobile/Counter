import {useDispatch as _useDispatchSetter} from "react-redux";

export enum SETTER_ACTIONS_TYPE {
    INC_MIN = 'INC_MIN',
    INC_MAX = 'INC_MAX',
    SET_VALUE = 'SET_VALUE'
}

export type SetValueAT = {
    type: typeof SETTER_ACTIONS_TYPE.SET_VALUE
}
export const SetValue = (): SetValueAT=> {
    return {
        type: SETTER_ACTIONS_TYPE.SET_VALUE
    }
}
export type IncMinAt = {
    type: typeof SETTER_ACTIONS_TYPE.INC_MIN
    value: number
}
export const IncMin = (value: number): IncMinAt => {
    return {
        type: SETTER_ACTIONS_TYPE.INC_MIN,
        value
    }
}
export type IncMaxAT = {
    type: typeof SETTER_ACTIONS_TYPE.INC_MAX
    value: number
}

export const IncMax = (value: number): IncMaxAT => {
    return {
        type: SETTER_ACTIONS_TYPE.INC_MAX,
        value
    }
}
export type SetterActionsAT = IncMinAt | IncMaxAT | SetValueAT

export function useDispatch_setter() {
    const dispatchCounter = _useDispatchSetter()
    return (ac: SetterActionsAT) => dispatchCounter(ac)
}
