import React, {useRef} from 'react';
import style from './LoginPage.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../shared/store/store";
import {Navigate} from 'react-router-dom';
import {loginTC} from "../model/auth-reducer";

export interface LoginDataType {
    email: string,
    password: string,
    rememberMe: boolean,
}

const LoginPage = () => {

    const isAuth = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<LoginDataType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit: SubmitHandler<LoginDataType> = ({email, password, rememberMe}: LoginDataType) => {
        dispatch(loginTC({email, password, rememberMe}))
    };

    if (isAuth) {
        return <Navigate to={'/test'}/>
    }

    return (
        <div className={style.loginPage}>
            <h1 className={style.title}>
                Sign in
            </h1>
            <div className={style.loginBlock}>

                <div className={style.inputBlock}>
                    Email address
                    <input
                        {...register('email', {required: true})}
                        type={'email'}
                        className={style.Input}/>
                    {errors.email && <span className={style.error}>Email required</span>}
                </div>

                <div className={style.inputBlock}>
                    Password
                    <input
                        {...register('password', {required: true})}
                        type={'password'}
                        className={style.Input}/>
                    {errors.password && <span className={style.error}>Password required</span>}
                </div>

                <div className={style.rememberMeBlock}>
                    <input
                        {...register('rememberMe')}
                        type={'checkbox'}
                        className={style.checkBox}/>
                    Remember me?
                </div>

                <button type={'submit'} className={style.LoginButton} onClick={handleSubmit(onSubmit)}>
                    Sign in
                </button>

            </div>
            <div className={style.registerRedirectBlock}>
                No account yet? <a href={'https://social-network.samuraijs.com/signUp'}>Sign up</a>.
            </div>
        </div>
    );
};

export default LoginPage;