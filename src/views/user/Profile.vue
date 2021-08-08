<template>
    <section class="mb-5">
        <Background />
        <CardInformation class="card-info" ref="cardInformation" />
        <div class="mt-5 row" v-if="$route.params.id">
            <h4>Postagens Publicadas</h4>

            <div v-for="(post, i) in user.posts" :key="i">
                <Preview :post="post" />
            </div>

            <span v-if="user.posts.length == 0">
                Nenhuma Postagem desse usuário
            </span>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import api from "@/api";
import CardInformation from "@/components/profile/CardInformation.vue";
import Background from "@/components/profile/Background.vue";
import Preview from "@/components/posts/Preview.vue";

export default defineComponent({
    components: {
        CardInformation,
        Background,
        Preview,
    },
    computed: {
        me(): any {
            return this.$store.getters["user"];
        },
        cardInformation(): any {
            return this.$refs.cardInformation;
        },
    },
    data() {
        return {
            user: { posts: [] },
        };
    },
    methods: {
        async load() {
            try {
                this.$emit("loading-show");
                if (this.$route.params.id) {
                    const { data } = await api.user.show(this.$route.params.id);
                    this.user = { ...this.user, ...data };

                    const loaded = await this.cardInformationLoad(data);
                } else {
                    const loaded = await this.cardInformationLoad(this.me);
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
        cardInformationLoad(user: any) {
            return new Promise((resolve, reject) => {
                let intervaler = setInterval(() => {
                    if (this.cardInformation) {
                        this.cardInformation.load(user);
                        clearInterval(intervaler);
                        resolve(true);
                    }
                }, 100);
            });
        },
    },
    mounted() {
        this.load();
    },
});
</script>

<style scoped>
.card-info {
    margin-top: -300px;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;
}
</style>