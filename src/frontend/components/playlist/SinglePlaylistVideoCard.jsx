import React, { useState, useEffect } from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide, PlaylistToast, PlaylistVideoCard } from '../index-components'
import { Link } from "react-router-dom"

const SinglePlaylistVideoCard = () => {
  const { state } = useVideoContext()
  const { singlePlaylistData } = state
  const [toastDisplay, setToastDisplay] = useState(false)

  
  useEffect(() =>{
    let toastIntervalId
    if(toastDisplay){
         toastIntervalId = setTimeout(() =>setToastDisplay(false),1500)
    } 

    return () => clearInterval(toastIntervalId)
},[toastDisplay])
  return (
    <div className="single-card-wrapper">
      <SideMenuGuide />
      <div className = "single-play-card">

        {singlePlaylistData.map((ele) =>{
          return <PlaylistVideoCard  vInfo = {ele} key = {ele._id} setToastDisplay = {setToastDisplay}/>
        })}
          { toastDisplay && <PlaylistToast text = "Removed from Playlist"/>}
          {singlePlaylistData.length < 1 && 
          <div className = "empty-single-playlist">
            <p className = "text-large  fw-7">This playlist is currently empty</p>
            <small>Find the more videos you love from latest releases</small>
            <Link to = "/videos" className = "btn primary">Go To New Releases</Link>
          </div>
          }
      </div>
    </div>
  )
}

export default SinglePlaylistVideoCard