import axios from "../../plugins/axios"
import { AxiosPromise } from "axios";

const PATH = "/programming_languages";

export default {
  list(): Promise<AxiosPromise> {
    return axios.get(`${PATH}`);
  }
}