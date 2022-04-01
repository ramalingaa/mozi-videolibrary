import React, { useState, Suspense, lazy } from 'react'
import { useVideoContext } from '../../context/index-context'
import { SideMenuGuide} from '../index-components'

const  VideoCard = lazy(() => import('./VideoCard') )

const VideoListing = () => {
    const [chipSelected, setChipSelected] = useState({all:true, space:false, earth:false})
    const { state, dispatch } = useVideoContext()
    const { videoData, serverData } =  state
    const [latestSort, setLatestSort] = useState(false)
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
    const displayLatestVideos = () => {
     if(!latestSort){
      videoData.sort((firstEl, secondEl) => 
      (new Date(secondEl.creationTime).getTime()) - (new Date(firstEl.creationTime).getTime()))
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload:videoData})
      setLatestSort((prev) => !prev)
     } else {
      videoData.sort((firstEl, secondEl) => 
      (new Date(firstEl.creationTime).getTime()) - (new Date(secondEl.creationTime).getTime()))
      dispatch({type:"SET_SEARCH_VIDEO_DATA", payload:videoData})
      setLatestSort((prev) => !prev)
     }
    }
    
  return (
    <div className = "video-page-wrapper">
      <SideMenuGuide />
      <div className = "video-chip-wrapper">
        <div  className = "latest-chip-wrapper">
          <div className = "chip-wrapper">
            <button className = {`btn chip-btn ${chipSelected.all && "chip-selected"}`} onClick = {displayAllVideos}>All</button>
            <button className = {`btn chip-btn ${chipSelected.space && "chip-selected"}`} onClick = {displaySpaceVideos}>Space</button>
            <button className = {`btn chip-btn ${chipSelected.earth && "chip-selected"}`} onClick = {displayEarthVideos}>Earth</button>
          </div>
          <button className = {`btn chip-btn ${latestSort && "chip-selected"}`} onClick = {displayLatestVideos}>Latest Videos</button>
        </div>
        <div  className = "video-listing-wrapper">
        <Suspense fallback={<h1>This page is loading and don't distroub while loading</h1>}>
          {videoData.map((ele) => { 
              return (
                         <VideoCard vInfo = {ele} key = {ele._id}/>

              )
          })}
          </Suspense>
        </div>
     </div>
    </div>
  )
}

export default VideoListing