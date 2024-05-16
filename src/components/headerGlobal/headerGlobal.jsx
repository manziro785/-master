import React from 'react'
import logomain from '../../assets/header/logo (8).svg'
import usericon from "../../assets/header/userr.svg"
import { NavLink } from 'react-router-dom'

export  function HeaderGlobal() {

    function logout(event) {
        setIsAuth(false)
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        window.location.reload(); 
      }
    
  return (
    <div>

<div className="header-wrapper">
            <div className="container">
                <div className="header">
                <NavLink to='/' className="logo">
                    <img src={logomain} alt="" className="logo-main" />
                </NavLink>
                <div className="header-wrapp">
                <a href="/lessons"className="test-btn-header" style={{cursor:'pointer', marginRight: '80px'}}>Тесты</a>
                <div className="navbarr">
                    <div className="custom-tooltip">
                        <img src={usericon} alt="Mini Photo" className="mini-photo" id="person" />
                        <div className="tooltiptext">
                            <NavLink to='/'>
                                <button onClick={logout} className="log-in">
                                    Выйти
                                </button>
                            </NavLink>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

    </div>
  )
}
