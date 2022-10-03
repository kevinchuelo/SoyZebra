import './Counter.css'
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount (count + 1)
    }
    const decrement = () => {
        if (count > 0)
        setCount (count - 1)
    }

return (

    <div>
         <h2 className="titleCounter">
        Cantidad
         </h2>
         <p>{count}</p>
         <button className='buttonCounter' onClick={increment}>+</button>
         <button className='buttonCounter' onClick={decrement}>-</button>
    </div>
)}
export default Counter