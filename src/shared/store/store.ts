import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {authReducer} from "../../pages/LoginPage/model/auth-reducer";
import {appReducer} from "../../app/model/app-reducer";
import {todolistsReducer} from "../../entities/TodolistItem/model/todolists-reducer";
import {tasksReducer} from "../../entities/TaskItem/model/taskItem-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().prepend(thunkMiddleware)
})
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
