<template>
    <section>
        <Post :isPreview="false" />
        <Comments />
    </section>
</template>

<script>
import Post from "@/components/posts/Post.vue";
import Comments from "@/components/posts/Comments.vue";

export default {
    components: {
        Post,
        Comments,
    },
};
</script>

<style>
</style>