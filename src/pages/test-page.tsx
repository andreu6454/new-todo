import TodolistItem from "../entities/TodolistItem/TodolistItem";
import {useAppSelector} from "../app/store/store";
import {Navigate} from "react-router-dom";
import React from "react";


const testData = {
    id: '111',
    addedDate: '',
    order: 1,
    title: 'Title'
}
export const TestPage = () => {
    const isAuth = useAppSelector(state => state.auth.isLoggedIn)

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