import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";


function App() {
    const [count, setCount] = useState<number>(0);
    const maxValue = 5;
    const minValue = 0;

    const inc = () => {
        if (count === maxValue) {
            return
        }
        setCount(count + 1);


    }
    const reset = () => {
        setCount(0)

    }
    return (
        <div className="App">
            <Counter reset={reset} inc={inc} count={count} maxValue={maxValue} minValue={minValue}/>
        </div>
    );
}

export default App;
