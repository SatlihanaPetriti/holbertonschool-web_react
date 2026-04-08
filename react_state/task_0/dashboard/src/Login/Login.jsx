import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "./Login.css";

export function Login({ onLogin }) {
    return (
        <div>
            <p>Login to access the full dashboard</p>

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />

            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />

            <button type="button" onClick={onLogin}>
                OK
            </button>
        </div>
    )
}