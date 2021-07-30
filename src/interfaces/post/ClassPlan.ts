export interface ClassPlan {
  id?: number;
  duration: string;
  created_at?: string;
  updated_at?: string;
  class_plan_activities: ClassPlanDescription[];
  class_plan_objectives: ClassPlanDescription[];
  class_plan_resources: ClassPlanDescription[];
  class_plan_strategies: ClassPlanDescription[];
}

export interface ClassPlanDescription {
  id?: number;
  description: string;
  class_plan_id?: number;
  created_at?: string;
  updated_at?: string;
}