import localstorage_api from "@/utils/local-storage";
import Login from "@/interfaces/auth/Login";
import Register from "@/interfaces/auth/Register";
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
  async update({ commit, dispatch }: any, updateData: any) {
    try {
      const updated = await api.auth.update(updateData);
      dispatch('loadUser');
    } catch (error) {
      throw new Error(error);
    }
  },
  async photo({ commit, dispatch }: any, image: File) {
    try {
      const photo = await api.auth.photo(image);
      await dispatch('loadUser');
    } catch (error) {
      throw new Error(error);
    }
  },
  logout() {
    localstorage_api.remove('token');
    localstorage_api.remove('user');
  }
}
