import { combineReducers } from "redux";
import CartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
    cartState: CartReducer
})

export default rootReducer;