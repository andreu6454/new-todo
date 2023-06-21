
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, loginType, logoutType} from "../api/auth-api";

const initialState = {
    isLoggedIn: false,
}

export const loginTC = createAsyncThunk<loginType, loginType, { rejectValue: string }>('login', async (params, thunkAPI) => {
    try {
        const response = await authAPI.login(params);
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
export const logoutTC = createAsyncThunk<logoutType, void, { rejectValue: string }>('logout', async (params, thunkAPI) => {
    try {
        const response = await authAPI.logout();
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setIsLoggedInAC: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers(builder){
        builder.addCase(loginTC.fulfilled, (state) => {
            state.isLoggedIn = true
        })
            .addCase(logoutTC.fulfilled, (state) => {
                state.isLoggedIn = false
            })
    }
})
export const authReducer = authSlice.reducer
export const {setIsLoggedInAC} = authSlice.actions
