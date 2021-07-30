<template>
    <section>
        <Form @submit="onSubmit" :validation-schema="schema" ref="form">
            <div class="bg mb-5 pb-4">
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
                                <!-- <Input title="Matéria" :disabled="true" /> -->
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
                                        >Salvar</Button
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
                        <!-- <div class="card">
                        <span>Progresso para Publicação</span>
                        <div class="progress mt-2 mb-2">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                style="width: 25%"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                25%
                            </div>
                        </div>
                    </div> -->
                    </div>
                </div>
            </div>
            <div class="container mt-3">
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
                                class="nav-link disabled"
                                @click.prevent="tabActive = 'snippets'"
                                :class="{ active: tabActive == 'snippets' }"
                                href="#"
                                >Snippets</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                @click.prevent="tabActive = 'classplan'"
                                :class="{ active: tabActive == 'classplan' }"
                                href="#"
                                >Plano de Aula</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link disabled"
                                @click.prevent="tabActive = 'tags'"
                                :class="{ active: tabActive == 'tags' }"
                                href="#"
                                >Tags</a
                            >
                        </li>
                    </ul>
                </div>

                <div class="row bg-edit">
                    <transition name="fade">
                        <nav>
                            <div v-show="tabActive == 'editor'" class="row">
                                <PostEditor ref="post_editor" />
                            </div>
                            <div v-show="tabActive == 'snippets'" class="row">
                                <SnippetsEditor ref="snippets_editor" />
                            </div>
                            <div v-show="tabActive == 'classplan'" class="row">
                                <ClassPlanEditor
                                    ref="class_plan_editor"
                                    :classPlan="post.class_plan"
                                />
                            </div>
                            <div v-show="tabActive == 'tags'" class="row">
                                tags
                                <!-- <ClassPlan /> -->
                            </div>
                        </nav>
                    </transition>
                </div>
            </div>
        </Form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import { Form } from "vee-validate";

import PostEditor from "@/components/posts/PostEditor.vue";
import SnippetsEditor from "@/components/snippets/SnippetsEditor.vue";
import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";
import ClassPlanEditor from "@/components/posts/ClassPlanEditor.vue";

import * as yup from "yup";
import PostValidation from "@/validations/post";
import api from "@/api";

import PostInterface from "@/interfaces/post/Post";
import {
    ClassPlan as ClassPlanInterface,
    ClassPlanDescription as ClassPlanDescriptionInterface,
} from "@/interfaces/post/ClassPlan";

export default defineComponent({
    components: {
        Form,
        PostEditor,
        SnippetsEditor,
        ClassPlanEditor,
        Input,
        Button,
    },
    computed: {
        forms(): any {
            return this.$refs.form;
        },
        postEditor(): any {
            return this.$refs.post_editor;
        },
        classPlanEditor(): any {
            return this.$refs.class_plan_editor;
        },
        id(): any {
            return this.$route.params.id;
        },
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
            post: {
                class_plan: {
                    class_plan_objectives: [],
                    class_plan_activities: [],
                    class_plan_strategies: [],
                    class_plan_resources: [],
                    duration: "",
                } as ClassPlanInterface,
                temp_html: "",
                html: "",
            } as PostInterface,
            toast: useToast(),
            loading: false,
            tabActive: "editor",
        };
    },
    methods: {
        async onSubmit(data: PostInterface) {
            data = { ...this.post, ...data };
            data.html = this.postEditor.editor.getContent();
            data.temp_html = this.postEditor.editor.getContent();

            if (!this.validatePost(data)) {
                return;
            }

            if (this.id) {
                await this.update(parseInt(this.id), data);
            }
        },
        async update(id: number, post: PostInterface) {
            try {
                this.loading = true;
                const { data } = await api.post.update(id, post);
            } catch (error) {
            } finally {
                this.loading = false;
            }
        },
        validatePost(post: PostInterface): boolean {
            const schema: any = PostValidation;

            try {
                schema.validateSync(post);
                return true;
            } catch (error) {
                error.errors.forEach((err: string) => {
                    this.toast.error(err);
                });
                return false;
            }
        },
        async mount() {
            if (typeof this.id == "string") {
                try {
                    this.$emit("loading-show");
                    const { data } = await api.post.get(parseInt(this.id));
                    this.post = data as PostInterface;
                    this.forms.setValues(data);
                    this.postEditor.editor.setContent(data.html);
                } catch (error) {
                    console.error(error);
                } finally {
                    this.$emit("loading-hide");
                }
            }
        },
    },
    mounted() {
        this.mount();
    },
});
</script>

<style scoped>
.bg {
    background-color: #6c6b6a;
    top: 0px;
    left: 0px;
    max-height: 500px;
    min-height: 400px;
    background: transparent url("~@/assets/landing-page/background.png") 0% 0%
        no-repeat padding-box;
    opacity: 1;
}

.header {
    /* background-color: #ccc; */
}
h2 {
    font-weight: 700;
}

.bg-edit {
    background-color: #fff;
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