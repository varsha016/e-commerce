const { PRODUCT_GET_REQUEST, PRODUCT_GET_SUCCESS, PRODUCT_GET_FAIL,
    PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_GET_INFINITE_SUCCESS, PRODUCT_GET_INFINITE_FAIL, PRODUCT_GET_INFINITE_REQUEST,
} = require("../constants/productConstant");


export const productReducer = (state = { products: [], singleProduct: {} }, { type, payload }) => {
    switch (type) {


        case PRODUCT_GET_REQUEST: return {
            ...state,
            loading: true,
        }
        case PRODUCT_GET_SUCCESS: return {
            ...state,
            loading: false,
            products: payload

        }
        case PRODUCT_GET_FAIL: return {
            ...state,
            loading: false,
            getProductError: payload
        }

        case PRODUCT_GET_INFINITE_REQUEST:return{
            ...state,
            loading:true
        }
        case PRODUCT_GET_INFINITE_SUCCESS:return{
            ...state,
            loading:false,
            total:payload.total,
            // products.push(...payload)
        }
        case PRODUCT_GET_INFINITE_FAIL:return{
            ...state,
            loading:false

        }


        case PRODUCT_DETAIL_REQUEST: return {
            loading: true,
            ...state,
        }
        case PRODUCT_DETAIL_SUCCESS: return {
            ...state,
            loading: false,
            singleProduct: payload

        }
        case PRODUCT_DETAIL_FAIL: return {
            loading: false,
            ...state,
            detailProductError: payload
        }



        default: return state

    }



}

export const getProducts = state => state.allProduct