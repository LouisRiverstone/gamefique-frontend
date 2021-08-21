<template>
    <section class="menu-search pt-3 pb-3">
        <div class="container">
            <div class="row mt-4">
                <h3>Busca:</h3>
                <div class="input-group mb-3 mt-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Jogos Digitais"
                        aria-label="Jogos Digitais"
                        aria-describedby="button-addon2"
                        v-model="search"
                    />
                    <a
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        :href="
                            $router.resolve({
                                name: 'PostList',
                                query: { search },
                            }).href
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="row mt-4 mb-5">
                <h4>Postagens do Mês:</h4>
                <div class="container">
                    <ol class="list-group list-group-numbered mt-3">
                        <li
                            class="
                                list-group-item
                                d-flex
                                justify-content-between
                                align-items-start
                                top-post
                            "
                            v-for="(top, i) in topPosts"
                            :key="i"
                            @click.prevent="
                                $router.push({
                                    name: 'Post',
                                    params: { id: top.id },
                                })
                            "
                        >
                            <div>
                                <div class="row me-auto">
                                    <div class="fw-bold ms-2 title">
                                        {{ nameMinimizer(top.title) }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div>
                                        <small class="name">{{
                                            nameMinimizer(top.user.first_name)
                                        }}</small>
                                    </div>
                                </div>
                            </div>
                            <span class="badge bg-primary rounded-pill">{{
                                top.like.length
                            }}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        topPosts: {
            required: true,
        },
    },
    data() {
        return { search: "" };
    },
    methods: {
        nameMinimizer(name: string): string {
            if (name.length > 30) {
                return name.substring(0, 27) + "...";
            }
            return name;
        },
    },
    mounted() {
        if (this.$route.query?.search) {
            this.search = this.$route.query.search.toString();
        }
    },
});
</script>

<style scoped>
.top-post {
    cursor: pointer;
}
.title {
    font-size: 12px;
    font-weight: 700;
}
.name {
    font-size: 10px;
}
</style>