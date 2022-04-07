import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuthContext } from "../../context/index-context"

const Home = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { theme } = useAuthContext()
    
  return (
    <div>
      <div className="hero-container">
        <img src = "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" className = "res-img hero-img" alt = "Hero"/>
      </div>
    <div className = "home-main-wrapper">
      
       <Link to = "/videos"className = {`home-car-card ${theme}`}>
           <p className = "text-medium fw-7">Space </p>
                  <p className={isImageLoaded ? "hide-thumb" : "show-thumb preload-img skelton-img"}></p>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src="https://res.cloudinary.com/ramlinga/image/upload/v1647841199/Video-library/maxresdefault_n3cjhc.jpg"
                        onLoad={() => setIsImageLoaded(true)}
                    />
           <p className = "cat-description">Explore deep space of the universe</p>
       </Link>
       <Link to = "/videos" className = {`home-car-card ${theme}`}>
           <p className = "text-medium fw-7">Planet Earth </p>
                  <p className={isImageLoaded ? "hide-thumb" : "show-thumb preload-img skelton-img"}></p>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src="https://res.cloudinary.com/ramlinga/image/upload/c_scale,h_363,w_637/v1648703357/Video-library/Planet%20Earth/sddefault_p5pbd6.jpg"
                        onLoad={() => setIsImageLoaded(true)}
                    />
           <p className = "cat-description">History of life on Earth </p>
       </Link>
       <Link to = "/videos" className = {`home-car-card ${theme}`}>
           <p className = "text-medium fw-7">Other Planets</p>
           <p className={isImageLoaded ? "hide-thumb" : "show-thumb preload-img skelton-img"}></p>
                    <img
                        className={isImageLoaded ? "show-thumb video-image" : "hide-thumb"}
                        alt="video thumbnail"
                        src="https://res.cloudinary.com/ramlinga/image/upload/v1649319887/video-5-thumbnail_ygzfki.jpg"
                        onLoad={() => setIsImageLoaded(true)}
                    />
           <p className = "cat-description">Is there life on other planets?</p>
       </Link>
    </div>
    </div>
  )
}

export default Home