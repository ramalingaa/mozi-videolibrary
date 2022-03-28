import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavbar = () => {
  return (
    <div className = "footer-nav">
        <Link to ="/">Watch Later</Link> |
        <Link to = "/LikedVideo">Liked</Link>|
        <Link to = "/History">History</Link>|
        <Link to = "/Playlist">Playlist</Link>
    </div>
  )
}

export default FooterNavbar