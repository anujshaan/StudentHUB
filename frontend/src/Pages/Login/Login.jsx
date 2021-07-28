import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Student from "../../Assets/student.png"
import './login.css'
import Signupform from '../../Components/Signupform/Signupform'

export default function Login() {
    return (
        <div className="login">
                <Navbar />
            <div className="loginWrapper">
                <div className="loginContent">
                    <p className="tagline">A perfect Sharing Platform for both teachers and students.</p>
                    <img className="loginImg" src={Student} alt="" />
                </div>
                <div className="loginContentForm">
                    <Signupform />
                </div>
            </div>
        </div>
    )
}
