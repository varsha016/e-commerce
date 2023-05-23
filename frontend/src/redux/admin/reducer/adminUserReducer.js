import { GET_ALL_ADMIN_USERS_FAIL, GET_ALL_ADMIN_USERS_REQUEST, GET_ALL_ADMIN_USERS_SUCCESS, GET_ALL_USERS_SUCCESS, UPDATE_USER_STATUS_FAIL, UPDATE_USER_STATUS_REQUEST, UPDATE_USER_STATUS_SUCCESS } from "../constants/userConstant"

export const adminUserReducer = (state = { users: [] }, { type, payload }) => {
    switch (type) {
        case GET_ALL_ADMIN_USERS_REQUEST: return {
            ...state,
            loading: true

        }
        case GET_ALL_ADMIN_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: payload

        }
        case GET_ALL_ADMIN_USERS_FAIL: return {
            ...state,
            loading: false,
            getAdminUserError: payload

        }
        case UPDATE_USER_STATUS_REQUEST: return {
            ...state,
            loading: true

        }
        case UPDATE_USER_STATUS_SUCCESS: return {
            ...state,
            loading: false,
            statusUpdate: true,
            toggle: !state.toggle

        }
        case UPDATE_USER_STATUS_FAIL: return {
            ...state,
            loading: false,
            AdminUserStatusError: payload

        }




        default: return state

    }
}
export const AdminUsers = state => state.adminUsers