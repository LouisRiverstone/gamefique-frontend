import axios from "../../middleware/axios";

const PATH = "/auth";

export default {
  register(data: Register) {
    return axios.post(`${PATH}/register`, data);
  },
};
