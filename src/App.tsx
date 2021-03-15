import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import {Setter} from "./Setter/Setter";


function App() {
    const [count, setCount] = useState<number>(0);
    const [maxCountValue, setMaxCountValue] = useState(5)
    const [minCountValue, setMinCountValue] = useState(0)
    const [error, setError] = useState<string | null>(null)

useEffect(()=>{
   const min =  localStorage.getItem('minValue');
   const max =  localStorage.getItem('maxValue');
    if (min){
        setCount(JSON.parse(min));
        setMinCountValue(JSON.parse(min));
    }
    if (max){
        setMaxCountValue(JSON.parse(max))
    }
}, [])
    const compare = (minValue: any, maxValue: any) => {
        const enterValuesAndPressSet = 'enter values and press \'set\''
        const incorrectValue = 'incorrect value!'
        if (maxValue > minValue && minValue >= 0) {
            minValue === minCountValue &&
            maxValue === maxCountValue ? setError(null) : setError(enterValuesAndPressSet)
        } else setError(incorrectValue)
    }
    const setValue = (minValue: any, maxValue: any) => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setMaxCountValue(maxValue)
        setMinCountValue(minValue)
        setCount(minValue)
        setError(null)

    }

    const inc = () => {
        if (count === maxCountValue) {
            return
        }
        setCount(count + 1);

    }
    const reset = () => {
        setCount(minCountValue)
    }


    return (
        <div className="row">
           <div className='child'> <Counter reset={reset} inc={inc} count={count} maxValue={maxCountValue} minValue={minCountValue}
                     error={error}/></div>
           <div className='child'> <Setter getValue={setValue} compare={compare}/>
        </div></div>
    );
}

export default App;
