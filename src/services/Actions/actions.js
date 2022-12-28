import {ADD_TO_CART} from "../constants"
/*
* @type : From Constants and required to store the data
* @data : whatever data that action produces
* */
export const addToCart = (data) =>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}