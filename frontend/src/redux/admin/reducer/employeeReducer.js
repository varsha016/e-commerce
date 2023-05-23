import {
    ADMIN_GET_PRODUCT_FAIL,
    ADMIN_GET_PRODUCT_REQUEST,
    ADMIN_GET_PRODUCT_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT_SUCCESS,
    ADMIN_PRODUCT_DELETE_FAIL,
    ADMIN_PRODUCT_DELETE_REQUEST,
    ADMIN_PRODUCT_DELETE_SUCCESS,
    ADMIN_PRODUCT_UPDATE_FAIL,
    ADMIN_PRODUCT_UPDATE_REQUEST,
    ADMIN_PRODUCT_UPDATE_SUCCESS,
    EMPLOYEE_LOGIN_FAIL, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCCESS,
    EMPLOYEE_LOGOUT_SUCCESS,
    EMPLOYEE_PRODUCT_ADD_FAIL, EMPLOYEE_PRODUCT_ADD_REQUEST,
    EMPLOYEE_PRODUCT_ADD_SUCCESS,
    EMPLOYEE_PRODUCT_EDIT_FAIL, EMPLOYEE_PRODUCT_EDIT_REQUEST, EMPLOYEE_PRODUCT_EDIT_SUCCESS,
    EMPLOYEE_REGISTER_FAIL, EMPLOYEE_REGISTER_REQUEST, EMPLOYEE_REGISTER_SUCCESS, GET_STAT_FAIL, GET_STAT_REQUEST, GET_STAT_SUCCESS
} from "../constants/employeeConstant";

export const employeeReducer = (state = { adminGetProduct: [] }, { type, payload }) => {
    switch (type) {
        case EMPLOYEE_REGISTER_REQUEST: return {
            ...state,
            loading: true,

        }
        case EMPLOYEE_REGISTER_SUCCESS: return {
            ...state,
            loading: false,
            employeeRegistered: true

        }
        case EMPLOYEE_REGISTER_FAIL: return {
            ...state,
            loading: false,
            employeeRegisterError: payload

        }
        case EMPLOYEE_LOGIN_REQUEST: return {
            ...state,
            loading: true,

        }
        case EMPLOYEE_LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            employeeLogin: payload

        }
        case EMPLOYEE_LOGIN_FAIL: return {
            ...state,
            loading: false,
            employeeLoginError: payload

        }

        case EMPLOYEE_LOGOUT_SUCCESS: return {
            ...state,
            loading: false,
            employeeLogin: null

        }
        //////////////////////////////////ADMIN////////////////////////////////////////////////////
        case ADMIN_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }
        case ADMIN_LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            adminLogin: payload
        }
        case ADMIN_LOGIN_FAIL: return {
            ...state,
            loading: false,
            adminLoginError: payload
        }
        case ADMIN_LOGOUT_SUCCESS: return null

        case EMPLOYEE_PRODUCT_ADD_REQUEST: return {
            ...state,
            loading: true,

        }
        case EMPLOYEE_PRODUCT_ADD_SUCCESS: return {
            ...state,
            loading: false,
            addProductEmployee: true

        }
        case EMPLOYEE_PRODUCT_ADD_FAIL: return {
            ...state,
            loading: false,
            addProductErrr: payload

        }


        case ADMIN_GET_PRODUCT_REQUEST: return {
            ...state,
            loading: true,

        }
        case ADMIN_GET_PRODUCT_SUCCESS: return {
            ...state,
            loading: false,
            adminGetProduct: payload

        }
        case ADMIN_GET_PRODUCT_FAIL: return {
            ...state,
            loading: false,
            adminGetProductErrr: payload

        }



        case ADMIN_PRODUCT_UPDATE_REQUEST: return {
            ...state,
            loading: true,
        }
        case ADMIN_PRODUCT_UPDATE_SUCCESS: return {
            ...state,
            loading: false,
            updateProducts: payload

        }
        case ADMIN_PRODUCT_UPDATE_FAIL: return {
            ...state,
            loading: false,
            updateProductError: payload
        }


        case ADMIN_PRODUCT_DELETE_REQUEST: return {
            ...state,
            loading: true,
        }
        case ADMIN_PRODUCT_DELETE_SUCCESS: return {
            ...state,
            loading: false,
            deteleProducts: true,


        }
        case ADMIN_PRODUCT_DELETE_FAIL: return {
            ...state,
            loading: false,
            deleteProductError: payload
        }

        case GET_STAT_REQUEST: return {
            ...state,
            loading: true,
        }
        case GET_STAT_SUCCESS: return {
            ...state,
            loading: false,
            stats: payload,


        }
        case GET_STAT_FAIL: return {
            ...state,
            loading: false,
            statError: payload
        }


        default: return state

    }
}
export const employeeData = state => state.employee
