import React, {useEffect, useState} from 'react'
import './authPageModule.css'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios';
import logomain from '../../../assets/header/logo (8).svg'
import usericon from "../../../assets/header/userr.svg"


import {AuthContext} from '../../../App';

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
      alert('Login error')

  } );
}

function setLoginUser (event) {
  console.log(event.target)
  setLogin(event.target.value)

}

function setPasswordUser (event) {
  setPassword(event.target.value)

}


function logout(event) {
  const navigate = useNavigate(); // Используем хук useNavigate для навигации
  setIsAuth(false); // Устанавливаем isAuth в false
  localStorage.removeItem('access'); // Удаляем токен доступа из localStorage
  localStorage.removeItem('refresh'); // Удаляем токен обновления из localStorage
  navigate('/'); // Перенаправляем пользователя на главную страницу
}
  return (
    <>
    
    <div className="auth-wrapper">
    <div className="logout-from-auth">
      <NavLink to ='/'>
      <img src="./src/assets/auth/System-Icons.svg" alt="" />
      </NavLink>
    </div>
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
          У вас нет <span className='span-login'>  
          <a href="/register" className='span-llogin'>
            аккаунта
            </a>
            </span> 
        
          </div>
        </div>
      </div>
      <div className="img-container-auth">
      </div>
    </div>
    </>
  )
}
