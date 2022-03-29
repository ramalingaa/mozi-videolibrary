import React from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide, WatchLaterVideoCard} from '../index-components'
import { Link } from "react-router-dom"

const WatchLater = () => {
  const { state } = useVideoContext()
  const { watchLaterData } = state  
  return (
    <div className="single-card-wrapper">
      <SideMenuGuide />
      <div className = "single-play-card">
      {watchLaterData.map((ele) => {
        return <WatchLaterVideoCard vInfo = {ele}/>
      })}
      {watchLaterData.length < 1 && 
          <div className = "empty-single-playlist">
            <p className = "text-large  fw-7">WatchLater is currently empty</p>
            <small>Find more videos you love from latest releases</small>
            <Link to = "/videos" className = "btn primary">Go To New Releases</Link>
          </div>
          }
      </div>
    </div>
  )
}

export default WatchLater