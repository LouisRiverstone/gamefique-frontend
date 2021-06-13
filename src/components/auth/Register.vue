<template>
    <Form
        @submit="onSubmit"
        :validation-schema="schema"
        class="container"
        ref="form"
    >
        <InputField
            name="first_name"
            type="text"
            label="Nome"
            placeholder="Ex. João"
        />
        <InputField
            name="last_name"
            type="text"
            label="Sobrenome"
            placeholder="Ex. de Oliveira Camargo"
        />
        <InputField
            name="email"
            type="email"
            label="E-mail"
            placeholder="Ex. joao.oliveira@email.com"
        />

        <InputField name="password" type="password" label="Senha" />

        <InputField
            name="confirm_password"
            type="password"
            label="Confirmar Senha"
        />

        <InputFieldDataList
            name="formation_institutes_id"
            label="Instituição de Formação"
            placeholder="Ex. Instituto Federal De Ciências e Tecnologias de Brasília"
            :endpoint="api.formation.institute.get"
            fieldName="name"
        />

        <InputFieldDataList
            name="formation_courses_id"
            label="Curso de Formação"
            placeholder="Ex. Licenciatura em Computação"
            :endpoint="api.formation.course.get"
            fieldName="name"
        />

        <div class="row mt-4">
            <div class="d-flex justify-content-evenly">
                <button type="button" class="btn text-primary">Logar</button>
                <button class="btn btn-lg btn-outline-success" type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import { pt } from "yup-locale-pt";
import InputField from "../forms/Input.vue";
import InputFieldDataList from "../forms/Input-DataList.vue";
import api from "../../api";

Yup.setLocale(pt);
export default {
    name: "Register",
    components: {
        InputField,
        InputFieldDataList,
        Form,
    },
    setup() {
        async function onSubmit(values, actions) {
            try {
                const { data } = await api.auth.register(values);
            } catch (error) {
                if (error.response?.data?.errors) {
                    error.response.data.errors.map((e) => {
                        actions.setFieldError(e.field, e.message);
                    });
                }
            }
        }

        const schema = Yup.object().shape({
            first_name: Yup.string().min(3).required(),
            last_name: Yup.string().min(3).required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            confirm_password: Yup.string()
                .required()
                .oneOf([Yup.ref("password")], "Senhas não são iguais"),
        });

        return {
            onSubmit,
            schema,
            api,
        };
    },
};
</script>

<style scoped>
.btn {
    border-radius: 0px !important;
}
</style>
