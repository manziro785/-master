import React from 'react'
import './footerModule.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const [Copied, setCopied] = useState(false);

  const handleCopyPhoneNumber = () => {
    const phoneNumber = '+996 704 704 716'; 
    navigator.clipboard.writeText(phoneNumber); // Копируем номер в буфер обмена
    setIsCopied(true); // Устанавливаем флаг копирования в true
    setTimeout(() => setIsCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
  };
  const handleCopyGmail = () => {
    const phoneNumber = 'manziro785@gmail.com'; 
    navigator.clipboard.writeText(phoneNumber); // Копируем номер в буфер обмена
    setCopied(true); // Устанавливаем флаг копирования в true
    setTimeout(() => setCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
  };
  return (
    <div>
        <div className="footer" id='end'>
        <div className="logo-foot">
          <NavLink to='/'>
            <img src="./src/assets/header/logo (8).svg" alt=""  className='logo-footer'/>
            </NavLink>
<div className="undertitle">
Вместе к <span className='span-foot'>Знаниям</span> <br/> Шаг за Шагом
</div>
        </div>
        <div className="contac">
            <div className="title-cont">
            Контакты
            </div>
            <div className="num"onClick={handleCopyPhoneNumber}>+ 999 704 704 716</div>
            {isCopied && 
            <div className="wrapper-message">
            <div className="copy-message">
              <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
              Номер телефона скопирован!
              </div>
              </div>
            }
            <div className="num"onClick={handleCopyGmail}>manziro785@gmail.com</div>
            {Copied && 
            <div className="wrapper-message">
            <div className="copy-message">
              <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
              Почта скопирована!
              </div>
              </div>
            }
            <div className="num-2giz">
              <a href="https://2gis.kg/bishkek/firm/70000001022325411?m=74.681215%2C42.85619%2F16" className="num-2giz">
              Bishkek , Ankara 1/8.
              </a>
              </div>
            </div>
    </div>
    </div>
  )
}
