import {React, useEffect, useState} from "react";
import './bannerModule.css'

export  function Banner() {
  const images = ['./src/assets/common/image 6 (1).svg', './src/assets/common/image 11 (1).svg', './src/assets/common/image 12 (1).svg'];

  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 5000);

  return () => clearInterval(intervalId);
}, []);
  return (
    <>
      <div className="container">
    <div className="banner">
     <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="img-banner"/>
     <div className="title">
        <div className="title-bann">
        ОРТ Легко и Бесплатно
        </div>
        <div className="subt-bann">
        Вместе к Знаниям, Шаг за Шагом
        </div>
     </div>
    </div>
    </div>
    </>
  )
}
