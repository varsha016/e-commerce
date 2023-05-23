import api from "../../api"
import {
    ADMIN_GET_PRODUCT_FAIL, ADMIN_GET_PRODUCT_REQUEST, ADMIN_GET_PRODUCT_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT_SUCCESS,
    ADMIN_PRODUCT_DELETE_FAIL, ADMIN_PRODUCT_DELETE_REQUEST, ADMIN_PRODUCT_DELETE_SUCCESS,
    ADMIN_PRODUCT_UPDATE_FAIL, ADMIN_PRODUCT_UPDATE_REQUEST, ADMIN_PRODUCT_UPDATE_SUCCESS,
    EMPLOYEE_LOGIN_FAIL, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCCESS,
    EMPLOYEE_LOGOUT_FAIL, EMPLOYEE_LOGOUT_REQUEST, EMPLOYEE_LOGOUT_SUCCESS, EMPLOYEE_PRODUCT_ADD_FAIL, EMPLOYEE_PRODUCT_ADD_REQUEST, EMPLOYEE_PRODUCT_ADD_SUCCESS, EMPLOYEE_PRODUCT_EDIT_FAIL, EMPLOYEE_PRODUCT_EDIT_REQUEST, EMPLOYEE_PRODUCT_EDIT_SUCCESS, EMPLOYEE_REGISTER_FAIL, EMPLOYEE_REGISTER_REQUEST, EMPLOYEE_REGISTER_SUCCESS, GET_STAT_FAIL, GET_STAT_REQUEST, GET_STAT_SUCCESS
} from "../constants/employeeConstant"

export const employeeRegisterAction = (employeeData) => async dispatch => {
    try {
        dispatch({ type: EMPLOYEE_REGISTER_REQUEST })
        const { data } = await api.post(`/admin/employee/register`, employeeData)
        dispatch({ type: EMPLOYEE_REGISTER_SUCCESS, })
    } catch (error) {
        dispatch({ type: EMPLOYEE_REGISTER_FAIL, payload: error.message })

    }
}
export const employeeLoginAction = employeeLoginData => async dispatch => {
    try {
        dispatch({ type: EMPLOYEE_LOGIN_REQUEST })
        const { data } = await api.post("/auth/employee/login", employeeLoginData)
        dispatch({ type: EMPLOYEE_LOGIN_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: EMPLOYEE_LOGIN_FAIL, payload: error.message })

    }
}
// export const employeeLogoutAction = () => async dispatch => {
//     try {
//         const { data } = await api.post("/auth/employee/logout",)
//         dispatch({ type: EMPLOYEE_LOGOUT_SUCCESS, })
//     } catch (error) {
//         dispatch({ type: EMPLOYEE_LOGOUT_FAIL, payload: error.message })

//     }
// }
//////////////////////////////////////ADMIN////////////////////////////////////////////////////////////////////
export const adminLogin = (adminData) => async (dispatch, getState) => {
    try {
        // console.log(adminData);
        dispatch({ type: ADMIN_LOGIN_REQUEST })
        const { data: { result } } = await api.post("auth/employee/login", adminData,)
        const bt = ` ${result.token}`
        const data = { ...result, token: bt }
        localStorage.setItem("employee", JSON.stringify({ adminLogin: data }))
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.message })

    }

}
export const adminLogoutAction = () => async dispatch => {
    localStorage.removeItem("adminLogin")
    dispatch({ type: ADMIN_LOGOUT_SUCCESS })
}

/////////////////////admin Stat////////////////////////////
export const employeeStatAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_STAT_REQUEST })
        const { data } = await api.get("/employee/stat", {

            headers: {
                authorization: getState().employee.adminLogin.token
            }

        })
        // console.log(data.result);
        dispatch({ type: GET_STAT_SUCCESS, payload: data.result })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_STAT_FAIL, payload: error.message })


    }
}
/////////////////////////////////////////////////
export const AdminAddProductAction = (productData) => async (dispatch, getState) => {
    try {
        console.log(productData);
        dispatch({ type: EMPLOYEE_PRODUCT_ADD_REQUEST })
        const { data } = await api.post("/products/add/product", productData, {

            headers: {
                authorization: getState().employee.adminLogin.token
            }

        })
        // console.log(data.result);
        dispatch({ type: EMPLOYEE_PRODUCT_ADD_SUCCESS, })
    } catch (error) {
        console.log(error);
        dispatch({ type: EMPLOYEE_PRODUCT_ADD_FAIL, payload: error.message })


    }
}




export const updateAllProductAction = (id, edit) => async (dispatch, getState) => {
    try {
        console.log(id);
        dispatch({ type: ADMIN_PRODUCT_UPDATE_REQUEST })
        const { data } = await api.put(`/products/update-product/${id}`, edit, {
            headers: {
                authorization: getState().employee.adminLogin.token
            }
        })
        dispatch({ type: ADMIN_PRODUCT_UPDATE_SUCCESS, payload: data.result })
    } catch (error) {

        dispatch({ type: ADMIN_PRODUCT_UPDATE_FAIL, payload: error.message })


    }
}

export const getAdminProductAction = () => async (dispatch, getState) => {
    try {

        dispatch({ type: ADMIN_GET_PRODUCT_REQUEST })
        const { data } = await api.get(`/products`, {
            headers: {
                authorization: getState().employee.adminLogin.token
            }
        })
        dispatch({ type: ADMIN_GET_PRODUCT_SUCCESS, payload: data.result.data })
    } catch (error) {

        dispatch({ type: ADMIN_GET_PRODUCT_FAIL, payload: error.message })


    }
}

export const deleteAdminProductAction = (product) => async (dispatch, getState) => {
    try {
        console.log(product, "hellooooooooo");
        dispatch({ type: ADMIN_PRODUCT_DELETE_REQUEST })
        const { data } = await api.delete(`/products/delete/${product._id}`, {
            headers: {
                authorization: getState().employee.adminLogin.token
            }
        })
        dispatch({ type: ADMIN_PRODUCT_DELETE_SUCCESS, })
    } catch (error) {

        dispatch({ type: ADMIN_PRODUCT_DELETE_FAIL, payload: error.message })


    }
}