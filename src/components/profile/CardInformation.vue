<template>
    <section class="container card-profile pb-4">
        <div class="row">
            <!-- Desktop -->
            <div class="col-3 d-sm-none d-md-none d-lg-block">
                <div class="container line-right mt-3">
                    <div class="row">
                        <div class="d-flex justify-content-center">
                            <Photo :photo="user.photo" class="photo mt-3" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <span class="name">{{ user.first_name }}</span>
                    </div>
                    <div class="row mt-4" v-if="me.id == user.id">
                        <div class="container">
                            <Edit />
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                            <Button
                                @click="makePhotoUpload = !makePhotoUpload"
                                @click.prevent="clickUpload"
                            >
                                Mudar Foto
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mobile -->
            <div class="col-12 d-none d-sm-block d-md-block d-lg-none">
                <div class="container">
                    <div class="row mt-5">
                        <div class="d-flex justify-content-center">
                            <Photo :photo="user.photo" class="photo mt-3" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <span class="name">{{ user.first_name }}</span>
                    </div>
                    <div class="row mt-2" v-if="me.id == user.id">
                        <div class="container">
                            <Edit />
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                            <Button
                                @click="makePhotoUpload = !makePhotoUpload"
                                @click.prevent="clickUpload"
                            >
                                Mudar Foto
                            </Button>
                        </div>
                    </div>
                    <div class="mt-5 line-bottom"></div>
                </div>
            </div>
            <!-- Desktop -->
            <div class="col-9 d-sm-none d-md-none d-lg-block">
                <div class="row mt-5">
                    <div class="col">
                        <span>
                            Instituição de Formação:
                            <p class="field">
                                {{ user.formation_institute?.name }}
                            </p>
                        </span>
                        <span>
                            Escola de Atuação:
                            <p class="field">{{ user.school?.name }}</p>
                        </span>
                        <span>
                            Email de Contato:
                            <p class="field">{{ user.email }}</p>
                        </span>
                    </div>
                    <div class="col">
                        <span>
                            Curso de Formação:
                            <p class="field">
                                {{ user.formation_courses?.name }}
                            </p>
                        </span>
                        <span>
                            Estado de Atuação:
                            <p class="field">
                                {{ user.school?.city?.state?.name }}
                            </p>
                        </span>
                        <span>
                            Cidade de Atuação:
                            <p class="field">
                                {{ user.school?.city?.name }}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <!-- Mobile -->
            <div class="col-12 d-none d-sm-block d-md-block d-lg-none">
                <div class="row mt-5">
                    <div class="col">
                        <span>
                            Instituição de Formação:
                            <p class="field">
                                {{ user.formation_institute?.name }}
                            </p>
                        </span>
                        <span>
                            Curso de Formação:
                            <p class="field">
                                {{ user.formation_courses?.name }}
                            </p>
                        </span>
                        <span>
                            Curso de Formação:
                            <p class="field">
                                {{ user.formation_courses?.name }}
                            </p>
                        </span>
                        <span>
                            Escola de Atuação:
                            <p class="field">{{ user.school?.name }}</p>
                        </span>
                        <span>
                            Estado de Atuação:
                            <p class="field">
                                {{ user.school?.city?.state?.name }}
                            </p>
                        </span>
                        <span>
                            Cidade de Atuação:
                            <p class="field">
                                {{ user.school?.city?.name }}
                            </p>
                        </span>
                        <span>
                            Email de Contato:
                            <p class="field">{{ user.email }}</p>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-3" v-show="false">
                    <label for="formFileSm" class="form-label"
                        >Photo Upload</label
                    >
                    <input
                        class="form-control form-control-sm"
                        type="file"
                        id="image"
                        ref="image"
                        v-on:change="imageUpload()"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import User from "@/interfaces/store/User";
import Edit from "@/components/user/Edit.vue";
import Button from "@/components/forms/Button.vue";
import Photo from "@/components/utils/Photo.vue";

export default defineComponent({
    components: {
        Edit,
        Button,
        Photo,
    },
    data() {
        return {
            user: {
                id: 0,
            },
            makePhotoUpload: false,
        };
    },
    computed: {
        me(): any {
            return this.$store.getters["user"];
        },
        imageRef(): any {
            return this.$refs.image;
        },
    },
    methods: {
        load(user: User) {
            this.user = user;
        },
        clickUpload() {
            this.imageRef.click();
        },
        async imageUpload() {
            try {
                if (this.imageRef) {
                    this.$parent?.$emit("loading-show");
                    const photo = this.imageRef.files[0] as File;
                    const request = await this.$store.dispatch("photo", photo);
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.$parent?.$emit("loading-hide");
            }
        },
    },
});
</script>

<style scoped>
.card-profile {
    background-color: #fff;
}
.photo {
    width: 175px;
    height: 175px;
}
.name {
    font-weight: 700;
    size: 14px;
}
.field {
    font-weight: 500;
    font-size: 14px;
}
.line-right {
    border-right: 1px solid #999;
}
.line-bottom {
    border-bottom: 1px solid #999;
}
</style>