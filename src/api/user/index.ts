import { AxiosPromise } from "axios"
import axios from "../../plugins/axios"

const PATH = "/user";

export default {
  show(id: string | string[] | number): Promise<AxiosPromise> {
    return axios.get(`${PATH}/${id}`);
  },
}