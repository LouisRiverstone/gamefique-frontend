<template>
    <section>
        <div class="container pt-3 mb-5">
            <div class="row">
                <div class="col-md-3 col-sm-12 mb-4 mt-4">
                    <div class="row">
                        <div class="d-flex justify-content-center align-middle">
                            <img
                                src="https://picsum.photos/500/500"
                                class="rounded microphoto"
                                @click.prevent="
                                    $router.push({
                                        name: 'Post',
                                        params: { id: post.id },
                                    })
                                "
                            />
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-9">
                    <div class="container card-post">
                        <div class="row">
                            <div class="container">
                                <p class="title mt-3 mb-3">{{ post.title }}</p>
                            </div>
                        </div>
                        <div class="row description">
                            <div class="col-6">
                                <div class="d-flex justify-content-start">
                                    <p class="subs-micro mt-2">
                                        Escrito por: {{ post.user.first_name }}
                                    </p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex justify-content-end">
                                    <p class="subs-micro mt-2">
                                        Postado:
                                        {{ formatDate(post.created_at) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <p class="text-justify">
                                {{ post.description }}
                            </p>
                        </div>
                        <div class="row description">
                            <div class="d-flex justify-content-end mb-3">
                                <Button
                                    type="button"
                                    @click.prevent="
                                        $router.push({
                                            name: 'Post',
                                            params: { id: post.id },
                                        })
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        fill="currentColor"
                                        class="bi bi-chat"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                                        />
                                    </svg>
                                    {{
                                        `${post.comments.length}
                                        Comentário${
                                            post.comments.length > 1 ||
                                            post.comments.length == 0
                                                ? "s"
                                                : ""
                                        }`
                                    }}
                                </Button>
                                <Button
                                    type="button"
                                    class="ms-3"
                                    @click.prevent="
                                        $router.push({
                                            name: 'Post',
                                            params: { id: post.id },
                                        })
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        fill="currentColor"
                                        class="bi bi-box-arrow-in-up-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0v-5z"
                                        />
                                    </svg>
                                    Leia Mais
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/forms/Button.vue";
import moment from "moment";

export default defineComponent({
    components: {
        Button,
    },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatDate(date) {
            return moment(date).format("DD/MM/YYYY HH:mm");
        },
    },
});
</script>

<style scoped>
.microphoto {
    height: 180px;
    width: 180px;
    cursor: pointer;
}
.microphoto:hover {
    -webkit-animation: shadow-pop-tl 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        both;
    animation: shadow-pop-tl 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.name-micro {
    font-weight: 700;
    font-size: 14px;
}
.subs-micro {
    font-weight: 200;
    font-size: 12px;
}
.title {
    font-weight: 700;
    font-size: 24px;
}
.description {
    border-top: 1px solid #999;
}
.card-post {
    background-color: #fff;
    border: 2px transparent;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0);
}

@-webkit-keyframes shadow-pop-tl {
    0% {
        -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
            0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
            0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
    }
    100% {
        -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e,
            -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e,
            -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e;
        box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
            -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e,
            -7px -7px #3e3e3e, -8px -8px #3e3e3e;
        -webkit-transform: translateX(8px) translateY(8px);
        transform: translateX(8px) translateY(8px);
    }
}
@keyframes shadow-pop-tl {
    0% {
        -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
            0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
            0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
    }
    100% {
        -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e,
            -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e,
            -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e;
        box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
            -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e,
            -7px -7px #3e3e3e, -8px -8px #3e3e3e;
        -webkit-transform: translateX(8px) translateY(8px);
        transform: translateX(8px) translateY(8px);
    }
}
</style>