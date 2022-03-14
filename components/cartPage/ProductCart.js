import cartStyle from "./ProductCart.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { descreption } from "../../components/product/StringFunction";
import { useSelector , useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from "../redux/Cart/CartActions";


export default function ProductCart() {
  const [data, setData] = useState(null);
  let state = useSelector(state => state.cartState)
  function getData(value) {
    setData(value.target.value);
  }
  const dispatch = useDispatch()
  return (
    <div>
      {state ? state.selectedItems.map(item => 
      <div key={item.id} className={cartStyle.container}>
          <div className={cartStyle.rightWrapper}>
           <section className={cartStyle.partOne}>
             <img src={item.thumbnail} alt="vetnow" />
             <section className={cartStyle.partTwo}>
               <h1 id={cartStyle.title}>{item.name}</h1>
               <div id={cartStyle.subtitle} className="product-des" dangerouslySetInnerHTML={{ __html: descreption(item.descreption) + "..." }}></div>
 
             </section>
           </section>
           <section className={cartStyle.partThree}>
             <button onClick={() => dispatch(decrease(item))} id={cartStyle.btnMinus}>
               -
             </button>
             <input
               placeholder={item.quantity}
               onChange={getData}
               id={cartStyle.NumberOfProduction}
               type="text"
               min="1"
             />
             <button onClick={() => dispatch(increase(item))} id={cartStyle.btnPlus}>
               +
             </button>
           </section>
           <h1 id={cartStyle.priceTitle}>{item.price}</h1>
           <FaTrashAlt onClick={() => dispatch(removeItem(item))} id={cartStyle.trashLogo} />
         </div>
         </div>
        ) : "loading"}
       
    </div>
  );
}
