import React from "react";
import './bannerModule.css'
import { useState, useEffect } from "react";
import Bannerimg from "../../../assets/common/Frame 30 (2).svg"
import {AuthContext} from "../../../App";
import { NavLink } from "react-router-dom";


export  function Banner() {
 
  const [isAuth, setIsAuth] = React.useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
      console.log('lf')
      if (showAlert) {
        document.body.style.overflowY= 'hidden'; // Устанавливаем стиль, который запрещает прокрутку
    } else {
        document.body.style.overflow = ''; // Удаляем стиль, чтобы вернуть прокрутку
    }
  }, [showAlert]);
    function handleCloseAlert() {
      setShowAlert(false);
    }
  return (
    <>
    <div className="container">
    
      <div className="banner">
      {showAlert && (
        <>
        <div className="overlay"></div>
        <div className="alert-container">
          <div className="alert">
            <div className="close-btn"><img src="./src/assets/common/close.svg" alt=""  onClick={handleCloseAlert}/></div>
            <p className="title-alert">Вы можете проверить себя <br/> если вошли в аккаунт</p>
            <div className="btns-alert">
            <NavLink className='btn-alert1' to='/login'>Войти</NavLink>
          </div>
          </div>
        </div>
        </>
      )}
        <div className="left-banner">
    <div className="title-banner">
    Вместе к <span className="title-span">Знаниям</span>, Шаг за Шагом
    </div>
    <div className="subtitle-banner">
    ОРТ <span className="subt-span">Легко</span> и <br/><span className="subt-span">Бесплатно!</span>
    </div>
    <div className="img-ban">
    <img src={Bannerimg} alt=""  className=""/>

    </div>
    <div className="info-banner">
    Проверь свои знания с нашим пробным тестом для ОРТ. Это быстро, просто и абсолютно бесплатно. Узнай, где ты стоишь в своей подготовке и какие темы требуют дополнительного внимания. Подготовься к экзамену шаг за шагом с нашей поддержкой!
    </div>
    {!isAuth && (   
       <div className="btn-check" onClick={() => setShowAlert(true)}>
    Проверить
    </div>
    )}
     {isAuth && (   
      
       <div className="btn-check" >
        <NavLink to='/lessons' className="btn-che" >
    Проверить
    </NavLink>
    </div>
   
    )}
    </div>
    <div className="right-banner">
      <img src={Bannerimg} alt=""  className="img-banner"/>
    </div>
    </div>
    </div>
    </>
  )
}
