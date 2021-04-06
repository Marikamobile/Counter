import React from "react";
import st from './Counter.module.css'
import {Button} from "../Button/Button";
import {CounterDisplay} from "./display-counter/Counter-display";
import {Inc, Reset, useDispatch_counter} from "../BLL/Counter-BLL/Counter-actions";
import {useSelector} from "react-redux";
import {selectAllStore} from "../BLL/Selecton";




function Counter() {
 const {error, counter, minValue, maxValue} = useSelector(selectAllStore)
    const countDispatch = useDispatch_counter()
    return (
        <div className={`${st.counter}`}>
            <div className={st.display_count}>
                {error !== null
                ? <p className={error === 'incorrect value!' ? st.error : ''}>{error}</p>
                : <CounterDisplay count={ counter.value } maxValue={maxValue}
                                  className={ counter.value === maxValue ? st.error : ''}/>}
            </div>
            <div className={st.buttons_count}>
                <Button onClick={()=>countDispatch(Inc())} disabled={error !== null || counter.value === maxValue}
                        children={'inc'}
                        maxValue={maxValue}/>
                <Button onClick={()=>countDispatch(Reset())} disabled={error !== null || counter.value === minValue}
                        children={'reset'}
                        minValue={minValue}/></div>
        </div>
    )
}

export default Counter;