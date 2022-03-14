import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Link from "next/link";
import AdvisorPic from "../../components/Adviser/advisorPic";
const Advisor = () => (
  <Layout className={styles.container}>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <AdvisorPic />
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
        <img src="./images/drvisit01.jpg" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide}>
        <h1>ویزیت آنلاین دامپزشک</h1>
        <h2 id={styles.titleh2}>
          راهکار وتنا برای کاهش صدمات و تلفات ناشی از بیماری های طیور , دامپزشک
          آنلاین می باشد که پرورش دهنده را در کمترین زمان با دامپزشکان مجرب و با
          سابقه طیور ارتباط می دهد.
        </h2>
        <Link href="/adviser/resome" passHref>
          <button>ورود به چت روم دامپزشکان</button>
        </Link>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#232f3e" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/ischick.jpg" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff9900" }}>مشاوره پرورشی</h1>
        <h2 style={{ color: "#fff" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجل نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
          طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه{" "}
        </h2>
        <Link href="/adviser/resome" passHref>
          <button>چت روم مشاور پرورشی</button>
        </Link>
      </div>
    </div>
    {/* ############################################################################# Section Three */}
    <div className={styles.section}>
      <div className={styles.leftSide}>
        <img src="./images/ishen.jpg" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#ff9900" }}>مشاوره تغذیه ای</h1>
        <h2>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجل نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
          طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه{" "}
        </h2>
        <Link href="/adviser/resome" passHref>
          <button>چت روم مشاور تغذیه ای</button>
        </Link>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#232f3e" }}
    >
      <div className={styles.leftSide}>
        <img src="./images/isfarm.jpg" alt="VetNow Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#" }}>
        <h1 style={{ color: "#ff9900" }}>طرح های توجیهی و کار آفرینی</h1>
        <h2 style={{ color: "#fff" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجل نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
          طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه{" "}
        </h2>
        <Link href="/adviser/resome" passHref>
          <button>مشاهده طرح های توجیهی</button>
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
