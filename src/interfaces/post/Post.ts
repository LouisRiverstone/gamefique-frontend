import { ClassPlan } from "./ClassPlan"
import Like from "./Like"
import User from "../store/User"
import Comment from "../comment/Comment"
import PostStatus from "./Status"

export default interface Post {
  id: number;
  title: string;
  description: string;
  folder_uuid: string;
  temp_html?: any;
  user_id: number;
  created_at: string;
  updated_at: string;
  photo?: any;
  class_plans_id: number;
  like: Like[];
  snippets: any[];
  class_plan: ClassPlan;
  user: User;
  post_status_id: number;
  post_status: PostStatus
  comments: Array<Comment>;
  tags: Array<Number>;
  html: string;
}
