import { Dispatch } from 'redux'
import {setErrorAC, setStatusAC} from "../../app/model/app-reducer";
import type {ResponseType} from '../../entities/TodolistItem/api/todolists-api'

type ThunkAPIType = {
    dispatch: (action: any) => any;
    // eslint-disable-next-line @typescript-eslint/ban-types
    rejectWithValue: Function;
};

// generic function
export const handleServerAppError =  <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC({error: data.messages[0]}))
    } else {
        dispatch(setErrorAC({error: 'Some error occurred'}))
    }
    dispatch(setStatusAC({status:'failed'}))
}

export const handleServerNetworkError = (error: any, thunkAPI: ThunkAPIType) => {
    thunkAPI.dispatch(setErrorAC({error: error.message}))
    thunkAPI.dispatch(setStatusAC({status: 'failed'}))
}

type ErrorUtilsDispatchType = Dispatch