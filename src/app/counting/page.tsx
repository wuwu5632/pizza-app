"use client";
import { use } from "react";

function CounterExample() {
    let count = 0; // This variable is reset to 0 on every render
  
    const increment = () => {
      count = count + 1; // This change is lost on the next render
      console.log(count);
    };
  
    return (
        <div>
         <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
  }

    export default CounterExample;