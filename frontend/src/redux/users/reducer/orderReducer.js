import {
    INITIATE_PAYMENT_FAIL, INITIATE_PAYMENT_REQUEST, INITIATE_PAYMENT_SUCCESS,
    ORDER_CANCEL_FAIL, ORDER_CANCEL_REQUEST, ORDER_CANCEL_SUCCESS,
    PAYMENT_FAILED_FAIL, PAYMENT_FAILED_REQUEST, PAYMENT_FAILED_SUCCESS,
    PAYMENT_VERIFY_FAIL, PAYMENT_VERIFY_REQUEST, PAYMENT_VERIFY_SUCCESS,
    PLACE_ORDER_FAIL, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS,
    USER_ORDER_HISTOPY_FAIL, USER_ORDER_HISTOPY_REQUEST, USER_ORDER_HISTOPY_SUCCESS
} from "../constants/orderConstants"


export const orderReducer = (state = { orders: [] }, { type, payload }) => {
    switch (type) {
        case PLACE_ORDER_REQUEST: return {
            ...state,
            paid: false,
            loading: true,

        }
        case PLACE_ORDER_SUCCESS: return {
            ...state,
            loading: false,
            // orderPlaced: true,
            paid: true,
            toggle: !state.toggle

        }
        case PLACE_ORDER_FAIL: return {
            ...state,
            loading: false,
            placeOrderError: payload

        }

        case ORDER_CANCEL_REQUEST: return {
            ...state,
            loading: true,

        }
        case ORDER_CANCEL_SUCCESS: return {
            ...state,
            loading: false,
            orderCanceled: true,
            toggle: !state.toggle

        }
        case ORDER_CANCEL_FAIL: return {
            ...state,
            loading: false,
            orderCanceled: payload

        }

        case USER_ORDER_HISTOPY_REQUEST: return {
            ...state,
            loading: true,

        }
        case USER_ORDER_HISTOPY_SUCCESS: return {
            ...state,
            loading: false,
            orders: payload

        }
        case USER_ORDER_HISTOPY_FAIL: return {
            ...state,
            loading: false,
            orederHisetroyError: payload

        }
        case INITIATE_PAYMENT_REQUEST: return {
            ...state,
            loading: true,

        }
        case INITIATE_PAYMENT_SUCCESS: return {
            ...state,
            loading: false,
            orderId: payload,
            paid: null
        }
        case INITIATE_PAYMENT_FAIL: return {
            ...state,
            loading: false,
            initiatePaymentError: payload

        }
        case PAYMENT_VERIFY_REQUEST: return {
            ...state,
            loading: true,

        }
        case PAYMENT_VERIFY_SUCCESS: return {
            ...state,
            loading: false,
            paid: true,
            orderId: null


        }
        case PAYMENT_VERIFY_FAIL: return {
            ...state,
            loading: false,
            paymentVerifyError: payload

        }

        case PAYMENT_FAILED_REQUEST: return {
            ...state,
            loading: true,

        }
        case PAYMENT_FAILED_SUCCESS: return {
            ...state,
            loading: false,
            pamentFailError: payload,



        }
        case PAYMENT_FAILED_FAIL: return {
            ...state,
            loading: false,
            error: payload

        }


        default: return state

    }
}
export const getOrdersData = state => state.allOrders