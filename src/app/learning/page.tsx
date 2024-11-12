"use client";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up a timer to increment the count every second
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => clearInterval(timer);
  }); // Notice, no dependency array

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <p>123</p>
      </div>
    </div>
  );
};

export default Counter;
