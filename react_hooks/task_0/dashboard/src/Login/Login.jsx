/* eslint-disable */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import "./Login.css";

export function Login({ onLogin }) {

    const [enableSubmit, setEnableSubmit] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChangeEmail = (e) => {
        const { value, name } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState, [name]: value
            }
        })
    }

    const handleChangePassword = (e) => {
        const { value, name } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState, [name]: value
            }
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (formData.password.length >= 8 && formData.email.length >= 12) {
            setEnableSubmit(true);
            onLogin();
        }


    }

    return (
        <div>
            <p>Login to access the full dashboard</p>

            <label htmlFor="email">Email: </label>
            <input type="email" value={formData.email} id="email" name="email" onChange={handleChangeEmail} />

            <label htmlFor="password">Password: </label>
            <input type="password" value={formData.password} id="password" name="password" onChange={handleChangePassword} />

            <button type="button" onClick={handleLoginSubmit}>
                OK
            </button>
        </div>
    );
}