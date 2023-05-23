import {
    ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS,

    DELETE_CART_FAIL,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,

    DELETE_SINGLE_CART_ITEM_FAIL,
    DELETE_SINGLE_CART_ITEM_REQUEST,
    DELETE_SINGLE_CART_ITEM_SUCCESS,

    GET_CART_HISTROY_FAIL, GET_CART_HISTROY_REQUEST, GET_CART_HISTROY_SUCCESS
} from "../constants/cartConstants"

export const cartReducer = (state = { cart: [] }, { type, payload }) => {

    switch (type) {
        case ADD_TO_CART_REQUEST: return {
            ...state,
            loading: true,

        }
        case ADD_TO_CART_SUCCESS: return {
            ...state,
            loading: false,
            // cart: [{ ...payload }],
            toggle: !state.toggle

        }
        case ADD_TO_CART_FAIL: return {
            ...state,
            loading: false,
            addToCartError: payload

        }

        case GET_CART_HISTROY_REQUEST: return {
            ...state,
            loading: true,

        }
        case GET_CART_HISTROY_SUCCESS: return {
            ...state,
            loading: false,
            cart: payload.cartItems,
            total: payload.total

        }
        case GET_CART_HISTROY_FAIL: return {
            ...state,
            loading: false,
            getCartError: payload

        }
        case DELETE_SINGLE_CART_ITEM_REQUEST: return {
            ...state,
            loading: true,

        }
        case DELETE_SINGLE_CART_ITEM_SUCCESS: return {
            ...state,
            loading: false,
            singleItemRemove: true,
            toggle: !state.toggle


        }
        case DELETE_SINGLE_CART_ITEM_FAIL: return {
            ...state,
            loading: false,
            deleteSingleCartError: payload

        }

        case DELETE_CART_REQUEST: return {
            ...state,
            loading: true,

        }
        case DELETE_CART_SUCCESS: return {
            ...state,
            loading: false,
            emptyCart: true,
            toggle: !state.toggle


        }
        case DELETE_CART_FAIL: return {
            ...state,
            loading: false,
            emptyCartDelete: payload

        }


        default: return state

    }
}

export const getCartData = state => state.allCart