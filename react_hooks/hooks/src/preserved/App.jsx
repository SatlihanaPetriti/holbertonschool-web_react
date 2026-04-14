import { useState } from "react";
import { User } from "./User";
export default function App() {
    const [show, setShow] = useState(true);
    const handleAddUser = () => {
        setShow(!show);
    };
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button type="button" onClick={handleAddUser}>
                Toggle
            </button>
            {show ? <User key="chimezie" name="Chimezie" /> : <User key="Innocent" name="Innocent" />}
        </div>
    );
}