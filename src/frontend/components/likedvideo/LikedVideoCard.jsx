import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useVideoContext, useAuthContext } from '../../context/index-context'
import  axios  from 'axios';

const LikedVideoCard = ({vInfo}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const {  dispatch } = useVideoContext()
  const { jwtToken } = useAuthContext()
  const removeFromPlaylist = () => {
    (async () => {
        try {
            const response = await axios.delete(`/api/user/likes/${vInfo._id}`,{headers:{authorization:jwtToken}})
            dispatch({type:"SET_LIKED_DATA", payload: response.data.likes})
        }catch(e) {
            console.log(e)
        }
    })()
}
  return (
      <div className = "playlist-video-card">
            <Link to = {`/videos/${vInfo._id}`}>
            <img alt="" src="" className={isImageLoaded ? "hide-thumb" : "show-thumb imgb skelton-img"}/>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src={vInfo.thumbnail}
                        onLoad={() => setIsImageLoaded(true)}
                    />
            </Link>
            <div className ="title-wrapper">
            <p>{vInfo.title}</p>
            <button onClick = {removeFromPlaylist} className = "btn btn-text">Remove</button>
        </div>
      </div>

  )
}

export default LikedVideoCard