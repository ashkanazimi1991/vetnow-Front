import payStyle from "./paySide.module.css";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const PaySide = () => {
  const router = useRouter();
  let state = useSelector(state => state.cartState)

  const clickHandler = (price) =>{
    window.location.href = price
  }
  return (
    <div className={payStyle.container}>
      <div className={payStyle.main}>
        <div className={payStyle.subTotal}>
          <h1>جمع کل</h1>
          <h1 onClick={() => clickHandler(`45.159.113.83:8000/goto_gateway/${state.selectedItems.reduce((total , products) => total + products.price * products.quantity , 0).toFixed(2)}/`)}> {state.selectedItems.reduce((total , products) => total + products.price * products.quantity , 0).toFixed(2)}</h1>
        </div>
        <div className={payStyle.subTotal}>
          <h1>تعداد</h1>
          <h1>{state.selectedItems.reduce((total , products) => total + products.quantity , 0)}</h1>
        </div>
      </div>
    </div>
  );
};

export default PaySide;
