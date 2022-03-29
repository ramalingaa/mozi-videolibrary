import React from 'react'
import { Link } from 'react-router-dom'
import { useVideoContext, useAuthContext } from '../../context/index-context'
import  axios  from 'axios';

const LikedVideoCard = ({vInfo}) => {
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
            <Link to = {`/videos/${vInfo._id}`}><img src= {vInfo.thumbnail} alt ="video thumbnail" className="res-img" /></Link>
            <div className ="title-wrapper">
            <p>{vInfo.title}</p>
            <button onClick = {removeFromPlaylist} className = "btn btn-text">Remove</button>
        </div>
      </div>

  )
}

export default LikedVideoCard