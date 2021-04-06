import {COUNTER_ACTIONS_TYPE, CounterActionsAT} from "../Counter-BLL/Counter-actions";
import {SETTER_ACTIONS_TYPE, SetterActionsAT} from "../Setter-BLL/Setter-actions";
import {useDispatch as _useDispatch} from "react-redux";

const COMPARE = 'COMPARE'

type CompareType = {
    type: typeof COMPARE
    minValue: number
    maxValue: number
}

export const Compare = (minValue: number, maxValue: number): CompareType => {
    return {
        type: COMPARE,
        minValue, maxValue
    }
}
type ReducersGlobalAT = CompareType


type ActionsType = SetterActionsAT | CounterActionsAT | ReducersGlobalAT


export type InitStateType = {
    minValue: number
    maxValue: number
    counter: {
        value: number
    }
    setter: {
        minValue: number,
        maxValue: number
    }
    error: string | null
}

const initialState = {
    minValue: 0,
    maxValue: 5,
    counter: {
        value: 0,
    },
    setter: {
        minValue: 0,
        maxValue: 5,
    },
    error: null
}

export function useDispatch() {
    const dispatchCounter = _useDispatch()
    return (ac: ReducersGlobalAT) => dispatchCounter(ac)
}

export const Reducer = (state: InitStateType = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case COUNTER_ACTIONS_TYPE.RESET:
            return {...state, counter: {value: state.setter.minValue}}
        case COUNTER_ACTIONS_TYPE.INC:
            return {...state, counter: {value: state.counter.value += 1}}
        case SETTER_ACTIONS_TYPE.INC_MIN:
            return {...state, setter: {...state.setter, minValue: action.value}}
        case SETTER_ACTIONS_TYPE.INC_MAX:
            return {...state, setter: {...state.setter, maxValue: action.value}}
        case SETTER_ACTIONS_TYPE.SET_VALUE:
            return {
                ...state,
                maxValue: state.setter.maxValue,
                minValue: state.setter.minValue,
                error: null,
                counter: {value: state.setter.minValue}
            }
        case COMPARE:
            if (action.maxValue > action.minValue && action.minValue >= 0) {
                return action.minValue === state.minValue &&
                action.maxValue === state.maxValue ?
                    {...state, error: null} : {...state, error: 'enter values and press \'set\''}
            } else return {...state, error: 'incorrect value!'}


        default:
            return state
    }
}


