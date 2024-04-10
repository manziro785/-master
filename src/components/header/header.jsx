import React, { useEffect, useState, useContext} from "react";
import './headerModule.css'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";


export function Header() {
  const [isAuth, setIsAuth] = React.useContext(AuthContext);

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

  function logout(event) {
    setIsAuth(false)
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    window.location.reload(); 
  }
  
  return (
    <>
          <div className="header">
          <NavLink to='/' className="logo">
            <img src="./src/assets/header/ОРТмастер (2).svg" alt="" className="logo-main" />
        </NavLink>
        <div className="navbar">
            <button className="btn-head" > Главная</button>
            <button className="btn-head" onClick={() => scrollToElement(document.getElementById('team'), 1000)}>О нас</button>
            <a href="/test" className="btn-head">Тест</a>
            <button className="btn-head"onClick={() => scrollToElement(document.getElementById('end'), 1000)}>Контакты</button>   
           
           
          
          {!isAuth && ( <div className="custom-tooltip">
              <img src="./src/assets/header/icon (2).svg" alt="Mini Photo" className="mini-photo" id="person" />
                <div className="tooltiptext">
                 <NavLink to='register'>
                  <button className="sign-up">
                    Зарегаться
                  </button>
                  </NavLink>
                  <NavLink to='login'>
                  <button className="log-in">
                    Войти
                  </button>
                  </NavLink>
                </div>
          </div>)}
          {isAuth && ( <div className="custom-tooltip">
              <img src="./src/assets/header/icon (2).svg" alt="Mini Photo" className="mini-photo" id="person" />
                <div className="tooltiptext">
                  
                  <button className="log-in" onClick={logout}>
                    Выйти
                  </button>
                  <NavLink to = '/profile'>
                  <button className="profile_btn" >
                    Профиль
                  </button>
                  </NavLink>
                  
                </div>
          </div>)}
        </div>
    </div>
    </>
  )
}
