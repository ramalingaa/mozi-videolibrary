import React from 'react'
import axios from "axios"
import {  Link } from 'react-router-dom'
import {  useAuthContext, useVideoContext } from '../../context/index-context'

const PlaylistVideoCard = ({vInfo, setToastDisplay}) => {
    const { dispatch, state } = useVideoContext()
    const { playListData } = state

    const { jwtToken, playlistId } = useAuthContext()

    const removeFromPlaylist = () => {
        const newPlayListData = playListData.filter((ele) => ele._id !== playlistId);
        (async () => {
            try {
                const response = await axios.delete(`/api/user/playlists/${playlistId}/${vInfo._id}`,{headers:{authorization:jwtToken}})
                dispatch({type:"SET_SINGLE_PLAYLIST_DATA", payload: response.data.playlist.videos})
                dispatch({type:"SET_PLAYLIST_DATA", payload: [...newPlayListData, response.data.playlist]})  
                setToastDisplay(() => true)
            }catch(e) {
                console.log(e)
            }
        })()
    }
    
  return (
    <div className = "playlist-video-card">
        <Link to = {`/videos/${vInfo._id}`}>
            <img src= {vInfo.thumbnail} alt ="video thumbnail" className="res-img" />
        </Link>
        <div className ="title-wrapper">
            <p>{vInfo.title}</p>
            <button onClick = {removeFromPlaylist} className = "btn btn-text">Remove</button>
        </div>
    </div>
  )
}

export default PlaylistVideoCard