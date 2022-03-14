import Footerstyles from "./footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={Footerstyles.grid}>
        <div className={Footerstyles.column1}>
          <h1 id={Footerstyles.title}>درباره ما</h1>
          <h2 id={Footerstyles.subTitle}>گواهی و افتخارات</h2>
          <h2 id={Footerstyles.subTitle}>مجوزها</h2>
          <h2 id={Footerstyles.subTitle}>ارتباط با ما</h2>
          <h2 id={Footerstyles.subTitle}>گالری تصاویر</h2>
          <h2 id={Footerstyles.subTitle}>حریم خصوصی</h2>
        </div>
        <div className={Footerstyles.column2}>
          <h1 id={Footerstyles.title}>محصولات</h1>
          <h2 id={Footerstyles.subTitle}>محصولات دارویی</h2>
          <h2 id={Footerstyles.subTitle}>جوجه گوشتی</h2>
          <h2 id={Footerstyles.subTitle}>کنسانتره و مکمل</h2>
          <h2 id={Footerstyles.subTitle}>دان آماده و پلت</h2>
          <h2 id={Footerstyles.subTitle}>تجهیزات پرورشی</h2>
        </div>
        <div className={Footerstyles.column3}>
          <h1 id={Footerstyles.title}>خدمات</h1>
          <h2 id={Footerstyles.subTitle}>دامپزشک آنلاین</h2>
          <h2 id={Footerstyles.subTitle}>مشاوره پزشکی</h2>
          <h2 id={Footerstyles.subTitle}>منابع آموزشی</h2>
          <h2 id={Footerstyles.subTitle}>اخبار صنعت طیور</h2>
          <h2 id={Footerstyles.subTitle}>تکنولوژی های جدید</h2>
        </div>
        <div className={Footerstyles.column4}>
          <h1 id={Footerstyles.title}>پشتیبانی</h1>
          <h2 id={Footerstyles.subTitle}>تماس با اپراتوری</h2>
          <h2 id={Footerstyles.subTitle}>پشتیبانی محصولات</h2>
          <h2 id={Footerstyles.subTitle}>پشتیبانی خدمات</h2>
          <h2 id={Footerstyles.subTitle}>انتقاد و پیشنهاد</h2>
          <h2 id={Footerstyles.subTitle}>همکاری با ما</h2>
        </div>
      </div>
      <div className={Footerstyles.bottomLogo}>
        <h1>VetNow</h1>
        <div className={Footerstyles.firstlogo}>
          <FaFacebook id={Footerstyles.facebook} />
        </div>
        <div className={Footerstyles.otherlogo}>
          <FaInstagram id={Footerstyles.instagram} />
        </div>
        <div className={Footerstyles.otherlogo}>
          <FaTwitter id={Footerstyles.twitter} />
        </div>
        <div className={Footerstyles.otherlogo}>
          <FaWhatsapp id={Footerstyles.whatsapp} />
        </div>
        <div className={Footerstyles.otherlogo}>
          <FaYoutube id={Footerstyles.youtube} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
