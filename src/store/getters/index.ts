import State from "@/interfaces/store/State"
import Token from "@/interfaces/store/Token"
import User from "@/interfaces/store/User"

export default {
  user: (state: State): User => state.user,
  token: (state: State): Token => state.token,
}