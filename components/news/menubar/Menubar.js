import menubar_styles from "./Menubars.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const Menubar = () => {
  const [click, setClick] = useState(true);

  return (
    <div className={menubar_styles.main}>
      <div className={menubar_styles.container_logo}>
        <Link href="/">
          {
            <img
              id={menubar_styles.logo_img}
              src="/images/logo3.png"
              alt="logo"
            />
          }
        </Link>
      </div>
      <div className={menubar_styles.menu}>
        <div className={menubar_styles.link}>
          <Link href ='/news/poultry' ><h1>اخبار صنعت طیور</h1></Link>
          <Link href ='/news/source' ><h1>منابع آموزشی</h1></Link>
          <Link href ='/news/poultry_solution' ><h1>راهکارهای پرورشی</h1></Link>
        </div>
      </div>
      <div style={{ flexDirection: "row", display: "flex", margin: "auto 10px" }}>
        <HiShoppingCart id={menubar_styles.cart} />
        <span id={menubar_styles.product_number}>0</span>
      </div>
    </div>
  );
};

export default Menubar;
