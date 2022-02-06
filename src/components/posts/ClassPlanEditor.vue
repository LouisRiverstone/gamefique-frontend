<template>
  <section>
    <div class="row mt-3">
      <h4>Plano de Aula</h4>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12">
        <div class="row pb-4">
          <h5 class="mt-4 mb-4">Duração</h5>
          <div><input v-model="class_plan.duration" class="input-form" /></div>
        </div>
      </div>
    </div>
    <div class="row mt-2 mx-5">
      <div class="col-sm-12 col-md-12">
        <!-- Objetivos -->
        <div class="row mb-3">
          <div class="container">
            <h5 class="mt-4">Objetivos</h5>
            <div class="mt-4">
              <ul>
                <li
                  v-for="(objective, i) in class_plan.objectives"
                  :key="i"
                  class="mt-2"
                >
                  <div class="row">
                    <span class="col-10"> {{ objective.description }}</span>
                    <span class="col-2">
                      <div class="d-flex justify-content-evenly">
                        <!-- <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-pencil"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                                        />
                                                    </svg>
                                                </div> -->
                        <div
                          @click="remove(i, class_plan.objectives)"
                          class="remove"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-circle"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <Form
              class="row mt-3"
              @submit="insertObjective"
              :validation-schema="schema"
            >
              <div class="col-9">
                <Input
                  name="description"
                  placeholder="Novo Objetivo"
                  title="Novo Objetivo"
                />
              </div>
              <div class="col-3">
                <Button type="submit" class="btn btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <!-- Atividades -->
        <div class="row mb-3">
          <div class="container">
            <h5 class="mt-4">Atividades</h5>
            <div class="mt-4">
              <ul>
                <li
                  v-for="(activity, i) in class_plan.activities"
                  :key="i"
                  class="mt-2"
                >
                  <div class="row">
                    <span class="col-10"> {{ activity.description }}</span>
                    <span class="col-2">
                      <div class="d-flex justify-content-evenly">
                        <!-- <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-pencil"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                                        />
                                                    </svg>
                                                </div> -->
                        <div
                          @click="remove(i, class_plan.activities)"
                          class="remove"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-circle"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <Form
              class="row mt-3"
              @submit="insertActivity"
              :validation-schema="schema"
            >
              <div class="col-9">
                <Input
                  name="description"
                  placeholder="Nova Atividade"
                  title="Nova Atividade"
                />
              </div>
              <div class="col-3">
                <Button type="submit" class="btn btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <!-- Estratégias -->
        <div class="row mb-3">
          <div class="container">
            <h5 class="mt-4">Estratégias</h5>
            <div class="mt-4">
              <ul>
                <li
                  v-for="(strategy, i) in class_plan.strategies"
                  :key="i"
                  class="mt-2"
                >
                  <div class="row">
                    <span class="col-10"> {{ strategy.description }}</span>
                    <span class="col-2">
                      <div class="d-flex justify-content-evenly">
                        <!-- <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-pencil"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                                        />
                                                    </svg>
                                                </div> -->
                        <div
                          @click="remove(i, class_plan.class_plan_strategies)"
                          class="remove"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-circle"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <Form
              class="row mt-3"
              @submit="insertStrategy"
              :validation-schema="schema"
            >
              <div class="col-9">
                <Input
                  name="description"
                  placeholder="Nova Estratégia"
                  title="Nova Estratégia"
                />
              </div>
              <div class="col-3">
                <Button type="submit" class="btn btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <!-- Recursos -->
        <div class="row mb-3">
          <div class="container">
            <h5 class="mt-4">Recursos</h5>
            <div class="mt-4">
              <ul>
                <li
                  v-for="(resource, i) in class_plan.resources"
                  :key="i"
                  class="mt-2"
                >
                  <div class="row">
                    <span class="col-10"> {{ resource.description }}</span>
                    <span class="col-2">
                      <div class="d-flex justify-content-evenly">
                        <!-- <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-pencil"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                                        />
                                                    </svg>
                                                </div> -->
                        <div
                          @click="remove(i, class_plan.class_plan_resources)"
                          class="remove"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-circle"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <Form
              class="row mt-3"
              @submit="insertResource"
              :validation-schema="schema"
            >
              <div class="col-9">
                <Input
                  name="description"
                  placeholder="Novo Recurso"
                  v-model="objective"
                  title="Novo Recurso"
                />
              </div>
              <div class="col-3">
                <Button type="submit" class="btn btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";

import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";

import {
  ClassPlan as ClassPlanInterface,
  ClassPlanDescription as ClassPlanDescriptionInterface,
} from "@/interfaces/post/ClassPlan";

export default defineComponent({
  components: {
    Input,
    Button,
    Form,
  },
  props: {
    classPlan: {
      required: true,
    },
  },
  data() {
    const schema = yup.object({
      description: yup
        .string()
        .required("Você precisa informar uma descrição")
        .min(8, "Sua descrição deve ter no mínimo 8 caractéres"),
    });

    return {
      schema,
    };
  },
  computed: {
    class_plan(): any {
      return this.classPlan;
    },
  },
  methods: {
    insertObjective(data: ClassPlanDescriptionInterface) {
      this.class_plan.objectives.push(data);
    },
    insertActivity(data: ClassPlanDescriptionInterface) {
      this.class_plan.activities.push(data);
    },
    insertStrategy(data: ClassPlanDescriptionInterface) {
      this.class_plan.strategies.push(data);
    },
    insertResource(data: ClassPlanDescriptionInterface) {
      this.class_plan.resources.push(data);
    },
    remove(index: number, array: Array<ClassPlanDescriptionInterface>) {
      array = array.splice(index, 1);
    },
  },
});
</script>

<style style>
.remove {
  color: red;
  cursor: pointer;
}
.input-form {
  background-color: #e7e7e7;
  border: solid 2px transparent;
  font-weight: 700;
  height: calc(3.5rem + 2px);
  padding: 1rem 0.75rem;
}
</style>