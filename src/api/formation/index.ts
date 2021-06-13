import axios from "../../middleware/axios";

const PATH = "/formation";

export default {
  course: {
    get(name: string) {
      return axios.get(`${PATH}/course`, { params: { name } });
    },
  },
  institute: {
    get(name: string) {
      return axios.get(`${PATH}/institute`, { params: { name } });
    },
  }
};
