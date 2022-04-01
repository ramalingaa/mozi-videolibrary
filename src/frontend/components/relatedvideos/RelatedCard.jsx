import React, { useState } from 'react'
import {  Link } from 'react-router-dom'

const RelatedCard = ({vInfo}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  
  
  return (
    <div>
        <Link to ={`/videos/${vInfo._id}`}>
                   <img alt="" src="" className={isImageLoaded ? "hide-thumb" : "show-thumb imgb skelton-img"}/>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src={vInfo.thumbnail}
                        onLoad={() => setIsImageLoaded(true)}
                    />
        </Link>
        <p>{vInfo.title}</p>

    </div>
  )
}

export default RelatedCard