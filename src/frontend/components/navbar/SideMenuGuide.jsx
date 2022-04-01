import React from 'react'
import { NavLink } from "react-router-dom"

const SideMenuGuide = ({singlePage = false}) => {

  return (
    <div className ="side-navbar-wrapper">

       <div className = {`side-navbar-content ${singlePage && "singlepage-sidebar"}`}>
            <NavLink to ="/videos" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-notactive")}><i className="fas fa-rss sidebar-icon" title = {singlePage ? "Latest Videos" :""}></i>{ !singlePage && "Latest Videos"}</NavLink>
            <NavLink to ="/WatchLater" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-notactive")}><i className="fas fa-alarm-clock sidebar-icon" title = {singlePage ? "Watch Later" :""}></i>{ !singlePage && "Watch Later"}</NavLink> 
            <NavLink to = "/LikedVideo" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-notactive")}><i className="fas fa-thumbs-up sidebar-icon" title = {singlePage ? "Liked Videos" :""}></i>{ !singlePage && "Liked Videos" }</NavLink>
            <NavLink to = "/History" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-notactive")}><i className="fas fa-history sidebar-icon" title = {singlePage ? "History" :""}></i>{!singlePage && "History"}</NavLink>
            <NavLink to = "/Playlist" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-notactive")}><i className="far fa-hdd sidebar-icon" title = {singlePage ? "Playlist" :""}></i>{!singlePage && "Playlist"}</NavLink>
        </div>
    </div>
  )
}

export default SideMenuGuide