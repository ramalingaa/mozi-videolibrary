import React, { useState } from 'react'
import axios from 'axios'
import { useAuthContext, useVideoContext } from '../../context/index-context'
import { useNavigate, Link } from 'react-router-dom'

const HistoryCard = ({vInfo}) => {
    const { jwtToken } = useAuthContext()
    const { dispatch } = useVideoContext()
    const navigate = useNavigate()
    const [isImageLoaded, setIsImageLoaded] = useState(false);


    const openVideoPlayer = () => {
      dispatch({type:"SET_SINGLE_VIDEO_DATA", payload: vInfo})
      navigate("/SingleVideo")
  }
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
                <img alt="" src="" className={isImageLoaded ? "hide-thumb" : "show-thumb imgb skelton-img"}/>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt=""
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