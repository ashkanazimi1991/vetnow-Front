import styles from "./section2.module.css";
import Link from "next/link";
export default function Section2({imgPath,titleOfNews}) {
  return (
    <div className={styles["main"]}>
      <div className={styles["card"]}>
        <img src={imgPath} alt=""/>
        <h1>
          {titleOfNews}
        </h1>
        <Link href="#">
          <a>بیشتر بخوانید...</a>
        </Link>
      </div>
    </div>
  );
}
