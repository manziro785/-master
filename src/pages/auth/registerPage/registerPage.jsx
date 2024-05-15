import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../authPage/authPageModule.css';
import { AuthContext } from '../../../App';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuth, setIsAuth] = React.useContext(AuthContext);
    const navigate = useNavigate();

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

    return (
        <>

            <div className='auth-wrapper'>
                <div className="logout-from-auth">
                    <NavLink to ='/'>
                        <img src="./src/assets/auth/System-Icons.svg" alt="" />
                    </NavLink>
                </div>
            <div className="form-auth">
                <h1 className='title-auth'>Регистрация</h1>
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
                        {/* Other input fields */}
                        <button type="submit" className="btn-auth">Регистрация</button>
                    </div>
                </form>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <p className='span-login'>
                    Уже есть аккаунт? <Link to="/login" style={{ textDecoration: 'none' }}><span className='span-llogin'>Авторизация</span></Link>
                </p>
                <div className="bg-elem">
                    ОРТ <span>мастер</span>
                </div>
                <div className="img-container-auth">
                    <img src="./src/assets/auth/person.svg" alt="" />
                </div>
            </div>
            </div>
        </>
    );
};

export default RegisterPage;
