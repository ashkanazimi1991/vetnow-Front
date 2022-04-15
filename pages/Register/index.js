import React, { useEffect, useState } from 'react';
import styles from "../login/Login.module.css"
import logo from "../../public/Assets/Image/Layer1.png"
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BaseUrl} from "../../components/baseUrl/BaseUrl";






const Register = () => {
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
        axios.post(`${BaseUrl}/api/v1/user/register/`, {
            phone_number: number,
        }).then(response => {
            if(response.status === 200 ){
                toast.success("کاربر با موفقیت ساخته شد");
                setTimeout(() => {
                    router.push('/login')
                },5000)
            }
        }).catch((error) => {
            if(error.response){
                // console.log(error.response);
                toast.error(error.response.data);
                if(error.response.status === 401){
                    toast.error(error.response.data.phone_number[0]);
                }

            }
        });
    }

    return(
    <div className={styles.Container}>
        <form onSubmit={submitHandler} className={styles.loginForm}>
                <section className={styles.logo}>
                    <img className={styles.Layer} src={logo.src} />
                    <h3>ورود / ثبت نام</h3>
                </section>
                <hr className={styles.line} />
                <section className={styles.loginInputSection}>
                    <p>لطفا شماره خود را در کادر پایین وارد کنید </p>
                    <input type="number" className={styles.loginInput}  onChange={inputHandler}  />
                    <input type="submit" className={styles.submitBtn} value="ثبت نام"/>
                </section>
                <section className={styles.register}>
                    <p>اکانت دارید ؟ <a>وارد شوید</a></p>
                </section>
        </form>
        <ToastContainer />
    </div>
    )
    }
export default Register