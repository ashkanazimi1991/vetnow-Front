import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import Pic from "../../components/automation/pic";
const Automation = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own />
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>اتوماسیون های تحت وب</h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
        <img src="/images/auto01010.png" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide}>
        <h1>کنترل تمام سیستم های الکترونیکی</h1>
        <h2 id={styles.titleh2}>
          اتوماسیون یک پارچه ساز وتنا امکان کنترل آنلاین تمام مزارع را بصورت
          ساده و کاربردی در اختیار پرورش دهنده قرار می دهد تا بواسطه آن فارم های
          خود را بصورت لحظه به لحظه کنترل کند.
        </h2>
        <button>مشاهده اتوماسیون ها</button>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#232f3e" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/sensor.png" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff9900" }}>مانیتورینگ تمام سنسورهای محیطی</h1>
        <h2 style={{ color: "#fff" }}>
          پرورش دهنده بصورت آنلاین میتواند بصورت میانگین یا تک به تک داده های
          سنسورهای مانند دما , رطوبت , آموانیاک , CO2, اکسیژن , دمای آب , سختی
          آب ,میزان مصرف آب و دان همچنین میزان دان موجود و ... مشاهده و در صورت
          لزوم دستورهای اجرای لازم را اجرا کند.
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Three */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#fff" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/auto06.png" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#ff9900" }}>
          برنامه دهی برای انجام خودکار امور روتین
        </h1>
        <h2 style={{ color: "#000" }}>
          پرورش دهنده می تواند برای رسیدن به حداکثر راندمان با توجه به رشد گله
          خود برنامه های روشنایی , دمایی , تغذیه ای و ... را درون نرم افزار
          مدیریت خود انجام دهد تا بصورت خودکار و دقیق اجرا شود.
        </h2>
        <button> تماس با مشاور</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#232f3e" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/auto0101.jpg" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#" }}>
        <h1 style={{ color: "#ff9900" }}>سیستم های رباتیک</h1>
        <h2 style={{ color: "#fff" }}>
          از مزیت های سیستم های رباتیک میتوان به جمع آوری خودکار لاشه ها ,
          ضدعفونی و هوا دهی بستر اشاره کرد علاوه بر آن ربات ها بصورت خودکار یا
          توسط اپراتور کنترل می شوند که این امکان را به وجود می آورد سرپرست از
          دوربین ربات ریزترین جزییات فارم های خود را ببیند بدون اینکه وارد سالن
          شود
        </h2>
        <button>مشاهده ربات ها</button>
      </div>
    </div>
    <div
      className={styles.section}
      style={{ direction: "ltr", background: "#fff" }}
    >
      <div className={styles.leftSide}>
        <video src="/videos/truck.mp4" autoPlay muted loop />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#ff9900" }}>انتقال هوشمند</h1>
        <h2 style={{ color: "#000" }}>
          مشاهده علایم حیاتی جوجه های گوشتی در حمل و نقل بصورت آنلاین توسط
          مرغدار و آگاهی از موقعیت و وضعیت دقیق سفارش در مسیر از مزیت های انتقال
          هوشمند است
        </h2>
        <button>مشاهده سیستم</button>
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
export default Automation;
