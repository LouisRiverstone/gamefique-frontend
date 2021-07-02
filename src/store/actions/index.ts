import localstorage_api from "@/utils/local-storage";
import Login from "@/interfaces/auth/login";
import Register from "@/interfaces/auth/register";
import api from "@/api";

export default {
  async loadUser({ commit }: any): Promise<Error | void> {
    try {
      const { data } = await api.auth.user();
      localstorage_api.set('user', data);
      commit('setUser', data)
    } catch (error) {
      throw new Error(error);
    }
  },
  async register({ commit, dispatch }: any, registerData: Register) {
    try {
      const { data } = await api.auth.register(registerData);

      commit('setToken', data);
      localstorage_api.set('token', data)

      dispatch('loadUser');
    } catch (error) {
      console.error(error)
    }
  },
  async login({ commit, dispatch }: any, loginData: Login) {
    try {
      const { data } = await api.auth.login(loginData);

      commit('setToken', data);
      localstorage_api.set('token', data)

      dispatch('loadUser');
    } catch (error) {
      throw new Error(error);
    }
  },
  logout() {
    localstorage_api.remove('token');
    localstorage_api.remove('user');
  }
}
