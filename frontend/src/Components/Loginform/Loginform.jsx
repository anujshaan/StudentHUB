import React from 'react'
import "./loginform.css"

export default function Loginform() {
    return (
        <div className="loginForm">
            <div className="loginFormWrapper">
                <input type="text" placeholder="username"/>
                <input type="emai" placeholder="email address"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confirm password"/>
                <button className="loginFormButton">Login</button>
                <p>Haven't Registered?</p>
                <a href="/#" className="loginFormRegisterButton">Signup</a>
            </div>
        </div>
    )
}
