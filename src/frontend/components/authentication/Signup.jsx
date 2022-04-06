import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";



const Signup = () => {

    const [showPassword, setShowPassword] = useState({password:false, reEnterPassword:false})
    const [isPasswordMatch, setISPasswordMatch] = useState(false)
    const [error, setError] = useState({emailExist:false,blankError: false, otherError:false})
    const [formError, setFormError] = useState({})

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
    const formValidate = () => {
        let err = {}
        if(!(newUserData.email.includes("@"))){
            err["email"] = "Enter valid email"
        }
        if(newUserData.name.length < 4){
            err["name"] = "Name should be greater than four characters"
        }
        if(newUserData.password.length < 8){
            err["password"] = "Password must be greater than eight characters"
        }
        return err
    }
    const blurHandler = () => {
        const errorObject = formValidate()
        setFormError(() => errorObject)
    }
    const signupUser = async () => {
        const errorObject = formValidate()
        if(Object.keys(errorObject).length < 1 && isPasswordMatch){
            try {
                const response = await axios.post("/api/auth/signup",newUserData)
                if(response.status === 201){
                    navigate("/login")
                }
                
            }catch (e){
                if(e?.response){
                    e.response.status === 422 && setError((prev) => ({emailExist:true,blankError: false, otherError:false}))
                    e.response.status === 500 && setError((prev) => ({emailExist:false,blankError: false, otherError:true}))
                }
                
            }
        }
        else {
            setFormError(() => errorObject)
        }
    }
    

  return (
    <div className = "login-page-wrapper">
        <div className = "login-card-wrapper">
            <p className = "text-large login-header">Signup</p>
            <label className = "input-label">
                <input type = "text" placeholder = " " name = "name"className = "i-text input-name login-input" onChange = {updateNewUserData} onBlur = {blurHandler}/>
                <span className = "input-placeholder">Full Name</span>
                <p className = "login-forgotPassword">{formError.name}</p>
            </label>
            <label className = "input-label">
                <input type = "email" placeholder = " "  name = "email"className = "i-text input-name login-input" onChange = {updateNewUserData} onBlur = {blurHandler}/>
                <span className = "input-placeholder">Email Address</span>
                <p className = "login-forgotPassword">{formError.email}</p>
            </label>
            <label className = "input-label password-wrapper">
                <input type = {showPassword.password ? "text" : "password"} name = "password" placeholder = " " className = "i-text input-name login-input" onChange = {updateNewUserData} onBlur = {blurHandler}/>
                <span  className = "input-placeholder">Password</span>
                <p className = "login-forgotPassword">{formError.password}</p>
                <button className = "show-password" onClick = {toggleDisplayPassword}>{showPassword.password ? <i className="fas fa-eye "></i> : <i className="fas fa-eye-slash"></i>}</button>
                
            </label>
            <label className = "input-label password-wrapper">
                <input type = {showPassword.reEnterPassword ? "text" : "password"} placeholder = " " className = "i-text input-name login-input" onChange = {checkPassword}/>
                <span  className = "input-placeholder">Confirm Password</span>
                <button className = "show-password" onClick = {toggleReDisplayPassword}>{showPassword.reEnterPassword ? <i className="fas fa-eye "></i> : <i className="fas fa-eye-slash"></i>}</button>
                {!isPasswordMatch && <p className = "login-forgotPassword">Passwords don't match</p>}
            </label>
            {error.emailExist && <p className = "login-forgotPassword">The email you entered is already Exists.</p>}
            {error.otherError && <p className = "login-forgotPassword">Something went wrong.</p>}
            {error.blankError && <p className = "login-forgotPassword">Please fill in required details.</p>}
            <button className = "btn primary" onClick = {signupUser}>Signup</button>
            <Link to = "/login" className = "login-header create-account">Already Have an Account? Login</Link>
        </div>
    </div>
  )
};

export default Signup;