import styles from "./loading.module.css";

const BetweenPage = () => {
  return (
    <>
    <div className={styles["main"]}>
      <div className={styles["img"]}>
        <img src="/favicon.ico" alt="vetnow" />
      </div>
      <div className={styles["wrapper"]}>
        <div className={styles["circle"]} />
        <div className={styles["circle"]} />
        <div className={styles["circle"]} />
        <div className={styles["shadow"]} />
        <div className={styles["shadow"]} />
        <div className={styles["shadow"]} />
        <span>VetNow Is Loading</span>
      </div>

      <style global jsx>
        {``}
      </style>
    </div></>
  );
};

export default BetweenPage;
