import axios from "../../plugins/axios"
import { AxiosPromise } from "axios";

const PATH = "/tags";

export default {
  list(): Promise<AxiosPromise> {
    return axios.get(`${PATH}`);
  }
}