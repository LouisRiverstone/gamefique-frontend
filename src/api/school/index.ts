import { AxiosPromise } from "axios"
import axios from "../../plugins/axios"

const PATH = "/schools";

export default {
  get(name: string): Promise<AxiosPromise> | null {
    return axios.get(`${PATH}`, { params: { name } });
  },
}