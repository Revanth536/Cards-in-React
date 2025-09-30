import { useState } from "react"

const Counter = () => {

    const [c, setCount] = useState(0);
    const add = () => {
        setCount(c + 1)
    };
    const sub = () => {
        setCount(c - 1)
    };
    return (
        <div>
            <h3>Count :{ c}</h3>
            <button onClick={add}>Increment</button>
            <button onClick={sub}>Decrement</button>
       </div>
   ) 
}
export default Counter