'use client'
import React, { useState } from "react";
const  Counter = () => {
  const [counter,setCounter] = useState(0);
  return (
    <div>
        <h1 className="text-7xl"> {counter}</h1>
        <button onClick={() => setCounter(counter + 1)} className="btn btn-primary">Count</button>
    </div>
  )
}
export default Counter;
