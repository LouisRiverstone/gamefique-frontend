import User from "../store/User";

export default interface Comment {
  comment: string
  created_at: string
  id: number
  post_id: number
  updated_at: string
  user_id: number
  user: User
}
