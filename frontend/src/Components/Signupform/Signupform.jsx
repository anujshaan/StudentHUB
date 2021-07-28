import React from 'react'
import "./signupform.css"

export default function Signupform() {
    return (
        <div className="signupForm">
            <div className="signupFormWrapper">
                <input type="text" placeholder="username"/>
                <input type="emai" placeholder="email address"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confirm password"/>
                <button className="signupFormButton">Register</button>
                <p>Already Registered?</p>
                <a href="/#" className="signupFormLoginButton">Login</a>
            </div>
        </div>
    )
}
