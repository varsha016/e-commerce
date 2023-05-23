import api from "../../api"
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_SUCCESS } from "../constants/AdminConstant"

export const adminLogin = (adminData) => async (dispatch, getState) => {
    try {
        console.log(adminData);
        dispatch({ type: ADMIN_LOGIN_REQUEST })
        const { data: { result } } = await api.post("auth/employee/login", adminData,)
        const bt = ` ${result.token}`
        const data = { ...result, token: bt }
        localStorage.setItem("admin", JSON.stringify({ adminLogin: data }))
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.message })

    }

}
export const adminLogoutAction = () => async dispatch => {
    localStorage.removeItem("adminLogin")
    dispatch({ type: ADMIN_LOGOUT_SUCCESS })
}