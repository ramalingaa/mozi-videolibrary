import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useAuthContext } from '../../context/index-context'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState({emailNotFound:false,wrongCredentials:false, blankError: false, otherError:false})
    const [userData, setUserData] = useState({email:"", password:""})
    const {  setJwtToken, setUserProfileData } = useAuthContext()
    const navigate = useNavigate() 
    const updateUserData = (e) => {
        const { name } = e.target
        setUserData((prev) => ({...prev, [name]:e.target.value}))
    }
    const loginUser = async () => {
        if(userData.email && userData.password){
            try {
            
                const response = await axios.post("/api/auth/login",userData)
                if(response.status === 200){
                    localStorage.setItem("JWT_TOKEN_MOZI",response.data.encodedToken)
                    localStorage.setItem("USER_PROFILE_MOZI",JSON.stringify(response.data.foundUser))
                    setJwtToken(() =>response.data.encodedToken)
                    setUserProfileData(() =>response.data.foundUser )
                    navigate("/")
                } else {
                    throw new Error()
                }
    
            }catch(e) {            
                if(e?.response){
                    e.response.status === 404 && setError((prev) => ({emailNotFound:true,wrongCredentials:false, blankError: false,otherError:false}))
                    e.response.status === 401 && setError((prev) => ({emailNotFound:false,wrongCredentials:true,blankError: false, otherError:false}))
                    e.response.status === 500 && setError((prev) => ({emailNotFound:false,wrongCredentials:false, blankError: false,otherError:true}))
                }
                else {
                    e  && setError((prev) => ({emailNotFound:false,wrongCredentials:true, otherError:false}))
                }
                
                
            }
        }
        else {
            setError((prev) => ({emailNotFound:false,wrongCredentials:false, blankError: true,otherError:false}))
        }
    }
    const toggleDisplayPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const loginGuest = async () => {

        try {
            const guestData = {email:"ramalinga.kalagotla@gmail.com", password:"123456"}
            const response = await axios.post("/api/auth/login",guestData)
            localStorage.setItem("JWT_TOKEN",response.data.encodedToken)
            localStorage.setItem("USER_PROFILE",JSON.stringify(response.data.foundUser))
            setJwtToken(() =>response.data.encodedToken)
            setUserProfileData(() =>response.data.foundUser )
            navigate("/products")

        }catch(e) {
            console.log(e)
        }
    }

  return (
    <div className = "login-page-wrapper">
        <div className = "login-card-wrapper">
            <p className = "text-large login-header">Login</p>
            <label className = "input-label">
                <input type = "email" placeholder = " " name = "email"className = "i-text input-name login-input" onChange = {updateUserData}/>
                <span className = "input-placeholder">Email Address</span>
            </label>
            <label className = "input-label">
                <input type =  {showPassword ? "text" : "password"}  placeholder = " " name = "password" className = "i-text input-name login-input" onChange = {updateUserData}/>
                <span  className = "input-placeholder">Password</span>
                <button className = "show-password" onClick = {toggleDisplayPassword}>{showPassword.password ? <i className="fas fa-eye "></i> : <i className="fas fa-eye-slash"></i>}</button>

            </label>
            {error.emailNotFound && <p className = "login-forgotPassword">The email you entered is not Registered.</p>}
            {error.otherError && <p className = "login-forgotPassword">Something went wrong.</p>}
            {error.wrongCredentials && <p className = "login-forgotPassword">Invalid credentials.</p>}
            {error.blankError && <p className = "login-forgotPassword">Please fill in required details.</p>}
            <div className = "rememberMe-wrapper">
                <label><input type = "checkbox" className = "remember-checkbox"/>Remember me</label>
                <Link to = "/ForgotPassword" className = "login-forgotPassword">Forgot password ?</Link>
            </div>
            <button className = "btn primary" onClick = {loginUser}>Login</button>
            <button className = "btn outlined" onClick = {loginGuest}>Login as a Guest</button>
            <Link to = "/signup"className = "login-header create-account">Create new Account</Link>
        </div>
    </div>
  )
};

export default Login;