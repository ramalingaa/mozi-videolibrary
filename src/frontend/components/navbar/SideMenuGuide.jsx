import React, { useState } from 'react'
import { Link } from "react-router-dom"

const SideMenuGuide = () => {
    
  return (
    <div className ="side-navbar-wrapper">
          <div className = "side-navbar-content">
            <Link to ="/"><i className="fas fa-alarm-clock sidebar-icon"></i>Watch Later</Link> 
            <Link to = "/LikedVideo"><i className="fas fa-thumbs-up sidebar-icon"></i>Liked Videos</Link>
            <Link to = "/History"><i className="fas fa-history sidebar-icon"></i>History</Link>
            <Link to = "/Playlist"><i className="far fa-hdd sidebar-icon"></i>Playlist</Link>
        </div>
    </div>
  )
}

export default SideMenuGuide