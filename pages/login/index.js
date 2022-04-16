import React, { useEffect, useState } from 'react';
import styles from "../login/Login.module.css"
import logo from "../../public/Assets/Image/logo02.png"
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import {BaseUrl} from "../../components/baseUrl/BaseUrl";






const Login = () => {
    const router = useRouter();

    const [number , setNumber] = useState();

    const inputHandler = (event) =>{
        setNumber(event.target.value)
        console.log(number);
    }

    useEffect(() => {
        localStorage.getItem("key") && localStorage.removeItem('key');
    },[])

    const submitHandler = (event) =>{
        event.preventDefault();
        axios.post(`${BaseUrl}/api/v1/otp/verify/`, {
            phone_number: number,
        }).then(response => {
            if(response.status === 200 ){
                localStorage.setItem('key', response.data.key)
                router.push(`/login/LoginConfirmation`)
            }
        }).catch(function (error) {
            toast.error("شماره وارد شده در سیستم وجود ندارد لطفا ثبت نام کنید");
          });

    }

    return(
    <div className={styles.Container}>
        <form onSubmit={submitHandler} className={styles.loginForm}>
                <section className={styles.logo}>
                   <Link href="/" >
                         <img className={styles.Layer} src={logo.src} />
                   </Link> 
                    <h3>ورود / ثبت نام</h3>
                </section>
                <hr className={styles.line} />
                <section className={styles.loginInputSection}>
                    <p>لطفا شماره خود را در کادر پایین وارد کنید </p>
                    <input type="number" className={styles.loginInput}  onChange={inputHandler}  />
                    <input type="submit" className={styles.submitBtn} value="ورود به وتنا"/>
                </section>
                <section className={styles.register}>
                    <p>حساب کاربری ندارید ؟ <a href="/Register/" > ثبت نام کنید</a></p>
                </section>
        </form>
        <ToastContainer />
    </div>
    )
    }
export default Login