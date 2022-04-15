import React,{useEffect, useState} from 'react'
import styles from "./successful.module.css"
import Navbar from "../Navbar/Navbar";
import Footer from '../Adviser/Footer/footer';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Link from "next/link"
import {BaseUrl} from "../../components/baseUrl/BaseUrl";



const Successful = ({data}) => {
    const queryParams = new URLSearchParams(window.location.search);
    const id_order = queryParams.get('tc');
    let state = useSelector(state => state.cartState)
    const productsId = []
    state.selectedItems.forEach(element => {
        productsId.push(element.id)
    });

    useEffect(() =>{
        axios.post(`${BaseUrl}/api/v1/orders/create/`,{
            product: productsId,
            amount: state.selectedItems.reduce((total , products) => total + products.price * products.quantity , 40000),
            payment_status: 'p'
        },{
            headers:{
                'Authorization': 'Token '+ localStorage.getItem('token'), 
            }
        }).then(response => {if (response) {
            state.selectedItems.forEach(element => {
                axios.post(`${BaseUrl}/api/v1/orders/item/create/`,{
                    price : element.price,
                    quantity :element.quantity,
                    order_id : response.data.order_id,
                    product :element.id
                },{
                    headers:{
                        'Authorization': 'Token '+ localStorage.getItem('token'), 
                    }
                }).then(response => {if (response) {
                    localStorage.removeItem('persist:root')
                }}) .catch((error) => {
                    if(error.response){
                      console.log(error.response.data); // => the response payload 
                    }
                });
            });
        }}) .catch((error) => {
            if(error.response){
              console.log(error.response.data); // => the response payload 
            }
        });
       
    },[])
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
                    <h1>پرداخت شما با موفقیت صورت گرفت</h1>
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