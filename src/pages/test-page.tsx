import TodolistItem from "../entities/TodolistItem/TodolistItem";
import {useAppDispatch, useAppSelector} from "../shared/store/store";
import {Navigate} from "react-router-dom";
import React, {useEffect} from "react";
import {initializeAppTC} from "../app/model/app-reducer";


const testData = {
    id: '111',
    addedDate: '',
    order: 1,
    title: 'Title'
}
export const TestPage = () => {
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
        <div className={'Container'}>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
        </div>
    );
};

export default TestPage;