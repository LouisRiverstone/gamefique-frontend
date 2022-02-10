<template>
  <div>
    <Modal title="Editar Perfil">
      <template v-slot:body>
        <div class="container">
          <Form @submit="onSubmit" :validation-schema="schema">
            <Input name="first_name" placeholder="Nome" title="Nome" />
            <Input name="last_name" placeholder="Sobrenome" title="Sobrenome" />
            <!-- <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        title="Email"
                    /> -->
            <DataList
              name="formation_courses_id"
              title="Curso de Formação"
              placeholder="Curso de Formação"
              :endpoint="api.formation.course.get"
              fieldName="name"
            />
            <DataList
              name="formation_institutes_id"
              title="Instituição de Formação"
              placeholder="Instituição de Formação"
              :endpoint="api.formation.institute.get"
              fieldName="name"
            />

            <DataList
              name="school_id"
              title="Escola de Atuação"
              placeholder="Escola de Atuação"
              :endpoint="api.school.get"
              fieldName="name"
            />

            <Button type="submit">Salvar</Button>
          </Form>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Modal from "@/components/utils/Modal.vue";
import { Form } from "vee-validate";
import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";
import DataList from "@/components/forms/DataList.vue";
import * as yup from "yup";
import api from "@/api";

export default defineComponent({
  components: {
    Modal,
    Form,
    Input,
    Button,
    DataList,
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  },
  data() {
    const schema = yup.object({
      first_name: yup
        .string()
        .required("Você precisa informar seu primeiro nome"),
      last_name: yup.string().required("Você precisa informar seu sobrenome"),
      // email: yup
      //     .string()
      //     .required("Você precisa informar um email")
      //     .email("Você precisa informar um email válido"),
      formation_courses_id: yup
        .number()
        .required("Você precisa informar seu curso de Formação"),
      formation_institutes_id: yup
        .number()
        .required("Você precisa informar sua Instituição de Formação"),
      school_id: yup
        .number()
        .required("Você precisa informar sua Escola de Atuação"),
    });

    return { schema, api };
  },
  mounted() {
    this.schema.cast({
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      formation_courses_id: this.user.formation_courses_id,
      formation_institutes_id: this.user.formation_institutes_id,
      school_id: this.user.school_id,
    });
  },
  methods: {
    async onSubmit(values) {
      try {
        this.$emit("loading-show");
        await this.$store.dispatch("update", values);
        this.$emit("loading-hide");
        this.$router.go(0);
      } catch (error) {
        console.error(error);
      } finally {
        this.$emit("loading-hide");
      }
    },
  },
});
</script>

<style scoped>
</style>