import { json } from "react-router-dom"
import api from "../../api"
import { FORGATE_PASSWORD_FAIL, FORGATE_PASSWORD_REQUEST, FORGATE_PASSWORD_SUCCESS, LOGIN_WITH_GOOGLE_FAIL, LOGIN_WITH_GOOGLE_REQUEST, LOGIN_WITH_GOOGLE_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/authConstants"

export const userRegisterAction = userData => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const { data: { result } } = await api.post("/user/add", userData)
        const bt = `Bearer ${result.token}`
        const data = { ...result, token: bt }
        localStorage.setItem("auth", JSON.stringify({ userLogin: data }))
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error })

    }
}

export const userLoginAction = loginData => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data: { result } } = await api.post("/auth/user/login", loginData)
        const bt = `Bearer ${result.token}`
        const data = { ...result, token: bt }
        localStorage.setItem("auth", JSON.stringify({ userLogin: data }))

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    } catch (error) {
        console.log(error);
        dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message || error.message })

    }
}
export const userLoginWithGoogle = loginData => async dispatch => {
    try {
        dispatch({ type: LOGIN_WITH_GOOGLE_REQUEST })
        const { data: { result } } = await api.post("/auth/user/login-with-google", loginData)
        const bt = `Bearer ${result.token}`
        const data = { ...result, token: bt }
        localStorage.setItem("auth", JSON.stringify({ userLogin: data }))

        dispatch({ type: LOGIN_WITH_GOOGLE_SUCCESS, payload: data })

    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_WITH_GOOGLE_FAIL, payload: error.response.data.message || error.message })

    }
}
export const userLogoutAction = () => dispatch => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem("auth")
}
export const forgatePasswordAction = (foundEmail) => async dispatch => {
    try {
        dispatch({ type: FORGATE_PASSWORD_REQUEST })
        const { data } = await api.post("/auth/user/forgate-password", { email: foundEmail })

        dispatch({ type: FORGATE_PASSWORD_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: FORGATE_PASSWORD_FAIL, payload: error.response.data.message || error.message })

    }
}
export const resetPasswordAction = (id, resetPass) => async dispatch => {
    try {
        console.log(id);
        console.log(resetPass);
        dispatch({ type: RESET_PASSWORD_REQUEST })
        const { data } = await api.put(`/auth/user/reset-password/${id}`, { password: resetPass })

        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: RESET_PASSWORD_FAIL, payload: error })

    }
}