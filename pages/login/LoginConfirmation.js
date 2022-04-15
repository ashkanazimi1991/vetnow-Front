import React, { useEffect, useState } from 'react';
import styles from "../login/Login.module.css"
import logo from "../../public/Assets/Image/logo02.png"
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BaseUrl} from "../../components/baseUrl/BaseUrl";



const LoginConfirmation = () => {

    const [data , setData] = useState({
        key: '',
        password: '',
    })
    const inputHandler = (event) =>{
        setData({...data , key: localStorage.getItem('key') , password :event.target.value})
        console.log(data);
    }

    const router = useRouter();
    const submitHandler = (event) =>{
        event.preventDefault();
        axios.post(`${BaseUrl}/api/v1/otp/confirm/`, {
                key: data.key,
                password: data.password,
        })
        // .then((response) => response.json())
        // .then((json) => console.log(json))
        // .catch(function(error){
        //     // toast.error(error.non_field_errors.map(item => item));
        //     console.log(error.non_field_errors[0]);
        //   })
        .then(response => {
            if (response.status === 200) {
                console.log(response.data);
                fetch("/api/Login", {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token: response.data.token }),
                  });
                localStorage.setItem('token' , response.data.token )
                localStorage.removeItem('persist:root')
                setTimeout(() => {
                    window.location.replace("https://vet-now.org/")
                }, 1000);
            }
        }).catch(function (error) {
            toast.error("رمز وارد شده اشتباه میباشد");
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
                     <p>لطفا کد تایید را که به شماره شما ارسال شده را وارد کنید </p>
                     <input type="number" name="password" className={styles.loginInput} onChange={inputHandler} />
                     <input type="submit" className={styles.submitBtn} value="ورود به وتنا" />
                 </section>
                 <section className={styles.register}>
                     <p>اکانت دارید ؟ <a> وارد شوید</a></p>
                 </section>
            </form>
            <ToastContainer />
       </div>
       )
     }
export default LoginConfirmation;
