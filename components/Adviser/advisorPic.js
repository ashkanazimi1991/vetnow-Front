import styles from "./advisorPic.module.css";

function AdvisorPic() {
  return (
    <div className={styles["container-center-horizontal"]}>
      <div className={styles["desktop"]}>
        <div className={styles["overlap-group1"]}>
          <div className={styles["overlap-group"]}>
            <img alt="" className={styles["tv"]} src="/images/advisorPic/tv.svg" />
            <img alt=""
              className={styles["group"]}
              src="/images/advisorPic/Group.svg"
            />
            <img alt=""
              className={styles["medic"]}
              src="/images/advisorPic/medic.svg"
            />
            <img alt="" className={styles["pill"]} src="/images/advisorPic/pill.svg" />
            <img alt=""
              className={styles["capsulate"]}
              src="/images/advisorPic/capsulate.svg"
            />
            <img alt="" className={styles["plus"]} src="/images/advisorPic/plus.svg" />
            <img alt=""
              className={styles["glass"]}
              src="/images/advisorPic/glass.svg"
            />
          </div>
          <img alt=""
            className={styles["degree"]}
            src="/images/advisorPic/degree.svg"
          />
          <img alt=""
            className={styles["vaccine"]}
            src="/images/advisorPic/vaccine.svg"
          />
          <img alt="" className={styles["heal"]} src="/images/advisorPic/heal.svg" />
          <img alt=""
            className={styles["rightnote"]}
            src="/images/advisorPic/right_note.svg"
          />
          <img alt=""
            className={styles["leftnote"]}
            src="/images/advisorPic/left_note.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default AdvisorPic;
