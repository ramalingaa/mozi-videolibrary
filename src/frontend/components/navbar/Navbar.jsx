import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useVideoContext, useAuthContext } from '../../context/index-context';
import { UserProfile } from '../index-components';

const Navbar = () => {
  const [profileDisplay, setProfileDisplay] = useState(false)
  const { state, dispatch } = useVideoContext()
  const { serverData} = state

  const { jwtToken, setTheme, theme } = useAuthContext()
  const navigate = useNavigate()
  
  
  const searchHandler = (e) => {
    if(e.key === "Enter" || e.target.value === ""){
      const searchData = serverData.filter((ele) => ele.title.toLowerCase().includes(e.target.value.toLowerCase()))
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload: searchData})
      navigate("/Videos")
    }
    
  }
 
  const toggleProfileCard = () => {
    setProfileDisplay((prev) => !prev)
  }
  const themeHandler = () => {
    if(theme === "dark-mode"){
      setTheme(() => "light-mode")
      localStorage.setItem("theme", "light-mode")
    }
    else {
      setTheme(() => "dark-mode")
      localStorage.setItem("theme", "dark-mode")
    }
  }

  return (
    <nav className="navbar">
       <Link to = "/" className="navbar-logo">
            <i className="fas fa-video"></i>
            <h2>mozi</h2>
       </Link>
       
        <div className ="navbar-search">
            <i className="far fa-search search-icon"></i>
            <input type = "text" className = "i-text search-input" onKeyDown = {searchHandler} />  
        </div>
        <div className = "signin-theme-wrapper">
          {jwtToken ? <i className="far fa-user nav-icon" onClick = {toggleProfileCard}></i> : 
          <Link to = "/Login" className="navbar-cart">
              <div className={`page-links wish-list ${theme}`}>SIGN IN
                  <i className="fal fa-user-circle nav-icon"></i>
              </div>
          </Link>}
          <i className="fas fa-sun nav-icon" onClick = { themeHandler }></i>
        </div>
        
          {profileDisplay && <UserProfile setProfileDisplay = {setProfileDisplay}/>}
        
    </nav>
  )
}

export default Navbar