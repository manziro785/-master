import React from 'react'
import './math.css'
import { NavLink } from 'react-router-dom'
import usericon from '../../../assets/header/userr.svg'
import logomain from '../../../assets/header/logo (8).svg'
import Problem from '../../../components/lessons/problem/problem.jsx'


export  function MathPage() {
  return (
    <>
    <div className="header">
          <NavLink to='/' className="logo">
            <img src={logomain} alt="" className="logo-main" />
        </NavLink>
<div className="navbarr">
        <div className="custom-tooltip">
              <img src={usericon} alt="Mini Photo" className="mini-photo" id="person" />
                <div className="tooltiptext">
                 <NavLink to='registration'>
                  <button className="sign-up">
                    Профиль
                  </button>
                  </NavLink>
                  <NavLink to='login'>
                  <button className="log-in">
                    Выйти
                  </button>
                  </NavLink>
                </div>
          </div> 
          </div>
        </div>

        <main>
            <div className="title-math">
            Тренировачные варианты: по математике
            </div>
            <div className="wrapper-problems">
            <div className="problems">
                <Problem/>
                {/* <Problem/>
                <Problem/>
                <Problem/>
                <Problem/> */}
                <div className="problem1">
                    <div className="title-problem">
                    2 Вариант
                    </div>
                    <div className="solved">
                    Решил: 28/30
                    </div>
                    <div className="grade">
                    Оценка: 89%
                    </div>
                </div>
                <div className="problem1">
                    <div className="title-problem">
                    3 Вариант
                    </div>
                    <div className="solved">
                    Решил: 0/30
                    </div>
                    <div className="grade">
                    Оценка: 0%
                    </div>
                </div>
                <div className="problem1">
                    <div className="title-problem">
                    4 Вариант
                    </div>
                    <div className="solved">
                    Решил: 15/30
                    </div>
                    <div className="grade">
                    Оценка: 50%
                    </div>
                </div>
                <div className="problem1">
                    <div className="title-problem">
                    5 Вариант
                    </div>
                    <div className="solved">
                    Решил: 25/30
                    </div>
                    <div className="grade">
                    Оценка: 67%
                    </div>
                </div>
            </div>
            <div className="btn-random">
            Сгенерировать вариант
            </div>
            </div>
        </main>
    </>
  )
}
