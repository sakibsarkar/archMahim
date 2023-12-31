import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: "https://assignment-12-server-five-rosy.vercel.app/api"
})


const UseAxios = () => {
    const navigate = useNavigate()

    instance.interceptors.response.use((res) => {
        return res
    },

        async (err) => {
            const status = err?.response?.status
            if (status === 401 || status === 403) {
                // call the logout api to clear token
                navigate("/login")
            }
            return Promise.reject(err)
        }






    )
    return instance
};

export default UseAxios;