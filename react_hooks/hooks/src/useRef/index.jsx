import { useRef } from "react";

export default function UseRef() {
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");

    const handleSubmit = () => {
        console.log("firstNameRef----", firstNameRef.current.value)
    };

    console.log("use-ref");

    return (
        <div style={{ padding: "20px" }}>
            <h1>useRef Example </h1>

            <div style={{ marginBottom: "10px" }}>
                <label>First Name: </label>
                <input type="text" ref={firstNameRef} />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>Last Name: </label>
                <input type="text" ref={lastNameRef} />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}