import product_styles from "./CardStyle.module.css";
import Card2 from "../store/Card/Card";
const Card = ({ data }) => {
  return (
    <div className={product_styles.cardWrapper}>
      <div className={product_styles.cardContainer}>
        {data.map(card => {
          return (
            <Card2
              key={card._id}
              main_images={`${process.env.baseUrl}/img/products/${card.images[0]}`}
              name={card.name}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Card;
