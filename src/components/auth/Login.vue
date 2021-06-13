<template>
    <Form
        @submit="onSubmit"
        :validation-schema="schema"
        class="container"
        ref="form"
    >
        <InputField
            name="email"
            type="email"
            label="E-mail"
            placeholder="Seu Endereço de Email"
        />
        <InputField
            name="password"
            type="password"
            label="Senha"
            placeholder="Sua Senha"
        />
        <div class="row mt-4">
            <div class="d-flex justify-content-evenly">
                <button type="button" class="btn text-primary">
                    Cadastrar
                </button>
                <button class="btn btn-lg btn-outline-success" type="submit">
                    Entrar
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
import api from "../../api";

Yup.setLocale(pt);
export default {
    name: "Login",
    components: {
        InputField,
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
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        return {
            onSubmit,
            schema,
        };
    },
};
</script>

<style scoped>
.btn {
    border-radius: 0px !important;
}
</style>
