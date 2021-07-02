import { AxiosPromise } from "axios"
import axios from "../../plugins/axios"
import CommentStore from "@/interfaces/comment/CommentStore";

const PATH = "/comment";

export default {
  post: {
    store(comment: CommentStore): Promise<AxiosPromise> {
      return axios.post(`${PATH}`, comment);
    },
    update(id: number | string | null, comment: CommentStore): Promise<AxiosPromise> {
      return axios.put(`${PATH}/${id}`, comment);
    },
    delete(id: number | string | null) {
      return axios.delete(`${PATH}/${id}`);
    }
  },
  comment: {

  }
}