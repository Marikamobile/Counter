import {useDispatch as _useDispatchCounter} from "react-redux";

export enum COUNTER_ACTIONS_TYPE {
    INC = 'INC',
    RESET = 'RESET'
}
type IncAT = {
    type: typeof COUNTER_ACTIONS_TYPE.INC
}
export const Inc = (): IncAT =>{
    return{
        type: COUNTER_ACTIONS_TYPE.INC
    }
}
type ResetAT = {
    type: typeof COUNTER_ACTIONS_TYPE.RESET

}

export const Reset = (): ResetAT=>{
    return{
        type: COUNTER_ACTIONS_TYPE.RESET
    }
}
export type CounterActionsAT = IncAT | ResetAT

export function useDispatch_counter(){
    const dispatchCounter = _useDispatchCounter()
    return (ac: CounterActionsAT) =>  dispatchCounter(ac)
}
