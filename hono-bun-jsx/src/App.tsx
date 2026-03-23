import { FC, useState } from 'hono/jsx';
import {render} from 'hono/jsx/dom';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export const App: FC = () => {
    return (
        <div>
            <h1>Counter Example</h1>
            <Counter />
        </div>
    );
};

if (typeof window !== 'undefined') {
    const root = document.getElementById('root');
    if (root) {
        render(<App />, root);
    }
}
