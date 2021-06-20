export default interface User {
  "id": number,
  "email": string,
  "first_name": string,
  "last_name": string,
  "created_at": string,
  "updated_at": string,
  "formation_institutes_id": number,
  "formation_courses_id": number,
  "school_id": number,
  "photo": null | string,
  "photo_cover": null | string,
  "formation_institute": {
    "id": number,
    "ies_code": number,
    "name": string,
    "type": string,
  },
  "formation_courses": {
    "id": number,
    "formation_courses_areas_id": number,
    "name": string,
    "formation_courses_levels_id": number,
    "formation_course_area": {
      "id": number,
      "name": string,
    },
    "formation_courses_levels": {
      "id": number,
      "name": string,
    }
  }
}