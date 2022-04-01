import React, {  useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {  useVideoContext, useAuthContext } from '../../context/index-context'
import { updateWatchLaterFunction, updateLikeFunction } from '../utility-functions/index-function';

const VideoCard = ({vInfo}) => {
    const { state, dispatch } = useVideoContext()
    const {  likedData, watchLaterData } = state
    const { jwtToken } = useAuthContext()
    const [isLiked, setIsLiked] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const [isWatchLaterAdded, setIsWatchLaterAdded] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        const isItLiked = likedData.find((ele) => ele._id === vInfo._id)
        if(isItLiked){
            setIsLiked(() =>true)
        }
    },[])
    useEffect(() => {
        const isWatchLater = watchLaterData.find((ele) => ele._id === vInfo._id)
        if(isWatchLater){
            setIsWatchLaterAdded(() =>true)
        }
    },[])
    const updateLikedVideos = updateLikeFunction(jwtToken, isLiked, vInfo, dispatch, setIsLiked, likedData, navigate)
    const toggleWatchLater = updateWatchLaterFunction(jwtToken, isWatchLaterAdded, vInfo, dispatch, setIsWatchLaterAdded, watchLaterData, navigate);
    return (
    <div className = "video-card-wrapper">
        
        <div>
            <Link to = {`/videos/${vInfo._id}`}>
                <img alt="" src="" className={isImageLoaded ? "hide-thumb" : "show-thumb imgb skelton-img"}/>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt=""
                        src={vInfo.thumbnail}
                        onLoad={() => setIsImageLoaded(true)}
                    />
            </Link>
        </div>
        <div className = "like-watchlater-wrapper">
            <button className = {`btn btn-text video-listing-btn ${isLiked ? "selected" :""}`} onClick = {updateLikedVideos}><i className="fas fa-thumbs-up"></i> Like</button>
            <button onClick = {toggleWatchLater} className = {`btn btn-text video-listing-btn ${isWatchLaterAdded ? "selected" :""}`}><i className="fas fa-clock"></i> Watch Later</button>
        </div>
        <p>{vInfo.title}</p>
    </div>
  )
}

export default VideoCard


