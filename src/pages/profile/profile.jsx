import React from 'react'
import './profileModule.css'
import UserInfo from '../../components/profile/userInfo/userInfo.jsx'
import {NavLink, useNavigate} from 'react-router-dom'
import Awards from '../../components/profile/awards/awards.jsx'
import Active from '../../components/profile/active/active.jsx'
import {UserContext} from '../../App'
import {AuthContext} from '../../App';
import logomain from '../../assets/header/logo (8).svg'
import usericon from "../../assets/header/userr.svg"



export function ProfilePage() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext)

    const [user, setUser] = React.useContext(UserContext)

    function logout(event) {
        // const navigate = useNavigate(); 
        // setIsAuth(false); 
        // localStorage.removeItem('access'); 
        // localStorage.removeItem('refresh'); 
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

            {/* <div className="main-wrapper-profile"> */}
                    <UserInfo/>
                   
            {/* </div> */}

        </>
    )
}