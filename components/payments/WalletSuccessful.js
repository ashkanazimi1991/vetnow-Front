import React,{useEffect, useState} from 'react'
import styles from "./successful.module.css"
import Navbar from "../Navbar/Navbar";
import Footer from '../Adviser/Footer/footer';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Link from "next/link"


const Successful = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id_order = queryParams.get('tc');
    let state = useSelector(state => state.cartState)
    const productsId = []
    state.selectedItems.forEach(element => {
        productsId.push(element.id)
    });

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
                    <h1>هزینه پرداختی با موفقت به کیف پول افزرده شد</h1>
                    <p> شماره تراکنش {id_order}</p>
                </div>
               </div>
                <br />
                <p className={styles.timeText}><i className="fas fa-info-circle"></i>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان </p>
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

export default Successful