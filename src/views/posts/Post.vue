<template>
    <section>
        <div v-if="post">
            <Post :post="post" :isPreview="false" />
            <Comments :comments="post.comments" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/posts/Post.vue";
import Comments from "@/components/posts/Comments.vue";

import api from "@/api";

export default defineComponent({
    components: {
        Post,
        Comments,
    },
    data() {
        return {
            post: null,
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