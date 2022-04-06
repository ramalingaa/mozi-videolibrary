import React, { useState } from 'react'
import {  Link } from 'react-router-dom'

const RelatedCard = ({vInfo}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  
  
  return (
    <div>
        <Link to ={`/videos/${vInfo._id}`}>
                   <p className={isImageLoaded ? "hide-thumb" : "show-thumb preload-img skelton-img"}></p>
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