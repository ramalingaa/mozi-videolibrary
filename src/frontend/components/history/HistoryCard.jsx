import React from 'react'
import axios from 'axios'
import { useAuthContext, useVideoContext } from '../../context/index-context'
import { useNavigate } from 'react-router-dom'

const HistoryCard = ({vInfo}) => {
    const { jwtToken } = useAuthContext()
    const { dispatch } = useVideoContext()
    const navigate = useNavigate()

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
    <div className = "playlist-video-card">
            <img src= {vInfo.thumbnail} alt ="video thumbnail" className="res-img" onClick = {openVideoPlayer}/>
            <div className="title-wrapper">
                <p>{vInfo.title}</p>
                <i className="fas fa-trash-alt delete-video-icon" onClick={removeFromHistory}></i>
            </div>
            
    </div>
  )
}

export default HistoryCard