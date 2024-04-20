import React, { useState } from 'react';
import './comments.css'

export default function Comments() {
    const [activeIndex, setActiveIndex] = useState(3);
    

    const changeSize = (clickedIndex) => {
      setActiveIndex(clickedIndex);
    };
  return (
    <>
    <div className="title-comments">
    Отзывы 
    </div>
 <div className="photo-container">
      {[2, 3, 4].map((index) => (
        <img
          key={`photo${index}`}
          className={`photo ${activeIndex === index ? 'active' : ''}`}
          src={`./src/assets/common/comment ${index}.svg`}
          alt={`Фото ${index}`}
          onClick={() => changeSize(index)}
        />
      ))}
    </div>
    </>
  )
}
