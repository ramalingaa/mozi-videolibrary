import React from 'react'
import { Link } from 'react-router-dom'
import { useVideoContext, useAuthContext} from '../../context/index-context'
import  axios  from 'axios';


const WatchLaterVideoCard = ({vInfo, setToastDisplay}) => {
  const { dispatch } = useVideoContext()
  const { jwtToken } = useAuthContext()

  const removeFromWatchLater = () => {

    (async () => {
        try {
            const response = await axios.delete(`/api/user/watchLater/${vInfo._id}`, {headers:{authorization:jwtToken}})
            dispatch({type:"SET_WATCHLATER_DATA", payload:response.data.watchLater})
            setToastDisplay((prev) => !prev)
        }
        catch(e) {
            console.log(e)

        }
    })()
}

  return (
    <div className = "playlist-video-card">
            <Link to = {`/videos/${vInfo._id}`}>
                <img src= {vInfo.thumbnail} alt ="video thumbnail" className="res-img"/>
            </Link>
            <div className="title-wrapper">
                <p>{vInfo.title}</p>
                <button onClick={removeFromWatchLater} className = "btn btn-text">Remove</button>
            </div>
      </div>
  )
}

export default WatchLaterVideoCard