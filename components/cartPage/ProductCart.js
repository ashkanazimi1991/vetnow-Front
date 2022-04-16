import cartStyle from "./ProductCart.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { descreption } from "../../components/product/StringFunction";
import { useSelector , useDispatch } from 'react-redux';
import { decrease, increase, removeItem , increaseInput } from "../redux/Cart/CartActions";


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
               <h3 id={cartStyle.title}>{item.name}</h3>
 
             </section>
           </section>
          <div className={cartStyle.leftSection}>
            <section className={cartStyle.partThree}>
              <div className="input-group">
                  <span className="input-group-btn">
                      <button style={{borderTopRightRadius: '5px' , borderBottomRightRadius: '5px' , borderTopLeftRadius: '0px' , borderBottomLeftRadius: '0px'}}  type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]" onClick={() =>dispatch(increase(item))}>
                          <span className="glyphicon glyphicon-plus"></span>
                      </button>
                  </span>
                  <input type="text" name="quant[2]" className="form-control input-number" value={item.quantity > item.depository ? item.depository :  item.quantity }  min="1" max="5" onChange={() => dispatch(increaseInput(event.target.value , item))} />
                  <span className="input-group-btn">
                    <button style={{borderTopRightRadius: '0' , borderBottomRightRadius: '0' , borderTopLeftRadius: '5px' , borderBottomLeftRadius: '5px'}} type="button" className="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]" onClick={() =>dispatch(decrease(item))}>
                        <span className="glyphicon glyphicon-minus"></span>
                      </button>
                  </span>
              </div>
            </section>
            <section className={cartStyle.trashSection}>
              <h1 id={cartStyle.priceTitle}>{(item.price_after_discount > 0 ? item.price_after_discount : item.price)  * item.quantity}</h1>
              <FaTrashAlt onClick={() => dispatch(removeItem(item))} id={cartStyle.trashLogo} />
            </section>
          </div>
         </div>
         </div>
        ) : "loading"}
       
    </div>
  );
}
