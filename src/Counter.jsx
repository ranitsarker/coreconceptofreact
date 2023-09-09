import { useState } from "react"
export default function Counter(){
    const [count, setCount] = useState (0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newReduce = count - 1;
        setCount(newReduce);
    }
    return(
        <div style={{border: '2px solid yellow', padding: '20px', margin: '10px'}}>
            <h1>State Manage</h1>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}