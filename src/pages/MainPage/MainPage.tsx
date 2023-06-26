import React from 'react';
import TodolistsList from "../../widgets/TodolistList/TodolistsList";
import Header from "../../widgets/Header/Header";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../shared/store/store";
import PreLoader from "../../shared/PreLoader/PreLoader";

const MainPage = () => {

    const isLogined = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    if (!isLogined) {
        return <Navigate to={'/login'}/>
    }
    return <div>
        <Header/>
        <TodolistsList/>
    </div>
}
export default MainPage;
