import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useVideoContext, useAuthContext } from '../../context/index-context';
import { UserProfile } from '../index-components';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("")
  const [profileDisplay, setProfileDisplay] = useState(false)
  const { state, dispatch } = useVideoContext()
  const { videoData, serverData} = state

  const { jwtToken } = useAuthContext()
  const navigate = useNavigate()
  
  
  const searchHandler = (e) => {
    if(e.key === "Enter"){
      const searchData = serverData.filter((ele) => ele.title.toLowerCase().includes(e.target.value.toLowerCase()))
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload: searchData})
      navigate("/Videos")
    }
    
  }
  const updateSearchInput = (e) => {
    setSearchInput(() => e.target.value)
  }
  const toggleProfileCard = () => {
    setProfileDisplay((prev) => !prev)
  }
  return (
    <nav className="navbar">
       <Link to = "/" className="navbar-logo">
            <i className="fas fa-video"></i>
            <h2>mozi</h2>
       </Link>
       
        <div className ="navbar-search">
        <i className="far fa-search search-icon"></i>
            <input type = "text" className = "i-text search-input" onKeyPress = {searchHandler} onChange = {updateSearchInput}/>  
        </div>
        {jwtToken ? <i className="far fa-user nav-icon" onClick = {toggleProfileCard}></i> : 
        <Link to = "/Login" className="navbar-cart">
            <div className="page-links wish-list">SIGN IN
                <i className="fal fa-user-circle nav-icon"></i>
            </div>
        </Link>}
          {profileDisplay && <UserProfile setProfileDisplay = {setProfileDisplay}/>}
        
    </nav>
  )
}

export default Navbar