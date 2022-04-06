import React, { useState } from 'react'
import axios from 'axios'
import { useAuthContext, useVideoContext } from '../../context/index-context'
import {  Link } from 'react-router-dom'

const HistoryCard = ({vInfo}) => {
    const { jwtToken } = useAuthContext()
    const { dispatch } = useVideoContext()
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const removeFromHistory = () => {

        (async () => {
            try {
                const response = await axios.delete(`/api/user/history/${vInfo._id}`, {headers:{authorization:jwtToken}})
                dispatch({type:"SET_HISTORY_DATA", payload:response.data.history})
            }
            catch(e) {
                console.log(e)

            }
        })()
    }
  return (
    <div className = "playlist-video-card history-single-video">
             <Link to = {`/videos/${vInfo._id}`}>
                <p className={isImageLoaded ? "hide-thumb" : "show-thumb preload-img skelton-img"}></p>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src={vInfo.thumbnail}
                        onLoad={() => setIsImageLoaded(true)}
                    />
            </Link>
            <div className="title-wrapper">
                <p>{vInfo.title}</p>
                <i className="fas fa-trash-alt delete-video-icon" onClick={removeFromHistory}></i>
            </div>
            
    </div>
  )
}

export default HistoryCard