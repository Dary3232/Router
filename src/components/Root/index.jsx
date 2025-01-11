import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./style.css"

<NavLink
    className={({ isActive }) => {
        return isActive ? styles.active : "";
    }}
/>

export const Root = () => <>
    <NavLink to='/'>Главная</NavLink>
    <NavLink to='posts'>Посты</NavLink>
    <NavLink to='blog'>Блог</NavLink>
    <NavLink to='feedback'>Обратная связь</NavLink>
    <br />
    <br />
    <br />
    <br />
    <Outlet />
</>


// export const Root = () => (
//   <>
//     <NavLink
//       to='/'
//       className={({ isActive }) => (isActive ? styles.active : "")}
//     >
//       Главная
//     </NavLink>
//     <NavLink
//       to='posts'
//       className={({ isActive }) => (isActive ?  styles.active : "")}
//     >
//       Посты
//     </NavLink>
//     <NavLink
//       to='blog'
//       className={({ isActive }) => (isActive ? styles.active : "")}
//     >
//       Блог
//     </NavLink>
//     <br />
//     <br />
//     <br />
//     <br />
//     <Outlet />
//   </>
// );

