<template>
    <section>
        <div class="bg mb-5">
            <div class="row">
                <div class="d-flex justify-content-left mt-5 mb-5 ms-5">
                    <h2 class="text-white">Nova Publicação</h2>
                </div>
            </div>

            <div class="header pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-8">
                            <Input title="Nome da Postagem" name="title" />
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <Input title="Matéria" :disabled="true" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-8">
                            <Input title="Descrição" name="description" />
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="d-flex justify-content-evenly">
                                <Button
                                    type="button"
                                    class="btn-lg btn-info text-white"
                                    >Previa</Button
                                >
                                <Button
                                    class="btn-lg btn-success text-white"
                                    type="submit"
                                    :loading="loading"
                                    >Publicar</Button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-3">
            <div class="container">
                <div class="row">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                aria-current="page"
                                href="#"
                                @click.prevent="tabActive = 'editor'"
                                :class="{ active: tabActive == 'editor' }"
                                >Editor</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                @click.prevent="tabActive = 'snippets'"
                                :class="{ active: tabActive == 'snippets' }"
                                href="#"
                                >Snippets</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                @click.prevent="tabActive = 'tags'"
                                :class="{ active: tabActive == 'tags' }"
                                href="#"
                                >Tags</a
                            >
                        </li>
                    </ul>
                </div>

                <div>
                    <transition name="fade">
                        <div v-show="tabActive == 'editor'" class="row">
                            <PostEditor />
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from "vue";

import PostEditor from "@/components/posts/PostEditor.vue";
import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";

import * as yup from "yup";
import { Form } from "vee-validate";

export default defineComponent({
    components: {
        PostEditor,
        Input,
        Button,
    },
    data() {
        const schema = yup.object({
            title: yup
                .string()
                .required("Sua publicação precisa ter um título"),
            description: yup
                .string()
                .required("Sua descrição precisa ter uma descrição")
                .min(8, "Sua descrição deve ter no mínimo 8 caractéres"),
        });

        return {
            schema,
            loading: false,
            tabActive: "editor",
        };
    },
    methods: {
        async onSubmit(data) {
            console.log(data);
        },
    },
});
</script>

<style scoped>
.bg {
    background-color: #6c6b6a;
}

.header {
    /* background-color: #ccc; */
}
h2 {
    font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>