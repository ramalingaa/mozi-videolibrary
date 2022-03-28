import React from 'react'
import {  Link } from 'react-router-dom'

const RelatedCard = ({vInfo}) => {
  
  
  return (
    <div>
        <Link to ={`/videos/${vInfo._id}`}>
            <img src= {vInfo.thumbnail} alt ="video thumbnail"  className="res-img"/>
        </Link>
        <p>{vInfo.title}</p>

    </div>
  )
}

export default RelatedCard