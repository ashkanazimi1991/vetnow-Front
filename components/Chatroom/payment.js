import DoctorOnline from "./DoctorOnline";
import styles from "./payment.module.css";

const Payment = () => {
  return (
    <>
      <div className={styles["container"]}>
        {/* <DoctorOnline/> */}
        <img src="/images/drImg/doctoroline.svg" alt="" />
        <div className={styles["detail"]}>
          <div className={styles["detail-one"]}>
            <h1 id={styles["title"]}>حق ویزیت</h1>
            <h1 id={styles["sub"]}>3000000 تومان</h1>
          </div>
          <div className={styles["detail-two"]}>
            <h1 id={styles["title"]}>مدت زمان چت </h1>
            <h1 id={styles["sub"]}>30 دقیقه</h1>
          </div>
        </div>
        <button>پرداخت</button>
      </div>
    </>
  );
};

export default Payment;
