import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../context/index-context'

const FooterNavbar = () => {
  const { theme } = useAuthContext()
  return (
    <div className = {`footer-nav ${theme}`}>
        <NavLink  className = {({isActive}) => isActive ? "link-active footer-link-active":"link-inactive footer-link-inactive"} to ="/WatchLater">Watch</NavLink> 
        <NavLink className = {({isActive}) => isActive ? "link-active footer-link-active":"link-inactive footer-link-inactive"} to = "/LikedVideo">Liked</NavLink>
        <NavLink className = {({isActive}) => isActive ? "link-active footer-link-active":"link-inactive footer-link-inactive"} to = "/History">History</NavLink>
        <NavLink className = {({isActive}) => isActive ? "link-active footer-link-active":"link-inactive footer-link-inactive"} to = "/Playlist">Playlist</NavLink>
    </div>
  )
}

export default FooterNavbar