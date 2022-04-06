import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams  } from 'react-router-dom'
import {  useVideoContext, useAuthContext} from '../../context/index-context'
import { RelatedVideo, SaveToPlaylistCard, PlaylistToast, SideMenuGuide, NotesCard, NotesToast} from '../index-components'
import { updateLikeFunction, updateWatchLaterFunction, addVideoToHistory, getRelatedVideoData, getVideoLikedStatus, getVideoWatchlaterStatus } from '../utility-functions/index-function';

const SingleVideo = () => {
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [ displaySaveToPlayList, setDisplaySaveToPlayList] = useState(() => false)
    const [relatedVideo, setRelatedVideo] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [isWatchLaterAdded, setIsWatchLaterAdded] = useState(false)
    const [singlePage, setSinglePage] = useState(true)
    const [notesDisplay, setNotesDisplay] = useState(false)
    const [serverNotes, setServerNotes] = useState({notes:""})
    const param = useParams()
    
    const [toastDisplay, setToastDisplay] = useState(false)
    const [notesToast, setNotesToast] = useState({added:false, removed:false})
    const navigate = useNavigate()
    const { jwtToken } = useAuthContext()
    const { state, dispatch } = useVideoContext()
    const { historyData, videoData, likedData, playListData, watchLaterData, notesData} = state
    const singleVideoData = videoData.find((ele) => ele._id === param.videoId)
    
    const toggleDescription  = () => {
        setDescriptionToggle((prev) => !prev)
    }
    const toggleNotes = () => {
        jwtToken ? setNotesDisplay((prev) => !prev) : navigate("/login")
    }
    useEffect(() => {
        const isDuplicate = playListData.find((ele) => ele.name === "Watch Later")
        if(!isDuplicate){
            const playList = {name:"Watch Later"};
        (async () => {
            try{
                const response = await axios.post("/api/user/playlists",{playlist:playList}, {headers:{authorization:jwtToken}})
                dispatch({type:"SET_PLAYLIST_DATA", payload: response.data.playlists})
    
                
            }catch(e){
                console.log(e)
            }
        })()
        }
        
    },[])

    useEffect(() => {

        getVideoLikedStatus(likedData, singleVideoData, setNotesDisplay, setIsLiked)
        getVideoWatchlaterStatus(watchLaterData, singleVideoData, setIsWatchLaterAdded)
        getRelatedVideoData(videoData, singleVideoData, setRelatedVideo)
        addVideoToHistory(historyData, singleVideoData, jwtToken, dispatch)

    },[singleVideoData._id])
   

    const addToPlaylist = () => {
        if(jwtToken){
            setDisplaySaveToPlayList((prev) => !prev)
        }
        else {
            navigate("/Login")
        }
    }
    const closeSaveDialog = () => {
        setDisplaySaveToPlayList((prev) => !prev)
    }
    const updateLikedVideos = updateLikeFunction(jwtToken, isLiked, singleVideoData, dispatch, setIsLiked, likedData, navigate)
    const toggleWatchLater = updateWatchLaterFunction(jwtToken, isWatchLaterAdded, singleVideoData, dispatch, setIsWatchLaterAdded, watchLaterData, navigate);


    useEffect(() =>{
        let toastIntervalId
        if(toastDisplay){
             toastIntervalId = setTimeout(() =>setToastDisplay(false),1500)
        } 

        return () => clearInterval(toastIntervalId)
    },[toastDisplay])
    useEffect(() =>{
        let toastIntervalId
        if(notesToast.added){
             toastIntervalId = setTimeout(() =>setNotesToast(() => ({added:false, removed:false})),1500)
        } 

        return () => clearInterval(toastIntervalId)
    },[notesToast.added])
    useEffect(() =>{
        let toastIntervalId
        if(notesToast.removed){
             toastIntervalId = setTimeout(() =>setNotesToast(() => ({added:false, removed:false})),1500)
        } 

        return () => clearInterval(toastIntervalId)
    },[notesToast.removed])

    useEffect(() => {
        const videoNotes = notesData.find((ele) => ele._id === singleVideoData._id)
        if(videoNotes){
          setServerNotes(() => videoNotes)
        }else {
          setServerNotes(() => ({}))
        }
        
      },[notesData, singleVideoData._id])

      const updateVideoViews = (e) => {
          singleVideoData.views += 1
      }

  return (
    <div>
        <div className = "single-video-wrapper">
            <div className = "side-menu-singleVideo-wrapper">
                <SideMenuGuide singlePage = {singlePage}/>
            </div>
            <div className = "playsection-wrapper">
            <video src = { singleVideoData.video} width ="100%" controls onPlay ={updateVideoViews}/>
            <div className = "single-video-card">
                
                <p className = "video-title">{singleVideoData.title} by {singleVideoData.creator}</p>
                <div className = "video-action-wrapper">
                    <p>{singleVideoData.views} Views</p>
                    <div>
                        <button className = {`btn btn-text ${isLiked ? "selected" :""}`} onClick = {updateLikedVideos}><i className="fas fa-thumbs-up"></i> Like</button>
                        <button className = {`btn btn-text ${isWatchLaterAdded ? "selected" :""}`} onClick = {toggleWatchLater}><i className="fas fa-alarm-clock"></i> Watch Later</button>
                        <button className = "btn btn-text" onClick = {addToPlaylist}><i className="fas fa-file-plus"></i> Save</button>
                        <button className = "btn btn-text"onClick = {toggleNotes}><i className="far fa-sticky-note"></i> Add Notes</button>
                    </div>
                </div>
                { displaySaveToPlayList && 
                <div className = "save-to-card">
                        <div>
                        {playListData.map((ele) =>{
                        return <SaveToPlaylistCard plName = {ele} key = {ele._id} vInfo = {singleVideoData} setToastDisplay = {setToastDisplay}/>
                    })}
                </div>
                <button onClick = {closeSaveDialog} className = "btn  playlist-save-btn">Close</button>
                    </div>}
                    {
                    notesDisplay && 
                    <div>
                        <NotesCard videoId = {singleVideoData._id} serverNotes = {serverNotes} setServerNotes = {setServerNotes} setNotesDisplay = { setNotesDisplay } setNotesToast = { setNotesToast }/>
                    </div>
                }
                <p onClick = {toggleDescription} className = "description-btn">Description</p>
                {descriptionToggle && <p>{singleVideoData.description}</p>}
            </div>
            </div>
            <div className = "relative-section-wrapper">
            <RelatedVideo relatedVideo = {relatedVideo}/>
            </div>
            
            
        </div>
        {toastDisplay && <PlaylistToast text = "added to playlist"/>}
        { notesToast.added && <NotesToast text = "added to video" />}
        { notesToast.removed && <NotesToast text = "removed from video" />}
    </div>
  )
}

export default SingleVideo




