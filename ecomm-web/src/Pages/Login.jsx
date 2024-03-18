import React from "react";
import "./CSS/Login.css"
const Login=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Login</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your name"/> 
                <input type="email" placeholder="Email address"/> 
                <input type="password" placeholder="Password"/>
            </div>
            <button>Continue</button>
            <div className="loginsignup-agree">
                <input type="checkbox"/>
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>
            </div>
        </div>
    )
}
export default Login;