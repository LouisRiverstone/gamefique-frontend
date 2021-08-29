import * as yup from "yup";

export default yup.object({
  title: yup
    .string()
    .required("Sua publicação precisa ter um título"),
  description: yup
    .string()
    .required("Sua descrição precisa ter uma descrição")
    .min(8, "Sua descrição deve ter no mínimo 8 caractéres"),
  html: yup
    .string()
    .required("Sua postagem precisa ter um texto")
    .min(100, "Sua postagem deve ter no mínimo 100 caractéres"),
  temp_html: yup
    .string()
    .required("Sua postagem precisa ter um texto")
    .min(100, "Sua postagem deve ter no mínimo 100 caractéres"),
  class_plan: yup.object().shape({
    class_plan_objectives: yup
      .array()
      .of(
        yup.object().shape({
          description: yup
            .string()
            .required(
              "Sua postagem precisa ter um objetivo"
            ),
          id: yup.string().notRequired(),
          created_at: yup.string().notRequired(),
          updated_at: yup.string().notRequired(),
        })
      )
      .min(
        1,
        "Precisa ter ao menos um objetivo em seu plano de aula"
      ),
    class_plan_activities: yup
      .array()
      .of(
        yup.object().shape({
          description: yup
            .string()
            .required(
              "Sua postagem precisa ter uma Atividade"
            ),
          id: yup.string().notRequired(),
          created_at: yup.string().notRequired(),
          updated_at: yup.string().notRequired(),
        })
      )
      .min(
        1,
        "Precisa ter ao menos uma atividade em seu plano de aula"
      ),
    class_plan_strategies: yup
      .array()
      .of(
        yup.object().shape({
          description: yup
            .string()
            .required(
              "Sua postagem precisa ter uma Estratégia"
            ),
          id: yup.string().notRequired(),
          created_at: yup.string().notRequired(),
          updated_at: yup.string().notRequired(),
        })
      )
      .min(
        1,
        "Precisa ter ao menos uma estratégia em seu plano de aula"
      ),
    class_plan_resources: yup
      .array()
      .of(
        yup.object().shape({
          description: yup
            .string()
            .required(
              "Sua postagem precisa ter um recurso"
            ),
          id: yup.string().notRequired(),
          created_at: yup.string().notRequired(),
          updated_at: yup.string().notRequired(),
        })
      )
      .min(
        1,
        "Precisa ter ao menos um recurso em seu plano de aula"
      ),
    duration: yup
      .string()
      .required("Sua publicação precisa ter uma duração"),
    tags: yup.array().of(yup.number()).min(
      1,
      "Precisa ter ao menos uma Tag referente ao conteúdo"
    ),
  }),
});