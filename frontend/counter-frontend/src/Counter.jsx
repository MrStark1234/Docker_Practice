import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>🚀 Simple MERN + Docker Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        // onClick={() => setCount(count - 1)}
        style={{ marginLeft: "1rem" }}
      >
        Decrement ho gaya ➖
      </button>
    </div>
  );
}

export default Counter;
