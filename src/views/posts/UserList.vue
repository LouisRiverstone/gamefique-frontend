<template>
    <section>
        <div class="row">
            <div class="bg mb-5 pb-4">
                <div class="row">
                    <!-- mt-5 mb-5 ms-5 -->
                    <div class="row">
                        <div class="d-flex justify-content-left mt-5 mb-5 ms-5">
                            <h2 class="text-white mt-3">Minhas Postagens</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container">
                            <div class="container">
                                <div
                                    class="d-flex justify-content-end mt-5 mb-5"
                                >
                                    <Button
                                        class="btn btn-success text-white"
                                        type="button"
                                        @click="
                                            $router.push({ name: 'PostEditor' })
                                        "
                                        >Nova Postagem</Button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <Preview
                        type="userList"
                        v-for="(post, i) in posts.data"
                        :post="post"
                        :key="i"
                    />
                </div>
            </div>
        </div>
        <div class="row"></div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Preview from "@/components/posts/Preview.vue";
import Button from "@/components/forms/Button.vue";
import api from "@/api";

export default defineComponent({
    components: {
        Preview,
        Button,
    },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        async populatePosts() {
            try {
                this.$emit("loading-show");
                const { data } = await api.auth.posts();
                this.posts = data;
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
    },
    mounted() {
        this.populatePosts();
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
    background-position: center;
    background-color: #000;
    opacity: 1;
}
</style>