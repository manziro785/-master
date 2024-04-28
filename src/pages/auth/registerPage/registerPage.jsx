import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './registerPageModule.css';
import {AuthContext} from '../../../App';
import { useNavigate} from 'react-router-dom'
import logomain from '../../../assets/header/logo (8).svg'
import usericon from "../../../assets/header/userr.svg"



const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuth, setIsAuth] = React.useContext(AuthContext)

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://217.151.230.35:545/api/v1/regauth/register/', data);
      console.log(response.data);
      // Optionally, reset form fields or redirect to another page upon successful registration
    } catch (error) {
      if (error.response) {
        // Server responded with a status code other than 2xx
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('Network error. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an error
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  
function logout(event) {
  const navigate = useNavigate(); // Используем хук useNavigate для навигации
  setIsAuth(false); // Устанавливаем isAuth в false
  localStorage.removeItem('access'); // Удаляем токен доступа из localStorage
  localStorage.removeItem('refresh'); // Удаляем токен обновления из localStorage
  navigate('/'); // Перенаправляем пользователя на главную страницу
}

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
                            <NavLink to='/profile' style={{marginBottom: '10px'}}>
                                <button className="sign-up">
                                    Логин
                                </button>
                            </NavLink>
                            {/* <NavLink to='/'>
                                <button onClick={logout} className="log-in">
                                    Выйти
                                </button>
                            </NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        <div className="form-auth">
          <h1>Регистрация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
              <label>
                <input
                    placeholder="Никнейм"
                    type="text"
                    {...register('username', { required: true, maxLength: 30 })}
                    className="input-auth"
                />
              </label>
              {errors.username && <span>Введите имя пользователя (максимум 30 символов)</span>}
              <br />
              <label>
                <input
                    placeholder="Электронная почта"
                    type="email"
                    {...register('email', {
                      required: 'required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Ваш email имеет некорректный формат',
                      },
                    })}
                    className="input-auth"
                />
              </label>
              {errors?.email?.message && <div className="error">{errors.email.message}</div>}
              <br />
              <label>
                <input placeholder="Имя" type="text" {...register('firstname', { required: true, maxLength: 30 })} className="input-auth" />
              </label>
              <br />
              <label>
                <input placeholder="Фамилия" type="text" {...register('lastname', { required: true, maxLength: 30 })} className="input-auth" />
              </label>
              <br />
              <label>
                <input placeholder="Школа" {...register('school', { required: true, maxLength: 30 })} className="input-auth" />
              </label>
              <br />
              <label>
                <input placeholder="Возраст" type="text" {...register('age', { required: true, maxLength: 30 })} className="input-auth" />
              </label>
              <br />
              <label>
                <input placeholder="Пароль" type="password" {...register('password', { required: true, maxLength: 30 })} className="input-auth" />
              </label>
              <br />
              <label>
                <input placeholder="Подтверждение Пароля" type="password" {...register('confirmPassword', { required: true, maxLength: 30 })} className="input-auth" />
              </label>
              <br />
              <button type="submit" className="btn-reg">Регистрация</button>
            </div>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <p>
            Уже есть аккаунт? <Link to="/login" style={{ textDecoration: 'none' }}>Авторизация</Link>
          </p>
        </div>
      </>
  );
};

export default RegisterPage;
