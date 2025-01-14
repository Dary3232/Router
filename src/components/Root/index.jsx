import React from "react";
import { Outlet } from "react-router-dom";
import { User } from "../User";
import { useAuth } from "../../hooks/useAuth";
import * as SC from './styles'


export const Root = () => {
    const auth = useAuth();

    return <SC.Layout>
        <SC.Header>
            <SC.Menu>
                <SC.Link to='/'>Главная</SC.Link>
                <SC.Link to='posts'>Посты</SC.Link>
                <SC.Link to='blog'>Блог</SC.Link>
                <SC.Link to='feedback'>Обратная связь</SC.Link>
                {auth.user ? <SC.Link to='protected'>Защищенная страничка</SC.Link> : null}
            </SC.Menu>
            <User />
        </SC.Header>
        <br />
        <br />
        <br />
        <br />
        <Outlet />
    </SC.Layout>
}


