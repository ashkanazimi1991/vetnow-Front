import styles from "./footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div style={{ minWidth: "320px" }}>
      <div className={styles.grid}>
        <div className={styles.column1}>
          <h1 id={styles.title}>درباره ما</h1>
          <h2 id={styles.subTitle}>گواهی و افتخارات</h2>
          <h2 id={styles.subTitle}>مجوزها</h2>
          <h2 id={styles.subTitle}>ارتباط با ما</h2>
          <h2 id={styles.subTitle}>گالری تصاویر</h2>
          <h2 id={styles.subTitle}>حریم خصوصی</h2>
        </div>
        <div className={styles.column2}>
          <h1 id={styles.title}>محصولات</h1>
          <h2 id={styles.subTitle}>محصولات دارویی</h2>
          <h2 id={styles.subTitle}>جوجه گوشتی</h2>
          <h2 id={styles.subTitle}>کنسانتره و مکمل</h2>
          <h2 id={styles.subTitle}>دان آماده و پلت</h2>
          <h2 id={styles.subTitle}>تجهیزات پرورشی</h2>
        </div>
        <div className={styles.column3}>
          <h1 id={styles.title}>خدمات</h1>
          <h2 id={styles.subTitle}>دامپزشک آنلاین</h2>
          <h2 id={styles.subTitle}>مشاوره پزشکی</h2>
          <h2 id={styles.subTitle}>منابع آموزشی</h2>
          <h2 id={styles.subTitle}>اخبار صنعت طیور</h2>
          <h2 id={styles.subTitle}>تکنولوژی های جدید</h2>
        </div>
        <div className={styles.column4}>
          <h1 id={styles.title}>پشتیبانی</h1>
          <h2 id={styles.subTitle}>تماس با اپراتوری</h2>
          <h2 id={styles.subTitle}>پشتیبانی محصولات</h2>
          <h2 id={styles.subTitle}>پشتیبانی خدمات</h2>
          <h2 id={styles.subTitle}>انتقاد و پیشنهاد</h2>
          <h2 id={styles.subTitle}>همکاری با ما</h2>
        </div>
      </div>
      <div
        style={{
          fontSize: "8px",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
          backgroundColor:"#131A22",
        }}
      >
        <h3 style={{fontSize: '12px'}}>
           ایران- آذربایجان غربی - ارومیه - خیابان ساحلی - نبش کوچه اول -
          مجموعه دانش بنیان وتنا
        </h3>
        <h3 style={{fontSize: '12px' , color:'#ff9900'}}>شماره تماس : 32382953 -- 044</h3>
      </div>
      <div className={styles.bottomLogo}>
        <Link href="/" passHref>
          <h1>VETNOW</h1>
        </Link>
        <a>
          OnlinCEO Programing company {new Date().getFullYear()} All rights
          reserved
        </a>
        <div className={styles["fotterLogo"]}>
          {/* <div className={styles.otherlogo}><FaFacebook id={styles.facebook} /></div> */}
          <div className={styles.otherlogo}>
            <a href="" target="_blank" rel="noreferrer">
              <FaInstagram id={styles.instagram} />
            </a>
          </div>
          <div className={styles.otherlogo}>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter id={styles.twitter} />
            </a>
          </div>
          <div className={styles.otherlogo}>
            <a
              href="https:/wa.me/989025907170"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp id={styles.whatsapp} />
            </a>
          </div>
          {/* <div className={styles.otherlogo}><FaYoutube id={styles.youtube} /></div> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
