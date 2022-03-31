import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams  } from 'react-router-dom'
import {  useVideoContext, useAuthContext} from '../../context/index-context'
import { RelatedVideo, SaveToPlaylistCard, PlaylistToast, SideMenuGuide, NotesCard} from '../index-components'
import { updateLikeFunction } from '../utility-functions/updateLikeFunction';
import { updateWatchLaterFunction } from '../utility-functions/updateWatchLaterFunction'

const SingleVideo = () => {
    console.log("single video running")
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [ displaySaveToPlayList, setDisplaySaveToPlayList] = useState(false)
    const [relatedVideo, setRelatedVideo] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [isWatchLaterAdded, setIsWatchLaterAdded] = useState(false)
    const [singlePage, setSinglePage] = useState(true)
    const [notesDisplay, setNotesDisplay] = useState(false)
    const [serverNotes, setServerNotes] = useState({notes:""})
    const param = useParams()
    
    const [toastDisplay, setToastDisplay] = useState(false)
    const navigate = useNavigate()
    const { jwtToken } = useAuthContext()
    const { state, dispatch } = useVideoContext()
    const { historyData, videoData, likedData, playListData, watchLaterData, notesData} = state
    const singleVideoData = videoData.find((ele) => ele._id === param.videoId)

    const toggleDescription  = () => {
        setDescriptionToggle((prev) => !prev)
    }
    const toggleNotes = () => {
        setNotesDisplay((prev) => !prev)
    }
    useEffect(() => {
        const isItLiked = likedData.find((ele) => ele._id === singleVideoData._id)
        setNotesDisplay(() => false)
        if(isItLiked){
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }

    },[singleVideoData._id])
    useEffect(() => {
        const isWatchLater = watchLaterData.find((ele) => ele._id === singleVideoData._id)
        if(isWatchLater){
            setIsWatchLaterAdded(() =>true)
        } else {
            setIsWatchLaterAdded(() =>false)
        }
        
    },[singleVideoData._id])

    useEffect(() => {
        const relatedVideoData = videoData.filter((ele) => ele._id !== singleVideoData._id )
        setRelatedVideo(() => relatedVideoData )
    },[singleVideoData._id])

    //Add default playlist Watch later if nothing added to playlist
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

    //Add to History page if not present on history list
    useEffect(() => {
        const isDuplicate = historyData.find((ele) => ele._id === singleVideoData._id)
        if(!isDuplicate){
            
        (async () => {
            try{
                const response = await axios.post("/api/user/history",{video:singleVideoData}, {headers:{authorization:jwtToken}})
                dispatch({type:"SET_HISTORY_DATA", payload:response.data.history})

                
            }catch(e){
                console.log(e)
            }
        })()
        }
        
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
             toastIntervalId = setTimeout(() =>setToastDisplay(false),3000)
        } 

        return () => clearInterval(toastIntervalId)
    },[toastDisplay])
    useEffect(() => {
        const videoNotes = notesData.find((ele) => ele._id === singleVideoData._id)
        console.log("useEffect is running")
        if(videoNotes){
          setServerNotes(() => videoNotes)
        }else {
          setServerNotes(() => ({}))
        }
        
      },[notesData, singleVideoData._id])
console.log(notesData)
console.log(serverNotes)
  return (
    <div className = "single-video-wrapper">
        <div className = "side-menu-singleVideo-wrapper">
            <SideMenuGuide singlePage = {singlePage}/>
        </div>
        <div className = "playsection-wrapper">
        <video src = { singleVideoData.video} width ="100%" controls/>
        <div className = "single-video-card">
            
            <p className = "video-title">{singleVideoData.title} by {singleVideoData.creator}</p>
            <div className = "video-action-wrapper">
                <p>Views</p>
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
                    return <SaveToPlaylistCard plName = {ele} vInfo = {singleVideoData} setToastDisplay = {setToastDisplay}/>
                })}
            </div>
            <button onClick = {closeSaveDialog} className = "btn  playlist-save-btn">Save</button>
                </div>}
                {
                notesDisplay && 
                <div>
                    <NotesCard videoId = {singleVideoData._id} serverNotes = {serverNotes} setServerNotes = {setServerNotes}/>
                </div>
            }
            <p onClick = {toggleDescription} className = "description-btn">Description</p>
            {descriptionToggle && <p>{singleVideoData.description}</p>}
        </div>
        </div>
        <div className = "relative-section-wrapper">
         <RelatedVideo relatedVideo = {relatedVideo}/>
        </div>
        
        {toastDisplay && <PlaylistToast text = "added to playlist"/>}
    </div>
  )
}

export default SingleVideo


