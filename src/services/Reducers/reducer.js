/*
* This is just one single reduce
* one action belongs to one reducer
* there can be multiple reducers
* */

import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants";

const initialState = {
    cartData: []
}

export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer:", action)
            return {
                ...state,
                cartData: [...state.cartData, action.data] // adding array item with cartData
            }
            break;
        case REMOVE_FROM_CART:
            console.log("reducer remove:", action)
            let len = state.cartData.length;
            let newlength = len - 1;
            console.log(newlength)
            return {
                ...state,
                cartData: [...state.cartData.slice(0, newlength),
                    ...state.cartData.slice(newlength + 1)
                ]
            }
            break;
        default:
            return state
    }
}