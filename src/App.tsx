import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import {Setter} from "./Setter/Setter";


function App() {
    const [count, setCount] = useState<number>(0);
    const [maxCountValue, setMaxCountValue] = useState(5)
    const [minCountValue, setMinCountValue] = useState(0)


const getValue=()=>{
    const newMaxValue = localStorage.getItem('maxValue')
    const newMinValue = localStorage.getItem('minValue')
    setMaxCountValue(JSON.parse(newMaxValue ? newMaxValue : '5'))
    setMinCountValue(JSON.parse(newMinValue ? newMinValue : '0'))
    setCount(JSON.parse(newMinValue ? newMinValue : '0'))
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
            <Counter reset={reset} inc={inc} count={count} maxValue={maxCountValue} minValue={minCountValue}/>
            <Setter getValue={getValue}/>
        </div>
    );
}

export default App;
