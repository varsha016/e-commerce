import axios from "axios"
export const URL = "http://localhost:5000/api"
// export const URL = "https://railway-mern-production-8dd2.up.railway.app/api"
const api = axios.create({
    baseURL: URL
})
export default api