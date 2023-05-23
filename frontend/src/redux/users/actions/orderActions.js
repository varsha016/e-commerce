import api from "../../api"
import {
    BUY_NOW_FAIL,
    BUY_NOW_REQUEST,
    BUY_NOW_SUCCESS,
    INITIATE_PAYMENT_FAIL,
    INITIATE_PAYMENT_REQUEST,
    INITIATE_PAYMENT_SUCCESS,
    ORDER_CANCEL_FAIL, ORDER_CANCEL_REQUEST, ORDER_CANCEL_SUCCESS,
    PAYMENT_FAILED_FAIL,
    PAYMENT_FAILED_REQUEST,
    PAYMENT_FAILED_SUCCESS,
    PAYMENT_VERIFY_FAIL,
    PAYMENT_VERIFY_REQUEST,
    PAYMENT_VERIFY_SUCCESS,
    PLACE_ORDER_FAIL, PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    USER_ORDER_HISTOPY_FAIL, USER_ORDER_HISTOPY_REQUEST, USER_ORDER_HISTOPY_SUCCESS
} from "../constants/orderConstants"

export const placeOrderAction = orderData => async (dispatch, getState) => {
    try {
        console.log(orderData);
        dispatch({ type: PLACE_ORDER_REQUEST })
        const { data } = await api.post("/order/order-place", orderData, {
            headers: {
                authorization: getState().auth.userLogin.token
            }

        })
        dispatch({ type: PLACE_ORDER_SUCCESS })
    } catch (error) {
        dispatch({ type: PLACE_ORDER_FAIL, payload: error.message })

    }
}

export const cancelOrderAction = orderId => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CANCEL_REQUEST })
        const { data } = await api.put(`/order/order-cancel/${orderId}`, {}, {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        dispatch({ type: ORDER_CANCEL_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: ORDER_CANCEL_FAIL, payload: error.message })

    }
}

export const getOrderHistroyAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_ORDER_HISTOPY_REQUEST })
        const { data } = await api.get(`/order/order-histroy`, {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        dispatch({ type: USER_ORDER_HISTOPY_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: USER_ORDER_HISTOPY_FAIL, payload: error.message })

    }
}


export const initiatePaymentAction = (orderData) => async (dispatch, getState) => {
    try {
        dispatch({ type: INITIATE_PAYMENT_REQUEST })
        const { data } = await api.post("/order/payment", orderData, {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        dispatch({ type: INITIATE_PAYMENT_SUCCESS, payload: data.order.id })

    } catch (error) {
        dispatch({ type: INITIATE_PAYMENT_FAIL, payload: {
            message:error.response.data.message || error.message,
            err:error.response.data.err || []
        }})

    }
}
export const varifyPaymentAction = (response) => async (dispatch, getState) => {
    try {
        dispatch({ type: PAYMENT_VERIFY_REQUEST })
        const { data } = await api.post("/order/payment/verify", response, {
            headers: {
                authorization: getState().auth.userLogin.token
            }
        })
        dispatch({ type: PAYMENT_VERIFY_SUCCESS, })

    } catch (error) {
        dispatch({ type: PAYMENT_VERIFY_FAIL, payload: error.message })

    }
}
export const paymentFailAction = (err) => async (dispatch, getState) => {
    try {
        dispatch({ type: PAYMENT_FAILED_REQUEST })
        // const { data } = await api.post("/order/payment/verify", err, {
        //     headers: {
        //         authorization: getState().auth.userLogin.token
        //     }
        // })

        dispatch({ type: PAYMENT_FAILED_SUCCESS, payload: err })

    } catch (error) {
        dispatch({ type: PAYMENT_FAILED_FAIL, payload: error.message })

    }
}


