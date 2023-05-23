import api from "../../api"
import {
    ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS,
    DELETE_CART_FAIL,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_SINGLE_CART_ITEM_FAIL, DELETE_SINGLE_CART_ITEM_REQUEST, DELETE_SINGLE_CART_ITEM_SUCCESS,
    GET_CART_HISTROY_FAIL, GET_CART_HISTROY_REQUEST, GET_CART_HISTROY_SUCCESS
} from "../constants/cartConstants"

export const addToCardAction = (product) => async (dispatch, getState) => {
    try {

        console.log(product);
        dispatch({ type: ADD_TO_CART_REQUEST })
        const { data } = await api.post("/cart/add-to-cart", product, {
            headers: {
                authorization: getState().auth.userLogin.token
            }

        })
        console.log(data)
        dispatch({ type: ADD_TO_CART_SUCCESS, })
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAIL, payload: error.message })

    }
}
export const cartHistoryAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_CART_HISTROY_REQUEST })
        const { data } = await api.get("/cart/cart-histroy", {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        let total = 0
        total += data.result.reduce((t, i) => t + i.price * i.qty, 0)
        console.log(data.result);
        dispatch({
            type: GET_CART_HISTROY_SUCCESS, payload: {
                cartItems: data.result,
                total
            }
        })
    } catch (error) {
        dispatch({ type: GET_CART_HISTROY_FAIL, payload: error.message })

    }
}
export const emptyCartitemAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_CART_REQUEST })
        const { data } = await api.delete("/cart/empty-cart", {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        // console.log(data.result);
        dispatch({ type: DELETE_CART_SUCCESS, })
    } catch (error) {
        dispatch({ type: DELETE_CART_FAIL, payload: error.message })

    }
}

export const removeSingleCartItemAction = (productId) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_SINGLE_CART_ITEM_REQUEST })
        const { data } = await api.delete(`/cart/cart-remove-single/${productId} `, {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        dispatch({ type: DELETE_SINGLE_CART_ITEM_SUCCESS, })
    } catch (error) {
        dispatch({ type: DELETE_SINGLE_CART_ITEM_FAIL, payload: error.message })
    }
}