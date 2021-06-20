import State from "@/interfaces/store/State"
import Token from "@/interfaces/store/Token"
import User from "@/interfaces/store/User"

export default {
  setToken(state: State, token: Token): void {
    state.token = token
  },
  setUser(state: State, user: User): void {
    state.user = user
  }
}