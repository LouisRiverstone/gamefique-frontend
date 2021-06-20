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
                                    <img
                                        src="https://picsum.photos/500/500"
                                        class="rounded microphoto"
                                    />
                                </div>
                                <div class="">
                                    <div class="row name-micro">
                                        Luiz Gustavo
                                    </div>
                                    <div class="row subs-micro">
                                        Licenciatura em Computação
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
                                <h2>Título</h2>
                            </div>
                        </div>

                        <div class="row mb-4">
                            <div class="d-flex justify-content-center">
                                <nav class="nav mt-3" v-if="!isPreview">
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
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptates, sequi hic
                                        in placeat atque accusantium modi ut
                                        nesciunt ad autem voluptatem beatae odit
                                        ea recusandae facere officiis dolorum
                                        minima. Laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptates, sequi hic
                                        in placeat atque accusantium modi ut
                                        nesciunt ad autem voluptatem beatae odit
                                        ea recusandae facere officiis dolorum
                                        minima. Laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptates, sequi hic
                                        in placeat atque accusantium modi ut
                                        nesciunt ad autem voluptatem beatae odit
                                        ea recusandae facere officiis dolorum
                                        minima. Laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptates, sequi hic
                                        in placeat atque accusantium modi ut
                                        nesciunt ad autem voluptatem beatae odit
                                        ea recusandae facere officiis dolorum
                                        minima. Laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptates, sequi hic
                                        in placeat atque accusantium modi ut
                                        nesciunt ad autem voluptatem beatae odit
                                        ea recusandae facere officiis dolorum
                                        minima. Laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptates, sequi hic
                                        in placeat atque accusantium modi ut
                                        nesciunt ad autem voluptatem beatae odit
                                        ea recusandae facere officiis dolorum
                                        minima. Laborum.
                                    </p>
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

                        <div v-if="isPreview">
                            <div class="mb-3">
                                <div class="description"></div>
                            </div>

                            <div class="row mb-5 mt-3">
                                <div class="d-flex justify-content-evenly">
                                    <Button
                                        type="button"
                                        @click.prevent="
                                            $router.push({
                                                name: 'Post',
                                                params: { id: 1 },
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
                                        12 Comentários
                                    </Button>
                                    <Button type="button">
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
            <div
                class="
                    col-sm-12 col-md-12 col-lg-3
                    offset-lg-1
                    card-post card-lateral
                    sticky-top
                "
            >
                <div class="d-none d-lg-block card-lateral">
                    <div class="container mt-3">
                        <div class="row">
                            <div class="col-12">
                                <img
                                    src="https://picsum.photos/500/500"
                                    class="rounded mx-auto d-block photo"
                                />
                            </div>
                        </div>
                        <div class="row mt-3 pb-5">
                            <span class="name">Luiz Gustavo</span>
                            <span class="subs">Licenciatura em Computação</span>
                            <span class="subs">
                                Instituto Federal de Ciencias e Tecnologias de
                                Brasíla
                            </span>
                            <span class="subs">Ced 06</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/forms/Button.vue";

export default defineComponent({
    components: {
        Button,
    },
    props: {
        isPreview: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        console.log(this.$router);
    },
});
</script>

<style scoped>
.post {
    background-color: #fff;
}
.h2 {
    font-weight: 700;
}
.name {
    font-weight: 700;
}
.subs {
    font-weight: 200;
    font-size: 12px;
}
.card-post {
    background-color: #ededed;
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
