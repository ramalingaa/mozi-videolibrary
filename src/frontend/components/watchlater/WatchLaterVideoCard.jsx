import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useVideoContext, useAuthContext} from '../../context/index-context'
import  axios  from 'axios';


const WatchLaterVideoCard = ({vInfo, setToastDisplay}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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
            <p className={isImageLoaded ? "hide-thumb" : "show-thumb preload-img skelton-img"}></p>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src={vInfo.thumbnail}
                        onLoad={() => setIsImageLoaded(true)}
                    />
            </Link>
            <div className="title-wrapper">
                <p>{vInfo.title}</p>
                <button onClick={removeFromWatchLater} className = "btn btn-text">Remove</button>
            </div>
      </div>
  )
}

export default WatchLaterVideoCard