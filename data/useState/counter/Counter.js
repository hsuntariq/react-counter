import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count+1);
    }
    const reset = () => {
        setCount(0);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    const asyncIncrease = () => {
        setTimeout(() => {
            setCount((prevState) => {
                return prevState + 1;
            });
        }, 2000);
    }
return (
    <>
        <div className="container text-center mt-5 p-5 text-capitalize">
            <h1>simple counter</h1>
            <h1>{count}</h1>
            <div className="buttons">
                <button onClick={decrease} className="btn btn-danger mr-2">Decrease</button>
                <button onClick={reset} className="btn btn-warning mr-2">Reset</button>
                <button onClick={increase} className="btn btn-success">Increase</button>
            </div>
        </div>
        <div className="container text-center mt-5 p-5">
            <h1>Complex Counter</h1>
            <h1>{count}</h1>
            <div className="buttons">
                <button onClick={asyncIncrease} className="btn btn-info mr-2">Async Increase</button>
                
            </div>
        </div>
    </>
)
}

export default Counter
