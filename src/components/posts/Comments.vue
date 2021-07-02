<template>
    <section>
        <Comment :post_id="$route.params.id" @pushComment="pushComment" />
        <div v-for="(comment, i) in comments" :key="i">
            <div class="container card-post pt-3 mb-5">
                <div class="row mb-3">
                    <div class="d-flex">
                        <div class="col-10">
                            <div class="row">
                                <div class="col-2">
                                    <img
                                        src="https://picsum.photos/500/500"
                                        class="rounded microphoto"
                                    />
                                </div>
                                <div class="col-6">
                                    <div class="row name-micro">
                                        {{ comment.user.first_name }}
                                    </div>
                                    <div class="row subs-micro">
                                        {{
                                            comment.user.formation_courses.name
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="row">
                                <div class="d-flex justify-content-end">
                                    <a
                                        v-if="user.id === comment.user.id"
                                        href="#"
                                        @click.prevent="setEdit(comment)"
                                        class="me-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-pencil"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                            />
                                        </svg>
                                    </a>

                                    <a
                                        v-if="user.id === comment.user.id"
                                        href="#"
                                        @click.prevent="deleteComment(comment)"
                                        class="me-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
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
                                    </a>

                                    <!-- <a
                                        href="#"
                                        @click.prevent="
                                            comment.editing != comment.editing
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-reply"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"
                                            />
                                        </svg>
                                    </a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3 mb-3">
                    <div class="description"></div>
                </div>
                <div class="container mt-2 mb-2">
                    <div class="container text-start">
                        <div v-show="!comment.editing">
                            <p>
                                {{ comment.comment }}
                            </p>
                        </div>
                        <div v-show="comment.editing">
                            <Comment
                                :ref="`${comment.id}_editor`"
                                @updateComment="updateComment"
                                :editing="true"
                                @closeEditor="
                                    () => {
                                        comment.editing = false;
                                    }
                                "
                            />
                        </div>
                    </div>
                </div>

                <div class="row pe-5">
                    <div class="d-flex justify-content-end">
                        <p class="subs-micro">
                            {{
                                getDate(comment.created_at, comment.updated_at)
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div class="container" v-if="comment.response">
                    <Comment />
                </div>
            </transition>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import api from "@/api";
import moment from "moment";
import Comment from "@/components/comments/Comment.vue";
import CommentInterface from "@/interfaces/comment/Comment";
import User from "@/interfaces/store/User";

export default defineComponent({
    props: {
        comments: {
            type: Array,
            required: true,
        },
    },
    components: {
        Comment,
    },
    computed: {
        user(): User {
            return this.$store.getters["user"];
        },
        commentEdit(): any {
            return this.$refs.commentEdit;
        },
    },
    data() {
        return { response: false };
    },
    methods: {
        setEdit(comment: any) {
            if (!comment.editing) {
                comment.editing = true;
                const ref = this.$refs[`${comment.id}_editor`] as any;
                ref.setComment(comment);
            } else {
                comment.editing = false;
            }
        },
        setResponse(comment: any) {
            if (comment.response === undefined) {
                comment.response = true;
            } else {
                comment.response = undefined;
            }
        },
        getDate(created_at: string, updated_at: string): string {
            if (created_at != updated_at) {
                return `Atualizado em ${moment(updated_at).format(
                    "DD/MM/YYYY HH:mm"
                )}`;
            }

            return `Criado em ${moment(created_at).format("DD/MM/YYYY HH:mm")}`;
        },

        async deleteComment(comment: any) {
            try {
                const { data } = await api.comment.post.delete(comment.id);

                this.$emit("deleteComment", comment);
            } catch (error) {
                console.error(error);
            }
        },

        pushComment(comment: CommentInterface) {
            this.$emit("pushComment", comment);
        },

        updateComment(comment: CommentInterface) {
            this.$emit("updateComment", comment);
        },
    },
});
</script>

<style scoped>
.microphoto {
    height: 40px;
    width: 40px;
}
.name-micro {
    font-weight: 700;
    font-size: 14px;
}
.subs-micro {
    font-weight: 200;
    font-size: 12px;
}
.description {
    border-top: 1px solid #999;
}
.card-post {
    background-color: #fff;
    border: 2px transparent;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0);
}
</style>