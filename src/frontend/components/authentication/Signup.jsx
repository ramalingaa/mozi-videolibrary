import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";



const Signup = () => {

    const [showPassword, setShowPassword] = useState({password:false, reEnterPassword:false})
    const [isPasswordMatch, setISPasswordMatch] = useState(true)
    const [newUserData, setNewUserData] = useState({email:"", password:"",name:""})
    const navigate  = useNavigate()

    const toggleDisplayPassword = () => {
        setShowPassword((prev) => ({...prev, password:!(prev.password)}))
    }
    const toggleReDisplayPassword = () => {
        setShowPassword((prev) => ({...prev, reEnterPassword:!(prev.reEnterPassword)}))
    }
    const updateNewUserData = (e) => {
        const { name } = e.target
        setNewUserData((prev) => ({...prev, [name]: e.target.value}))
    }
    const checkPassword = (e) => {
        newUserData.password === e.target.value ? setISPasswordMatch(() => true) : setISPasswordMatch(() => false)
    }
    const signupUser = async () => {
        try {
            const response = await axios.post("/api/auth/signup",newUserData)
          
            localStorage.setItem("JWT_TOKEN_MOZI",response.data.encodedToken)
            navigate("/login")
        }catch (e){
            console.log("signup failed",e)
        }
    }
    

  return (
    <div className = "login-page-wrapper">
        <div className = "login-card-wrapper">
            <p className = "text-large login-header">Signup</p>
            <label className = "input-label">
                <input type = "text" placeholder = " " name = "name"className = "i-text input-name login-input" onChange = {updateNewUserData}/>
                <span className = "input-placeholder">Full Name</span>
            </label>
            <label className = "input-label">
                <input type = "email" placeholder = " "  name = "email"className = "i-text input-name login-input" onChange = {updateNewUserData}/>
                <span className = "input-placeholder">Email Address</span>
            </label>
            <label className = "input-label password-wrapper">
                <input type = {showPassword.password ? "text" : "password"} name = "password" placeholder = " " className = "i-text input-name login-input" onChange = {updateNewUserData}/>
                <span  className = "input-placeholder">Password</span>
                <button className = "show-password" onClick = {toggleDisplayPassword}>{showPassword.password ? <i className="fas fa-eye "></i> : <i className="fas fa-eye-slash"></i>}</button>
                
            </label>
            <label className = "input-label password-wrapper">
                <input type = {showPassword.reEnterPassword ? "text" : "password"} placeholder = " " className = "i-text input-name login-input" onChange = {checkPassword}/>
                <span  className = "input-placeholder">Confirm Password</span>
                <button className = "show-password" onClick = {toggleReDisplayPassword}>{showPassword.reEnterPassword ? <i className="fas fa-eye "></i> : <i className="fas fa-eye-slash"></i>}</button>
                {!isPasswordMatch && <p>Passwords don't match</p>}
            </label>
           
            <button className = "btn primary" onClick = {signupUser}>Signup</button>
            <p className = "login-header create-account">Already Have an Account? Login</p>
        </div>
    </div>
  )
};

export default Signup;