import { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import videoReducer from "./video-reducer"
import { useAuthContext } from "./index-context"
import { getVideos, getHistory, getLikes, getPlaylist, getWatchlater, getNotes } from "./getIntialValues"

const VideoContext = createContext()
const useVideoContext = () => useContext(VideoContext)


const VideoProvider = ({children}) => { 
    
    const [state, dispatch] = useReducer(videoReducer,{videoData:[], serverData:[], historyData:[], likedData:[], playListData:[], singlePlaylistData:[], singleVideoData:{}, watchLaterData:[], notesData:[]})
    const { jwtToken } = useAuthContext()
 
    useEffect(() => { 
        getVideos(dispatch)
        if(jwtToken){
            getHistory(jwtToken, dispatch)
            getLikes(jwtToken, dispatch)
            getPlaylist(jwtToken, dispatch)
            getWatchlater(jwtToken, dispatch)
            getNotes(jwtToken, dispatch)
        }
    },[])
    
    return (
        <VideoContext.Provider value = {{ state, dispatch }}>
            {children}
        </VideoContext.Provider>
    )
}
export { VideoProvider, useVideoContext } 










