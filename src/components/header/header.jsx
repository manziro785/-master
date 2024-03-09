import {React, useEffect, useState} from "react";
import './headerModule.css'


export function Header() {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);

    function scroll() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    }
    requestAnimationFrame(scroll);
  };

  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <>
          <div className="header">
        <div className="logo">
            <img src="./src/assets/header/ОРТмастер (2).svg" alt="" className="logo-main" />
        </div>
        <div className="navbar">
            <button className="btn-head" > Главная</button>
            <button className="btn-head" onClick={() => scrollToElement(document.getElementById('team'), 1000)}>О нас</button>
            <a href="/test" className="btn-head">Тест</a>
            <button className="btn-head"onClick={() => scrollToElement(document.getElementById('end'), 1000)}>Контакты</button>   
            <div className="autor">
                <img src="./src/assets/header/icon (2).svg" alt="" />
            </div> 
        </div>
    </div>
    </>
  )
}
