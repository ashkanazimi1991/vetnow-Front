import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";

const rootReducer = combineReducers({
    cartState: CartReducer
})

export default rootReducer;