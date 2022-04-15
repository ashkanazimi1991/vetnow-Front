import styles from "./Menubar.module.css";
import { FaLuggageCart } from "react-icons/fa";
import { useState , useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';


const Menubar = () => {
  const [click, setClick] = useState(true);
  let state = useSelector(state => state.cartState)
  const [cartData , setCartData] = useState()

  useEffect(() =>{
    state = JSON.parse(localStorage.getItem('products'))
    setCartData({...state})
  },[])

  return (
    <div className={styles.main}>
      <div className={styles.container_logo}>
        <Link href="/">
          {<img id={styles.logo_img} src="/images/logo.png" alt="vetnow poultry" />}
        </Link>
        <Link href="/">{<h1 id={styles.logo_title}>VETNOW</h1>}</Link>
      </div>
      <div className={styles.center}>
        {/* <form className={styles["form"]} action=""> */}
          {/* <input id={styles.input} type="search" /> */}
          {/* <FiSearch id={styles.icon} onClick={() => setClick(!click)} /> */}
        {/* </form> */}
      </div>
      <div className={styles.cart}>
      <div className={styles.cartIcon}>
        <Link href="/cart" >
          <FaLuggageCart href="/cart" id={styles.cart} />
        </Link>
        <div className={styles.numberCart}>
          {state.selectedItems.reduce((total , products) => total + products.quantity , 0)}
        </div>
      </div>
        {/* <span id={styles.product_number}>{cartData ? cartData.selectedItems.length : 0}</span> */}
      </div>
    </div>
  );
};

export default Menubar;
