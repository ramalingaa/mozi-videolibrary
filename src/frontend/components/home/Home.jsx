import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {

    
  return (
    <div>
      <div className="hero-container">
        <img src = "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" className = "res-img hero-img" alt = "Hero"/>
      </div>
    <div className = "home-main-wrapper">
      
       <Link to = "/Videos"className = "home-car-card">
           <p className = "text-medium fw-7">Space </p>
           <img src = "https://res.cloudinary.com/ramlinga/image/upload/v1647841199/Video-library/maxresdefault_n3cjhc.jpg" className = "res-img" alt = "Category"/>
           <p className = "cat-description">Explore deep space of the universe</p>
       </Link>
       <div className = "home-car-card">
           <p className = "text-medium fw-7">Planet Earth </p>
           <img src = "https://res.cloudinary.com/ramlinga/image/upload/v1647841199/Video-library/maxresdefault_n3cjhc.jpg" className = "res-img" alt = "Category"/>
           <p className = "cat-description">History of life on Earth </p>
       </div>
       <div className = "home-car-card">
           <p className = "text-medium fw-7">Yoga</p>
           <img src = "https://res.cloudinary.com/ramlinga/image/upload/v1647841199/Video-library/maxresdefault_n3cjhc.jpg" className = "res-img" alt = "Category"/>
           <p className = "cat-description">What Yoga does to your body</p>
       </div>
    </div>
    </div>
  )
}

export default Home