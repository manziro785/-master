import React from "react";
import './headerModule.css'
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../App";
import { useState } from "react";


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

  const [showAlert, setShowAlert] = useState(false);
  function handleCloseAlert() {
    setShowAlert(false);
  }

  return (
    <>
    {/* <div className="container"> */}
    {/* <div className="wrapper"> */}
    
    <div className="wrapper-header">
   
          <div className="header">
          <NavLink to='/' className="logo">
            <img src="./src/assets/header/logo (8).svg" alt="" className="logo-main" />
        </NavLink>
          
          {!isAuth && (
            <div className="btns-header">
              <div className="test-btn-header" onClick={() => setShowAlert(true)} style={{cursor:'pointer'}}>Тесты</div>
              <a href="/login"className="login-btn-header">Войти</a>
              <a href="/register"className="reg-btn-header">Регистрация</a>

            </div>
              )}
          {isAuth && ( 
            <div className="btns-header">
              <a href="/lessons"className="test-btn-header" style={{cursor:'pointer'}}>Тесты</a>
              <a href="/" onClick={logout}className="login-btn-header">Выйти</a>
            </div>
              )}
        </div>
        
        </div>
        {showAlert && (
        <>
        <div className="wrapper-alert">
        <div className="overlay"></div>
        <div className="alert-container">
          <div className="alert">
            <p className="title-alert">Вы можете проверить себя <br/> если вошли в аккаунт</p>
            <div className="btns-alert">
            <NavLink className='btn-alert1' to='/login'>Войти</NavLink>
            <button className='btn-alert2'onClick={handleCloseAlert}>Отмена</button>
          </div>
          </div>
        </div>
        </div>
        </>
      )}
        {/* </div> */}
        
        
        {/* </div> */}
    </>
  )
}
