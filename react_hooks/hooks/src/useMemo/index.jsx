import {useState ,memo } from "react";

const Child = memo(({ name }) => {
    console.log("Child rendered:", name);
    return <div>Child Name: {name}</div>;
});

export default function Memo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Alice");

    return (
        <div>
            <h1>Parent Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <Child name={name} />
        </div>
    );
}