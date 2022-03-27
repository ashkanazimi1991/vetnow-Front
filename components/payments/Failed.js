import React,{useEffect} from 'react'
import styles from "./failed.module.css"
import Navbar from "../Navbar/Navbar";
import Footer from '../Adviser/Footer/footer';
import { useSearchParams } from "react-router-dom";
import Link from "next/link"


const Failed = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const order_id = queryParams.get('tc');
  return (
      <>
    <Navbar />
        <div className={styles.container}>
            <div className={styles.main}>
               <div className={styles.topSection}>
               <div className={styles.topSectionImg}>
                    <img src='/Assets/Image/Fail.svg' alt='payment' />
                </div>
                <div className={styles.topSectionText}>
                    <h1>متاسفانه پرداخت شما ناموفق بود!</h1>
                    <p> شماره تراکنش {order_id}</p>
                </div>
               </div>
                <br />
                <p className={styles.timeText}><i className="fas fa-info-circle"></i> چنانچه مبلغی از حساب شما کسر شده است، تا ۲۴ ساعت آینده به حساب شما باز خواهد گشت. </p>
                <br />
                <div className={styles.paymentsBtn}>
                    <Link href="/">صفحه اصلی</Link>
                </div>
            </div>
        </div>
        <Footer />

    </>
  )
}

export default Failed