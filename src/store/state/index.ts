import State from '@/interfaces/store/State';
import User from '@/interfaces/store/User';
import localStorage_api from '@/utils/local-storage';

export default {
  user: {
    email: localStorage_api.getValue('user', 'id'),
    first_name: localStorage_api.getValue('user', 'first_name'),
    formation_courses: localStorage_api.getValue('user', 'formation_courses'),
    formation_courses_id: localStorage_api.getValue('user', 'formation_courses_id'),
    formation_institute: localStorage_api.getValue('user', 'formation_institute'),
    formation_institutes_id: localStorage_api.getValue('user', 'formation_institutes_id'),
    id: localStorage_api.getValue('user', 'id'),
    last_name: localStorage_api.getValue('user', 'last_name'),
    photo: localStorage_api.getValue('user', 'photo'),
    photo_cover: localStorage_api.getValue('user', 'photo_cover'),
    school_id: localStorage_api.getValue('user', 'school_id'),
  } as User,
  token: {}
} as State