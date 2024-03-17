import React, {useEffect, useState} from 'react'
import './authPageModule.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

export  function AuthPage() {
  const images = ['./src/assets/auth/image 13.svg', './src/assets/auth/image 14.svg', './src/assets/auth/Rectangle 7 (2).svg'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 5000);

  return () => clearInterval(intervalId);
}, []);


const [login, setLogin] = React.useState('')
const [password, setPassword] = React.useState('')
const [isAuth, setIsAuth] = React.useContext(AuthContext)

async function sendData(event) {
  event.preventDefault()
  let res = axios.post('http://217.151.230.35:888/api/v1/regauth/login/', {
    username: login  ,
    password: password
  })
  .then(response => {
    console.log(response)
    setIsAuth(true)
    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    navigate('/')
  })
  .catch(error => {
    console.log(error)

  } );
}

function setLoginUser (event) {
  console.log(event.target)
  setLogin(event.target.value)

}

function setPasswordUser (event) {
  setPassword(event.target.value)

}

  return (
    <>
     <div className="header1">
        <NavLink to='/' className="logo">
            <img src="./src/assets/header/ОРТмастер (2).svg" alt="" className="logo-main" />
        </NavLink>
        <div className="navbar">
        {/* <div className="custom-tooltip">
              <img src="./src/assets/header/icon (2).svg" alt="Mini Photo" className="mini-photo" id="person" />
                <div className="tooltiptext">
                 <NavLink to='registration'>
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
          </div> */}
        </div>
    </div>
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="container-auth">
          <div className="title-auth">
          Войти
          </div>
          <form action="" className='form-auth' onSubmit={sendData}>
            <input type="text" placeholder='ваше имя' className='input-auth' onChange={setLoginUser}/>
            <input type="password" placeholder='ваш пароль' className='input-auth' onChange={setPasswordUser}/>
            <input type="submit" value='войти' className='btn-auth'/>
          </form>
          <div className="relink-reg">
          У вас нет аккаунта? 
          <NavLink to='' className="btn-regis">
          Зарегаться
          </NavLink>
          </div>
        </div>
      </div>
      <div className="img-container-auth">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="img-banner"/>
      </div>
    </div>
    </>
  )
}
