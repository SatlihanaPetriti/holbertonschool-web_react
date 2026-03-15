import React from 'react'
import holbertonLogo from "../assets/holberton-logo.jpg"
import './Header.css'

const Header = () => {
    return (
        <div className='App-header'>
            <img src={holbertonLogo} className="logo" alt="holberton logo" />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header