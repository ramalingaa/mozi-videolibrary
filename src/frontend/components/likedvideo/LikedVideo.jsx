import React from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide, LikedVideoCard} from '../index-components'
import { Link } from "react-router-dom"

const LikedVideo = () => {
  const { state } = useVideoContext()
  const { likedData} = state  
  return (
    <div className="single-card-wrapper">
      <SideMenuGuide />
      <div className = "single-play-card">
        {likedData.map((ele) => {
            return <LikedVideoCard vInfo = {ele}/>
        })}
        {likedData.length < 1 && 
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

export default LikedVideo