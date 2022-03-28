import React from 'react'
import axios from 'axios'
import { useAuthContext, useVideoContext } from '../../context/index-context'

const SaveToPlaylistCard = ({ plName, vInfo, setToastDisplay }) => {
    const { jwtToken } = useAuthContext()
    const { state, dispatch } = useVideoContext()
    const { playListData } = state
    const addVideoToPlayList = (e) => {

        if(e.target.checked){
            (async () => {
                try{
                    const newplayListData = playListData.filter((ele) => ele._id !== plName._id )
                    const response = await axios.post(`/api/user/playlists/${plName._id}`,{video:vInfo}, {headers:{authorization:jwtToken}})
                    
                    dispatch({type:"SET_PLAYLIST_DATA", payload: [...newplayListData, response.data.playlist]})
                    setToastDisplay(() => true)
                
                }catch(e){
                    console.log(e)
                }
            })()
        }
    }
    return (
    <div className ="save-to-item">
        
        <div>
            <input type = "checkbox" onChange = {addVideoToPlayList} />
        </div>
        {plName.name}
    </div>
  )
}

export default SaveToPlaylistCard