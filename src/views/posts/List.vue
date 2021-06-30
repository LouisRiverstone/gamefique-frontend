<template>
    <section>
        <Preview
            v-for="(post, i) in posts"
            :post="post"
            :isPreview="true"
            :key="i"
        />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Preview from "@/components/posts/Preview.vue";
import api from "@/api/index";

export default defineComponent({
    components: {
        Preview,
    },
    data() {
        return {
            posts: [],
            meta: {
                first_page: 1,
                current_page: 1,
                total: 1,
            },
        };
    },
    methods: {
        async getPosts() {
            try {
                this.$emit("loading-show");
                const { data, meta } = (
                    await api.post.list(this.meta.current_page)
                ).data;
                this.meta = meta;
                this.posts = data;
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
    },
    mounted() {
        this.getPosts();
    },
});
</script>

<style>
</style>