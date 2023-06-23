import React, {lazy, useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage/ui/LoginPage";
import MainPage from "./MainPage/MainPage";
import {useAppDispatch, useAppSelector} from "../shared/store/store";
import {initializeAppTC} from "../app/model/app-reducer";


export const Routing = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(state => state.auth.isLoggedIn)
    const isInitialized = useAppSelector(state => state.app.isInitialized)

    useEffect(()=>{
        dispatch(initializeAppTC())
    },[])


    if(!isInitialized){
        // добавить загрузку
    }

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <Routes>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'*'} element={<div> ///// 404 \\\\\</div>}/>
        </Routes>
    );
};