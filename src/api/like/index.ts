import axios from "../../plugins/axios"
import Like from "@/interfaces/post/like"
import { AxiosPromise } from "axios";

const PATH = "/like";

export default {
  store(like: Like): Promise<AxiosPromise> {
    return axios.post(`${PATH}`, like);
  }
}