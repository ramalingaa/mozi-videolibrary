import React, { useState } from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide, VideoCard} from '../index-components'

const VideoListing = () => {
    const [chipSelected, setChipSelected] = useState({all:true, space:false, earth:false})
    const { state, dispatch } = useVideoContext()
    const { videoData, serverData } =  state
    const displayAllVideos = () => {
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload:serverData})
      setChipSelected(() => ({all:true, space:false, earth:false}))
    }
    const displaySpaceVideos = () => {
      const spaceVideos = serverData.filter((ele) => ele.category === "Space")
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload:spaceVideos})
      setChipSelected(() => ({all:false, space:true, earth:false}))
    }
    const displayEarthVideos = () => {
      const earthVideos = serverData.filter((ele) => ele.category === "Earth")
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload:earthVideos})
      setChipSelected(() => ({all:false, space:false, earth:true}))
    }
  return (
    <div className = "video-page-wrapper">
      <SideMenuGuide />
      <div className = "video-chip-wrapper">
        <div className = "chip-wrapper">
          <button className = {`btn chip-btn ${chipSelected.all && "chip-selected"}`} onClick = {displayAllVideos}>All</button>
          <button className = {`btn chip-btn ${chipSelected.space && "chip-selected"}`} onClick = {displaySpaceVideos}>Space</button>
          <button className = {`btn chip-btn ${chipSelected.earth && "chip-selected"}`} onClick = {displayEarthVideos}>Earth</button>
        </div>
        <div className = "video-listing-wrapper">
          {videoData.map((ele) => { 
              return <VideoCard vInfo = {ele} key = {ele._id}/>
          })}
        </div>
     </div>
    </div>
  )
}

export default VideoListing