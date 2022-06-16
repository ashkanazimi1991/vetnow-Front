import menubar_styles from "./Menubars.module.css";
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
              src="/images/logo.png"
              alt="logo"
            />
          }
        </Link>
      </div>
      <div className={menubar_styles.menu}>
        <div className={menubar_styles.link}>
          {/* <Link href ='/news/poultry' ><h1>اخبار صنعت طیور</h1></Link> */}
          {/* <Link href ='/news/source' ><h1>منابع آموزشی</h1></Link> */}
          {/* <Link href ='/news/poultry_solution' ><h1>راهکارهای پرورشی</h1></Link> */}
        </div>
      </div>
      
    </div>
  );
};

export default Menubar;
