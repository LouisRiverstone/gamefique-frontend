import axios, { url, auth } from "../../plugins/axios"
import Axios from "axios"
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
    return axios.get(`${PATH}/user`)
  },
  posts(): Promise<AxiosPromise> {
    return axios.get(`${PATH}/posts`)
  },
  update(data: any): Promise<AxiosPromise> | null {
    return axios.put(`${PATH}/update`, data);
  },
  photo(photo: File) {
    const formData = new FormData();
    formData.append('photo', photo);

    return Axios.post(`${url}/${PATH}/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': auth()
      }
    })
  }
}
