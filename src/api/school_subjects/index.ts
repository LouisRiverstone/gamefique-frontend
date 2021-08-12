import axios from "../../plugins/axios"
import { AxiosPromise } from "axios";

const PATH = "/school_subjects";

export default {
  list(): Promise<AxiosPromise> {
    return axios.get(`${PATH}`);
  }
}