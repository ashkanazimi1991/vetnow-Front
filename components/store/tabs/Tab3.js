import Card from "../Card/Card";
import styles from "../../../styles/TabPage.module.css";
import { Fragment } from "react";

const Tab3 = ({ data }) => {
  const filteredData = data.filter(
    dt =>
      dt.category === "آنتی بیوتیک ها" ||
      dt.category === "دان آماده" ||
      dt.category === "هوبارد",
  );

  return (
    <div className={styles.cardContainer}>
      {filteredData.map(card => (
        <Fragment key={card._id}>
          <Card
            main_images={`${process.env.baseUrl}/img/products/${card.images[0]}`}
            name={card.name}
            price={card.price}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Tab3;
