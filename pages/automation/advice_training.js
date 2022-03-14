import Layout from "../../components/Adviser/Layout";
import DenturesP from "../../components/product/denturesProduct/DenturesP";
import styles from "../../styles/model.module.css";
import React360Viewer from "../../components/3d/React360Viewer";
import useInView from "react-cool-inview";

export default function Toothpaste() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <Layout>
      <div className={styles["container"]}>
        <div className={styles["threeDSection"]}>
          <React360Viewer
            amount={24}
            i={1}
            imagePath="/images/robot"
            fileName="m{index}.jpg"
            autoplay={0}
            loop={3}
          />
        </div>
        {/* <div className={styles["stuff"]}>
          <h1 id={styles["title"]}>Always A Level</h1>
          <h1 id={styles["subtitle"]}>100% Proved</h1>
        </div> */}
      </div>
      <DenturesP
        image="/images/harvestor.jpg"
        leftSquareColor="#FF9900"
        middleSquareColor="#b30000"
        rightSquareColor="#000"
        rightTitle="0,000 $"
        leftBtnTitle="اطلاعات بیشتر"
        middleBtnTitle=""
        rightBtnTitle="ثبت سفارش"
        leftTitle="هاروستور مرغ تمام اتوماتیک"
        leftSubtitle=" جمع آوری طیور گوشتی بدون آسیب  و سریع با امکان شمارش و باسکول   "
        direction="rtl"
      />

      <DenturesP
        image="/images/run01.jpg"
        leftSquareColor="#FF9900"
        middleSquareColor="#b30000"
        rightSquareColor="#000"
        rightTitle="کاتالوگ محصول"
        leftBtnTitle="اطلاعات بیشتر"
        middleBtnTitle=""
        rightBtnTitle="ثبت سفارش"
        leftTitle="ربات چندمنظوره , کنسول خودران و کنترلی"
        leftSubtitle=" موتور الکتریکی ترمینال برای کنترل و استفاده انواع بازو در فارم های صنعتی   "
        direction="rtl"
      />

      <div ref={observe}>
        <DenturesP
          image="/images/harvestor03.jpg"
          leftSquareColor="#FF9900"
          middleSquareColor="#b30000"
          rightSquareColor="#000"
          rightTitle="کانالوگ محصول"
          leftBtnTitle="اطلاعات بیشتر"
          middleBtnTitle=""
          rightBtnTitle="ثبت سفارش"
          leftTitle="بازو هاروستور"
          leftSubtitle=" مقیاس پذیر با بازو های جمع شونده , اتصال سریع و راحت به انواع مینی ربات های ترمینال   "
          direction="rtl"
        />
      </div>
      {inView && (
        <DenturesP
          image="/images/run02.jpg"
          leftSquareColor="#FF9900"
          middleSquareColor="#b30000"
          rightSquareColor="#000"
          rightTitle="کاتالوگ محصول"
          leftBtnTitle="اطلاعات بیشتر"
          middleBtnTitle=""
          rightBtnTitle="ثبت سفارش"
          leftTitle="ربات ناظر و ترمینال"
          leftSubtitle="  خودران و قابل کنترل با امکان استفاده از انواع بازو ها برای جمع آوری  لاشه و جمع آوری اطلاعات از بستر فارم   "
          direction="rtl"
        />
      )}
      {inView && (
        <DenturesP
          image="/images/harvestor.jpg"
          leftSquareColor="#FF9900"
          middleSquareColor="#b30000"
          rightSquareColor="#000"
          rightTitle="کاتالوگ محصول"
          leftBtnTitle="اطلاعات بیشتر"
          middleBtnTitle=""
          rightBtnTitle="ثبت سفارش"
          leftTitle="هاروستور مرغ تمام اتوماتیک"
          leftSubtitle=" جمع آوری طیور گوشتی بدون آسیب  و سریع با امکان شمارش و باسکول   "
          direction="rtl"
        />
      )}
      {inView && (
        <DenturesP
          image="/images/harvestor03.jpg"
          leftSquareColor="#FF9900"
          middleSquareColor="#b30000"
          rightSquareColor="#000"
          rightTitle="کاتالوگ محصول"
          leftBtnTitle="اطلاعات بیشتر"
          middleBtnTitle=""
          rightBtnTitle="ثبت سفارش"
          leftTitle="هاروستور مرغ تمام اتوماتیک"
          leftSubtitle=" جمع آوری طیور گوشتی بدون آسیب  و سریع با امکان شمارش و باسکول   "
          direction="rtl"
        />
      )}
    </Layout>
  );
}
