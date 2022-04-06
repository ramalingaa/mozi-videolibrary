import React, { useState, useEffect } from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide, WatchLaterVideoCard, PlaylistToast} from '../index-components'
import { Link } from "react-router-dom"

const WatchLater = () => {
  const { state } = useVideoContext()
  const { watchLaterData } = state  
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
      {watchLaterData.map((ele) => {
        return <WatchLaterVideoCard vInfo = {ele} setToastDisplay = { setToastDisplay} key = {ele._id}/>
      })}
      {watchLaterData.length < 1 && 
          <div className = "empty-single-playlist">
            <p className = "text-large  fw-7">WatchLater is currently empty</p>
            <small>Find more videos you love from latest releases</small>
            <Link to = "/videos" className = "btn primary">Go To New Releases</Link>
          </div>
          }
        {toastDisplay && <PlaylistToast text = "Removed from Watchlater"/>}
      </div>
    </div>
  )
}

export default WatchLater