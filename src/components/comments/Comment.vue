<template>
    <div class="container card-post pt-3 mb-5" v-if="logged">
        <Form @submit="onSubmit" :validation-schema="schema" class="container">
            <div class="row">
                <div class="container">
                    <Input
                        name="comment"
                        type="text"
                        placeholder="Comentário"
                        title="Comentário"
                    />
                    <small class="error">{{ error }}</small>
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    <Button class="me-1 mb-4" type="submit" :loading="loading"
                        >Comentar</Button
                    >
                </div>
            </div>
        </Form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form } from "vee-validate";

import api from "@/api";
import * as yup from "yup";

import Input from "@/components/forms/Input.vue";
import Button from "@/components/forms/Button.vue";

import CommentStore from "@/interfaces/comment/CommentStore";

export default defineComponent({
    components: {
        Input,
        Button,
        Form,
    },
    props: {
        post_id: {
            type: String,
        },
        editing: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        user(): any {
            return this.$store.getters["user"];
        },
        logged(): any {
            return this.user?.email ? true : false;
        },
    },
    data() {
        const schema = yup.object({
            comment: yup
                .string()
                .required("Você precisa escrever um comentário")
                .min(5, "Seu comentário deve ter no mínimo 5 caractéres"),
        });

        return {
            schema,
            comment: { id: null },
            error: "",
            loading: false,
        };
    },
    methods: {
        setComment(comment: any) {
            this.comment = comment;
            this.schema.cast({ comment: comment.comment });
        },
        async onSubmit(formData: CommentStore) {
            try {
                this.loading = true;
                this.error = "";

                if (!this.editing) {
                    const { data } = await api.comment.post.store({
                        post_id: this.post_id,
                        comment: formData.comment,
                    });

                    this.$emit("pushComment", { ...data, user: this.user });
                } else {
                    const { data } = await api.comment.post.update(
                        this.comment.id,
                        {
                            comment: formData.comment,
                        }
                    );

                    this.$emit("updateComment", { ...data, user: this.user });
                    this.$emit("closeEditor");
                }
            } catch (error) {
                this.error = error.response?.data;
            } finally {
                this.loading = false;
            }
        },
    },
});
</script>

<style scoped>
.error {
    font-weight: 700;
    font-size: 12px;
    color: #e51400;
}
</style>
