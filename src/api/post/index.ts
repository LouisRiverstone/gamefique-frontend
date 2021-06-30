import axios from "../../plugins/axios"
import { AxiosPromise } from "axios"

const PATH = `posts`

export default {
  list(page: number): Promise<AxiosPromise> {
    return axios.get(PATH, { params: { page } })
  },
  get(id: number): Promise<AxiosPromise> {
    return axios.get(`${PATH}/${id}`);
  }
}