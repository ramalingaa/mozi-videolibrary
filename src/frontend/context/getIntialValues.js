import axios from "axios";

export function getPlaylist(jwtToken, dispatch) {
    (async () => {
        try {
            const response = await axios.get("/api/user/playlists", { headers: { authorization: jwtToken } })
            dispatch({ type: "SET_PLAYLIST_DATA", payload: response.data.playlists })
        } catch (e) {
            console.log(e)
        }
    })()
}
export function getLikes(jwtToken, dispatch) {
    (async () => {
        try {
            const response = await axios.get("/api/user/likes", { headers: { authorization: jwtToken } })
            dispatch({ type: "SET_LIKED_DATA", payload: response.data.likes })

        }
        catch (e) {
            console.log(e)
        }
    })()
}
export function getHistory(jwtToken, dispatch) {
    (async () => {
        try {
            const response = axios.get("/api/user/history", { headers: { authorization: jwtToken } })
            dispatch({ type: "SET_HISTORY_DATA", payload: response.data.history })
        } catch (e) {
        }
    })()
}
export function getVideos(dispatch) {
    (async () => {
        try {
            const response = await axios.get("/api/videos")
            dispatch({ type: "SET_VIDEO_DATA", payload: response.data.videos })

        } catch (e) {
            console.log(e)
        }
    })()
}

export function getWatchlater(jwtToken, dispatch) {
    (async () => {
        try {
            const response = axios.get("/api/user/watchLater", { headers: { authorization: jwtToken } })
            dispatch({ type: "SET_WATCHLATER_DATA", payload: response.data.watchLater })
        } catch (e) {
            console.log(e)
        }
    })()
}
export function getNotes(jwtToken, dispatch) {
    (async () => {
        try {
            const response = axios.get("/api/user/notes", { headers: { authorization: jwtToken } });
           
            dispatch({ type: "SET_NOTES_DATA", payload: response.data.notes });
        } catch (e) {
            console.log(e);
        }
    })();
}