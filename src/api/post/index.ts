import axios from "../../plugins/axios"
import { AxiosPromise } from "axios"
import PostInterface from "@/interfaces/post/Post"

const PATH = `posts`

export default {
  list(page: number): Promise<AxiosPromise> {
    return axios.get(PATH, { params: { page } })
  },
  get(id: number): Promise<AxiosPromise> {
    return axios.get(`${PATH}/${id}`);
  },
  update(id: number, data: PostInterface) {
    return axios.put(`${PATH}/${id}`, data)
  },
  store(data: PostInterface) {
    return axios.post(`${PATH}`, data)
  },
  publish(id: number, data: PostInterface) {
    return axios.post(`${PATH}/publish/${id}`, data)
  }

}