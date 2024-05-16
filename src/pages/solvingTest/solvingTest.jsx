

import React, { useState, useEffect } from 'react';
import './solvingTest.css';
import { HeaderGlobal } from '../../components/headerGlobal/headerGlobal';
import Questiontest from '../../components/question/question';
import { NavLink } from 'react-router-dom';
// import BtnCLose from './src/assets/common/btnclose.svg'
import logomain from '../../assets/header/logo (8).svg'
import usericon from "../../assets/header/userr.svg"



export function SolvingTest() {
    const [showWarn, setShowWarn] = useState(false);
    const [showLog, setShowLog] = useState(false);



    function logout(event) {
        setIsAuth(false)
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        window.location.reload(); 
      }

    useEffect(() => {
      console.log('lf')
      if (showWarn, showLog) {
        document.body.style.overflowY= 'hidden'; 
    } else {
        document.body.style.overflow = ''; 
    }
  }, [showWarn,showLog]);
    function handleCloseWarn() {
        setShowWarn(false);
    }
    function handleCloseLog() {
        setShowLog(false);
    }

   
  

    return (
        <>
<div className="header-wrapper">
            <div className="container">
                <div className="header">
                <NavLink to='/' className="logo">
                    <img src={logomain} alt="" className="logo-main" />
                </NavLink>
                <div className="header-wrapp">
                <div className="navbarr">
                <div className="test-btn-header" onClick={() => setShowLog(true)} style={{cursor:'pointer', marginRight: '20px', height: 'fit-content'}}>Тесты</div>

                    <div className="custom-tooltip">
                        <img src={usericon} alt="Mini Photo" className="mini-photo" id="person" />
                        <div className="tooltiptext">
                                <button onClick={() => setShowLog(true)} className="log-in">
                                    Выйти
                                </button>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {showLog && (
        <>
        <div className="wrapper-warn">
        <div className="overl"></div>
        <div className="warn-container">
        <div className="warn">

            <p className="title-warn">Вы точно хотите <br/> выйти из теста ?</p>
            <div className="btns-warn">
            <div className='btn-warn2' onClick={handleCloseLog}>отменить</div>
            <NavLink className='btn-warn1' to='/lessons'>продолжить</NavLink>
          </div>
          </div>
        </div>
        </div>
        
        </>
        
      )}

            {showWarn && (
        <>
        <div className="wrapper-warn">
        <div className="overl"></div>
        <div className="warn-container">
        <div className="warn">

            <p className="title-warn">Вы ответили на все <br/> вопросы, вы точно хотите <br/>проверить?</p>
            <div className="btns-warn">
            <div className='btn-warn2' onClick={handleCloseWarn}>отменить</div>
            <NavLink className='btn-warn1' to={`/lessons/result`}>продолжить</NavLink>
          </div>
          </div>
        </div>
        </div>
        
        </>
        
      )}
            <div className="container">
                <div className="subtitle-solve">
                    <div className="header-solve">
                        <div className="subj-name">
                            Математика
                        </div>
                        <div className="option">
                            Вариант 1
                        </div>
                    </div>

                    <div className="timer">
                        <div className="time-header">
                            Время
                        </div>
                        <div className="times">
                            <div className="past-time">
                                Прошло: 24:14
                            </div>
                            <div className="have-time">
                                Осталось: 5:25
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rule-of-test">
                    При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.
                </div>

                <div className="container-tests">
                    {/* тест  */}
             <Questiontest/>
             {/* <Questiontest/>
             <Questiontest/> */}

                </div>
                <div className="btn-finish-test" onClick={() => setShowWarn(true)}>
                    Завершить
                </div>
                

            </div>
            
            
        </>
    )
}
