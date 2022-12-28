import {ADD_TO_CART,REMOVE_FROM_CART} from "../constants"
/*
* @type : From Constants and required to store the data
* @data : whatever data that action produces
* */
export const addToCart = (data) =>{
    console.log("action:",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeFromCart = (data) =>{
    console.log("action:",data)
    return{
        type:REMOVE_FROM_CART,
    }
}