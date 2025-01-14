import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";


export const User = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    if (!auth.user) {
        return <Link to='/login'>Авторизация</Link>
    }

    return <div>
        Добро пожаловать {auth.user}!
        <br />
        <button 
            onClick={() => {
                auth.signOut(() => navigate('/login'))
            }}
        >
            Выход
        </button>
    </div>
}