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

                        <div class="row mb-4">
                            <div class="d-flex justify-content-center">
                                <nav class="nav mt-3">
                                    <a
                                        class="nav-link active"
                                        aria-current="page"
                                        href="#"
                                        >Aula</a
                                    >
                                    <a class="nav-link" href="#">Snippets</a>
                                    <a class="nav-link" href="#"
                                        >Plano de Aula</a
                                    >
                                </nav>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-12">
                                <div class="container text-start">
                                    <div v-html="post.html"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-5 mt-3">
                            <div class="d-flex justify-content-end">
                                <span class="badge rounded-pill bg-warning me-2"
                                    >Tag 1</span
                                >
                                <span class="badge rounded-pill bg-primary me-1"
                                    >Tag 1</span
                                >
                                <span class="badge rounded-pill bg-primary me-1"
                                    >Tag 2</span
                                >
                                <span class="badge rounded-pill bg-primary"
                                    >Tag 3</span
                                >
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

export default defineComponent({
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    components: {
        Photo,
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
@media only screen and (max-width: 990px) {
    .card-lateral {
        height: auto;
    }
}
</style>
