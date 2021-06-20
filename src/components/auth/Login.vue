<template>
    <div class="register">
        <div class="row h-100">
            <div class="col-sm-12 align-self-center">
                <div class="row mb-3">
                    <div class="mt-5 mb-5">
                        <h2>Login</h2>
                    </div>
                    <div class="mb-3">
                        <Form
                            @submit="onSubmit"
                            :validation-schema="schema"
                            class="container"
                        >
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

                            <Button type="submit">Logar</Button>
                        </Form>
                    </div>
                    <small class="error">{{ error }}</small>
                </div>
            </div>
        </div>
    </div>
</template>




<script lang="ts">
import { defineComponent } from "vue";
import { Form } from "vee-validate";
import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";

import * as yup from "yup";

import Login from "@/interfaces/auth/login";

export default defineComponent({
    components: {
        Button,
        Form,
        Input,
    },
    data() {
        const schema = yup.object({
            email: yup
                .string()
                .required("Você precisa informar um email")
                .email("Você precisa informar um email válido"),
            password: yup
                .string()
                .required("Você precisa informar uma senha")
                .min(8, "Sua senha deve ter no mínimo 8 caractéres"),
        });

        return {
            schema,
            error: "",
        };
    },
    methods: {
        async onSubmit(data: Login, event: any) {
            try {
                this.error = "";
                await this.$store.dispatch("login", data);
                this.$router.push({ name: "PostList" });
            } catch (error) {
                this.error = error.response?.data;
            }
        },
    },
});
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
.error {
    font-weight: 700;
    font-size: 12px;
    color: #e51400;
}
</style>
