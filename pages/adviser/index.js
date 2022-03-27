import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Link from "next/link";
const Advisor = () => (
  <Layout className={styles.container}>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        {/* <AdvisorPic /> */}
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
        <img src="./images/iot01.jpg" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide}>
        <h1>ویزیت آنلاین دامپزشک و مشاور</h1>
        <h2 id={styles.titleh2}>
          راهکار وتنا برای کاهش صدمات و تلفات ناشی از بیماری های طیور , دامپزشک
          آنلاین می باشد که پرورش دهنده را در کمترین زمان با دامپزشکان مجرب و با
          .  سابقه طیور ارتباط می دهد بصورت تماس تصویری , صوتی , چت و ارسال فایل.
        </h2>
        <Link href="/adviser/resome" passHref>
          <button>پرداخت حق ویزیت و شروع چت</button>
        </Link>
      </div>
    </div>
    {/* ########################################################## Section Two */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#232f3e" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/vet01.png" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff9900" }}> دامپزشک مزارع صنعتی طیور</h1>
        <h2 style={{ color: "#fff" }}>
        دکتر یوسف محمدی , 20 سابقه کاری با کد نظام پزشکی     </h2>
       
        <Link href="/adviser/resome" passHref>
          <button>پرداخت و شروع ویزیت ( 100 هزار تومان )</button>
        </Link>
      </div>
    </div>
    {/* ####################################################### Section Three */}
    <div className={styles.section}>
      <div className={styles.leftSide}>
        <img src="./images/fram903.png" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#ff0000" }}>دامپزشگ پرندگان زینتی</h1>
        <h2>
        دکتر یوسف محمدی , 20 سابقه کاری با کد نظام پزشکی
        </h2>
        <Link href="/adviser/resome" passHref>
          <button>پرداخت و شروع ویزیت ( 50 هزار تومان )</button>
        </Link>
      </div>
    </div>
    {/* ####################################################### Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#232f3e" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/fram906.png" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#" }}>
        <h1 style={{ color: "#ff9900" }}>دامپزشگ طیور بومی و خانگی</h1>
        <h2 style={{ color: "#fff" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجل نیاز و
          کاربردهای متنوع با هدف 
        </h2>
        <Link href="/adviser/" passHref>
          <button>پرداخت و شروع ویزیت ( 30 هزار تومان )</button>
        </Link>
      </div>
    </div>
    <style global jsx>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </Layout>
);
export default Advisor;
