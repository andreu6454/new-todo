import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import style from './LoginPage.module.css'
import {useForm} from "react-hook-form";

export interface LoginDataType {
    email: string,
    password: string,
    rememberMe: boolean,
}

const LoginPage = () => {

    const dispatch = useDispatch();

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

                <button type={'submit'} className={style.LoginButton}> Sign in</button>
            </div>
            <div className={style.registerRedirectBlock}>
                No account yet? <a href={'https://social-network.samuraijs.com/signUp'}>Sign up</a>.
            </div>
        </div>
    );
};

export default LoginPage;