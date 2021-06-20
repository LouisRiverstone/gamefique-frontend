<template>
    <Post v-for="(post, i) in 10" :isPreview="true" :key="i" />
</template>

<script>
import Post from "@/components/posts/Post.vue";

export default {
    components: {
        Post,
    },
};
</script>

<style>
</style>