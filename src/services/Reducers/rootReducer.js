/*
* This is a root of all reducer
* Redux requires only one store so we need to combine all the reducer files
* reducer combining part is done here.
* */
import {combineReducers} from "redux";
import cartItems from "./reducer";
export default combineReducers({
    cartItems
});