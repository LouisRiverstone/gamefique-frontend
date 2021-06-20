import axios from "../../plugins/axios"
import { AxiosPromise } from "axios"

import Register from "../../interfaces/auth/register"
import Login from "../../interfaces/auth/login"


const PATH = `auth`


export default {
  register(data: Register): Promise<AxiosPromise> {
    return axios.post(`${PATH}/register`, data)
  },
  login(data: Login): Promise<AxiosPromise> {
    return axios.post(`${PATH}/login`, data)
  },
  user(): Promise<AxiosPromise> {
    return axios.get(`${PATH}/user`,)
  }
}