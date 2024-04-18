import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import './registerPageModule.css';


const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://217.151.230.35:545/api/v1/regauth/register/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <>
      <div className="header1">
        <NavLink to='/' className="logo">
          <img src="../../../../src/assets/header/ОРТмастер%20(2).svg" alt="" className="logo-main" />
        </NavLink>
        <div className="navbar">
        </div>
      </div>
        <div className="form-auth">
          <h1>Регистрация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                  placeholder="Никнейм"
                  type="text"
                  name="username"
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
                  name="email"
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
              <input placeholder="Имя" type="text" name="firstname" {...register('firstname', { required: true, maxLength: 30 })} className="input-auth" />
            </label>
            <br />

            <label>
              <input placeholder="Фамилия" type="text" name="lastname" {...register('lastname', { required: true, maxLength: 30 })} className="input-auth" />
            </label>
            <br />

            <label>
              <input placeholder="Школа" name="school" {...register('school', { required: true, maxLength: 30 })} className="input-auth" />
            </label>
            <br />

            <label>
              <input placeholder="Возраст" type="text" name="age" {...register('age', { required: true, maxLength: 30 })} className="input-auth" />
            </label>
            <br />

            <label>
              <input placeholder="Пароль" type="password" name="password" {...register('password', { required: true, maxLength: 30 })} className="input-auth" />
            </label>
            <br />

            <label>
              <input placeholder="Подтверждение Пароля" type="password" name="confirmPassword" {...register('confirmPassword', { required: true, maxLength: 30 })} className="input-auth" />
            </label>
            <br />

            <button type="submit" className="btn-reg">Регистрация</button>
          </form>

          <p>
            Уже есть аккаунт? <Link to="/login" style={{textDecoration:'none'}}>Авторизация</Link>
          </p>
        </div>
      </>

  );
};

export default RegisterPage;
