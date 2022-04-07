import React from 'react'
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../context/index-context"

const SideMenuGuide = ({singlePage = false}) => {
  const { theme } = useAuthContext()
  return (
    <div className ="side-navbar-wrapper">
       <div className = {`side-navbar-content ${singlePage && "singlepage-sidebar"} ${theme}`}>
            <NavLink to ="/videos" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-inactive")}><i className={`fas fa-rss ${singlePage ?"sidebar-singlepage-icon" :"sidebar-icon"}`} title = {singlePage ? "Latest Videos" :""}></i>{ !singlePage && "Latest Videos"}</NavLink>
            <NavLink to ="/WatchLater" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-inactive")}><i className={`fas fa-alarm-clock ${singlePage ?"sidebar-singlepage-icon" :"sidebar-icon"}`} title = {singlePage ? "Watch Later" :""}></i>{ !singlePage && "Watch Later"}</NavLink> 
            <NavLink to = "/LikedVideo" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-inactive")}><i className={`fas fa-thumbs-up ${singlePage ?"sidebar-singlepage-icon" :"sidebar-icon"}`} title = {singlePage ? "Liked Videos" :""}></i>{ !singlePage && "Liked Videos" }</NavLink>
            <NavLink to = "/History" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-inactive")}><i className={`fas fa-history ${singlePage ?"sidebar-singlepage-icon" :"sidebar-icon"}`} title = {singlePage ? "History" :""}></i>{!singlePage && "History"}</NavLink>
            <NavLink to = "/Playlist" className = {!singlePage && (({isActive}) => isActive ? "link-active":"link-inactive")}><i className={`far fa-hdd ${singlePage ?"sidebar-singlepage-icon" :"sidebar-icon"}`} title = {singlePage ? "Playlist" :""}></i>{!singlePage && "Playlist"}</NavLink>
        </div>
    </div>
  )
}

export default SideMenuGuide