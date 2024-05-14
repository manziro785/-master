import React from 'react'
import { Header } from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import usericon from "../../assets/header/userr.svg"
import logomain from '../../assets/header/logo (8).svg'
import './TestsModule.css'


export default function Tests() {
  const urls = useParams();
  console.log(urls)
  

  function logout(event) {
    const navigate = useNavigate(); // Используем хук useNavigate для навигации
    setIsAuth(false); // Устанавливаем isAuth в false
    localStorage.removeItem('access'); // Удаляем токен доступа из localStorage
    localStorage.removeItem('refresh'); // Удаляем токен обновления из localStorage
    navigate('/'); // Перенаправляем пользователя на главную страницу
}



  return (
    <>
 <div className="header-wrapper">
            <div className="container">
            <div className="header">
                <NavLink to='/' className="logo">
                    <img src={logomain} alt="" className="logo-main" />
                </NavLink>
                <div className="navbarr">
                    <div className="custom-tooltip">
                        <img src={usericon} alt="Mini Photo" className="mini-photo" id="person" />
                        <div className="tooltiptext">
                            <NavLink to='/profile'>
                                <button className="sign-up">
                                    Профиль
                                </button>
                            </NavLink>
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
            
               <h1> Тесты:      </h1>

{/* <div className="footer-wrap">
<div className="footer-wrapper"> */}

        <Footer />
        {/* </div>
        </div> */}
    </>
  )
}
