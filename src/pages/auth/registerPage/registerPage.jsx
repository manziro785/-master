  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import {useForm} from "react-hook-form";

  const RegisterPage = () => {
    /*const [formData, setFormData] = useState({
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      school: '',
      age: '',
      password: '',
      confirmPassword: '',
    });*/

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    // const { username, email, firstname, lastname, school, age, password, confirmPassword } = formData;

    /*const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };*/

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
        <div>
          <h1>Регистрация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                  placeholder="Никнейм"
                  type="text"
                  name="username"
                  {...register("username", { required: true, maxLength: 30 })}
              />
            </label>
            <br />

            <label>
              <input
                  placeholder="Электронная почта"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Ваш email имеет некорректный формат",
                    },
                  })}
              />
            </label>
            {errors?.email?.message && (<div className='error'>{errors.email.message}</div>)}
            <br />

            <label>
              <input placeholder="Имя" type="text" name="firstname" {...register("firstname", { required: true, maxLength: 30 })}/>
            </label>
            <br />

            <label>
              <input placeholder="Фамилия" type="text" name="lastname" {...register("lastname", { required: true, maxLength: 30 })} />
            </label>
            <br />

            <label>

              <input placeholder="Школа" name="school" {...register("school", { required: true, maxLength: 30 })} />
            </label>
            <br />

            <label>
              <input placeholder="Возраст" type="text" name="age" {...register("age", { required: true, maxLength: 30 })} />
            </label>
            <br />

            <label>
              <input placeholder="Пароль" type="password" name="password" {...register("password", { required: true, maxLength: 30 })} />
            </label>
            <br />

            <label>
              <input  placeholder="Подтверждение Пароля" type="password" name="confirmPassword" {...register("confirmPassword", { required: true, maxLength: 30 })} />
            </label>
            <br />

            <button type="submit">Register</button>
          </form>

          <p>
            Уже есть аккаунт? <Link to="/login">Авторизация</Link>
          </p>
        </div>
    );
  };

  export default RegisterPage;
