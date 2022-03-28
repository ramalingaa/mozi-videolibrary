import { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import videoReducer from "./video-reducer"
import { useAuthContext } from "./index-context"

const VideoContext = createContext()
const useVideoContext = () => useContext(VideoContext)


const VideoProvider = ({children}) => { 
    
    const [state, dispatch] = useReducer(videoReducer,{videoData:[], serverData:[], historyData:[], likedData:[], playListData:[], singlePlaylistData:[], singleVideoData:{}})
    const { jwtToken } = useAuthContext()

    useEffect(() => { 
        (async () => {
            try {
                const response = await axios.get("/api/videos")
                dispatch({type:"SET_VIDEO_DATA", payload:response.data.videos})
                
            }catch(e) {
                console.log(e)
            }
        })()
    },[])

    useEffect(() =>{
        (async () => {
            try{
                const response = axios.get("/api/user/history",{headers:{authorization:jwtToken}})
                dispatch({type:"SET_HISTORY_DATA", payload: response.data.history})
            }catch(e) {

            }
        })()
    },[])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/user/likes", {headers:{authorization:jwtToken}})
                dispatch({type:"SET_LIKED_DATA", payload: response.data.likes})

            }
            catch(e) {
                console.log(e)
            }
        })()
    },[])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/user/playlists",{headers:{authorization:jwtToken}})
                dispatch({type:"SET_PLAYLIST_DATA",payload: response.data.playlists})
            }catch(e) {
                console.log(e)
            }
        })()
    },[])
    return (
        <VideoContext.Provider value = {{ state, dispatch }}>
            {children}
        </VideoContext.Provider>
    )
}
export { VideoProvider, useVideoContext } 