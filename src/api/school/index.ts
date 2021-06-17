import axios from "../../plugins/axios"

const PATH = "/schools";

export default {
  get(name: string) {
    if (name.length > 4) {
      return axios.get(`${PATH}`, { params: { name } });
    }
  },
}