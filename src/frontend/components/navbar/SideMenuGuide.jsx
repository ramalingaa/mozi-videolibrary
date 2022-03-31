import React from 'react'
import { Link } from "react-router-dom"

const SideMenuGuide = ({singlePage = false}) => {

  return (
    <div className ="side-navbar-wrapper">

       <div className = {`side-navbar-content ${singlePage && "singlepage-sidebar"}`}>
            <Link to ="/videos"><i className="fas fa-rss sidebar-icon" title = {singlePage ? "Latest Videos" :""}></i>{ !singlePage && "Latest Videos"}</Link>
            <Link to ="/WatchLater"><i className="fas fa-alarm-clock sidebar-icon" title = {singlePage ? "Watch Later" :""}></i>{ !singlePage && "Watch Later"}</Link> 
            <Link to = "/LikedVideo"><i className="fas fa-thumbs-up sidebar-icon" title = {singlePage ? "Liked Videos" :""}></i>{ !singlePage && "Liked Videos" }</Link>
            <Link to = "/History"><i className="fas fa-history sidebar-icon" title = {singlePage ? "History" :""}></i>{!singlePage && "History"}</Link>
            <Link to = "/Playlist"><i className="far fa-hdd sidebar-icon" title = {singlePage ? "Playlist" :""}></i>{!singlePage && "Playlist"}</Link>
        </div>
    </div>
  )
}

export default SideMenuGuide