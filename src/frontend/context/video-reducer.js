const videoReducer = (state, action) => {
    switch(action.type){
        case "SET_VIDEO_DATA": {
            return {...state, videoData:action.payload, serverData:action.payload}
        }
        case "SET_SEARCH_VIDEO_DATA": {
            return { ...state, videoData:action.payload}
        }
        case "SET_HISTORY_DATA":{
            return { ...state, historyData:action.payload}
        }
        case "SET_LIKED_DATA": {
            return { ...state, likedData: action.payload}
        }
        case "SET_PLAYLIST_DATA": {
            return { ...state, playListData: action.payload}
        }
        case "SET_SINGLE_PLAYLIST_DATA" : {
            return { ...state, singlePlaylistData: action.payload}
        }
        case "SET_SINGLE_VIDEO_DATA": {
            return { ...state, singleVideoData:action.payload}
        }
        case "SET_WATCHLATER_DATA": {
            return { ...state, watchLaterData: action.payload}
        }
        default: {
            return state
        }
    }
}
export default videoReducer