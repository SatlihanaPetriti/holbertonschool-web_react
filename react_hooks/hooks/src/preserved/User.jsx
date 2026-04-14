import { useState } from "react";
export function User({ name }) {
    
    const [age, setAge] = useState(0);
    const handleAddUser = () => {
        setAge((prevState) => prevState + 1);
    };
    return (
        <div>
            <h3>
                Name: {name}, Age: {age}
            </h3>
            <button type="button" onClick={handleAddUser}>
                Add user
            </button>
        </div>
    );
}