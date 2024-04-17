import React from "react";
import './bannerModule.css'
import Bannerimg from "../../../assets/common/Frame 30 (2).svg"

export  function Banner() {
 
  return (
    <>
    <div className="mega-wrapper">

   
      <div className="container">
        <div className="left-banner">
    <div className="title-banner">
    Вместе к <span className="title-span">Знаниям</span>, Шаг за Шагом
    </div>
    <div className="subtitle-banner">
    ОРТ <span className="subt-span">Легко</span> и <br/><span className="subt-span">Бесплатно!</span>
    </div>
    <div className="info-banner">
    Проверь свои знания с нашим пробным тестом для ОРТ. Это быстро, просто и абсолютно бесплатно. Узнай, где ты стоишь в своей подготовке и какие темы требуют дополнительного внимания. Подготовься к экзамену шаг за шагом с нашей поддержкой!
    </div>
    <div className="btn-check">
    Проверить
    </div>
    </div>
    <div className="right-banner">
      <img src={Bannerimg} alt="" />
    </div>
    </div>
    </div>
    </>
  )
}
