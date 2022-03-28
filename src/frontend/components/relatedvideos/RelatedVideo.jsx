import React from 'react'
import RelatedCard from './RelatedCard'

const RelatedVideo = ({relatedVideo}) => {
  return (
    <div className = "related-videos">
        <p className="related-title">Related Videos</p>
        {relatedVideo.map((ele )=> {
            return <RelatedCard vInfo = {ele}/>
        })}
    </div>
  )
}

export default RelatedVideo