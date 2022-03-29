import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useAuthContext, useVideoContext } from '../../context/index-context'
import { PlaylistCard, SideMenuGuide } from '../index-components'

const PlayList = () => {

    const [displayPlayList, setDisplayPlaylist] = useState(false)
    const [playlistName, setPlaylistName] = useState("")
    const { state, dispatch } = useVideoContext()
    const { playListData } = state
    const { jwtToken } = useAuthContext()
    
    const createPlaylist = () => {
        setDisplayPlaylist((prev) => !prev)
    }
    const updatePlaylistName = (e) => {
        setPlaylistName(() => e.target.value)
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
    const savePlaylist  = () => {
        const playList = {name:playlistName};
        (async () => {
            try{
                const response = await axios.post("/api/user/playlists",{playlist:playList}, {headers:{authorization:jwtToken}})
                dispatch({type:"SET_PLAYLIST_DATA", payload: response.data.playlists})
                setDisplayPlaylist((prev) => !prev)
            }catch(e){
                console.log(e)
            }
        })()
    }
  return (
    <div className = "playlist-main-wrapperW-sidebar">
        <SideMenuGuide />
        <div className = "playlist-main-wrapper">
            <div className = "myplaylist-create-wrapper">
                <p className = "text-medium fw-7">My Playlists</p>
                <button onClick = {createPlaylist} className = "btn primary "><i className="fas fa-plus playlist-icon"></i>Create Playlist</button>

            </div>
        { displayPlayList && 
        <div>
             <input type = "text" onChange = {updatePlaylistName} className = "i-text" placeholder = "Playlist name"/>
             <button onClick = {savePlaylist} className = "btn">Save</button>
        </div>}
        
        <div className = "playlist-cards-wrapper">
            {playListData.map((ele) => {
                
                return <PlaylistCard vInfo = {ele} key = {ele._id}/>
            })}
        </div>
        </div>
    </div>
  )
}

export default PlayList