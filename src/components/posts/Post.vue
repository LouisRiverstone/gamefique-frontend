<template>
    <div class="container mb-5">
        <div class="row post">
            <div class="col-sm-12 col-md-12 col-lg-8 card-post">
                <div class="mt-3">
                    <!-- mobile -->
                    <div
                        class="
                            d-none d-xs-block d-sm-block d-md-block d-lg-none
                            mb-4
                        "
                    >
                        <div class="row mb-3">
                            <div class="d-flex ms-4">
                                <div class="me-4">
                                    <Photo
                                        :photo="post.user.photo"
                                        class="rounded microphoto"
                                    />
                                </div>
                                <div class="">
                                    <div
                                        class="row name-micro"
                                        @click.prevent="
                                            $router.push({
                                                name: 'ProfileOthers',
                                                params: { id: post.user.id },
                                            })
                                        "
                                    >
                                        {{ post.user.first_name }}
                                    </div>
                                    <div class="row subs-micro">
                                        {{ post.user.formation_courses.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 mb-3">
                            <div class="description"></div>
                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="row mt-3">
                        <div class="row">
                            <div class="row">
                                <h2>{{ post.title }}</h2>
                            </div>
                        </div>

                        <div class="row mb-4 mt-3">
                            <div class="col">
                                <div class="container">
                                    <nav class="nav nav-pills nav-justified">
                                        <a
                                            class="nav-link"
                                            :class="{ active: tab == 'post' }"
                                            @click="tab = 'post'"
                                            href="#"
                                            >Postagem</a
                                        >
                                        <a class="nav-link disabled" href="#"
                                            >Snippets</a
                                        >
                                        <a
                                            class="nav-link"
                                            href="#"
                                            :class="{
                                                active: tab == 'classPlan',
                                            }"
                                            @click="tab = 'classPlan'"
                                            >Plano de Aula</a
                                        >
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <transition name="fade">
                                <div class="col-12">
                                    <div
                                        class="container text-start"
                                        v-show="tab == 'post'"
                                    >
                                        <div v-html="post.html"></div>
                                    </div>
                                    <div
                                        class="container text-start"
                                        v-show="tab == 'classPlan'"
                                    >
                                        <ClassPlan :class_plan="class_plan" />
                                    </div>
                                </div>
                            </transition>
                        </div>

                        <div class="row mb-5 mt-3">
                            <div class="d-flex justify-content-end">
                                <span
                                    class="badge rounded-pill bg-primary me-1"
                                    v-for="(tag, i) in post.tags"
                                    :key="i"
                                    >{{ tag.name }}</span
                                >
                            </div>
                        </div>

                        <div class="container">
                            <div class="description">
                                <div class="row me-2 ms-2 mb-4">
                                    <div class="col">
                                        <div
                                            class="
                                                d-flex
                                                justify-content-start
                                                mt-3
                                            "
                                        >
                                            <p class="ms-2 like">
                                                {{ post.like.length }}
                                                {{
                                                    `${
                                                        post.like.length > 1
                                                            ? "Gostaram"
                                                            : "Gostou"
                                                    }`
                                                }}
                                                Dessa Aula
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex justify-content-end">
                                            <Button
                                                v-if="user.id"
                                                type="button"
                                                class="btn-sm"
                                                @click.prevent="like"
                                            >
                                                <div v-if="!hasLiked()">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="12"
                                                        fill="currentColor"
                                                        class="bi bi-star"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div v-else>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="12"
                                                        fill="currentColor"
                                                        class="bi bi-star-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                        />
                                                    </svg>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="
                    col-sm-12 col-md-12 col-lg-3
                    offset-lg-1
                    card-post card-lateral
                "
            >
                <div class="d-none d-lg-block card-lateral">
                    <div class="container mt-3">
                        <div class="row">
                            <div class="col-12">
                                <Photo
                                    :photo="post.user.photo"
                                    class="rounded mx-auto d-block photo"
                                />
                            </div>
                        </div>
                        <div class="row mt-3 pb-5">
                            <span
                                class="name"
                                @click.prevent="
                                    $router.push({
                                        name: 'ProfileOthers',
                                        params: { id: post.user.id },
                                    })
                                "
                            >
                                {{ post.user.first_name }}</span
                            >
                            <span class="subs">
                                {{ post.user.formation_courses.name }}</span
                            >
                            <span class="subs">
                                {{ post.user.formation_institute.name }}
                            </span>
                            <span class="subs">
                                {{ post.user.school.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Photo from "@/components/utils/Photo.vue";
import Button from "@/components/forms/Button.vue";
import ClassPlan from "./ClassPlan.vue";

import api from "@/api";
import Like from "@/interfaces/post/Like";

export default defineComponent({
    props: {
        postage: {
            type: Object,
            required: true,
        },
    },
    components: {
        Photo,
        Button,
        ClassPlan,
    },
    computed: {
        user(): any {
            return this.$store.getters["user"];
        },
        post(): any {
            return this.$props.postage;
        },
        class_plan(): any {
            const class_plan = this.$props.postage.class_plan;

            return class_plan;
        },
    },
    data() {
        return { tab: "post" };
    },
    methods: {
        async like() {
            try {
                const { data } = await api.like.store({
                    post_id: this.post.id,
                } as Like);

                if (this.hasLiked()) {
                    const myLike = this.findLike() as Like;
                    this.post.like = this.post.like.filter(
                        (like: Like) => like.user_id !== myLike.user_id
                    );
                } else {
                    this.post.like.push(data.like);
                }
            } catch (error) {
                console.error(error);
            }
        },
        findLike(): Like | number {
            return this.post.like.find((like: Like, index: number) => {
                if (like.user_id == this.user.id) {
                    return like;
                }
            });
        },
        hasLiked(): boolean {
            const like = this.findLike();

            return like ? true : false;
        },
    },
    mounted() {
        console.log(this.$router);
    },
});
</script>

<style scoped>
.h2 {
    font-weight: 700;
}
.name {
    font-weight: 700;
    cursor: pointer;
}
.subs {
    font-weight: 200;
    font-size: 12px;
}
.card-post {
    background-color: #fff;
    border: 2px transparent;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0);
}
.photo {
    height: 120px;
    width: 120px;
}
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
.card-lateral {
    height: 300px;
}
.nav-link {
    font-size: 14px;
}
.like {
    font-weight: 700;
    font-size: 14px;
}

@media only screen and (max-width: 990px) {
    .card-lateral {
        height: auto;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
