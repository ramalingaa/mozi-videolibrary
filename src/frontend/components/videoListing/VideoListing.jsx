import React from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide, VideoCard} from '../index-components'

const VideoListing = () => {
    const { state } = useVideoContext()
    const { videoData } =  state
  return (
    <div className = "video-page-wrapper">
      <SideMenuGuide />
      <div className = "video-listing-wrapper">
        {videoData.map((ele) => { 
            return <VideoCard vInfo = {ele} key = {ele._id}/>
        })}
    </div>
    </div>
  )
}

export default VideoListing