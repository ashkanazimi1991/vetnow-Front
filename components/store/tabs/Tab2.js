import Card from "../Card/Card";
import styles from "../../../styles/TabPage.module.css";

const Tab2 = ({ data }) => {
  const filteredData = data.filter(
    dt =>
      dt.category === "ویتامین ها" ||
      dt.category === "مکمل" ||
      dt.category === "آرین",
  );

  return (
    <div className={styles.cardContainer}>
      {filteredData.map(card => (
        <>
          <Card
            main_images={`${process.env.baseUrl}/img/products/${card.images[0]}`}
            name={card.name}
            price={card.price}
          />
        </>
      ))}
    </div>
  );
};

export default Tab2;
