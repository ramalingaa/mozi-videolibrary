import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/index-context'

const UserProfile = ({setProfileDisplay}) => {
    const { userProfileData, setJwtToken } = useAuthContext()
    const  navigate  = useNavigate()
    const logoutUser = () => {
        localStorage.removeItem("JWT_TOKEN_MOZI")
        localStorage.removeItem("USER_PROFILE_MOZI")
        setJwtToken(() => "")
        setProfileDisplay((prev) => !prev)
        navigate("/login")
        
      }
  return (
    <div className = "profile-card-wrapper">
        <p>Hello <strong>{userProfileData.firstName}</strong></p>
        <p >Our Policies</p>
        <p>Contact Us</p>
        <button className="btn outlined" onClick = {logoutUser}>Logout</button>
        
    </div>
  )
};

export default UserProfile;
