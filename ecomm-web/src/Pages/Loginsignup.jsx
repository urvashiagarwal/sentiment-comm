import React from "react";
import "./CSS/LoginSignup.css"
import Login from "./Login";
const Loginsignup=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your name"/> 
                <input type="email" placeholder="Email address"/> 
                <input type="password" placeholder="Password"/>
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account ? <span style={{cursor:"pointer"}}>Login here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox"/>
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>
            </div>
        </div>
    )
}
export default Loginsignup;