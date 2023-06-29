import React from 'react';
import TodolistsList from "../../widgets/TodolistList/TodolistsList";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../shared/store/store";

const MainPage = () => {

    const isLogined = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    if (!isLogined) {
        return <Navigate to={'/login'}/>
    }
    return <div>
        <TodolistsList/>
    </div>
}
export default MainPage;
