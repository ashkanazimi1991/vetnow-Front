import styles from "../../../styles/card.module.css";
import Link from "next/link";
import Image from "next/image";
import { BiHeart, BiCart, BiBookContent } from "react-icons/bi";
import PN from "persian-number";

const Card = ({ main_images, name, price }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.image}>
        <Image
          id={styles.main_image}
          width="400"
          height="400"
          layout="responsive"
          src={main_images}
          alt=""
        />
        <div className={styles.circle}>
          <Link href={`/products/${name}`} passHref>
            <span>
              <BiBookContent id={styles.logo2} />
            </span>
          </Link>
        </div>
        <div className={styles.circle}>
          <Link href="#" passHref>
            <span>
              <BiHeart id={styles.logo2} />
            </span>
          </Link>
        </div>
        <div className={styles.circle}>
          <Link href="/cart_page" passHref>
            <span>
              <BiCart id={styles.logo2} />
            </span>
          </Link>
        </div>
      </div>
      <div id={styles.title}>{name} </div>
      <div id={styles.price}>
        {PN.convertEnToPe(PN.sliceNumber(price))} تومان
      </div>
    </div>
  );
};

export default Card;
