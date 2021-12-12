export interface ClassPlan {
  id?: number;
  duration: string;
  created_at?: string;
  updated_at?: string;
  activities: ClassPlanDescription[];
  objectives: ClassPlanDescription[];
  resources: ClassPlanDescription[];
  strategies: ClassPlanDescription[];
}

export interface ClassPlanDescription {
  id?: number;
  description: string;
  class_plan_id?: number;
  created_at?: string;
  updated_at?: string;
}