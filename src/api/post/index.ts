import axios, { url, auth } from "../../plugins/axios"
import { AxiosPromise } from "axios"
import Axios from "axios"
import PostInterface from "@/interfaces/post/Post"
import PostListParams from "@/interfaces/post/PostListParams"

const PATH = `posts`


export default {
  list(params: PostListParams): Promise<AxiosPromise> {
    return axios.get(PATH, { params })
  },
  top(): Promise<AxiosPromise> {
    return axios.get(`${PATH}/top-posts`)
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
  },
  photo(data: { photo: File, post_id: number }) {
    const formData = new FormData();
    formData.append('photo', data.photo);
    formData.append('post_id', data.post_id.toString());

    return Axios.post(`${url}/${PATH}/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': auth()
      }
    })
  }

}