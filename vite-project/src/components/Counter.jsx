
import { useState } from "react";
console.log('Hola');
const Counter = ({initialValue,suma}) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = () => {
        setCounter(counter + suma);
    };
    const decrement = () => {
        setCounter(counter - suma);
    };
    return <div>
        <button onClick={decrement}> - </button>
        <span> {counter} </span>
        <button onClick={increment}> + </button>

    </div>;
}


export default Counter