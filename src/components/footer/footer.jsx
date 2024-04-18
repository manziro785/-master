import React from 'react'
import './footerModule.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
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
            <div className="num">+ 999 506 594 002</div>
            <div className="num">manziro785@gmail.com</div>
            <div className="num">Bishkek , Moscow str.</div>
            </div>
    </div>
    </div>
  )
}
