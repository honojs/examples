import { useState } from "hono/jsx";
import { render } from "hono/jsx/dom";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

function App() {
  return <Counter />;
}

const root = document.getElementById("root");
render(<App />, root);
