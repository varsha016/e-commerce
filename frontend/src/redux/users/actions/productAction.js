import api from "../../api"
import {

    PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS,
    PRODUCT_GET_FAIL, PRODUCT_GET_INFINITE_FAIL, PRODUCT_GET_INFINITE_REQUEST, PRODUCT_GET_INFINITE_SUCCESS, PRODUCT_GET_REQUEST, PRODUCT_GET_SUCCESS
} from "../constants/productConstant"


export const getAllProductAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_GET_REQUEST })
        const { data } = await api.get("/products")
        dispatch({ type: PRODUCT_GET_SUCCESS, payload: data.result.data })
    } catch (error) {

        dispatch({ type: PRODUCT_GET_FAIL, payload: error.message })


    }
}
export const getAllInfiniteProductAction = ({limit,currentPage}) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_GET_INFINITE_REQUEST })
        const { data } = await api.get("/products/infinite",{
            params: {
                limit, currentPage
            }
        })
        dispatch({ type: PRODUCT_GET_INFINITE_SUCCESS, payload: data.result.product })
    } catch (error) {

        dispatch({ type: PRODUCT_GET_INFINITE_FAIL, payload: error.message })


    }
}

export const getProductDetailAction = (productId) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        const { data } = await api.get(`/products/details/${productId}`)
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data.result })
    } catch (error) {

        dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error })


    }
}
