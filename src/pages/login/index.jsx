import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const [error, setErorr] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userName = formData.get("username");
        
        if(!userName) {
            setErorr('Введите имя пользователя')
        }

        auth.signIn(userName, () => {
            setErorr('')
            navigate(from, {replace: true})
        })
    }


    return (
        <div>
            <p>Пожалуйста авторизуйтесь</p>
            <div style={{ color: 'red'}}>{error}</div>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя: <input name='username' type='text' />
                </label>
                <br />
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}