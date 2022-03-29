import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useVideoContext, useAuthContext } from '../../context/index-context'

const PlaylistCard = ({vInfo}) => {
    const { dispatch } = useVideoContext()
    const { jwtToken, setPlaylistId } = useAuthContext()
    const navigate = useNavigate()

    const deletePlaylist = () => {
        (async () => {
            try {
                const response = await axios.delete(`/api/user/playlists/${vInfo._id}`,{headers:{authorization:jwtToken}})
                dispatch({type:"SET_PLAYLIST_DATA", payload: response.data.playlists})

            }catch(e) {
                console.log(e)
            }
        })()

    }
    const openPlaylist = () => {
        dispatch({type:"SET_SINGLE_PLAYLIST_DATA", payload: vInfo.videos})
        setPlaylistId(() => vInfo._id)
        navigate("/SinglePlaylist")
    }
  return (
    <div className = "playlist-card-wrapper">
       <div className = "playlist-card-header">
            <p>Playlist Name: <strong>{vInfo.name}</strong></p>
            <button onClick = {deletePlaylist} className = "btn btn-text">Delete Playlist</button>
            
       </div>
       
       {vInfo.videos.length > 0 ? <p> {vInfo.videos.length} {vInfo.videos.length === 1 ? "video" : "videos"} in the playlist</p>: <p>No videos added to the list</p>}
        <button className = "btn outlined open-playlistBtn" onClick = {openPlaylist}>Open Playlist</button>
    </div>
  )
}

export default PlaylistCard