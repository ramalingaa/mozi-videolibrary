import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterNavbar = () => {
  return (
    <div className = "footer-nav">
        <NavLink  className = {({isActive}) => isActive ? "link-active footer-link-active":"link-notactive footer-link-notactive"} to ="/WatchLater">Watch Later</NavLink> 
        <NavLink className = {({isActive}) => isActive ? "link-active footer-link-active":"link-notactive footer-link-notactive"} to = "/LikedVideo">Liked</NavLink>
        <NavLink className = {({isActive}) => isActive ? "link-active footer-link-active":"link-notactive footer-link-notactive"} to = "/History">History</NavLink>
        <NavLink className = {({isActive}) => isActive ? "link-active footer-link-active":"link-notactive footer-link-notactive"} to = "/Playlist">Playlist</NavLink>
    </div>
  )
}

export default FooterNavbar