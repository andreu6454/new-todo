import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage/ui/LoginPage";
import MainPage from "./MainPage/MainPage";
import {useAppDispatch, useAppSelector} from "../shared/store/store";
import {initializeAppTC} from "../app/model/app-reducer";
import PreLoader from "../shared/components/PreLoader/PreLoader";
import InfoPage from "./InfoPage/InfoPage";


export const Routing = () => {
    const dispatch = useAppDispatch()

    const isInitialized = useAppSelector(state => state.app.isInitialized)

    useEffect(()=>{
        dispatch(initializeAppTC())
    },[])

    if(!isInitialized){
        return <PreLoader/>
    }

    return (
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/info'} element={<InfoPage/>}/>
            <Route path={'*'} element={<div> ///// 404 \\\\\</div>}/>
        </Routes>
    );
};