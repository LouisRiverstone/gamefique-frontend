interface formation_institute {
  id: number,
  ies_code: number,
  name: string,
  type: string,
}
interface formation_courses {
  id: number,
  formation_courses_areas_id: number,
  name: string,
  formation_courses_levels_id: number,
  formation_course_area: formation_course_area
  formation_courses_levels: formation_courses_levels
}

interface formation_course_area {
  id: number,
  name: string,
}

interface formation_courses_levels {
  id: number,
  name: string,
}

interface state {
  id: number,
  acronym: string,
  name: string
}

interface city {
  id: number,
  state_id: number,
  name: string,
  state: state
}

interface school {
  id: number,
  city_id: number,
  name: string,
  school_type_id: number,
  city: city
}


export default interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  created_at: string,
  updated_at: string,
  formation_institutes_id: number,
  formation_courses_id: number,
  school_id: number,
  photo: null | string,
  photo_cover: null | string,
  formation_institute: formation_institute
  formation_courses: formation_courses
  school: school
}