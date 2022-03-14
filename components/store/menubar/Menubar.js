import styles from "./Menubar.module.css";
import { FiSearch } from 'react-icons/fi';
import {HiShoppingCart} from 'react-icons/hi'
import { useState,useEffect,useRef } from "react";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';


const Menubar = () => {
    const [click, setClick] = useState(true);
    const search = useRef();
    let state = useSelector(state => state.cartState)
    const [cartData , setCartData] = useState()


  useEffect(() => {
    state = JSON.parse(localStorage.getItem('products'))
    setCartData({...state})
    document.addEventListener("mousedown", (event) => {
        if (search.current){
      if (!search.current.contains(event.target)) {
        setClick(false);}
      }
    });
  });
  return (
    <div ref={search} className={styles.main}>
      <div className={styles.container_logo}>
            <Link href='/' >{<img id={styles.logo_img} src="./images/logo3.png" alt="logo" />}</Link>
            <Link href='/' >{<h1 id={styles.logo_title} >VETNOW</h1>}</Link>
      </div>
      <div className={styles.center}>
      <form  className={styles['form']}  action="">
        <input id={styles.input} type="search"  />
        <FiSearch id={styles.icon} onClick={() => setClick(!click)}/>
      </form>
      </div>
      <HiShoppingCart id={styles.cart}/><span id={styles.product_number}>{cartData ? cartData.itemsCounter : 10}</span>
    </div>
  );
};

export default Menubar;
