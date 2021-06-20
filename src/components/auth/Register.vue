<template>
    <div class="register">
        <div class="row h-100">
            <div class="col-sm-12 align-self-center">
                <div class="row mb-3">
                    <div class="mt-5 mb-5">
                        <h2>Registro</h2>
                    </div>
                    <div>
                        <Form
                            @submit="onSubmit"
                            :validation-schema="schema"
                            class="container"
                        >
                            <Input
                                name="first_name"
                                placeholder="Nome"
                                title="Nome"
                            />
                            <Input
                                name="last_name"
                                placeholder="Sobrenome"
                                title="Sobrenome"
                            />
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                title="Email"
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder="Senha"
                                title="Senha"
                            />
                            <Input
                                name="password_confirm"
                                type="password"
                                placeholder="Confirmar Senha"
                                title="Confirmar Senha"
                            />
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

                            <Button type="submit">Registrar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Form } from "vee-validate";
import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";
import DataList from "@/components/forms/DataList.vue";
import * as yup from "yup";

import api from "@/api";
import { AnyObject } from "yup/lib/types";

export default {
    components: {
        Button,
        Form,
        Input,
        DataList,
    },
    data() {
        const schema = yup.object({
            first_name: yup
                .string()
                .required("Você precisa informar seu primeiro nome"),
            last_name: yup
                .string()
                .required("Você precisa informar seu sobrenome"),
            email: yup
                .string()
                .required("Você precisa informar um email")
                .email("Você precisa informar um email válido"),
            password: yup
                .string()
                .required("Você precisa informar uma senha")
                .min(8, "Sua senha deve ter no mínimo 8 caractéres"),
            password_confirm: yup
                .string()
                .oneOf(
                    [yup.ref("password"), null],
                    "As Senhas Estão Diferentes"
                ),
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

        return {
            schema,
            api,
        };
    },
    methods: {
        onSubmit(values: AnyObject) {
            ///
        },
    },
};
</script>

<style scoped>
h2 {
    font-weight: 700;
}
.register {
    height: 100vh;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #fff;
}
</style>
