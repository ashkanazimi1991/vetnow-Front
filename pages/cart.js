import { useState , useEffect } from "react";
import cartStyle from "../styles/cartPage.module.css";
import { BsMinecart } from "react-icons/bs";
import ProductCart from "../components/cartPage/ProductCart";
import PaySide from "../components/cartPage/paySide";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';


export default function CartPage() {
  const dispatch = useDispatch()
  let state = useSelector(state => state.cartState)
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={cartStyle.body}>
        <div
          className={`${cartStyle["container"]} ${open ? cartStyle.open : ""}`}>
          <Link href="/" passHref><h1>VetNow</h1></Link>
          <input type="text" placeholder="" />
          <BsMinecart style={{ margin: "auto 0 auto auto", color:"#fff" }} />
          <span style={{ margin: "auto auto auto 5px", cursor:"default", color:"#fff" }}>{state.selectedItems.length > 0 ? state.selectedItems.length : 0}</span>
        </div>
        <div className={cartStyle["section"]}>
          <section style={{padding: '2%  2%'}} className={cartStyle["productSide"]}>
            {/* {cartData ? cartData.selectedItems.map(item => <ProductCart key={item.id} />) : "Loading" } */}
            {/* {console.log(cartData)} */}
            <ProductCart />
          </section>
          <PaySide />
        </div>
      </div>

      {/* <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@600&display=swap");
          * {
            margin: 0;
            padding: 0;
            font-family: "Truculenta", sans-serif;
          }
        `}
      </style> */}
    </div>
  );
}
