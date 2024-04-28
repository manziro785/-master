import React from 'react'
import './video.css'
import { useRef } from 'react'

export default function Video() {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft + 20,
        behavior: 'smooth'
      });
    }
  };
  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollRight + 20,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
        <div className="video">

    {/* <div className="container"> */}
        
        <div className="gallery">
         
            <a className = 'img-video-first' href="https://www.youtube.com/watch?v=8psth9ODtH0" target="_blank">
               <img src="./src/assets/common/Frame 45.svg" alt=""className = 'img-video2' />
             </a>
            <a className = 'img-video1' href="https://www.youtube.com/watch?v=X9RiKL3c7sY" target="_blank"> <img src="./src/assets/common/video.svg" alt="" className = 'img-video2'/></a>
            <a className = 'img-video1' href="https://www.youtube.com/watch?v=orwJI0vauJ4" target="_blank"> <img src="./src/assets/common/video (1).svg" alt="" className = 'img-video2'/></a>

        </div>
        <div className="btns-move">
          <div className="left-move" onClick={scrollLeft}>
            <img src="./src/assets/common/Polygon 6.svg" alt="" />
          </div>
          <div className="right-move" onClick={scrollRight}>
            <img src="./src/assets/common/Polygon 5.svg" alt="" />
          </div>
        </div>
    </div>
    {/* </div> */}
    </>
  )
}
