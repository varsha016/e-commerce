
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { adminUserReducer } from "./admin/reducer/adminUserReducer"
import { employeeReducer } from "./admin/reducer/employeeReducer"
import { authReducer } from "./users/reducer/authReducer"
import { cartReducer } from "./users/reducer/cartReducer"
import { orderReducer } from "./users/reducer/orderReducer"
import { productReducer } from "./users/reducer/productReducer"
import { userReducer } from "./users/reducer/userReducer"
const localData = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {}
const adminData = localStorage.getItem("employee")
    ? JSON.parse(localStorage.getItem("employee"))
    : {}

// console.log(localData);
const initialState = {
    auth: localData,
    employee: adminData,
    allCart: {
        cart: localData.userLogin ? localData.userLogin.cart : []
    },


}

const rootReducer = combineReducers(
    {
        allProduct: productReducer,
        auth: authReducer,
        allOrders: orderReducer,
        allCart: cartReducer,
        user: userReducer,
        employee: employeeReducer,
        adminUsers: adminUserReducer
    }
)
const reduxStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)))
export default reduxStore