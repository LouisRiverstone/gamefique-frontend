<template>
    <section>
        <Form @submit="onSubmit" :validation-schema="schema" ref="form">
            <div class="bg mb-5 pb-4">
                <div class="d-flex justify-content-left mb-5 ms-5">
                    <h2 class="text-white mt-5">Nova Publicação</h2>
                </div>

                <div class="header pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-4 mb-5">
                                <Photo
                                    :photo="post.photo"
                                    class="photo img-thumbnail"
                                    @click.prevent="clickUpload"
                                />
                                <div
                                    class="spinner-border text-light"
                                    role="status"
                                    v-show="imageUploading"
                                >
                                    <span class="visually-hidden"
                                        >Loading...</span
                                    >
                                </div>
                                <div v-show="false">
                                    <label for="formFileSm" class="form-label"
                                        >Photo Upload</label
                                    >
                                    <input
                                        class="form-control form-control-sm"
                                        type="file"
                                        id="image"
                                        ref="image"
                                        v-on:change="imageUpload()"
                                    />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-8">
                                <div class="row">
                                    <div class="col-12">
                                        <Input
                                            title="Nome da Postagem"
                                            name="title"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-8">
                                        <Input
                                            title="Descrição"
                                            name="description"
                                        />
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <Select
                                            title="Matéria"
                                            name="school_subject_id"
                                            :options="school_subjects"
                                            keyDescription="name"
                                            keyValue="id"
                                        />
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div
                                        class="
                                            col-sm-12 col-md-4 col-offset-md-4
                                        "
                                    >
                                        <div
                                            class="
                                                d-flex
                                                justify-content-evenly
                                            "
                                        >
                                            <Button
                                                class="
                                                    btn-lg btn-info
                                                    text-white
                                                "
                                                type="submit"
                                                @click="status = 'save'"
                                                :loading="loading.save"
                                                >Salvar</Button
                                            >
                                            <Button
                                                class="
                                                    btn-lg btn-success
                                                    text-white
                                                "
                                                type="submit"
                                                @click="status = 'publish'"
                                                :loading="loading.publish"
                                                >Publicar</Button
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                class="nav-link"
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
                                <div class="container">
                                    <div class="row mt-3">
                                        <h4>Tags Referentes</h4>
                                    </div>
                                    <div
                                        class="
                                            d-flex
                                            justify-content-left
                                            mt-5
                                            mb-5
                                            ms-5
                                        "
                                    >
                                        <div class="row justify-content-left">
                                            <div
                                                class="form-check mb-2"
                                                v-for="(tag, i) in tags"
                                                :key="i"
                                            >
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    :value="tag.id"
                                                    v-model="post_tags"
                                                    :id="`tag-${tag.id}`"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    :for="`tag-${tag.id}`"
                                                >
                                                    {{ tag.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
import Select from "@/components/forms/Select.vue";
import Photo from "@/components/utils/Photo.vue";
import ClassPlanEditor from "@/components/posts/ClassPlanEditor.vue";

import * as yup from "yup";
import PostValidation from "@/validations/post";
import api from "@/api";

import PostInterface from "@/interfaces/post/Post";
import {
    ClassPlan as ClassPlanInterface,
    ClassPlanDescription as ClassPlanDescriptionInterface,
} from "@/interfaces/post/ClassPlan";
import User from "@/interfaces/store/User";

export default defineComponent({
    components: {
        Form,
        PostEditor,
        SnippetsEditor,
        ClassPlanEditor,
        Input,
        Button,
        Select,
        Photo,
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
            return this.$route.params.id || null;
        },
        user(): User {
            return this.$store.getters["user"];
        },
        imageRef(): any {
            return this.$refs.image;
        },
        post_tags: {
            get(): Array<unknown> {
                return this.post.tags || [];
            },
            set(tags: Array<number>) {
                this.post.tags = tags;
            },
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
            school_subject_id: yup
                .number()
                .required("Sua descrição precisa ter uma matéria"),
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
                tags: [] as Array<unknown>,
            } as PostInterface,
            school_subjects: [],
            tags: [],
            toast: useToast(),
            loading: {
                save: false,
                publish: false,
            },
            imageUploading: false,
            status: "",
            tabActive: "editor",
        };
    },
    methods: {
        async onSubmit(formData: PostInterface) {
            const override = { tags: this.post.tags };
            formData = { ...this.post, ...formData, ...override };
            formData.html = this.postEditor.editor.getContent();
            formData.temp_html = this.postEditor.editor.getContent();

            let data = await this.save(formData, this.id);

            if (this.status === "publish") {
                if (!this.validatePost(formData)) {
                    return;
                }

                await this.publish(formData, data.id);
            }
        },
        async publish(post: PostInterface, id: number) {
            try {
                this.loading.publish = true;
                const { data } = await api.post.publish(id, post);
                return data;
            } catch (error) {
                console.error(error);
            } finally {
                this.loading.publish = false;
            }
        },
        async save(post: PostInterface, id: number | null) {
            try {
                this.loading.save = true;
                if (id) {
                    const { data } = await api.post.update(id, post);
                    return data;
                } else {
                    const { data } = await api.post.store(post);

                    this.$router.push({
                        name: "PostEditing",
                        params: { id: data.id },
                    });
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.loading.save = false;
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
        postMapper(post: PostInterface): PostInterface {
            if (post.class_plan == null) {
                post.class_plan = {
                    class_plan_objectives: [],
                    class_plan_activities: [],
                    class_plan_strategies: [],
                    class_plan_resources: [],
                    duration: "",
                } as ClassPlanInterface;
            }

            post.tags = post.tags.map((tag: any) => {
                return tag.id;
            });

            console.log(post);

            return post;
        },
        async mount() {
            try {
                this.$emit("loading-show");
                this.school_subjects = (await api.school_subjects.list()).data;
                this.tags = (await api.tags.list()).data;
                if (typeof this.id == "string") {
                    const { data } = await api.post.get(parseInt(this.id));

                    if (data.user_id != this.user.id) {
                        this.$router.go(-1);
                        return;
                    }

                    this.post = this.postMapper(data);
                    this.forms.setValues(data);
                    this.postEditor.editor.setContent(data.html);
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
        clickUpload() {
            if (this.post.id) {
                this.imageRef.click();
            } else {
                this.toast.error(
                    "Você precisa antes salvar a postagem para alterar a imagem"
                );
            }
        },
        async imageUpload() {
            try {
                if (this.imageRef && this.post.id) {
                    this.imageUploading = true;
                    const photo = this.imageRef.files[0] as File;
                    const request = (
                        await api.post.photo({
                            photo,
                            post_id: this.post.id,
                        })
                    ).data;
                    this.post.photo = request.file;
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.imageUploading = false;
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
    background: transparent url("~@/assets/landing-page/pencil-bg.png") 0% 0%
        no-repeat padding-box;
    background-position: center;
    background-color: #000;
    opacity: 1;
}

.photo {
    width: 150px;
    height: auto;
    cursor: pointer;
}

@media screen and (max-width: 767px) {
    .bg {
        background-color: #6c6b6a;
        top: 0px;
        left: 0px;
        min-height: 850px;
        background: transparent url("~@/assets/landing-page/pencil-bg.png") 0%
            0% no-repeat padding-box;
        background-position: center;
        background-color: #000;
        opacity: 1;
    }
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