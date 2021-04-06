import React, {useEffect} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import {Setter} from "./Setter/Setter";

function App() {



    return (
        <div className="row">
           <div className='child'> <Counter/></div>
           <div className='child'> <Setter  />
        </div></div>
    );
}

export default App;
