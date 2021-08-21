<template>
    <section>
        <div class="bg mb-5 pb-4">
            <div class="row">
                <div class="d-flex justify-content-left mt-5 mb-2 ms-5">
                    <h2 class="text-white">Postagens</h2>
                </div>
                <div class="d-flex justify-content-left ms-5 mb-5">
                    <h4 class="text-white" v-if="search.search">
                        Busca Por: {{ search.search }}
                    </h4>
                    <h4 class="text-white" v-if="search.tag">
                        Filtrando Por: {{ getTag(search.tag).name }}
                    </h4>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 posts">
                        <div class="">
                            <Preview
                                v-for="(post, i) in posts"
                                :post="post"
                                :key="i"
                            />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-5">
                        <Search :topPosts="topPosts" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Preview from "@/components/posts/Preview.vue";
import Search from "@/components/posts/Search.vue";
import api from "@/api/index";
import PostListParams from "@/interfaces/post/PostListParams";

export default defineComponent({
    components: {
        Preview,
        Search,
    },
    data() {
        return {
            posts: [],
            topPosts: [],
            tags: [],
            search: {
                search: "",
                tag: null,
                page: 1,
            } as unknown as PostListParams,
            meta: {
                first_page: 1,
                current_page: 1,
                total: 1,
            },
        };
    },
    methods: {
        async getPosts() {
            if (this.$route.query?.search) {
                this.search.search = this.$route.query.search.toString();
            }

            if (
                this.$route.query?.tag &&
                typeof this.$route.query?.tag == "string"
            ) {
                this.search.tag = parseInt(this.$route.query?.tag);
            }

            const { data, meta } = (await api.post.list(this.search)).data;
            this.meta = meta;
            this.posts = data;
        },
        async getTopPosts() {
            const { data } = await api.post.top();
            this.topPosts = data;
        },
        async getTags() {
            const { data } = await api.tags.list();
            this.tags = data;
        },
        getTag(id: number) {
            return this.tags.find((tag: any) => tag.id == id);
        },
        async pageMount() {
            try {
                this.$emit("loading-show");
                await this.getPosts();
                await this.getTopPosts();
                if (this.search.tag) {
                    await this.getTags();
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
    },
    mounted() {
        this.pageMount();
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
.menu-search {
    background-color: #fff;
}
</style>