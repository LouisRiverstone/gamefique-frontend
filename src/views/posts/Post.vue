<template>
    <section>
        <div v-if="post.id">
            <Post :postage="post" />
            <Comments
                :comments="post.comments"
                @pushComment="pushComment"
                @updateComment="updateComment"
                @deleteComment="deleteComment"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/posts/Post.vue";
import Comments from "@/components/posts/Comments.vue";

import api from "@/api";
import CommentInterface from "@/interfaces/comment/Comment";

export default defineComponent({
    components: {
        Post,
        Comments,
    },
    data() {
        return {
            post: { id: null, comments: [] as Array<CommentInterface> },
        };
    },
    methods: {
        async getPost(id: number) {
            try {
                this.$emit("loading-show");
                const { data } = await api.post.get(id);
                this.post = data;
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
        pushComment(comment: CommentInterface) {
            this.post.comments = [comment, ...this.post.comments];
        },
        updateComment(comment: CommentInterface) {
            this.post.comments = this.post.comments.map((cmt) => {
                if (comment.id === cmt.id) {
                    cmt = comment;
                }

                return cmt;
            });
        },
        deleteComment(comment: CommentInterface) {
            this.post.comments.forEach((cmt, index) => {
                if (comment.id === cmt.id) {
                    this.post.comments.splice(index, 1);
                }
            });
        },
    },
    mounted() {
        if (!this.$route.params?.id) {
            this.$router.go(-1);
        }

        this.getPost(Number(this.$route.params.id));
    },
});
</script>

<style>
</style>